import { HoverEffect } from "./ui/card-hover-effect";
import { useEffect, useState } from "react";
import axios from 'axios';

export function CardHoverEffectDemo() {
  const [userRequestCount, setUserRequestCount] = useState(0);
  const [activeUserCount,setActiveUserCount]=useState(0)
  const [totalProjects, setTotalProjects] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);

  useEffect(() => {
    const fetchActiveSeverityCount = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/dashboard_count`);
        console.log('res', response.data.userRequestCount);
        setUserRequestCount(response.data.userRequestCount);
        setActiveUserCount(response.data.activeUserCount)

     // Fetch project counts
     const projectResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/project_counts`);
     setTotalProjects(projectResponse.data.totalProjects);
     setCompletedProjects(projectResponse.data.completedProjects);

      } catch (error) {
        console.error('Error fetching active severity count:', error);
      }
    };

    fetchActiveSeverityCount();
  }, []);

  // Create projects array dynamically using the activeSeverityCount
  const projects = [
    {
      title: "Active Users",
      description: (
        <span style={{ fontSize: '36px',color:'greenyellow', fontStyle: 'Roboto' }}>
          Total: {activeUserCount}
        </span>
      ),
      link: "",
    },
    {
      title: "Users Request",
      description: (
        <span style={{ fontSize: '36px',color:'greenyellow', fontStyle: 'Roboto' }}>
          Total: {userRequestCount}
        </span>
      ),
      link: "",
    },
    {
      title: "Total Projects",
      description: (
        <span style={{ fontSize: '36px',color:'greenyellow', fontStyle: 'Roboto' }}>
          Total: {totalProjects}
        </span>
      ),
      link: "",
    },
    {
      title: "Completed Projects",
      description: (
        <span style={{ fontSize: '36px',color:'greenyellow', fontStyle: 'Roboto' }}>
          Completed: {completedProjects}
        </span>
      ),
      link: "",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      
      <div>
        
        <h3> {userRequestCount}</h3> {/* Display the count */}
     
                </div>

      <HoverEffect items={projects} />
    </div>
  );
}
