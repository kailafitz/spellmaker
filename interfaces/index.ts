import { ReactNode } from "react";

export interface ContainerProps {
    id?: string;
    topViewHeight?: string;
    className?: string;
    mb?: boolean;
    topSectionPadding?: boolean;
    children: ReactNode;
}