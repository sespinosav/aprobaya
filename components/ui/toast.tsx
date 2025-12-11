"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

const toastIcons: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle2 className="h-5 w-5" />,
  error: <AlertCircle className="h-5 w-5" />,
  warning: <AlertTriangle className="h-5 w-5" />,
  info: <Info className="h-5 w-5" />,
};

const toastStyles: Record<ToastType, string> = {
  success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
  error: "bg-gradient-to-r from-red-500 to-rose-600 text-white",
  warning: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
  info: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
};

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: () => void }) {
  React.useEffect(() => {
    const duration = toast.duration || 4000;
    const timer = setTimeout(onRemove, duration);
    return () => clearTimeout(timer);
  }, [toast.duration, onRemove]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "pointer-events-auto flex items-start gap-3 rounded-2xl px-4 py-3 shadow-2xl backdrop-blur-sm min-w-[320px] max-w-md",
        toastStyles[toast.type]
      )}
    >
      <div className="flex-shrink-0 mt-0.5">
        {toastIcons[toast.type]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm">{toast.title}</p>
        {toast.message && (
          <p className="text-sm opacity-90 mt-0.5">{toast.message}</p>
        )}
      </div>
      <button
        onClick={onRemove}
        className="flex-shrink-0 rounded-lg p-1 hover:bg-white/20 transition-colors cursor-pointer"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = React.useCallback((toast: Omit<Toast, "id">) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onRemove={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

// Helper functions for easy use
export function toast(options: Omit<Toast, "id">) {
  // This will be populated by the provider
  if (typeof window !== "undefined" && (window as unknown as { __toastAdd?: (t: Omit<Toast, "id">) => void }).__toastAdd) {
    (window as unknown as { __toastAdd: (t: Omit<Toast, "id">) => void }).__toastAdd(options);
  }
}

toast.success = (title: string, message?: string) => toast({ type: "success", title, message });
toast.error = (title: string, message?: string) => toast({ type: "error", title, message });
toast.warning = (title: string, message?: string) => toast({ type: "warning", title, message });
toast.info = (title: string, message?: string) => toast({ type: "info", title, message });
