import React, { forwardRef, useRef } from "react";

const RadioGroup = forwardRef(({ children, className }, ref) => {
    const input = ref ? ref : useRef();

    return (
        <div ref={input} className="flex space-x-2 p-2">
            {children}
        </div>
    );
});

export default RadioGroup;
