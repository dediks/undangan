import React from "react";

const Themes_1 = ({ data }) => {
    console.log(data);
    return (
        <section
            className="min-h-screen bg-slate-400 flex justify-center items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div
                className="bg-white w-full text-center py-4 px-2
            "
            >
                <div className="font-sans">The Wedding of</div>
                <div className="w-full py-6 justify-center flex space-x-2 text-center text-2xl">
                    <span className="font-hand text-5xl">Naim</span>
                    <span className="font-hand text-5xl">&</span>
                    <span className="font-hand text-5xl">Luyyina</span>
                </div>
                <div>
                    <div>Teruntuk :</div>
                    <div className="text-xl">Dedik Sugiharto</div>
                </div>

                <a className="inline-block mt-10 w-100 py-2 px-3 rounded-lg bg-slate-300">
                    Buka Undangan
                </a>
            </div>
        </section>
    );
};
export default Themes_1;
