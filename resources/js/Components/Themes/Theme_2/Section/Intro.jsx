import CountingDown from "@/Components/CountingDown";
import getDate from "@/Helpers/getDate";
import useDate from "@/Hooks/useDate";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

const Intro = ({ data, invitation, isPreview = false }) => {
    console.log("intro compo: ", data);

    return (
        <section
            style={{
                backgroundImage: `url(/storage/images/${data.image})`,
            }}
            className="min-h-screen bg-center bg-cover md:h-[1000px] relative flex items-end"
        >
            <div className="absolute w-full min-h-full bg-black opacity-70"></div>
            <div className="md:text-2xl text-gray-100 w-full absolute min-h-screen flex justify-center items-center flex-col">
                <div className="text-center">
                    <h1>{data.title}</h1>
                    <h1 className="py-2 text-2xl font-dream_avenue font-extrabold">
                        Tommy & Chandra
                    </h1>
                    <p
                        className={`md:text-xl ${
                            isPreview
                                ? "md:px-12 text-xs leading-3"
                                : "leading-6 md:px-48 text-base"
                        } md:py-8 text-center block align-middle p-12`}
                    >
                        Siang dan malam berganti begitu cepat, diantara momen
                        mendebarkan yang belum pernah kami rasakan sebelumnya.
                        Kami menantikan untuk menyambut keluarga dan
                        teman-teman, untuk menjadi saksi sumpah kami di hari
                        yang bahagia :
                    </p>
                </div>
                <div className="text-center font-bold font-mono">
                    {/* {data?.events[0]?.start
                        ? getDate(data.events[0].start).date
                        : "Belum di atur"} */}
                </div>
                <div className="mt-10 flex flex-col items-center space-y-8">
                    <div className="font-serif flex space-x-8 text-base">
                        <div className="flex flex-col items-center">
                            <span>00</span>
                            <span>Hari</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>00</span>
                            <span>Jam</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>00</span>
                            <span>Menit</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>00</span>
                            <span>Detik</span>
                        </div>
                    </div>
                    <button className="flex items-center text-base space-x-2 px-2 py-1 rounded-md border-4 border-gray-100">
                        <BsFillCalendar2CheckFill />
                        <span>Simpan di kalender</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Intro;
