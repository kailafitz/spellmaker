import Link from "next/link";
import React from "react";

type Props = {
    label: string;
    href: string;
    className?: string;
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

export default Button;
