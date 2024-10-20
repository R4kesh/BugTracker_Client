import React, { useState, useEffect } from 'react';
import { HoverEffect } from "../../ui/card-hover-effect";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Counts {
  assignments: number;
  tasksCompleted: number;
  newBugs: number;
  resolvedBugs: number;
  reassignedTasks: number; // Add reassigned tasks count

}

// Define the interface for project items
interface ProjectItem {
  title: string;
  description: JSX.Element | string;
  link: string;
}


export function UserCardHoverEffect() {
  // State to store counts
  const { user } = useSelector((state: RootState) => state.auth)

  const [counts, setCounts] = useState<Counts>({
    assignments: 0,
    tasksCompleted: 0,
    newBugs: 0,
    resolvedBugs: 0,
    reassignedTasks: 0, // Initialize reassigned tasks count

  });

  // Fetch counts from the API on component mount
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        if (user ) {
          const userId = user?.id;

          // Make an API call to fetch the counts
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/userDashboard/count?id=${userId}`
          ,{withCredentials: true})
          const data = response.data;
          console.log('data',data);
          

          // Set the state with the fetched counts
          setCounts({
            assignments: data.assignments || 0,
            tasksCompleted: data.tasksCompleted || 0,
            newBugs: data.newBugs || 0,
            resolvedBugs: data.resolvedBugs || 0,
            reassignedTasks: data.reassignedTasks || 0, // Include reassigned tasks count

          });
        }
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  // Create projects array dynamically using the fetched counts
  const projects: ProjectItem[] = [
    {
      title: "New Assignments",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {counts.assignments}
        </span>
      ),
      link: "",
    },
    {
      title: "Task Completed",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {counts.tasksCompleted}
        </span>
      ),
      link: "",
    },
    {
      title: " Re-Assigned Task",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {counts.reassignedTasks}
        </span>
      ),
      link: "",
    },
    // {
    //   title: "Resolved Bug",
    //   description: `Total: ${counts.resolvedBugs}`,
    //   link: "",
    // },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
