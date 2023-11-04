import React from "react";
import useAudio from "@/Hooks/useAudio";
import {
    MdMusicNote,
    MdOutlineQueueMusic,
    MdPause,
    MdPlayArrow,
    MdPlayDisabled,
    MdQueueMusic,
} from "react-icons/md";
import clsx from "clsx";

const MusicButton = ({ playing, toggle, className, url }) => {
    // console.log("playing", playing);
    return (
        <section className={clsx(className)}>
            <button
                onClick={toggle}
                className={`${playing ? "animate-pulse" : ""} p-2 md:p-4`}
            >
                {playing ? (
                    <MdPause className="text-black" />
                ) : (
                    <MdPlayArrow
                        className={`${
                            playing ? "animate-waving-hand" : ""
                        } text-black`}
                    />
                )}
            </button>
        </section>
    );
};

export default MusicButton;
