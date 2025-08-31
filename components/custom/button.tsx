import React from "react";
import Link from "next/link";

type Props = {
    label?: string | React.ReactNode;
    href?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

export const LinkButton = (props: Props) => {
    return (
        <Link
            className="border-transparent border-2 transition-all rounded-full px-7 py-2 text-white min-w-44 text-center bg-white/20 backdrop-blur-lg hover:border-white/65 hover:transition-all"
            href={props.href ? props.href : "/"}
        >
            {props.label}
        </Link>
    );
};

export const Button = (props: Props) => {
    return (
        <button
            className={`border-transparent border-2 transition-all rounded-full px-7 py-2 text-white min-w-44 text-center bg-white/20 backdrop-blur-lg hover:border-white/65 hover:transition-all ${props.className}`}
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            {...props}
        >
            {props.label}
        </button>
    );
};
