import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";

import useLocalStorage from "@/Hooks/useLocalStorage";

registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFilePoster
);

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css";

export default function InputFile({ name, data, setData }) {
    const { csrf_token } = usePage().props;

    const [file, setFile] = useState(null);

    useEffect(() => {
        if (file != undefined && file != null) {
            setData(name, file);
        }
    }, [file]);

    return (
        <FilePond
            onupdatefiles={(file) => {
                setFile(file.serverId);
                console.log(file[0].serverId);
                console.log(file[0]);
                console.log(file[0].serverId);
                console.log(file[0].filename);
            }}
            onprocessfile={(error, a) => {
                console.log(a.serverId);
            }}
            allowMultiple={false}
            maxFiles={1}
            files={file}
            beforeAddFile={(item) => {
                // console.log("items : ", item);
            }}
            imagePreviewHeight={125}
            server={{
                url: "/filepond/upload/",
                headers: {
                    "X-CSRF-TOKEN": csrf_token,
                },
                chunkForce: true,
                process: {
                    url: "process",
                    ondata: (formData) => {
                        // formData.append("extraField", value);
                        return formData;
                    },
                    onload: (serverId) => {
                        console.log("heee", serverId);
                    },
                },
                revert: {
                    url: "revert",
                },
            }}
            name={name}
            labelIdle={`Drag & Drop ${name} or <span class="filepond--label-action">Browse</span>`}
        />
    );
}
