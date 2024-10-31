import Accordion from "@/Components/Accordion";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Disclosure, Transition } from "@headlessui/react";
import { Head, Link, usePage } from "@inertiajs/react";
import BrideGroomFormSection from "../Partials/BrideGroomFormSection";

export default function Create({
    auth,
    mustVerifyEmail,
    status,
    invitation_data,
}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Manage Undangan
                    </h2>
                </div>
            }
        >
            <Head title="Manage Undangan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-gray-50 shadow sm:rounded-lg">
                        <BrideGroomFormSection invitation={invitation_data} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
