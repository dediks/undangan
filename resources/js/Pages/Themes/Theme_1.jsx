import ImageGallery from "@/Components/ImageGallery";
import { Calendar } from "@/Components/Themes/Theme-1/Section/Calendar";
import Couple from "@/Components/Themes/Theme-1/Section/Couple";
import Events from "@/Components/Themes/Theme-1/Section/Events";
import Gift from "@/Components/Themes/Theme-1/Section/Gift";
import GuestBook from "@/Components/Themes/Theme-1/Section/GuestBook";
import LiveStreaming from "@/Components/Themes/Theme-1/Section/LiveStreaming";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdCopyAll, MdCreditCard, MdWhatsapp } from "react-icons/md";

const Themes_1 = ({ data }) => {
    const cover = data.cover;

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
        <div className="min-h-screen w-full">
            {/* <section className="w-full min-h-screen flex justify-center items-center px-3">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-hand text-4xl text-center">
                        The Wedding of
                    </h1>
                    <div className="mt-6 relative flex justify-center items-center w-3/6 h-3/6">
                        <img
                            className="absolute z-2 w-11/12 h-full aspect-square"
                            src={`/storage/assets/theme-1/border-1.gif`}
                        />
                        <img
                            className="z-1 p-1 sm:p-2 md:p-3 bg-center object-cover w-10/12 aspect-square rounded-t-full rounded-b-xl"
                            src={`/storage/images/${cover.background_image}`}
                        />
                    </div>
                    <div className="text-2xl flex space-x-2 mt-4">
                        <span>Naim</span>
                        <span>&</span>
                        <span>Luyyina</span>
                    </div>
                    <div className="border-2 px-6 rounded-3xl py-2 text-xl flex space-x-2 mt-4">
                        <span>Minggu</span>
                        <span>, 2 Juli 2023</span>
                    </div>
                    <div className="text-center font-hazelnuts my-6 px-16">
                        Terimakasih telah menjadi bagian di hari istimewa kami
                    </div>
                    <div className="border-2 rounded-3xl px-4 py-1">
                        Scroll ke bawah
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center px-3">
                <div className="flex flex-col text-center space-y-4">
                    <h2 className="font-dream_avenue text-3xl font-extralight text-gray-500">
                        Qs Az Zariyat:49
                    </h2>
                    <div className="leading-relaxed font-arslan font-extralight text-5xl text-amber-500">
                        وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ
                        تَذَكَّرُونَ
                    </div>
                    <p className="font-thin text-xl text-gray-500">
                        “Dan segala sesuatu Kami ciptakan berpasang-pasangan
                        supaya kamu mengingat kebesaran Allah.”
                    </p>
                </div>
            </section>
            <Couple data={data} />
            <Calendar data={data} />
            <Events data={data} />
            <section className="p-4 mt-16">
                <h1 className="font-hazelnuts text-center text-4xl">
                    Gmaps Detail
                </h1>
                <div className="mt-6 w-full relative">
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
            <section className="p-4 mt-10">
                <h1 className="font-hazelnuts text-center text-4xl">
                    Galeri Kami
                </h1>
                <div className="w-full h-full mt-10">
                    <ImageGallery images={images} />
                </div>
            </section> */}

            {/* <Gift /> */}
            <GuestBook />
            <section className="text-center mt-16">
                <img
                    src="/storage/assets/theme-1/sun.png"
                    className="w-4/12 mx-auto"
                />
                <div className="text-center font-dream_avenue text-4xl px-16 mt-10">
                    Kami Yang Berbahagia
                </div>
                <div className="p-4">
                    <div className="mt-10 flex flex-col space-y-3">
                        <div className="font-hand text-4xl">Keluarga besar</div>
                        <div className="font-hazelnuts">Mempelai Wanita</div>
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
                        className="mt-12 -rotate-12"
                    />
                    <div className="mt-10 flex flex-col space-y-3">
                        <div className="font-hand text-4xl">Keluarga besar</div>
                        <div className="font-hazelnuts">Mempelai Wanita</div>
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
                        <a className="" href="https://wa.me/+6281553010422">
                            <MdWhatsapp className="text-green-500" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Themes_1;
