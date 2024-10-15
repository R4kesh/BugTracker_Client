import { HoverEffect } from "./ui/card-hover-effect";
import { useEffect, useState } from "react";
import axios from 'axios';

export function TrackHistoryCardHover() {
 
  // Create projects array dynamically using the activeSeverityCount
  const projects = [
    {
      title: "Project Name",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: 
        </span>
      ),
      link: "/employeelist",
    },
    {
      title: "Demo",
      description: (
        <span style={{ fontSize: '36px', fontStyle: 'Roboto' }}>
          Total: 
        </span>
      ),
      link: "",
    },
    {
      title: "Demo",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "",
    },
    {
      title: "Demo",
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
        
        <h3> </h3> {/* Display the count */}
     
                </div>

      <HoverEffect items={projects} />
    </div>
  );
}
