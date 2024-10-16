import React, { useState, useEffect } from 'react';
import { HoverEffect } from "../../ui/card-hover-effect";
import axios from 'axios';

export function UserCardHoverEffect() {
  // State to store counts
  const [counts, setCounts] = useState({
    assignments: 0,
    tasksCompleted: 0,
    newBugs: 0,
    resolvedBugs: 0,
  });

  // Fetch counts from the API on component mount
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user')); // 'user' is the key for your localStorage

        if (user && user.id) {
          const userId = user.id;

          // Make an API call to fetch the counts
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/userDashboard/count?id=${userId}`);
          const data = response.data;
          console.log('data',data);
          

          // Set the state with the fetched counts
          setCounts({
            assignments: data.assignments || 0,
            tasksCompleted: data.tasksCompleted || 0,
            newBugs: data.newBugs || 0,
            resolvedBugs: data.resolvedBugs || 0,
          });
        }
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  // Create projects array dynamically using the fetched counts
  const projects = [
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
      title: "New Bug",
      description: `Total: ${counts.newBugs}`,
      link: "",
    },
    {
      title: "Resolved Bug",
      description: `Total: ${counts.resolvedBugs}`,
      link: "",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
