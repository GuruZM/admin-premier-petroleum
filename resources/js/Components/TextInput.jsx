import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-300 border-2 placeholder:italic placeholder:text-sm  focus:border-black focus:ring-black -py-3 rounded-xl  " +
                className
            }
            ref={input}
        />
    );
});
