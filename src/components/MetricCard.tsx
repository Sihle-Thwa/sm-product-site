"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";


interface MetricProps {
    title: string;
    value: string | number;
    description: string;
}
export default function MetricCard({ title, value, description }: MetricProps) {
    return (
        <Card className="flex flex-col items-center py-8 px-6 gap-6 border border-rgba(255, 255, 255, 0.6) bg-rgba(255, 255, 255, 0.8) shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardContent className="flex flex-col items-start self-stretch gap-4">
                <h3 className="self-stretch font-bold">{title}</h3>
                <h4 className="self-stretch font-bold">{value}</h4>
                <p className="self-stretch font-normal">{description}</p>
            </CardContent>
        </Card>
    );
}