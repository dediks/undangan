import { Head, usePage } from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Generate = ({ auth, identifier }) => {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Get All Links
                </h2>
            }
        >
            <Head title="Get Invitation Links" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="px-4 md:px-0 bg-white min-h-screen overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-center px-1 py-3"
                                    >
                                        No
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Link
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-center px-2 py-3"
                                    >
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    identifier
                                                );
                                            }}
                                            className=" text-black hover:border-gray-500 border-2 hover:border-2 border-black hover:bg-blue-50 hover:text-black rounded-xl px-2 py-1"
                                        >
                                            Copy All Link
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {identifier &&
                                    identifier.map((data, index) => (
                                        <tr
                                            className="border border-b "
                                            key={index}
                                        >
                                            <td className="px-1 text-center py-1">
                                                {++index}
                                            </td>
                                            <td className="px-2 py-1">
                                                {data}
                                            </td>
                                            <td className="text-center py-1">
                                                <button
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(
                                                            data
                                                        );
                                                    }}
                                                    className="hover:bg-blue-100 hover:text-black rounded-xl border-2 px-2"
                                                >
                                                    Copy
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Generate;
