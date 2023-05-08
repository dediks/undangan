import { useEffect, useState } from "react";

export default function UploadImagePreview({
    className = "",
    src,
    alt,
    selectedFile,
    setSelectedFile,
    ...props
}) {
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        let url = null;
        if (typeof selectedFile != "string") {
            url = URL.createObjectURL(selectedFile);
        } else {
            url = "/storage/images/" + selectedFile;
        }

        setPreview(url);

        return () => {
            if (typeof selectedFile != "string") {
                URL.revokeObjectURL(url);
            } else {
                url = "";
            }
        };
    }, [selectedFile]);

    return (
        <div className="shrink-0">
            {selectedFile && (
                <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={preview}
                />
            )}
        </div>
    );
}
