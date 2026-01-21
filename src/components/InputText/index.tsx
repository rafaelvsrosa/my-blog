import clsx from "clsx";
import { useId } from "react";

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<"input">;

export function InputText({ labelText = "", ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        {...props}
        className={clsx(
          "bg-slate-900",
          "outline-0",
          "text-base/tight",
          "ring-2",
          "ring-slate-500",
          "rounded",
          "p-2",
          "transition",
          "focus:ring-blue-300",
          "disabled:bg-slate-700",
          "disabled:text-slate-500",
          "disabled:placeholder:text-slate-500",
          "read-only:bg-slate-800",
          props.className
        )}
        id={id}
      />
    </div>
  );
}
