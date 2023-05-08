import Accordion from "@/Components/Accordion";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import BrideGroomFormSection from "./Partials/BrideGroomFormSection";
import EventSection from "./Partials/EventSection";

export default function Show({ auth }) {
    const invitation = usePage().props.invitation;

    console.log("heee", invitation);
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Undangan
                </h2>
            }
        >
            <Head title="Membuat Undangan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <BrideGroomFormSection invitation={invitation} />
                    </div>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <EventSection />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
