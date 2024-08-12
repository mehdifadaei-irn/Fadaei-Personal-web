import React from "react";
import Nav from "./ui/Nav";
import Image from "next/image";
import { GitCommitHorizontal, Linkedin } from "lucide-react";
import { Github, LinkedIn, Telegram, Twitter } from "./ui/Icons";

const SideSection = () => {
  
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-wide text-slate-200 sm:text-5xl">
          Mehdi Fadaei
        </h1>
        <h2 className="mt-3 sm:text-xl text-lg font-medium tracking-wide  text-slate-200">
          Frontend Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400 tracking-wide">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <Nav />
      </div>

      <ul
        className="mt-8 ml-1 flex items-center z-50 inset-9"
        aria-label="Social media"
      >
        <li className="mr-5 text-xs shrink-0">
          <a
            href="https://github.com/mehdifadaei-irn"
            className="flex items-center justify-center hover:text-slate-200 "
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <Github />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            href="https://www.linkedin.com/in/mehdi-fada-yi-471746249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="flex items-center justify-center hover:text-slate-200 "
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LikedIn (opens in a new tab)"
            title="LikedIn"
          >
            <LinkedIn />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            href="https://www.linkedin.com/in/mehdi-fada-yi-471746249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="flex items-center justify-center hover:text-slate-200 "
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter (opens in a new tab)"
            title="Twitter"
          >
            <Twitter />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            href="https://t.me/Mti_fada_yi"
            className="flex items-center justify-center hover:text-slate-200"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Telegram (opens in a new tab)"
            title="Telegram"
          >
            <Telegram />
          </a>
        </li>
      </ul>
    </header>
  );
};
export default SideSection;
