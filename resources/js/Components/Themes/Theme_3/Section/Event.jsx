import { getDateInWord, getTimeInWord } from "@/Helpers/getDate";
import { createElement } from "react";
import { GiDiamondRing, GiPartyFlags } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import ImageSlider from "../ImageSlider";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/Libs/motion";

const iconList = [GiDiamondRing, GiPartyFlags];

export default function Event({ data, attributes, isPreview = false }) {
    const renderEvent = Object.values(data.events).map((event, i) => {
        return (
            <div
                className="border-black shadow-2xl shadow-red-900/50 py-8 bg-black/40 text-gray-50/80 lg:py-16 lg:text-xl"
                key={event.id}
            >
                <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={fadeInVariants}
                    viewport={{ once: true }}
                    className="text-center flex flex-col items-center"
                >
                    {createElement(iconList[i], {
                        id: event.id,
                        className: "text-4xl",
                    })}
                    <div className="flex flex-col space-y-2 mt-2">
                        <h2 className="font-serif">{event.title}</h2>
                        <span className="font-mono">
                            {getDateInWord(event.start)}
                        </span>
                        <span className="font-mono">
                            Pukul : {getTimeInWord(event.start)}
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={fadeInVariants}
                    viewport={{ once: true }}
                    className="mt-10 text-center flex flex-col items-center"
                >
                    <FaMapMarkedAlt className="text-4xl" />
                    <div className="flex flex-col mt-2">
                        <span>Lokasi Acara</span>
                        <span className="font-serif">{event.location}</span>
                    </div>
                    <a
                        target="__blank"
                        href={event.map_link}
                        className="hover:bg-red-700 cursor-pointer text-gray-100 mt-6 flex space-x-2 bg-red-800  rounded-sm px-4 py-2 items-center"
                    >
                        <FaMapMarkedAlt className="" />
                        <span>Google Maps</span>
                    </a>
                </motion.div>
            </div>
        );
    });

    return (
        <section className="w-full bg-gradient-to-b from-black/60 via-red-800/50 to-black pb-10">
            <div className="text-center px-8 xl:px-64 xl:py-46 lg:py-36 py-8 leading-tight">
                <motion.div
                    variants={fadeInVariants}
                    viewport={{ once: true, amount: 0.8 }}
                    initial="offscreen"
                    whileInView="onscreen"
                    className="flex flex-col space-y-4 lg:space-y-8"
                >
                    <span className=" mt-10 text-center text-base font-serif font-thin xl:text-xl text-gray-50/70 mb-8">
                        Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya
                        untukmu pasangan hidup dari jenismu sendiri supaya kamu
                        dapat ketenangan hati dan dijadikannya kasih sayang
                        diantara kamu. Sesungguhnya yang demikian menjadi
                        tanda-tanda kebesarannya-Nya bagi orang-orang yang
                        berpikir.
                    </span>
                    <motion.div
                        initial={{
                            y: 10,
                        }}
                        whileInView={{
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        className="flex items-center w-full space-x-4"
                    >
                        <div className="w-full border-t border-gray-300"></div>
                        <span className="min-w-fit text-gray-200 font-mono">
                            Q.S. Ar-Rum: 21
                        </span>
                        <div className="w-full border-t border-gray-300"></div>
                    </motion.div>
                </motion.div>
                <div className="mt-16 relative z-30 md:h-72 lg:h-72">
                    <ImageSlider images={data.image_galleries} />
                </div>
                <div className="flex flex-col space-y-6 relative z-50">
                    {renderEvent}
                </div>
            </div>
        </section>
    );
}
