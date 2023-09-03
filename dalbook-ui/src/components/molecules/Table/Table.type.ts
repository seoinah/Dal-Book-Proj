import React from "react";

export type DataType = {
    key: React.ReactNode;
    name: string;
    age: number;
    address: string;
    children?: DataType[];
}