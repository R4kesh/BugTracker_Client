import { useEffect, useState } from 'react';
import axios from 'axios';
import { HoverEffect } from "../../ui/card-hover-effect";

interface TaskCount {
  newTasks: number;
  taskToTest: number;
  tasksTestedCompleted: number;
}

export function TesterCardHoverEffect() {
  const [taskCounts, setTaskCounts] = useState<TaskCount>({
    newTasks: 0,
    taskToTest: 0,
    tasksTestedCompleted: 0,
  });

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/dashboardCount`,{withCredentials:true});


      setTaskCounts({
        newTasks: response.data.newTasks || 0,
        taskToTest: response.data.taskToTest || 0,
        tasksTestedCompleted: response.data.tasksTestedCompleted || 0,
      });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  interface Project {
    title: string;
    description: JSX.Element;
    link: string;
  }

  // Define the projects array using the fetched counts
  const projects: Project[] = [
    {
      title: "New Tasks",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {taskCounts.newTasks}
        </span>
      ),
      link: "",
    },
    {
      title: "Task To Test",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {taskCounts.taskToTest}
        </span>
      ),
      link: "",
    },
    {
      title: "Task Tested Completed",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: {taskCounts.tasksTestedCompleted}
        </span>
      ),
      link: "",
    },
    // {
    //   title: "Resolved Bug",
    //   description: 'Demo',
    //   link: "",
    // },
    // {
    //   title: "Demo",
    //   description: "Demo",
    //   link: "",
    // },
    // {
    //   title: "Demo",
    //   description: "Demo",
    //   link: "",
    // },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div>
        <h3></h3> {/* Display the count */}
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
