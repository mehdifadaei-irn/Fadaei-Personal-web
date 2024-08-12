"use client";
import React from "react";
import { Evenodd } from "./ui/Icons";
import Tech from "./ui/Tech";
import ItemHead from "./ui/ItemHead";
import Image from "next/image";
import ContactMe from "./ContactMe";
import { useScroll } from "framer-motion";

const MainSection = () => {
  return (
    <main className="lg:w-1/2 pt-24 lg:py-24 z-10 ">
      <section
        id="ABOUT"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="about me"
      >
        <div>
          <p className="font-medium text-slate-400 tracking-wider leading-normal mb-4">
            I am a <span className="text-slate-100 font-bold">frontend</span>{" "}
            engineer with +2.5 years of experience and I am familiar with
            backend technologies. I love solving bugs and problems, Committed to
            high-quality results and working collaboratively in a friendly
            dynamic environment. Learning and teaching web-based technologies
            are more important and exiting to me. I am incredibly patient and
            easy going with my colleagues and teammates and I get along well
            with people.
          </p>
          <p className="font-medium text-slate-400 tracking-wider leading-normal mb-4">
            My main focus these days is learning{" "}
            <a
              target="_blank"
              href="https://www.coindesk.com/learn/what-is-web-3-and-why-is-everyone-talking-about-it/"
              className="text-slate-100 font-bold"
            >
              web3
            </a>{" "}
            frontend and solidity testing. I most enjoy building software in the
            sweet spot where design and engineering meet — things that look good
            but are also built well under the hood. In my free time, I've also
            play video game like DOTA2
          </p>
        </div>
      </section>
      {/* Expereince */}
      <section
        id="EXPERIENCE"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            EXPERIENCE
          </h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <div className="group cursor-pointer relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  aria-label="2024 Present"
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                >
                  2022 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <div
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        aria-label="Selfemployed"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Frontend Engineer ·</span>
                        <span className="inline-block">
                          Selfemployed
                          <Evenodd />
                        </span>
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    Collaborated with professional UI/UX & backend & Quality
                    Assurance team.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    Developed a feature-rich admin panel for admins and sellers
                    in react, including user roles content editing, store
                    management and Powerful search functions.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    worked with newest Uilibrary (NextUI) and form validating
                    with useform and zod using typescript, all responsive for
                    all screens and Safely work with any resfullAPI with
                    reactquery also comfort in work with devops team.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    work with upgradable smart contract in Polygon, good vision
                    to work efficiently read/write functions, support any wallet
                    and filter network of user to polygon and ethereum with
                    sign.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    take good knowledge for web3 core and decentralize world.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    work with nativewind and apis in reactNative and fimiliar to
                    deploying it on{" "}
                    <a
                      href="https://cafebazaar.ir/app/ta.excipients.medic?l=en"
                      target="_blank"
                      className="font-medium text-slate-200"
                    >
                      Bazar
                    </a>{" "}
                    or Android store platforms
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="javaScript" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="React" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="TypeScript" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Next.js" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="React Native" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="PWA" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Redux" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Web3" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Wagmi" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="ETHERS.js" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="MaterialUi" />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group cursor-pointer relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  aria-label="2024 Present"
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                >
                  2020 — 2022
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://saminray.com/"
                        target="_blank"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        aria-label="Selfemployed"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Frontend Engineer ·</span>
                        <span className="inline-block">
                          SaminRay
                          <Evenodd />
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    Implemented enterprise applications of good Experiment
                    Platforms using React, Nextjs, Rest API.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    Collaborate in Designed and developed 4 big project like
                    Formsaz And Atba-PWA .In which I learned cooperation with a
                    large team and Teamwork.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    how to learn and work with opensource apps and new UI
                    librarys and document reading.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    Revolutionized UNIT testing workflow by incorporating Jest
                    along with supplementary test library; saved 50+ developers
                    hours monthly and decreased bug-related incidents by 35%,
                    enhancing overall code reliability.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 font-medium">
                    mentored 2 interns, and Continuous Integration/Deployment
                    Pipeline Integration, pull requests, code reviews, work with
                    Jenkins&Gitlab.
                  </p>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="javaScript" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="React" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="TypeScript" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Next.js" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="CI/CD" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="React Query" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Express" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Unit Testing" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Docker" />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
          <div className="mt-12">
            <a
              href="https://online.publuu.com/608965/1362716"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
              className="inline-flex items-baseline  leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
            >
              <span>
                View Full{" "}
                <span className="inline-block">
                  Resume <Evenodd />
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="PROJECTS"
        aria-label="Selected projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            PROJECTS
          </h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      href="https://royalvpn.ai/"
                      rel="noreferrer noopener"
                      target="_blank"
                      aria-label="royalvpn (open in new tab)"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <ItemHead txt1="Royal" txt2="VPN" />
                    </a>
                  </h3>
                  <p className="font-normal leading-normal text-slate-400">
                    A VPN, or virtual private network, is a secure tunnel
                    between your device and the internet. VPNs protect you from
                    snooping, interference, and censorship.
                  </p>
                </div>
                {/* img */}
                <Image
                  alt="royalvpn landing page"
                  src={"/ui/Royal.png"}
                  priority
                  decoding="async"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  width={320}
                  height={320}
                />
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      href="https://chanceroom.vercel.app/"
                      rel="noreferrer noopener"
                      target="_blank"
                      aria-label="ChanceRoom (open in new tab)"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <ItemHead txt1="ChanceRoom" txt2="Web3" />
                    </a>
                  </h3>
                  <p className="font-normal leading-normal text-slate-400">
                    A fixed and limited number of tickets will be sold to draw
                    an NFT. Organizer will set the number of tickets, their
                    price, and the deadline of the Sang Lottery at the beginning
                    when She/He locks the price NFT in deployed SANG LOTTERY
                    contract. If all the tickets have been sold before the
                    deadline: Organizer can draw the winner, The NFT, and the
                    organizer's money will transfer automatically.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Web3" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Polygon" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="TypeScript" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Next.js" />
                    </li>
                  </ul>
                </div>
                {/* img */}
                <Image
                  alt="ChanceRoom landing page"
                  src={"/ui/chance.png"}
                  priority
                  decoding="async"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  width={320}
                  height={320}
                />
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      href="https://github.com/mehdifadaei-irn/Redit-Clone"
                      rel="noreferrer noopener"
                      target="_blank"
                      aria-label="Redit (open in new tab)"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <ItemHead txt1="Reddit" txt2="Clone" />
                    </a>
                  </h3>
                  <p className="font-normal leading-normal text-slate-400">
                    Reddit is a website comprising user-generated
                    content—including photos, videos, links, and text-based
                    posts—and discussions of this content in what is essentially
                    a bulletin board system.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Shadcn" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="ZOD" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="UseForm" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="TypeScript" />
                    </li>
                    <li className="mr-1.5 mt-2 ">
                      <Tech name="Next.js" />
                    </li>
                  </ul>
                </div>
                {/* img */}
                <Image
                  alt="Redit landing page"
                  src={"/ui/3.jpg"}
                  priority
                  decoding="async"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  width={320}
                  height={320}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* CONTACT-ME */}
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="CONTACT-ME"
        aria-label="Selected projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            CONTACT ME
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-medium text-slate-200 tracking-wide">
            CONTACT ME
          </h2>
          <p className="text-slate-400 tracking-normal">
            Do you want to keep in touch with each other ?{" "}
          </p>
          <p className="text-slate-400 tracking-normal">
            You can contact me through the communication channels on this page
            or send me an email.{" "}
          </p>
          <ContactMe />
        </div>
      </section>
      {/*  */}
      <footer className="max-w-md pb-16 text-base text-slate-500 sm:pb-0">
        Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter (opens in a new tab)"
        >
          Inter
        </a>{" "}
        typeface.
      </footer>
    </main>
  );
};

export default MainSection;
