import Accordion from "@/Components/Accordion";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Disclosure, Transition } from "@headlessui/react";
import { Head, Link } from "@inertiajs/react";

export default function Create({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Manage Undangan
                </h2>
            }
        >
            <Head title="Manage Undangan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <Link href="/invitation/bridegroom/create">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            Data Mempelai
                        </div>
                    </Link>
                    <Link href="/invitation/events/create">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            Data Acara
                        </div>
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
