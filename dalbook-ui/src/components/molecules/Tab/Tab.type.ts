import {ComponentType} from "react";

export type TTabItem = {
    key: number,
    label: string,
    children: ComponentType,
}