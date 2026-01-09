"use client";
import clsx from "clsx";

type DialogProps = {
  isVisible: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled,
}: DialogProps) {
  if (!isVisible) return null;

  function handleCancel() {
    if (!disabled) return;

    onCancel();
  }

  return (
    <div
      className={clsx(
        "fixed z-50 inset-0 bg-white/50 backdrop-blur-xs",
        "flex items-center justify-center"
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          "bg-slate-800 p-6 rounded-lg max-w-2xl mx-6",
          "flex flex-col gap-6",
          "shadow-lg shadow-white/30"
        )}
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          id="dialog-description"
          className="text-xl font-extrabold text-center"
        >
          {title}
        </h3>
        <div className=" text-center">{content}</div>
        <div className="flex items-center justify-around">
          <button
            className={clsx(
              "bg-slate-200 hover:bg-slate-300 transition text-slate-950",
              "flex items-center justify-center",
              "py-2 px-4 rounded-lg cursor-pointer",
              "disabled:bg-slate-400 disabled:text-slate-500 disabled:cursor-not-allowed"
            )}
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </button>

          <button
            className={clsx(
              "bg-blue-700 hover:bg-blue-800 transition text-blue-50",
              "flex items-center justify-center",
              "py-2 px-4 rounded-lg cursor-pointer",
              "disabled:bg-slate-400 disabled:text-slate-500 disabled:cursor-not-allowed"
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
