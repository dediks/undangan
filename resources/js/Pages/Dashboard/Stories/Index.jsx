import Alert from "@/Components/Alert";
import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import useToast from "@/Hooks/useToast";

const Index = ({ auth, stories }) => {
    const invitation_id = usePage().props.invitation.id;
    const [openModal, setOpenModal] = useState(false);
    const [cofirmDelete, setConfirmDelete] = useState(false);
    const [selectedStory, setSelectedStory] = useState(null);

    const showToast = useToast();

    const {
        delete: destroy,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm();

    const handleDelete = (storyId) => {
        setSelectedStory(storyId);
        setOpenModal(true);
    };

    useEffect(() => {
        if (cofirmDelete && selectedStory) {
            destroy(
                route("story.destroy", {
                    invitationId: invitation_id,
                    storyId: selectedStory,
                }),
                {
                    onSuccess: (res) => {
                        console.log(res);
                        showToast("Berhasil dihapus", {
                            type: "success",
                            position: "top-right",
                            autoClose: 3000,
                        });
                        setOpenModal(false);
                    },
                    onError: (errors) => {
                        console.log(errors);
                    },
                }
            );
        }
    }, [cofirmDelete]);

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            List Stories
                        </h2>
                    </div>
                    {stories.length <= 9 && (
                        <a
                            href={`/invitation/${invitation_id}/stories/create`}
                            className="px-4 py-2 bg-blue-600 rounded-lg text-gray-50"
                        >
                            Tambah Story
                        </a>
                    )}
                </div>
            }
        >
            <Modal
                show={openModal}
                onClose={() => {
                    setOpenModal(false);
                }}
                className="p-4 "
            >
                <div className="p-4">Yakin ingin menghapus?</div>
                <div className="flex space-x-2 justify-end">
                    <button
                        type="button"
                        className="px-4 py-1 border border-gray-600 rounded"
                        onClick={() => {
                            setConfirmDelete(false);
                            setOpenModal(false);
                        }}
                    >
                        Tidak
                    </button>
                    <button
                        type="button"
                        className="rounded px-4 py-1 bg-blue-500 text-gray-100"
                        onClick={() => {
                            setConfirmDelete(true);
                        }}
                    >
                        Iya
                    </button>
                </div>
            </Modal>
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
                                    Cerita
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Waktu
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Foto
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
                            {stories.length > 0 ? (
                                stories.map((data, index) => (
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
                                        <td
                                            className="text-center"
                                            width={"30%"}
                                        >
                                            {data.story}
                                        </td>
                                        <td className="text-center">
                                            {data.date}
                                        </td>
                                        <td className="text-center flex justify-center">
                                            {data.image ? (
                                                <img
                                                    src={`/${data.image}`}
                                                    className="aspect-auto rounded-md object-center"
                                                    width={100}
                                                />
                                            ) : (
                                                ""
                                            )}
                                        </td>
                                        <td className="">
                                            <div className="flex justify-center space-x-2 items-center">
                                                {/* <a
                                                    onClick={() =>
                                                        handleDelete(data.id)
                                                    }
                                                    className="align-middle cursor-pointer bg-blue-300 px-2 py-1 text-white rounded-md text-center font-medium dark:text-blue-500 hover:underline"
                                                >
                                                    Detail
                                                </a> */}
                                                <a
                                                    onClick={(e) =>
                                                        handleDelete(data.id)
                                                    }
                                                    className="align-middle cursor-pointer bg-red-300 px-2 py-1 text-white rounded-md text-center font-medium dark:text-blue-500 hover:underline"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td
                                        colSpan={6}
                                        scope="row"
                                        className="text-center px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Belum ada gambar
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
