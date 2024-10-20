// import { HoverEffect } from "./ui/card-hover-effect";
// import { useEffect, useState } from "react";
// import axios from 'axios';

// export function CardHoverEffectDemo() {
//   const [userRequestCount, setUserRequestCount] = useState(0);
//   const [activeUserCount,setActiveUserCount]=useState(0)
//   const [totalProjects, setTotalProjects] = useState(0);
//   const [completedProjects, setCompletedProjects] = useState(0);
//   const [bugReportCount, setBugReportCount] = useState(0); // New state for bug report count
//   const [reassignedTaskCount, setReassignedTaskCount] = useState(0); // New state for reassigned task count

//   useEffect(() => {
//     const fetchActiveSeverityCount = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/dashboard_count`);
//         console.log('res', response.data.userRequestCount);
//         setUserRequestCount(response.data.userRequestCount);
//         setActiveUserCount(response.data.activeUserCount)

//      // Fetch project counts
//      const projectResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/project_counts`);
//      setTotalProjects(projectResponse.data.totalProjects);
//      setCompletedProjects(projectResponse.data.completedProjects);

//      const bugReportResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/testreport_count`);
//      setBugReportCount(bugReportResponse.data.count); // Set the bug report count

//      const reassignedTaskResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/reassigned_task_count`);
//      setReassignedTaskCount(reassignedTaskResponse.data.count); // Set the reassigned task count


//       } catch (error) {
//         console.error('Error fetching active severity count:', error);
//       }
//     };

//     fetchActiveSeverityCount();
//   }, []);

//   // Create projects array dynamically using the activeSeverityCount
//   const projects = [
//     {
//       title: "Active Users",
//       description: (
//         <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
//           Total: {activeUserCount}
//         </span>
//       ),
     
//     },
//     {
//       title: "New Users Request",
//       description: (
//         <span style={{ fontSize: '36px',fontStyle: 'Roboto' }}>
//           Total: {userRequestCount}
//         </span>
//       ),
     
//     },
//     {
//       title: "Total Projects",
//       description: (
//         <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
//           Total: {totalProjects}
//         </span>
//       ),
      
//     },
//     {
//       title: "Completed Projects",
//       description: (
//         <span style={{ fontSize: '36px',fontStyle: 'Roboto' }}>
//           Completed: {completedProjects}
//         </span>
//       ),
      
//     },
//     {
//       title: "Tested Reports",
//       description: (
//         <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
//           Total: {bugReportCount}
//         </span>
//       ),
      
//     },
//     {
//       title: "Re-Assigned Task",
//       description: (
//         <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
//           Total: {reassignedTaskCount}
//         </span>
//       ),
      
//     },
//   ];

//   return (
//     <div className="max-w-5xl mx-auto px-8">
      
//       <div>
        
//         <h3> {userRequestCount}</h3> {/* Display the count */}
     
//                 </div>

//       <HoverEffect items={projects} />
//     </div>
//   );
// }

import { HoverEffect } from "./ui/card-hover-effect";
import { useEffect, useState } from "react";
import axios from 'axios';

interface DashboardCounts {
  userRequestCount: number;
  activeUserCount: number;
}

interface ProjectCounts {
  totalProjects: number;
  completedProjects: number;
}

interface BugReportCount {
  count: number;
}

interface ReassignedTaskCount {
  count: number;
}

interface Project {
  title: string;
  description: JSX.Element;
  link?: string;
}

export function CardHoverEffectDemo() {
  const [userRequestCount, setUserRequestCount] = useState<number>(0);
  const [activeUserCount, setActiveUserCount] = useState<number>(0);
  const [totalProjects, setTotalProjects] = useState<number>(0);
  const [completedProjects, setCompletedProjects] = useState<number>(0);
  const [bugReportCount, setBugReportCount] = useState<number>(0);
  const [reassignedTaskCount, setReassignedTaskCount] = useState<number>(0);

  useEffect(() => {
    const fetchActiveSeverityCount = async () => {
      try {
        const response = await axios.get<DashboardCounts>(
          `${import.meta.env.VITE_BASE_URL}/api/dashboard/dashboard_count`,{withCredentials:true}
        );
        setUserRequestCount(response.data.userRequestCount);
        setActiveUserCount(response.data.activeUserCount);

        const projectResponse = await axios.get<ProjectCounts>(
          `${import.meta.env.VITE_BASE_URL}/api/dashboard/project_counts`,{withCredentials:true}
        );
        setTotalProjects(projectResponse.data.totalProjects);
        setCompletedProjects(projectResponse.data.completedProjects);

        const bugReportResponse = await axios.get<BugReportCount>(
          `${import.meta.env.VITE_BASE_URL}/api/dashboard/testreport_count`,{withCredentials:true}
        );
        setBugReportCount(bugReportResponse.data.count);

        const reassignedTaskResponse = await axios.get<ReassignedTaskCount>(
          `${import.meta.env.VITE_BASE_URL}/api/dashboard/reassigned_task_count`,{withCredentials:true}
        );
        setReassignedTaskCount(reassignedTaskResponse.data.count);
      } catch (error) {
        console.error('Error fetching active severity count:', error);
      }
    };

    fetchActiveSeverityCount();
  }, []);

  const projects: Project[] = [
    {
      title: "Active Users",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {activeUserCount}
        </span>
      ),
    },
    {
      title: "New Users Request",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {userRequestCount}
        </span>
      ),
    },
    {
      title: "Total Projects",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {totalProjects}
        </span>
      ),
    },
    {
      title: "Completed Projects",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Completed: {completedProjects}
        </span>
      ),
    },
    {
      title: "Tested Reports",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {bugReportCount}
        </span>
      ),
    },
    {
      title: "Re-Assigned Task",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {reassignedTaskCount}
        </span>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div>
        <h3>{userRequestCount}</h3>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
