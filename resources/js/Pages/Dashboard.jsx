import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import useToast from "@/Hooks/useToast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
    const { invitation } = props;
    const [coupleId, setCoupleId] = useState(invitation?.couple_id ?? "");

    const showToast = useToast();

    function updateCoupleId() {
        axios
            .put("invitation/ajax/couple-id/update", {
                couple_id: coupleId,
            })
            .then((res) => {
                showToast(res.data.message, {
                    type: res.data.status,
                    position: "top-right",
                    autoClose: 3000,
                });
            });
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white min-h-screen overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="bg-neutral-300 md:flex md:items-center md:space-x-6 p-6 text-gray-900">
                            <InputLabel
                                htmlFor="couple_id"
                                value="Couple Id"
                                className="md:w-36 font-semibold md:text-lg"
                            />
                            <TextInput
                                id="couple_id"
                                className="mt-2 md:mt-0 w-full"
                                value={coupleId}
                                onChange={(e) => setCoupleId(e.target.value)}
                                required
                            />
                            <PrimaryButton
                                onClick={updateCoupleId}
                                className="w-full mt-10 md:mt-0 md:w-auto text-center"
                            >
                                Save
                            </PrimaryButton>
                        </div>
                        <div className="px-4 border mx-6"></div>
                        <div className="flex space-x-10 p-6 text-gray-900">
                            <Link
                                href="/invitation/bridegroom/create"
                                className="w-1/2 p-4 sm:p-8 flex justify-center items-center text-center font-semibold bg-slate-200 shadow sm:rounded-lg"
                            >
                                Data Mempelai
                            </Link>
                            <Link
                                href="/invitation/event/create"
                                className="w-1/2 p-4 flex justify-center items-center sm:p-8 text-center font-semibold bg-slate-200 shadow sm:rounded-lg"
                            >
                                Data Acara
                            </Link>
                            <Link
                                href="/invitation/guests"
                                className="w-1/2 p-4 flex justify-center items-center sm:p-8 text-center font-semibold bg-slate-200 shadow sm:rounded-lg"
                            >
                                Data Tamu
                            </Link>
                        </div>
                        <div className="px-4 border mx-6"></div>
                        <div className="flex space-x-10 p-6 text-gray-900">
                            <Link
                                href={`/invitation/${invitation.id}/cover`}
                                className="w-1/2 p-4 flex justify-center items-center sm:p-8 text-center font-semibold bg-slate-200 shadow sm:rounded-lg"
                            >
                                Cover
                            </Link>
                            {/* <Link
                            href="/invitation/section/cover"
                            className="w-1/2 p-4 flex justify-center items-center sm:p-8 text-center font-semibold bg-slate-200 shadow sm:rounded-lg"
                        >
                            Quote
                        </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
