import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, gifts }) => {
    const invitation_id = usePage().props.invitation.id;

    const {
        delete: destroy,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm();

    const handleDelete = (giftId) => {
        destroy(`/invitation/gifts/${giftId}`);
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="space-x-2 flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-base md:text-xl text-gray-800 leading-tight">
                            List Gift Data
                        </h2>
                        <span className="text-xs md:text-base">
                            Maksimum hanya dapat membuat 4 Gift Card
                        </span>
                    </div>
                    {gifts.length <= 9 && (
                        <Link
                            href={route("gifts.create", {
                                invitationId: invitation_id,
                            })}
                            className="text-center text-xs md:text-base px-4 py-2 bg-blue-600 rounded-lg text-gray-50"
                        >
                            Tambah Gift Card
                        </Link>
                    )}
                </div>
            }
        >
            <Head title="Daftar Gift Card" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 px-2">
                    <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="w-10 text-center">No</th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Atas Nama
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Address
                                </th>
                                <th
                                    scope="col"
                                    className="text-center px-2 py-3"
                                >
                                    Type
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
                            {gifts.length > 0 ? (
                                gifts.map((data, index) => (
                                    <tr
                                        key={data.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <td className="w-10 text-center">
                                            {++index}
                                        </td>
                                        <td className="px-2 py-4 text-center">
                                            {data.name}
                                        </td>
                                        <td className="px-2 py-4 text-center">
                                            {data.address}
                                        </td>
                                        <td className="px-2 py-4 text-center">
                                            {data.type}
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
                                        colSpan={5}
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
