import React from "react";
import { MdLocationPin, MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Couple = ({ data }) => {
    console.log("couple", data);

    const cover = data.cover;
    return (
        <section className="flex justify-center items-center mt-28 px-3 py-10">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-yellow-600 font-arslan text-3xl">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                </h2>
                <span className="mt-4 text-center font-hazelnuts text-lg font-semibold">
                    Assalamu'alaikum Warahmatullahi Wabarakatuh.{" "}
                </span>
                <p className="leading-tight md:leading-normal md:px-16 md:py-6 mt-4 text-center md:text-xl text-yellow-500">
                    Maha suci Allah yang telah menciptakan mahluk-Nya
                    berpasang-pasangan. Ya Allah, perkenankanlah kami
                    merangkaikan kasih sayang yang Kau ciptakan diantara kami
                    untuk mengikuti Sunnah Rasul-Mu dalam rangka membentuk
                    keluarga yang sakinah, mawaddah, warahmah.
                </p>

                <div className="mt-6 relative flex justify-center items-center md:w-8/12 w-11/12 h-full">
                    <img
                        className="absolute z-2 w-11/12 h-full aspect-square"
                        src={`/storage/assets/theme-1/border-2.gif`}
                    />
                    <img
                        className="z-1 p-3 sm:p-2 md:p-3 bg-center object-cover w-10/12 rounded-t-full rounded-b-full"
                        src={`/storage/images/01gzy3p4hezt977je9dsrdnh2y/groom_photo.webp`}
                    />
                </div>
                <div className="flex space-x-2 items-center text-xl mt-8">
                    <MdLocationPin className="text-amber-500 " />
                    <span>Tuban</span>
                </div>
                <div className="flex flex-col space-y-6 mt-6">
                    <div className="font-dream_avenue  md:text-8xl text-7xl text-center">
                        Naim
                    </div>
                    <div className="text-center font-hazelnuts rounded-lg px-4 py-2 text-xl sm:text-2xl bg-amber-100 text-gray-600 font-semibold">
                        M. Ainun Naim
                    </div>
                </div>
                <div className="text-center text-amber-600 text-xl mt-6">
                    <div>Putri Pertama Dari Keluarga</div>
                    <div className="">
                        <span>Bapak </span>
                        <span className="font-bold">M. Muchtar</span>
                        <span> &amp; Ibu </span>
                        <span className="font-bold">Siti Muntamah</span>
                    </div>
                </div>
                <div className="mt-10 flex space-x-3 items-center justify-center">
                    <a
                        href="https://instagram.com/nm.ainun?igshid=OGQ5ZDc2ODk2ZA=="
                        className="p-2 bg-amber-500 rounded-full text-gray-200"
                    >
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    {/* <a className="p-2 bg-amber-500 rounded-full text-gray-200">
                        <MdFacebook className="w-6 h-6" />
                    </a>
                    <a className="p-2 bg-amber-500 rounded-full text-gray-200">
                        <FaTwitter className="w-6 h-6" />
                    </a> */}
                </div>
                <img
                    src="/storage/assets/theme-1/and.png"
                    className="md:py-12
                "
                />

                <div className="mt-6 md:mt-12 relative flex justify-center items-center md:w-8/12 w-11/12 h-full">
                    <img
                        className="absolute z-2 w-11/12 h-full aspect-square"
                        src={`/storage/assets/theme-1/border-2.gif`}
                    />
                    <img
                        className="z-1 p-3 sm:p-2 md:p-3 bg-center object-cover w-10/12 rounded-t-full rounded-b-full"
                        src={`/storage/images/01gzy3p4hezt977je9dsrdnh2y/bride_photo.webp`}
                    />
                </div>
                <div className="flex space-x-2 items-center text-xl mt-8">
                    <MdLocationPin className="text-amber-500 " />
                    <span>Banten</span>
                </div>
                <div className="flex flex-col space-y-6 mt-6">
                    <div className="font-dream_avenue md:text-8xl text-7xl text-center">
                        Luyyina
                    </div>
                    <div className="text-center font-hazelnuts rounded-lg px-4 py-2 text-xl sm:text-2xl bg-amber-100 text-gray-600 font-semibold">
                        Luyyina Mujahidah Atsaury, S.E
                    </div>
                </div>
                <div className="text-center text-amber-600 text-xl mt-6">
                    <div>Putri Ketiga Dari Keluarga</div>
                    <div className="">
                        <span>Bapak </span>
                        <span className="font-bold">Drs. Yaya Dayana</span>
                        <span> &amp; Ibu </span>
                        <span className="font-bold">Ibu Dede Maryati</span>
                    </div>
                </div>
                <div className="mt-10 flex space-x-3 items-center justify-center">
                    <a
                        href="https://instagram.com/luyyinatsa?igshid=MzRlODBiNWFlZA=="
                        className="p-2 bg-amber-500 rounded-full text-gray-200"
                    >
                        <FaInstagram className="w-6 h-6 text-gray-50" />
                    </a>
                    {/* <a className="p-2 bg-amber-500 rounded-full text-gray-200">
                        <MdFacebook className="w-6 h-6 text-gray-50" />
                    </a>
                    <a className="p-2 bg-amber-500 rounded-full text-gray-200">
                        <FaTwitter className="w-6 h-6 text-gray-50" />
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default Couple;
