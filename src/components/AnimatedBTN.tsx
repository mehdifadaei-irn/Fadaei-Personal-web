"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBTN = () => {
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
            backgroundColor: "#065f46",
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
    <main ref={scope}>
      <motion.button
        type="submit"
        id="subscribeButton"
        className=" border border-sky-950 w-36 h-12 rounded-lg flex flex-col justify-center text-3xl tracking-wide font-bold  text-neutral-100 "
        initial={{ backgroundColor: "#1e40af" }}
        onClick={() => setIsSubscribed(true)}
      >
        <span className="w-full text-slate-200  " id="subscribe">
          Submit
        </span>
        <motion.span
          className="w-full"
          initial={{ opacity: 0, display: "none" }}
          id="subscribed"
        >
          Sent
        </motion.span>
      </motion.button>
    </main>
  );
};

export default AnimatedBTN;
