import React from "react";

const Cover = () => {
    return (
        <section
            className="bg-cover bg-center min-h-screen bg-slate-400 flex justify-center items-center"
            style={{
                backgroundImage: `url(/storage/images/${cover.background_image})`,
            }}
        >
            <div className="absolute bg-slate-800 w-full h-full opacity-50"></div>
            <div className="text-center relative">
                <div
                    className="mb-10 w-full text-center py-4 px-2 flex-col space-y-2
            "
                >
                    <div className="font-sans text-gray-300">
                        The Wedding of
                    </div>
                    <div className="text-gray-100 w-full py-6 justify-center flex space-x-2 text-center text-2xl">
                        <span className="font-hand text-6xl">Naim</span>
                        <span className="font-hand text-6xl">&</span>
                        <span className="font-hand text-6xl">Luyyina</span>
                    </div>
                </div>
                <div>
                    <div className="text-gray-100">
                        <div>Teruntuk :</div>
                        <div className="text-2xl">Dedik Sugiharto</div>
                    </div>
                    <a className="cursor-pointer inline-block mt-10 font-bold text-gray-100 w-100 py-2 px-3 rounded-lg bg-yellow-600">
                        Buka Undangan
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cover;
