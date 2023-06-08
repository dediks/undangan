import { Head, router, useForm, usePage } from "@inertiajs/react";
import EventSection from "../Partials/EventSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useToast from "@/Hooks/useToast";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { useState } from "react";
import DatePicker from "react-datepicker";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import id from "date-fns/locale/id";

export default function Create({ auth, event = null }) {
    const invitationId = usePage().props.invitation.id;

    const eventData = event
        ? {
              title: event.title,
              start: new Date(event.start),
              end: new Date(event.end),
              location: event.location,
              description: event.description,
          }
        : {
              title: "",
              start: new Date(),
              end: new Date(),
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
    } = useForm(eventData);

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        if (event) {
            put(
                `/invitation/${invitationId}/events/${event["id"]}`,
                {
                    _method: "put",
                    ...data,
                },
                {
                    onSuccess: (res) => {
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
            post(`/invitation/${invitationId}/events`);
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
                    <form onSubmit={submit}>
                        <div className="flex flex-col space-y-5 p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <div>
                                <InputLabel
                                    htmlFor="title"
                                    value="Judul Acara"
                                />

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
                                    placeholder="cth: Akad Nikah"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.title}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="title"
                                    value="Tanggal Mulai"
                                />
                                <DatePicker
                                    id="start_date_time"
                                    className="w-full mt-4 border border-gray-300 text-gray-600 rounded"
                                    selected={data.start}
                                    onChange={(date) => {
                                        setData("start", date);

                                        console.log(date);
                                    }}
                                    showTimeSelect
                                    locale={id}
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.start}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="title"
                                    value="Tanggal Selesai"
                                />
                                <DatePicker
                                    id="finish_date_time"
                                    className="w-full mt-4 border border-gray-300 text-gray-600 rounded"
                                    selected={data.end}
                                    onChange={(date) => setData("end", date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.end}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="location" value="Lokasi" />
                                <TextInput
                                    id="location"
                                    className="mt-1 block w-full"
                                    value={data.location ?? ""}
                                    onChange={(e) =>
                                        setData("location", e.target.value)
                                    }
                                    required
                                    isFocused
                                    autoComplete="location"
                                    placeholder="Masukkan lokasi acara"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.location}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="description"
                                    value="Deskripsi"
                                />
                                <textarea
                                    className="w-full border-gray-300 rounded"
                                    id="description"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    autoComplete="description"
                                    value={data.description ?? ""}
                                    placeholder="Deskripisi"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.description}
                                />
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <PrimaryButton disabled={processing}>
                                    {event ? "Update" : "Save"}
                                </PrimaryButton>

                                <Transition
                                    show={recentlySuccessful}
                                    enterFrom="opacity-0"
                                    leaveTo="opacity-0"
                                    className="transition ease-in-out"
                                >
                                    {event ? (
                                        <p className="text-sm text-gray-600">
                                            Updated
                                        </p>
                                    ) : (
                                        <p className="text-sm text-gray-600">
                                            Saved.
                                        </p>
                                    )}
                                </Transition>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
