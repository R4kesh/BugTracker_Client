
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function TesterSidebar() {
  const links = [
    {
      label: "Dashboard",
      href: "/testerdashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "New Test Task",
      href: "/testtask",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Completed Task",
      href: "/testedlist",
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

  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen} links={links} />
    </div>
  );
}

export const Sidebar = ({
  open,
  setOpen,
  links,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: { label: string; href: string; icon: React.ReactNode }[];
}) => {
  const sidebarVariants = {
    open: { width: "250px" },
    closed: { width: "70px" },
  };

  return (
    <motion.div
      className="relative z-50 h-full bg-gradient-to-r from-gray-700 via-cyan-700 to-slate-950 text-white flex-shrink-0 flex flex-col items-center shadow-xl"
      variants={sidebarVariants}
      animate={open ? "open" : "closed"}
      initial={false}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      {/* Toggle Button */}
      <div
        className="absolute top-5 right-[-15px] p-2 bg-white text-black rounded-full shadow-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <IconArrowLeft className={`h-5 w-5 ${open ? "" : "rotate-180"}`} />
      </div>

      {/* Logo */}
      <motion.div
        className="mt-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
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

export const SidebarLink = ({
  link,
  open,
}: {
  link: { label: string; href: string; icon: React.ReactNode };
  open: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={link.href}
        className="flex items-center justify-start gap-3 py-3 px-2 rounded-lg cursor-pointer transition-all hover:bg-white hover:bg-opacity-10"
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

export const Logo = () => (
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

export const LogoIcon = () => (
  <motion.div
    className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center"
    whileHover={{ rotate: 360 }}
    transition={{ duration: 1 }}
  >
    A
  </motion.div>
);
