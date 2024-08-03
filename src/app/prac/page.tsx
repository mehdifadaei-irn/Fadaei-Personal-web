"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const route = () => {
  const [scope, animate] = useAnimate();
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (isSubscribed) {
      const buttonTextAnimation = async () => {
        await animate(
          "#subscribe",
          {
            opacity: 0,
            y: 20,
          },
          {
            duration: 0.5,
            ease: "easeOut",
          }
        );
        await animate(
          "#subscribeButton",
          {
            backgroundColor: "#5ffa",
          },
          {
            duration: 0.3,
          }
        );

        await animate(
          "#subscribed",
          {
            opacity: 1,
            y: -20,
            display: "inline",
          },
          {
            duration: 0.2,
          }
        );
      };

      buttonTextAnimation();
    }
  }, [isSubscribed]);

  return (
    <main
      ref={scope}
      className="text-white flex h-screen  items-center justify-center"
    >
      <motion.button
        id="subscribeButton"
        className=" border border-orange-950 w-80 h-16 flex flex-col justify-center text-4xl font-bold tracking-tight text-neutral-100 "
        initial={{ backgroundColor: "#2fa" }}
        onClick={() => setIsSubscribed(true)}
      >
        <span className="w-full" id="subscribe">
          Subscribe
        </span>
        <motion.span
          className="w-full"
          initial={{ opacity: 0, display: "none" }}
          id="subscribed"
        >
          Wow
        </motion.span>
      </motion.button>
    </main>
  );
};

export default route;
