import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import useToast from "@/Hooks/useToast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Switch } from "@headlessui/react";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
    const { invitation, section } = props;
    const [coupleId, setCoupleId] = useState(invitation?.couple_id ?? "");
    const [enabled, setEnabled] = useState(false);

    const [sectionStatus, setSectionStatus] = useState(section);

    const showToast = useToast();

    function updateCoupleId() {
        axios
            .put("invitation/ajax/couple-id/update", {
                couple_id: coupleId,
                invitation_id: invitation.id,
                theme_id: invitation.theme_id,
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
                    <div className="px-4 md:px-0 bg-white min-h-screen overflow-hidden shadow-sm sm:rounded-lg">
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
                        <div className="mt-4 grid auto-rows-auto grid-flow-row-dense md:grid-cols-3 grid-cols-2 gap-1 font-sans text-gray-900">
                            <Link
                                href="/invitation/bridegroom/create"
                                className="w-full flex justify-center items-center bg-slate-100 hover:bg-slate-200 p-4 sm:p-8 text-center leading-tight "
                            >
                                Data Mempelai
                            </Link>
                            <Link
                                href="/invitation/events"
                                className="w-full flex justify-center items-center bg-slate-100 hover:bg-slate-200 p-4 sm:p-8 text-center leading-tight "
                            >
                                Data Acara
                            </Link>
                            <Link
                                href="/invitation/{invitationId}/gifts"
                                className="w-full flex justify-center items-center bg-slate-100 hover:bg-slate-200 p-4 sm:p-8 text-center leading-tight "
                            >
                                Data Gift
                            </Link>
                            <Link
                                href="/invitation/stories"
                                className="w-full flex justify-center items-center bg-slate-100 hover:bg-slate-200 p-4 sm:p-8 text-center leading-tight "
                            >
                                Data Stories
                            </Link>
                            <Link
                                href="/invitation/sosmeds"
                                className="w-full flex justify-center items-center bg-slate-100 hover:bg-slate-200 p-4 sm:p-8 text-center leading-tight"
                            >
                                Data Sosmed
                            </Link>
                            <Link
                                href="/invitation/guests"
                                className="w-full flex justify-center items-center bg-slate-100 hover:bg-slate-200 p-4 sm:p-8 text-center leading-tight"
                            >
                                Data Tamu
                            </Link>
                        </div>
                        {/* <div className="px-4 border md:mx-6 md:my-0 my-3"></div> */}
                        <div className="bg-slate-50 mt-3 md:p-6 text-gray-900">
                            <div className="bg-white font-semibold py-2 px-3">
                                Section
                            </div>
                            <div className="grid grid-cols-3 p-2 border gap-2">
                                <Link
                                    href={`/invitation/${invitation.id}/cover`}
                                    className="bg-slate-200 rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                >
                                    Cover
                                </Link>
                                <Link
                                    href={`/invitation/${invitation.id}/intro`}
                                    className="bg-slate-200 rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                >
                                    Intro
                                </Link>
                                {/* <Link
                                    href={`/invitation/${invitation.id}/quotes`}
                                    className="bg-slate-200 rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                >
                                    Quote 
                                </Link> */}
                                <Link
                                    href={`/invitation/${invitation.id}/couples`}
                                    className="bg-slate-200 rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                >
                                    Couple
                                </Link>
                                <Link
                                    href={`/invitation/${invitation.id}/gmap`}
                                    className="bg-slate-200 rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                >
                                    Gmap
                                </Link>
                                <Link
                                    href={`/invitation/${invitation.id}/stories`}
                                    className="bg-slate-200 rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                >
                                    Stories
                                </Link>
                                <Link
                                    href={`/invitation/${invitation.id}/galleries`}
                                    className="bg-slate-200 rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                >
                                    Galleries
                                </Link>
                                <Link
                                    href={`/invitation/${invitation.id}/music`}
                                    className="bg-slate-200 rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                >
                                    Music
                                </Link>
                                {sectionStatus["whatsappForm"] && (
                                    <div className="relative border rounded-lg border-gray-800">
                                        <Link
                                            href={"#"}
                                            className="rounded-xl p-4 flex justify-center items-center sm:p-8 sm:rounded-lg"
                                        >
                                            Whatsapp Form
                                        </Link>
                                        <Switch
                                            checked={
                                                sectionStatus["whatsappForm"]
                                                    .show
                                            }
                                            onChange={setEnabled}
                                            className={`${
                                                sectionStatus["whatsappForm"]
                                                    .show
                                                    ? "bg-blue-600"
                                                    : "bg-gray-200"
                                            } absolute top-2 right-2 inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                            <span className="sr-only">
                                                Enable Whatsapp Form
                                            </span>
                                            <span
                                                className={`${
                                                    sectionStatus[
                                                        "whatsappForm"
                                                    ].show
                                                        ? "translate-x-6"
                                                        : "translate-x-1"
                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </Switch>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
