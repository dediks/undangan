import CountingDown from "@/Components/CountingDown";
import { AttributesContext } from "@/Context/AttributeContext";
import { getDateInWord } from "@/Helpers/getDate";
import { usePage } from "@inertiajs/react";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import AddToCalendarButton from "../AddToCalendarButton";
import getData from "@/Helpers/getData";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";

const Intro = ({ data, attributes, isPreview = false, isCoverOpen }) => {
    const introSectionRef = useRef(null);
    const isInView = useInView(introSectionRef, { once: true });

    // console.log("Intro in view", isInView);

    useEffect(() => {
        scrollToIntroSection();
    }, [isCoverOpen]);

    function scrollToIntroSection() {
        introSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "center",
        });
    }
    return (
        <motion.section
            ref={introSectionRef}
            style={{
                backgroundImage: `url(/storage/images/${data.intro.image})`,
            }}
            className={clsx(
                isPreview ? "h-full" : "min-h-screen lg:min-h-[1200px]",
                "w-full relative bg-center bg-cover flex items-end"
            )}
        >
            <div className="absolute w-full min-h-full bg-black opacity-60"></div>
            <div
                className={clsx(
                    isPreview ? "pb-16" : "md:pb-20 md:text-2xl md:space-y-16",
                    "text-gray-300 w-full absolute min-h-screen flex justify-center items-center flex-col"
                )}
            >
                <div className="text-center">
                    <div
                        style={{
                            transform: isInView ? "" : "translateY(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
                        }}
                    >
                        <h1>{data.intro.title}</h1>
                        <h1 className="py-2 text-3xl font-mono font-extrabold">
                            {`${data.bridegroom.bride} & ${data.bridegroom.groom}`}
                        </h1>
                    </div>

                    <p
                        style={{
                            opacity: isInView ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s",
                        }}
                        className={`md:text-xl ${
                            isPreview
                                ? "md:px-12 text-xs leading-3"
                                : "leading-6 text-base md:px-36 lg:px-80 md:py-8 lg:leading-loose"
                        } text-base font-serif font-thin text-center block align-middle p-12 text-gray-50/70`}
                    >
                        Siang dan malam berganti begitu cepat, diantara momen
                        mendebarkan yang belum pernah kami rasakan sebelumnya.
                        Kami menantikan untuk menyambut keluarga dan
                        teman-teman, untuk menjadi saksi sumpah kami di hari
                        yang bahagia :
                    </p>
                </div>
                <div
                    style={{
                        transform: isInView ? "" : "translateY(200px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
                    }}
                    className="w-full relative"
                >
                    <div className="my-10 text-center text-gray-50/80">
                        {getData(
                            data.events,
                            "id",
                            getData(
                                attributes,
                                "attribute_name",
                                "selected_event"
                            )?.value
                        )?.start
                            ? getDateInWord(
                                  getData(
                                      data.events,
                                      "id",
                                      getData(
                                          attributes,
                                          "attribute_name",
                                          "selected_event"
                                      )?.value
                                  )?.start
                              )
                            : "Belum di atur"}
                    </div>
                    <div className="mt-10 relative px-40 ">
                        <div className="mx-auto ">
                            <CountingDown
                                data={
                                    getData(
                                        data.events,
                                        "id",
                                        getData(
                                            attributes,
                                            "attribute_name",
                                            "selected_event"
                                        )?.value
                                    )?.start
                                }
                            />
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center space-y-8 lg:space-y-24">
                        <AddToCalendarButton
                            className={
                                "rounded shadow-2xl shadow-black hover:border-gray-200 text-gray-50/80 hover:bg-black/50 bg-red-800/50 xl:py-2 xl:px-4 2xl:px-16 2xl:py-4 2xl:text-2xl 2xl:mt-20"
                            }
                        >
                            <a
                                target="_"
                                href="https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+Of+Rika+%26+Tommy&details=Rumah+Mempelai+Wanita&location=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2F6%25C2%25B054%2701.0%2522S%2B112%25C2%25B005%2756.4%2522E%2F%40-6.9002596%2C112.0988652%2C21z%2Fdata%3D%214m4%213m3%218m2%213d-6.9002892%214d112.0989857%3Fentry%3Dttu&dates=20231117T010000Z%2F20231117T100000Z"
                            >
                                SAVE TO CALENDAR
                            </a>
                        </AddToCalendarButton>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Intro;
