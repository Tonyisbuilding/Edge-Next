import "./component.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EdgeCapital = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <>
      <div className="bg-[#F8F9FA]">
        <motion.h1
          ref={ref}
          initial={{
            opacity: 0,
            clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  transition: { duration: 1.5, ease: "easeOut" },
                }
              : {}
          }
          className=" lg:text-[38px] font-semibold text-black lg:px-[10]rem]
         text-left py-[5rem] montserrat px-[1rem]"
        >
          At Edge Capital, we revolutionize investing with quantitative,
          fact-based strategies, not traditional predictions. Using
          predetermined parameters like interest rates and option premiums, we
          mitigate risks through hedging across options and futures markets. Our
          diverse products, tailored for large and small investors, offer
          optimized risk-return profiles, giving you a market edge.
        </motion.h1>
      </div>
    </>
  );
};

export default EdgeCapital;
