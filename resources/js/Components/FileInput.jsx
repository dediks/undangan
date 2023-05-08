import { forwardRef, useEffect, useRef, useState } from "react";
import UploadImagePreview from "./UploadImagePreview";

export default forwardRef(function FileInput(
    { type = "file", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            {/* {selectedFile && <UploadImagePreview src={preview} alt="afafa" />} */}
            <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                    {...props}
                    type={type}
                    ref={input}
                    // onChange={onSelectFile}
                    className={
                        `block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-10` + className
                    }
                />
            </label>
        </div>
    );
});
