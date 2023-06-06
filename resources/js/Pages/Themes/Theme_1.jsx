import ImageGallery from "@/Components/ImageGallery";
import MusicButton from "@/Components/MusicButton";
import { Calendar } from "@/Components/Themes/Theme-1/Section/Calendar";
import Couple from "@/Components/Themes/Theme-1/Section/Couple";
import Cover from "@/Components/Themes/Theme-1/Section/Cover";
import Events from "@/Components/Themes/Theme-1/Section/Events";
import Footer from "@/Components/Themes/Theme-1/Section/Footer";
import GMaps from "@/Components/Themes/Theme-1/Section/GMaps";
import Gift from "@/Components/Themes/Theme-1/Section/Gift";
import GuestBook from "@/Components/Themes/Theme-1/Section/GuestBook";
import Intro from "@/Components/Themes/Theme-1/Section/Intro";
import LiveStreaming from "@/Components/Themes/Theme-1/Section/LiveStreaming";
import Quote from "@/Components/Themes/Theme-1/Section/Quote";
import WhatsappForm from "@/Components/Themes/Theme-1/Section/WhatsappForm";
import useAudio from "@/Hooks/useAudio";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const Themes_1 = ({ data }) => {
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

    return (
        <>
            <Head>
                <title>{`${data.bride_nickname} & ${data.groom_nickname}`}</title>
            </Head>
            <div>
                <ToastContainer autoClose={true} draggable={false} />
            </div>
            {showCover && (
                <Cover
                    setShowCover={setShowCover}
                    toggle={toggle}
                    setIsFullscreen={setIsFullscreen}
                />
            )}
            {!showCover && (
                <div className="bg-white min-h-screen w-full relative md:p-8 md:rounded-lg">
                    <MusicButton
                        toggle={toggle}
                        isPlaying={playing}
                        className={"bottom-3 md:bottom-5 left-2 fixed z-50"}
                    />
                    <Intro />
                    <Quote />
                    <Couple data={data} />
                    <Calendar data={data} />
                    <Events data={data} />
                    <GMaps />
                    {/* <LiveStreaming /> */}
                    <section className="md:mt-12 p-4 md:px-12 mt-10">
                        <h1 className="font-hazelnuts text-center text-4xl">
                            Galeri Kami
                        </h1>
                        <div className="w-full h-full mt-10">
                            <ImageGallery />
                        </div>
                    </section>

                    {/* <Gift /> */}
                    <GuestBook />
                    <Footer />
                </div>
            )}
        </>
    );
};
export default Themes_1;
