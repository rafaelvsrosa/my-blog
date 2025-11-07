"use client";

import clsx from "clsx";

export function Header() {
  return (
    <h1
      className={clsx(
        "text-6xl",
        "font-bold",
        "text-blue-500",
        "hover:text-blue-50",
        "hover:bg-amber-50",
        "transition",
        "duration-1000"
      )}
    >
      Texto
    </h1>
  );
}
