'use client'
import React from "react";
import Container from "./Components/Container";
import For from "../src/assets/for.png";
import Car from "../src/assets/car.png";
import Payment from "../src/assets/payment.png";
import Bookcard from "./Bookcard";
import { motion } from "framer-motion";

const Bookyour = () => {
  const steps = [
    { icon: For, title: "Choose Destination", desc: "Select from 1000+ amazing destinations worldwide." },
    { icon: Payment, title: "Make Payment", desc: "Secure payment with multiple options." },
    { icon: Car, title: "Reach Airport on Selected Date", desc: "Get travel reminders and airport assistance." }
  ];

  return (
    <section id="Bookyour" className="py-10 md:py-16 lg:py-24 px-4">
      <Container>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center lg:text-left mb-12"
        >
          <p className="font-Poppins font-semibold text-[#5E6282] text-lg mb-2">
            Easy and Fast
          </p>
          <h1 className="font-Volkhov font-bold text-[#14183E] text-4xl md:text-5xl lg:text-[50px] leading-tight">
            Book your next trip<br />in 3 easy steps
          </h1>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-6 mb-8 last:mb-0 p-6 rounded-xl border border-gray-100"
              >
                <img src={step.icon} alt="" className="w-14 h-14" />
                <div>
                  <h3 className="font-Poppins font-bold text-[#5E6282] text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="font-Poppins text-[#5E6282]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bookcard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Bookcard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Bookyour;