import React from "react";
import { navShortcut } from "../TopPanel";
import Link from "next/link";

const Shortcut = ({ link, title }: navShortcut) => {
  return (
    <Link
      href={link}
      className="px-2 h-fit border-solid border-white border-[1px] rounded-lg"
    >
      {title}
    </Link>
  );
};

export default Shortcut;
