import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import BrideFormData from "./Partials/BrideFormData";

export default function Create({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Membuat Undangan
                </h2>
            }
        >
            <Head title="Membuat Undangan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <BrideFormData />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
