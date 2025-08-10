import React from "react";

type Props = {
    label: string;
    className?: string;
};

const Button = (props: Props) => {
    return <button className="border-violet-700 border-2 rounded-e-full px-7 py-2 text-white min-w-44 hover:cursor-pointer bg-violet-700/30 backdrop-blur-lg">{props.label}</button>;
};

export default Button;
