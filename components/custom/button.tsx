import Link from "next/link";
import React from "react";

type Props = {
<<<<<<< Updated upstream
    label: string;
    href: string;
    className?: string;
=======
    label?: string | React.ReactNode;
    href?: string;
    styling?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
>>>>>>> Stashed changes
};

const Button = (props: Props) => {
    return (
        <Link
            className="border-transparent border-2 transition-all rounded-full px-7 py-2 text-white min-w-44 hover:cursor-pointer bg-white/20 backdrop-blur-lg hover:border-white/65 hover:transition-all"
            href={props.href}
        >
            {props.label}
        </Link>
    );
};

<<<<<<< Updated upstream
export default Button;
=======
export const Button = (props: Props) => {
    return (
        <button
            className={`border-transparent border-2 transition-all rounded-full px-7 py-2 text-white min-w-44 text-center bg-white/20 backdrop-blur-lg hover:border-white/65 hover:transition-all ${props.styling}`}
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            {...props}
        >
            {props.label}
        </button>
    );
};
>>>>>>> Stashed changes
