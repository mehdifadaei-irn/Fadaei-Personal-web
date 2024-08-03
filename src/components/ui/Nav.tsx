"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("ABOUT");
  const router = useRouter();
  return (
    <nav className="lg:block hidden" aria-label="In-page jump links">
      <ul className="mt-16 w-max ">
        <li>
          <a
            onClick={() => {
              router.push("#ABOUT");
              setActiveNav("ABOUT");
            }}
            className={`group flex items-center py-3 cursor-pointer ${
              activeNav === "ABOUT" && "active"
            } `}
          >
            <span
              className={`nav-indicator  ${
                activeNav === "ABOUT" && "link-active"
              } mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-24 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
              id="line"
            ></span>
            <span
              id="text"
              className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
            >
              ABOUT
            </span>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              router.push("#EXPERIENCE");
              setActiveNav("EXPERIENCE");
            }}
            className={`group flex items-center py-3 cursor-pointer ${
              activeNav === "EXPERIENCE" && "active"
            } `}
          >
            <span
              className={`nav-indicator  mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-24 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
              id="line"
            ></span>
            <span
              id="text"
              className="nav-text span-active  text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
            >
              EXPERIENCE
            </span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              router.push("#PROJECTS");
              setActiveNav("PROJECTS");
            }}
            className={`group flex items-center ${
              activeNav === "PROJECTS" && "active"
            } py-3`}
          >
            <span
              className={`nav-indicator  mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-24 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
              id="line"
            ></span>
            <span
              id="text"
              className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
            >
              PROJECTS
            </span>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              router.push("#CONTACT-ME");
              setActiveNav("CONTACT-ME");
            }}
            className={`group flex items-center cursor-pointer  ${
              activeNav === "CONTACT-ME" && "active"
            } py-3`}
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-24 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
              id="line"
            ></span>
            <span
              id="text"
              className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
            >
              CONTACT ME
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
