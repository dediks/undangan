import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { useToast } from "react-toastify";

const Index = ({ auth, guests }) => {
    const invitation_id = usePage().props.invitation.id;

    const {
        delete: destroy,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm();

    const handleDelete = (guestId) => {
        destroy(`/invitation/guests/${guestId}`);
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Daftar Tamu
                    </h2>
                    <a
                        href={`/invitation/${invitation_id}/guest/create`}
                        className="px-4 py-2 bg-blue-600 rounded-lg text-gray-50"
                    >
                        Tambah Tamu
                    </a>
                </div>
            }
        >
            <Head title="Daftar Tamu" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Identifier
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Nama
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
                            {guests.length > 0 ? (
                                guests.map((data) => (
                                    <tr
                                        key={data.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th
                                            scope="row"
                                            className="text-center px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {data.nickname}
                                        </th>
                                        <td className="px-2 py-4 text-center">
                                            {data.fullname}
                                        </td>
                                        <td className="text-center px-2 py-4">
                                            <a
                                                href={`/invitation/guest/${data.id}/edit`}
                                                className="bg-blue-300 px-2 py-1 text-white rounded-md text-center font-medium dark:text-blue-500 hover:underline"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                onClick={() =>
                                                    handleDelete(data.id)
                                                }
                                                className="bg-red-300 px-2 py-1 text-white rounded-md text-center font-medium dark:text-blue-500 hover:underline"
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
                                        Belum ada data tamu
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
