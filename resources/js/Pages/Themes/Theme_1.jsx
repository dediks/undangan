import ImageGallery from "@/Components/ImageGallery";
import MusicButton from "@/Components/MusicButton";
import { Calendar } from "@/Components/Themes/Theme-1/Section/Calendar";
import Couple from "@/Components/Themes/Theme-1/Section/Couple";
import Cover from "@/Components/Themes/Theme-1/Section/Cover";
import Events from "@/Components/Themes/Theme-1/Section/Events";
import Gift from "@/Components/Themes/Theme-1/Section/Gift";
import GuestBook from "@/Components/Themes/Theme-1/Section/GuestBook";
import Intro from "@/Components/Themes/Theme-1/Section/Intro";
import LiveStreaming from "@/Components/Themes/Theme-1/Section/LiveStreaming";
import useAudio from "@/Hooks/useAudio";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import {
    MdCopyAll,
    MdCreditCard,
    MdKeyboardArrowDown,
    MdWhatsapp,
} from "react-icons/md";

const Themes_1 = ({ data }) => {
    const cover = data.cover;

    const url = "/storage/assets/song/asmalibrasi.mp3";
    const [playing, toggle] = useAudio(url);
    const [showCover, setShowCover] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        function onFullscreenChange() {
            setIsFullscreen(Boolean(document.fullscreenElement));
        }

        document.addEventListener("fullscreenchange", onFullscreenChange);

        return () =>
            document.removeEventListener(
                "fullscreenchange",
                onFullscreenChange
            );
    }, []);

    const images = [
        {
            src: "https://placekitten.com/1024/768?image=2",
            thumbnail: "https://placekitten.com/80/60?image=2",
            width: "1024",
            height: "768",
            title: "1",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=2",
            thumbnail: "https://placekitten.com/80/60?image=2",
            width: "1024",
            height: "768",
            title: "1",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
        {
            src: "https://placekitten.com/1024/768?image=1",
            thumbnail: "https://placekitten.com/80/60?image=1",
            width: "1024",
            height: "768",
            title: "2",
        },
    ];
    return (
        <>
            {showCover && (
                <Cover
                    setShowCover={setShowCover}
                    toggle={toggle}
                    setIsFullscreen={setIsFullscreen}
                />
            )}
            {!showCover && (
                <div className="bg-white min-h-screen w-full relative">
                    <MusicButton
                        toggle={toggle}
                        className={"bottom-3 md:bottom-5 left-2 fixed z-50"}
                    />
                    <Intro />
                    <section className="flex justify-center items-center px-3 md:mt-12">
                        <div className="flex flex-col text-center space-y-4">
                            <h2 className="font-dream_avenue text-3xl font-extralight text-gray-500">
                                Qs Az Zariyat:49
                            </h2>
                            <div className="leading-relaxed font-arslan font-extralight text-4xl text-amber-500">
                                وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ
                                لَعَلَّكُمْ تَذَكَّرُونَ
                            </div>
                            <p className="font-thin text-xl text-gray-500">
                                “Dan segala sesuatu Kami ciptakan
                                berpasang-pasangan supaya kamu mengingat
                                kebesaran Allah.”
                            </p>
                        </div>
                    </section>
                    <Couple data={data} />
                    <Calendar data={data} />
                    <Events data={data} />
                    <section className="p-4 md:px-12 mt-16">
                        <h1 className="font-hazelnuts text-center text-4xl">
                            Gmaps Details
                        </h1>
                        <div className="mt-6 md:mt-12 w-full relative">
                            <iframe
                                className="rounded-2xl w-full h-96"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15870.601243576491!2d106.0435605!3d-6.0426259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418f5036998355%3A0xb6b072895e8952e7!2sGraha%20Mutiara%20Asri!5e0!3m2!1sen!2sid!4v1684691426516!5m2!1sen!2sid"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </section>
                    <LiveStreaming />
                    <section className="md:mt-12 p-4 md:px-12 mt-10">
                        <h1 className="font-hazelnuts text-center text-4xl">
                            Galeri Kami
                        </h1>
                        <div className="w-full h-full mt-10">
                            <ImageGallery images={images} />
                        </div>
                    </section>

                    {/* <Gift /> */}
                    <GuestBook />
                    <section className="text-center mt-16">
                        <img
                            src="/storage/assets/theme-1/sun.png"
                            className="w-4/12 mx-auto md:w-2/12 md:h-24"
                        />
                        <div className="text-center font-dream_avenue text-4xl px-16 mt-10">
                            Kami Yang Berbahagia
                        </div>
                        <div className="p-4">
                            <div className="mt-10 flex flex-col space-y-3">
                                <div className="font-hand text-4xl">
                                    Keluarga besar
                                </div>
                                <div className="font-hazelnuts">
                                    Mempelai Wanita
                                </div>
                                <div className="text-amber-700">
                                    Bapak{" "}
                                    <span className="font-hazelnuts font-bold">
                                        anu
                                    </span>{" "}
                                    dan{" "}
                                    <span className="font-hazelnuts font-bold">
                                        Ibu ono
                                    </span>
                                </div>
                            </div>
                            <img
                                src="/storage/assets/theme-1/and.png"
                                className="mt-12 -rotate-12 mx-auto"
                            />
                            <div className="mt-10 flex flex-col space-y-3">
                                <div className="font-hand text-4xl">
                                    Keluarga besar
                                </div>
                                <div className="font-hazelnuts">
                                    Mempelai Wanita
                                </div>
                                <div className="text-amber-700">
                                    Bapak{" "}
                                    <span className="font-hazelnuts font-bold">
                                        anu
                                    </span>{" "}
                                    dan{" "}
                                    <span className="font-hazelnuts font-bold">
                                        Ibu ono
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 relative w-full">
                            <div
                                className="bottom-0 w-full h-3/4 absolute bg-gradient-to-t from-black to-transparent
                     "
                            />
                            <img
                                className=""
                                src="/storage/images/01gzy3p4hezt977je9dsrdnh2y/cover/cover.webp"
                            />
                            <div className="flex flex-col items-center space-y-3 justify-center w-full text-xl z-50 absolute bottom-24 text-gray-500">
                                <span className="font-hazelnuts text-gray-200">
                                    ourmarry.com
                                </span>
                                <a
                                    className=""
                                    href="https://wa.me/+6281553010422"
                                >
                                    <MdWhatsapp className="text-green-500" />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
};
export default Themes_1;
