import React, { useState } from "react";
import { MdCopyAll, MdCreditCard } from "react-icons/md";
import { motion } from "framer-motion";
import { AiFillGift } from "react-icons/ai";

function copy() {
    let copyGfGText = document.getElementById("IdOfTextToCopy");

    copyGfGText.select();
    document.execCommand("copy");

    console.log(copyGfGText.value);
}

const Gift = ({ data }) => {
    const [show, setShow] = useState(false);

    return (
        <section className="p-4 mt-10">
            <div className="text-center flex flex-col space-y-4">
                <h1 className="font-hazelnuts text-center text-2xl md:text-4xl">
                    Hadiah Pernikahan
                </h1>
                <span className="fleading-tight font-hazelnuts text-gray-400 text-center md:text-xl mt-4">
                    Jika memberi adalah bentuk tanda kasih Anda, fitur ini dapat
                    memberikan Anda kemudahan
                </span>
            </div>
            <button
                onClick={() => {
                    setShow(() => !show);
                }}
                type="button"
                className="mx-auto mt-8 flex items-center space-x-2 rounded-3xl px-8 py-3 bg-gray-800 text-white font-semibold"
            >
                <MdCreditCard />
                <span>Hadiah Pernikahan (klik)</span>
            </button>
            {show && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="mt-10 flex flex-col space-y-8"
                >
                    {/* <div className="border border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl p-4 shadow-xl">
                    <div className="flex justify-between items-center">
                        <span className="font-hazelnuts text-xl">
                            Dompet Digital
                        </span>
                        <img
                            src="/storage/assets/bank/bca.svg"
                            className="w-16"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <div className="flex flex-col">
                            <span className="text-sm font-extralight text-gray-500">
                                Nomor rekening
                            </span>
                            <span className="tracking-widest font-extrabold font-sans text-xl">
                                0817 212 000
                            </span>
                        </div>
                        <div>
                            <button className="flex items-center text-gray-100 space-x-2 font-semibold bg-neutral-400 px-5 py-2 rounded-xl">
                                <MdCopyAll />
                                <span>Salin</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-6">
                        <div className="flex flex-col">
                            <span className="text-sm font-extralight text-gray-500">
                                Atas Nama
                            </span>
                            <span className="font-dream_avenue text-2xl">
                                M Ainun Naim
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-extralight text-gray-500">
                                Pernikahan
                            </span>
                            <span className="font-dream_avenue text-2xl">
                                12/12/2023
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl p-4 shadow-xl">
                    <div className="flex justify-between items-center">
                        <span className="font-hazelnuts text-xl">
                            Dompet Digital
                        </span>
                        <img
                            src="/storage/assets/bank/dana.svg"
                            className="w-16"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <div className="flex flex-col">
                            <span className="text-sm font-extralight text-gray-500">
                                Nomor rekening
                            </span>
                            <span className="tracking-widest font-extrabold font-sans text-xl">
                                0817 212 000
                            </span>
                        </div>
                        <div>
                            <button className="flex items-center text-gray-100 space-x-2 font-semibold bg-neutral-400 px-5 py-2 rounded-xl">
                                <MdCopyAll />
                                <span>Salin</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-6">
                        <div className="flex flex-col">
                            <span className="text-sm font-extralight text-gray-500">
                                Atas Nama
                            </span>
                            <span className="font-dream_avenue text-2xl">
                                M Ainun Naim
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-extralight text-gray-500">
                                Pernikahan
                            </span>
                            <span className="font-dream_avenue text-2xl">
                                12/12/2023
                            </span>
                        </div>
                    </div>
                </div> */}
                    {data.map((gift, key) => {
                        return (
                            <div
                                key={key}
                                className="border border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl p-4 shadow-xl"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-hazelnuts text-xl">
                                        {gift.title}
                                    </span>
                                    {gift.type == "cashless" ? (
                                        <img
                                            src={`/storage/assets/bank/${gift.bank}.svg`}
                                            className="w-16"
                                        />
                                    ) : (
                                        <AiFillGift />
                                    )}
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-extralight text-gray-500">
                                            {gift.type == "cashless"
                                                ? "Nomor rekening"
                                                : "Alamat"}
                                        </span>
                                        <span className="leading-4 font-sans text-base">
                                            {gift.address}
                                        </span>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    gift.address
                                                );
                                            }}
                                            className="flex items-center text-gray-100 space-x-2 font-semibold bg-neutral-400 px-5 py-2 rounded-xl"
                                        >
                                            <MdCopyAll />
                                            <span>Salin</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-extralight text-gray-500">
                                            Atas Nama
                                        </span>
                                        <span className="font-dream_avenue text-2xl">
                                            {gift.name}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-extralight text-gray-500">
                                            Pernikahan
                                        </span>
                                        <span className="font-dream_avenue text-2xl">
                                            17/11/2023
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            )}
        </section>
    );
};

export default Gift;
