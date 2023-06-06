import useAudio from "@/Hooks/useAudio";
import React from "react";
import { MdMusicNote } from "react-icons/md";

const MusicButton = ({ toggle, isPlaying, className }) => {
    console.log("is Playing", isPlaying);
    return (
        <section className={className}>
            <button
                onClick={toggle}
                className={`${
                    isPlaying
                        ? "ring-1 ring-green-500 animate-pulse"
                        : "ring-2 ring-red-300"
                } p-2 md:p-4 shadow-lg rounded-full bg-orange-200/60`}
            >
                <MdMusicNote
                    className={`${
                        isPlaying ? "animate-waving-hand" : ""
                    } text-black`}
                />
            </button>
        </section>
    );
};

export default MusicButton;
