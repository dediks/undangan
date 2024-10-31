import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { useToast } from "react-toastify";

const Index = ({ auth, images }) => {
    const invitation_id = usePage().props.invitation.id;

    const {
        delete: destroy,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm();

    const handleDelete = (imageId) => {
        destroy(`/invitation/galleries/${imageId}`);
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            List Image Gallery
                        </h2>
                        <span>Maksimum hanya dapat mengunggah 10 gambar</span>
                    </div>
                    {images.length <= 9 && (
                        <a
                            href={`/invitation/${invitation_id}/galleries/create`}
                            className="px-4 py-2 bg-blue-600 rounded-lg text-gray-50"
                        >
                            Tambah Gambar
                        </a>
                    )}
                </div>
            }
        >
            <Head title="Daftar Acara" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 px-2">
                    <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="w-10 text-center">
                                    No
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Gambar
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Uploaded at
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
                            {images.length > 0 ? (
                                images.map((data, index) => (
                                    <tr
                                        key={data.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th className="w-10 text-center">{++index}</th>
                                        <th
                                            scope="row"
                                            className="flex items-center justify-center text-center px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <img
                                                src={`/${data.image_url}`}
                                                className="aspect-auto rounded-md"
                                                width={200}
                                            />
                                        </th>
                                        <td className="px-2 py-4 text-center">
                                            {data.created_at}
                                        </td>
                                        <td className="">
                                            <a
                                                onClick={() =>
                                                    handleDelete(data.id)
                                                }
                                                className="align-middle cursor-pointer bg-red-300 px-2 py-1 text-white rounded-md text-center font-medium dark:text-blue-500 hover:underline"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td
                                        colSpan={3}
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
