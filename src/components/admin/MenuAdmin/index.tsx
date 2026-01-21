"use client";

import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const navClasses = clsx(
    "bg-slate-100 text-slate-900 rounded-lg",
    "flex flex-col mb-8",
    "sm:flex-row sm:flex-wrap",
    !isOpen && "h-10",
    !isOpen && "overflow-hidden",
    "sm:overflow-visible sm:h-auto"
  );
  const linkClasses = clsx(
    "[&>svg]:w-4 [&>svg]:h-4 px-4",
    "flex items-center justify-start gap-2 cursor-pointer",
    "transition hover:bg-slate-300 rounded-lg",
    "h-10",
    "shrink-0"
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    "text-slate-600 italic",
    "sm:hidden"
  );

  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>

      <a
        className={linkClasses}
        href="/"
        target="_blank"
        onClick={() => setIsOpen(false)}
      >
        <HouseIcon />
        Home
      </a>

      <Link
        className={linkClasses}
        href="/admin/post"
        onClick={() => setIsOpen(false)}
      >
        <FileTextIcon />
        Posts
      </Link>

      <Link
        className={linkClasses}
        href="/admin/post/new"
        onClick={() => setIsOpen(false)}
      >
        <PlusIcon />
        Criar post
      </Link>
    </nav>
  );
}
