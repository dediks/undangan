import { scrollMotionVariants } from "@/Libs/motion";
import { motion } from "framer-motion";
import React from "react";

const Quote = () => {
    return (
        <section className="flex justify-center items-center px-3 md:mt-12">
            <motion.div
                className="w-full"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={scrollMotionVariants}>
                    <div className="flex flex-col text-center space-y-4">
                        <h2 className="font-dream_avenue text-3xl font-extralight text-gray-500">
                            Qs Az Zariyat:49
                        </h2>
                        <div className="leading-relaxed font-arslan font-extralight text-4xl text-amber-500">
                            وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ
                            تَذَكَّرُونَ
                        </div>
                        <p className="font-thin text-xl text-gray-500">
                            “Dan segala sesuatu Kami ciptakan berpasang-pasangan
                            supaya kamu mengingat kebesaran Allah.”
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Quote;
