import { Head, useForm } from "@inertiajs/react";
import EventSection from "../Partials/EventSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useToast from "@/Hooks/useToast";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function Create({ auth, event }) {
    const evemt = event
        ? event
        : {
              title: "",
              start: "",
              end: "",
              locaton: "",
              description: "",
          };

    const {
        data,
        setData,
        post,
        put,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm(event);

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        if (event) {
            router.post(
                `/evemt/${event["id"]}`,
                {
                    _method: "put",
                    ...data,
                },
                {
                    onSuccess: (res) => {
                        // console.log("heeeeeee");
                        showToast("berhasil", {
                            type: "success",
                            position: "top-right",
                            autoClose: 3000,
                        });
                    },
                    onError: (errors) => {
                        console.log(errors);
                    },
                }
            );
        } else {
            post("/event");
        }
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Membuat Event
                </h2>
            }
        >
            <Head title="Membuat Event" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div>
                            <InputLabel htmlFor="title" value="Judul Acara" />

                            <TextInput
                                id="title"
                                className="mt-1 block w-full"
                                value={data.title ?? ""}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="title"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
