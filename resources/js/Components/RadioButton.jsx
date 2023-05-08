import { forwardRef, useRef } from "react";

export default forwardRef(function RadioButton(
    { className = "", ...props },
    ref
) {
    const input = ref ? ref : useRef();

    return (
        <input
            ref={input}
            {...props}
            type="radio"
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
        />
    );
});
