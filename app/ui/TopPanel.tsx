import React from "react";
import Shortcut from "./components/shortcut";

export type navShortcut = {
  title: string;
  link: string;
};

const TopPanel = () => {
  const defaultLinks: navShortcut[] = [
    {
      title: "checker",
      link: "/",
    },
    { title: "dashboard", link: "/dashboard" },
  ];

  const allLinks = [...defaultLinks];
  return (
    <nav className="col-span-2 flex gap-2 items-center">
      {allLinks.map((link) => (
        <Shortcut key={link.title} link={link.link} title={link.title} />
      ))}
    </nav>
  );
};

export default TopPanel;
