"use client";

import { useUI } from "@/lib/context/UIContext";

export function ToastContainer() {
  const { toastQueue, removeToast } = useUI();

  if (toastQueue.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 pointer-events-none">
      {toastQueue.map((toast) => {
        let bgColor = "bg-blue-600";
        if (toast.type === "success") bgColor = "bg-green-600";
        if (toast.type === "error") bgColor = "bg-red-600";

        return (
          <div
            key={toast.id}
            className={`px-4 py-3 rounded-md text-white shadow-lg pointer-events-auto transform transition-all duration-300 translate-x-0 ${bgColor} flex items-center justify-between min-w-[300px]`}
            role="alert"
          >
            <span className="font-medium">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-4 text-white hover:text-white/80 focus:outline-none transition-colors"
              aria-label="Close"
            >
              <span aria-hidden="true" className="text-xl leading-none">&times;</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
