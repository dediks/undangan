import useAudio from "@/Hooks/useAudio";
import React from "react";
import { MdMusicNote } from "react-icons/md";

const MusicButton = ({ toggle, className }) => {
    return (
        <section className={className}>
            <button
                onClick={toggle}
                className="animate-waving p-2 md:p-4 shadow-lg rounded-full bg-orange-200"
            >
                <MdMusicNote className="animate-waving-hand" />
            </button>
        </section>
    );
};

export default MusicButton;
