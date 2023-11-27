import useToast from "@/Hooks/useToast";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Transition, RadioGroup } from "@headlessui/react";
import PrimaryButton from "@/Components/PrimaryButton";
import UploadImagePreview from "@/Components/UploadImagePreview";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import React, { Suspense, lazy, useEffect, useState } from "react";
import getData from "@/Helpers/getData";

let IntroTheme2 = lazy(() =>
    import(`@/Components/Themes/Theme_2/Section/Intro`)
);

let IntroTheme3 = lazy(() =>
    import(`@/Components/Themes/Theme_3/Section/Intro`)
);

const MyComponent = (props) => {
    const { condition, ...otherProps } = props;
    const SelectedComponent = selectComponent(condition, otherProps);

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {SelectedComponent}
        </React.Suspense>
    );
};

const selectComponent = (condition, props) => {
    switch (condition) {
        case "Theme_2":
            return <IntroTheme2 {...props} />;
        case "Theme_3":
            return <IntroTheme3 {...props} />;
        default:
            return null; // Or some default component
    }
};

const getFormInput = (type) => {
    switch (type) {
        case "text":
            // import component text;
            break;
        case "boolean":
            //radio button
            break;
        case "image":
            // input file
            break;
        case "slideshow":
            // import komponen slideshow
            break;
        case "relation":
            break;
    }
};

const IntroSection = ({
    auth,
    invitation,
    attributes,
    events,
    introData,
    bridegroom,
    schema,
}) => {
    const showToast = useToast();

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm(introData);

    console.log("attributes", attributes);
    console.log("invitation", invitation);

    const [selectedEvent, setSelectedEvent] = useState(
        getData(
            events,
            "id",
            getData(attributes, "attribute_name", "selected_event")?.value ??
                null
        )?.id
    );

    console.log("Schema", schema);

    const [introAttribute, setIntroAttribute] = useState(attributes);

    console.log("iontor attribute", introAttribute);

    const submit = (e) => {
        e.preventDefault();

        if (invitation && introData) {
            router.post(
                `/invitation/intro/${introData["id"]}`,
                {
                    _method: "put",
                    ...data,
                },
                {
                    onSuccess: (res) => {
                        // console.log(res);
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
            post(`/invitation/${invitation.id}/intro`);
        }
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Section Intro
                </h2>
            }
        >
            <Head title="Edit Section Intro" />
            <div className="px-2 md:py-12 flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-8/12">
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <section className="flex flex-col space-y-8">
                                    {Object.entries(schema.attributes).map(
                                        (attribute) => {
                                            switch (attribute[1].type) {
                                                case "text":
                                                    return (
                                                        <div
                                                            className="w-full"
                                                            key={attribute[0]}
                                                        >
                                                            <InputLabel
                                                                htmlFor={
                                                                    attribute[0]
                                                                }
                                                                value={
                                                                    attribute[1]
                                                                        .displayName
                                                                }
                                                            />

                                                            <input
                                                                id={
                                                                    attribute[0]
                                                                }
                                                                className="mt-1 block w-full"
                                                                value={
                                                                    data[
                                                                        attribute[0]
                                                                    ] ?? ""
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setData(
                                                                        attribute[0],
                                                                        e.target
                                                                            .value
                                                                    );
                                                                }}
                                                                type={
                                                                    attribute[1]
                                                                        .type
                                                                }
                                                            />

                                                            <InputError
                                                                className="mt-2"
                                                                message={
                                                                    errors[
                                                                        attribute[0]
                                                                    ]
                                                                }
                                                            />
                                                        </div>
                                                    );
                                                case "boolean":
                                                    //radio button
                                                    break;
                                                case "file":
                                                    return (
                                                        <div
                                                            key={attribute[0]}
                                                            className="flex flex-col space-y-2"
                                                        >
                                                            <InputLabel
                                                                htmlFor={
                                                                    attribute[0]
                                                                }
                                                                value="Upload Image"
                                                            />
                                                            <UploadImagePreview
                                                                selectedFile={
                                                                    data[
                                                                        attribute[0]
                                                                    ]
                                                                }
                                                            />
                                                            <FileInput
                                                                id={
                                                                    attribute[0]
                                                                }
                                                                className="mt-1 block w-full "
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setData(
                                                                        attribute[0],
                                                                        e.target
                                                                            .files[0]
                                                                    );
                                                                }}
                                                                isFocused
                                                                autoComplete={
                                                                    attribute[0]
                                                                }
                                                            />

                                                            <InputError
                                                                className="mt-2"
                                                                message={
                                                                    errors[
                                                                        attribute[0]
                                                                    ]
                                                                }
                                                            />
                                                        </div>
                                                    );
                                                case "slideshow":
                                                    // import komponen slideshow
                                                    break;
                                                case "relation":
                                                    break;
                                                case "radio":
                                                    return (
                                                        <div
                                                            className="w-full flex flex-col space-y-2"
                                                            key={attribute[0]}
                                                        >
                                                            <InputLabel
                                                                htmlFor={
                                                                    attribute[0]
                                                                }
                                                                value={
                                                                    attribute[1]
                                                                        .displayName
                                                                }
                                                            />
                                                            <div className="w-full max-w-md">
                                                                <RadioGroup
                                                                    value={
                                                                        selectedEvent
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        console.log(
                                                                            "eee",
                                                                            e
                                                                        );
                                                                        setData(
                                                                            "attributes",
                                                                            [
                                                                                {
                                                                                    attribute_name:
                                                                                        "selected_event",
                                                                                    value: e,
                                                                                },
                                                                            ]
                                                                        );
                                                                        setSelectedEvent(
                                                                            e
                                                                        );

                                                                        setIntroAttribute(
                                                                            [
                                                                                {
                                                                                    attribute_name:
                                                                                        "selected_event",
                                                                                    value: e,
                                                                                },
                                                                            ]
                                                                        );
                                                                    }}
                                                                >
                                                                    <div className="space-y-2">
                                                                        {Object.values(
                                                                            events
                                                                        ).map(
                                                                            (
                                                                                event,
                                                                                key
                                                                            ) => {
                                                                                return (
                                                                                    <RadioGroup.Option
                                                                                        key={
                                                                                            event.id
                                                                                        }
                                                                                        value={
                                                                                            event.id
                                                                                        }
                                                                                        className={({
                                                                                            active,
                                                                                            checked,
                                                                                        }) =>
                                                                                            `${
                                                                                                active
                                                                                                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                                                                                                    : ""
                                                                                            }
                                                                    ${
                                                                        checked
                                                                            ? "bg-sky-900 bg-opacity-75 text-white"
                                                                            : "bg-white"
                                                                    }
                                                                      relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none`
                                                                                        }
                                                                                    >
                                                                                        {({
                                                                                            active,
                                                                                            checked,
                                                                                        }) => (
                                                                                            <>
                                                                                                <div className="flex w-full items-center justify-between">
                                                                                                    <div className="flex items-center">
                                                                                                        <div className="text-sm">
                                                                                                            <RadioGroup.Label
                                                                                                                as="p"
                                                                                                                className={`font-medium  ${
                                                                                                                    checked
                                                                                                                        ? "text-white"
                                                                                                                        : "text-gray-900"
                                                                                                                }`}
                                                                                                            >
                                                                                                                {
                                                                                                                    event.title
                                                                                                                }
                                                                                                            </RadioGroup.Label>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {checked && (
                                                                                                        <div className="shrink-0 text-white">
                                                                                                            <CheckIcon className="h-6 w-6" />
                                                                                                        </div>
                                                                                                    )}
                                                                                                </div>
                                                                                            </>
                                                                                        )}
                                                                                    </RadioGroup.Option>
                                                                                );
                                                                            }
                                                                        )}
                                                                    </div>
                                                                </RadioGroup>
                                                            </div>
                                                        </div>
                                                    );
                                            }
                                        }
                                    )}

                                    <div className="mt-8 flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>
                                            {invitation ? "Update" : "Save"}
                                        </PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enterFrom="opacity-0"
                                            leaveTo="opacity-0"
                                            className="transition ease-in-out"
                                        >
                                            {invitation ? (
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
                                </section>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="md:w-4/12 p-4 bg-white shadow-xl min-w-[390px] relative min-h-[844px]">
                    <div className="overflow-hidden relative rounded-md w-full h-full aspect-[9/16] bg-black">
                        <MyComponent
                            condition={invitation.theme_id}
                            data={{
                                intro: data,
                                bridegroom: bridegroom,
                                events: events,
                            }}
                            isPreview={true}
                            attributes={introAttribute}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default IntroSection;
