import React from "react";
import clsx from "clsx";

export type BulletListProps = {
    items: Array<React.ReactNode>; // allows strings OR inline JSX (bold, links, etc.)
    className?: string;            // wrapper <ul>
    itemClassName?: string;        // each <li>
    variant?: "disc" | "decimal" | "none";
    size?: "sm" | "base";
};

const variantToListClass: Record<NonNullable<BulletListProps["variant"]>, string> = {
    disc: "list-disc",
    decimal: "list-decimal",
    none: "list-none"
};

const sizeToTextClass: Record<NonNullable<BulletListProps["size"]>, string> = {
    sm: "text-sm",
    base: "text-base"
};

export default function BulletList({
                                       items,
                                       className,
                                       itemClassName,
                                       variant = "disc",
                                       size = "sm"
                                   }: BulletListProps) {
    if (!items?.length) return null;

    return (
        <ul
            className={clsx(
                variantToListClass[variant],
                "pl-5 space-y-1 text-slate-600",
                sizeToTextClass[size],
                className
            )}
        >
            {items.map((item, i) => (
                <li key={i} className={clsx("leading-relaxed", itemClassName)}>
                    {item}
                </li>
            ))}
        </ul>
    );
}
