import { HoverEffect } from "./ui/card-hover-effect";
import { useEffect, useState } from "react";
import axios from 'axios';

export function CardHoverEffectDemo() {
  const [activeSeverityCount, setActiveSeverityCount] = useState(0);

  useEffect(() => {
    
    const fetchActiveSeverityCount = async () => {
      try {
        const response = axios.get('http://localhost:3000/api/dashboard/dashboard_count');
        console.log('res',response);
        // setActiveSeverityCount(data.count);
      } catch (error) {
        console.error('Error fetching active severity count:', error);
      }
    };

    fetchActiveSeverityCount();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Active Severity",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Severity Request",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "New Bug",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Resolved Bug",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
