import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectInput(
    {
        selected = 0,
        name = "",
        className = "",
        children,
        isFocused = false,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <select name={name} className={className} {...props} ref={input}>
            {children}
        </select>
    );
});
