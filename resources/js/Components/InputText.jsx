import React from "react";

const InputText = ({ ...props }) => {
    return (
        <div className="flex flex-col w-full flex-1">
            <span>{props.title}</span>
            <input
                {...props}
                {...props.register(
                    props.name,
                    { onChange: props.onChange },
                    { required: props.required }
                )}
                className={`bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full ${props.className}  border-none outline-none focus:ring-0 `}
            />
        </div>
    );
};

export default InputText;
