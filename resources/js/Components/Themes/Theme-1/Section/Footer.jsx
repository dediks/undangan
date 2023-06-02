import { usePage } from "@inertiajs/react";
import React from "react";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
    const data = usePage().props.data;
    return (
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
                    <div className="font-hand text-4xl">Keluarga besar</div>
                    <div className="font-hazelnuts">Mempelai Wanita</div>
                    <div className="text-amber-700">
                        Bapak{" "}
                        <span className="font-hazelnuts font-bold">
                            {data.bride_father}
                        </span>{" "}
                        dan{" "}
                        <span className="font-hazelnuts font-bold">
                            Ibu {data.bride_mother}
                        </span>
                    </div>
                </div>
                <img
                    src="/storage/assets/theme-1/and.png"
                    className="mt-12 -rotate-12 mx-auto"
                />
                <div className="mt-10 flex flex-col space-y-3">
                    <div className="font-hand text-4xl">Keluarga besar</div>
                    <div className="font-hazelnuts">Mempelai Wanita</div>
                    <div className="text-amber-700">
                        Bapak{" "}
                        <span className="font-hazelnuts font-bold">
                            {data.groom_father}
                        </span>{" "}
                        dan{" "}
                        <span className="font-hazelnuts font-bold">
                            Ibu {data.groom_mother}
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
                    src={`storage/images/${data.cover.background_image}`}
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
    );
};

export default Footer;
