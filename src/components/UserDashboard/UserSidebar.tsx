import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

// Define the shape of each link in the sidebar
interface LinkType {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function UserSidebar() {
  const links: LinkType[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "New Assignments",
      href: "/assignments",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Task Todo",
      href: "/works",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Re-Assigned Task",
      href: "/reassigment",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={cn("flex h-screen")}>
      <Sidebar open={open} setOpen={setOpen} links={links} />
    </div>
  );
}

// Define the props for the Sidebar component
interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: LinkType[];
}

export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, links }) => {
  return (
    <motion.div
      className={cn(
        "relative z-50 h-full bg-gradient-to-r from-gray-500 via-cyan-700 to-slate-900 text-white flex-shrink-0 flex flex-col items-center",
        "shadow-xl"
      )}
      initial={{ width: open ? "250px" : "70px" }}
      animate={{ width: open ? "250px" : "70px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Toggle Button */}
      <div
        className="absolute top-5 right-[-15px] p-2 bg-white text-black rounded-full shadow-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IconArrowLeft className="h-5 w-5" />
        ) : (
          <IconArrowLeft className="h-5 w-5 rotate-180" />
        )}
      </div>

      {/* Logo */}
      <motion.div
        className="mt-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {open ? <Logo /> : <LogoIcon />}
      </motion.div>

      {/* Links */}
      <div className="flex flex-col gap-6 w-full px-4">
        {links.map((link, idx) => (
          <SidebarLink key={idx} link={link} open={open} />
        ))}
      </div>
    </motion.div>
  );
};

// Define the props for the SidebarLink component
interface SidebarLinkProps {
  link: LinkType;
  open: boolean;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({ link, open }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={link.href}
        className={cn(
          "flex items-center justify-start gap-3 py-3 px-2 rounded-lg cursor-pointer transition-all",
          "hover:bg-white hover:bg-opacity-10"
        )}
      >
        {link.icon}
        {open && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-white font-medium"
          >
            {link.label}
          </motion.span>
        )}
      </Link>
    </motion.div>
  );
};

export const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2 text-lg font-bold text-white">
      <motion.div
        className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        A
      </motion.div>
    </a>
  );
};

export const LogoIcon: React.FC = () => {
  return (
    <motion.div
      className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1 }}
    >
      A
    </motion.div>
  );
};
