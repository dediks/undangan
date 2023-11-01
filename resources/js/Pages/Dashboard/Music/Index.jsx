import MusicButton from "@/Components/MusicButton";
import useAudio from "@/Hooks/useAudio";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import useToast from "@/Hooks/useToast";
import {
    MdCheck,
    MdPause,
    MdPlayArrow,
    MdPowerInput,
    MdRadioButtonChecked,
    MdRadioButtonUnchecked,
    MdSmartButton,
} from "react-icons/md";

const Index = ({ auth, musics, selected_music }) => {
    const invitation_id = usePage().props.invitation.id;
    const [songUrl, setSongUrl] = useState("");
    const [audio, setAudio] = useState(new Audio());
    const [isPlaying, setIsPlaying] = useState({});
    const [selectedMusic, setSelectedMusic] = useState(selected_music);

    const showToast = useToast();

    const {
        post,
        data,
        setData,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm(selected_music);

    const handlePlaySong = (id, url) => {
        audio.src = url;
        setAudio(audio);

        if (url == songUrl) {
            isPlaying[id] ? audio.pause() : audio.play();
        } else {
            audio.play();
        }
        setSongUrl(url);
        setIsPlaying({ ...isPlaying, [id]: !isPlaying[id] });
    };

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        };
    }, []);

    const handleSubmit = (musicId) => {
        post(
            route("music.select", {
                invitationId: invitation_id,
                musicId: musicId,
            }),
            {
                preserveScroll: true,
                onSuccess: (res) => {
                    console.log(res);

                    setSelectedMusic({ id: musicId });
                    showToast("berhasil", {
                        type: "success",
                        position: "top-right",
                        autoClose: 3000,
                    });
                },
                onError: (errors) => {
                    console.log(errors);
                },
            }
        );
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            List Music
                        </h2>
                    </div>
                </div>
            }
        >
            <Head title="Daftar Acara" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 px-2">
                    <table className="bg-blue-100 table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="w-10 text-center">No</th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Pencipta
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Deskripsi
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {musics.length > 0 ? (
                                musics.map((data, index) => {
                                    return (
                                        <tr
                                            key={data.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                        >
                                            <td className="w-10 text-center">
                                                {++index}
                                            </td>
                                            <td className="text-center">
                                                {data.title}
                                            </td>
                                            <td className="text-center">
                                                {data.author}
                                            </td>
                                            <td className="text-center">
                                                {data.desciption}
                                            </td>
                                            <td className="flex justify-center space-x-2">
                                                <button
                                                    onClick={() => {
                                                        setData(
                                                            "music_id",
                                                            data.id
                                                        );
                                                        handleSubmit(data.id);
                                                    }}
                                                    className="cursor-pointer px-2 py-2  rounded-md text-center font-medium dark:text-blue-500 hover:underline"
                                                >
                                                    {selectedMusic.id ==
                                                    data.id ? (
                                                        <MdRadioButtonChecked />
                                                    ) : (
                                                        <MdRadioButtonUnchecked />
                                                    )}
                                                </button>
                                                {data.url && (
                                                    <button
                                                        onClick={() => {
                                                            handlePlaySong(
                                                                data.id,
                                                                data.url
                                                            );
                                                        }}
                                                    >
                                                        {isPlaying[data.id] ? (
                                                            <MdPause />
                                                        ) : (
                                                            <MdPlayArrow />
                                                        )}
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td
                                        colSpan={5}
                                        scope="row"
                                        className="text-center px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Belum ada lagu
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
