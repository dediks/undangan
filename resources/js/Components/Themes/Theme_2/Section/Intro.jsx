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

const Intro = ({ data, attributes, isPreview = false, isCoverOpen }) => {
    const introSectionRef = useRef(null);
    const aRef = useRef(null);

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
        <section
            ref={introSectionRef}
            style={{
                backgroundImage: `url(/storage/images/${data.intro.image})`,
            }}
            className={clsx(
                isPreview ? "h-full w-full" : "min-h-screen md:h-[1000px]",
                "relative transition duration-700 ease-in-out bg-center bg-cover flex items-end"
            )}
        >
            <div className="absolute w-full min-h-full bg-black opacity-70"></div>
            <div
                className={clsx(
                    isPreview ? "pb-16" : "md:pb-20 md:text-2xl md:space-y-16",
                    "text-gray-300 w-full absolute min-h-screen flex justify-center items-center flex-col"
                )}
            >
                <div className="text-center">
                    <h1>{data.intro.title}</h1>
                    <h1 className="py-2 text-2xl font-dream_avenue font-extrabold">
                        {`${data.bridegroom.bride} & ${data.bridegroom.groom}`}
                    </h1>

                    <p
                        className={`md:text-xl ${
                            isPreview
                                ? "md:px-12 text-xs leading-3"
                                : "leading-6 text-base md:px-36 lg:px-80 md:py-8 lg:leading-loose"
                        } text-center block align-middle p-12`}
                    >
                        Siang dan malam berganti begitu cepat, diantara momen
                        mendebarkan yang belum pernah kami rasakan sebelumnya.
                        Kami menantikan untuk menyambut keluarga dan
                        teman-teman, untuk menjadi saksi sumpah kami di hari
                        yang bahagia :
                    </p>
                </div>
                <div className="text-center font-bold font-mono">
                    {getData(
                        data.events,
                        "id",
                        getData(attributes, "attribute_name", "selected_event")
                            .value
                    ).start
                        ? getDateInWord(
                              getData(
                                  data.events,
                                  "id",
                                  getData(
                                      attributes,
                                      "attribute_name",
                                      "selected_event"
                                  ).value
                              ).start
                          )
                        : "Belum di atur"}
                </div>
                <div className="mt-10 flex flex-col items-center space-y-8 lg:space-y-24">
                    <div className="font-serif flex space-x-8 text-base">
                        <CountingDown
                            data={
                                getData(
                                    data.events,
                                    "id",
                                    getData(
                                        attributes,
                                        "attribute_name",
                                        "selected_event"
                                    ).value
                                ).start
                            }
                        ></CountingDown>
                    </div>
                    <AddToCalendarButton
                        className={
                            "hover:border-blue-100 hover:rounded-2xl hover:bg-black/50 xl:py-2 xl:px-4 2xl:px-16 2xl:py-4 2xl:text-2xl 2xl:mt-20"
                        }
                    >
                        Simpan di kalender
                    </AddToCalendarButton>
                </div>
            </div>
        </section>
    );
};

export default Intro;
