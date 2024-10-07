import { HoverEffect } from "./ui/card-hover-effect";
import { useEffect, useState } from "react";
import axios from 'axios';

export function CardHoverEffectDemo() {
  const [userRequestCount, setUserRequestCount] = useState(0);
  const [activeUserCount,setActiveUserCount]=useState(0)

  useEffect(() => {
    const fetchActiveSeverityCount = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/dashboard/dashboard_count');
        console.log('res', response.data.userRequestCount);
        setUserRequestCount(response.data.userRequestCount);
        setActiveUserCount(response.data.activeUserCount)
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
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {activeUserCount}
        </span>
      ),
      link: "",
    },
    {
      title: "Users Request",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {userRequestCount}
        </span>
      ),
      link: "",
    },
    {
      title: "New Bug",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "",
    },
    {
      title: "Resolved Bug",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
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
        <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm md:text-base px-4 md:px-10 py-2.5 "
          >
            Add New Project
          </button>
                </div>

      <HoverEffect items={projects} />
    </div>
  );
}
