"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, CheckCircle, Info, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ModalType = "confirm" | "warning" | "success" | "info";

interface ModalOptions {
  type?: ModalType;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface ModalContextType {
  showModal: (options: ModalOptions) => void;
  closeModal: () => void;
}

const ModalContext = React.createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

const modalIcons: Record<ModalType, React.ReactNode> = {
  confirm: <HelpCircle className="h-6 w-6" />,
  warning: <AlertTriangle className="h-6 w-6" />,
  success: <CheckCircle className="h-6 w-6" />,
  info: <Info className="h-6 w-6" />,
};

const modalStyles: Record<ModalType, { icon: string; button: string }> = {
  confirm: {
    icon: "bg-indigo-50/80 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400",
    button: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700",
  },
  warning: {
    icon: "bg-amber-50/80 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400",
    button: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
  },
  success: {
    icon: "bg-emerald-50/80 text-emerald-600 dark:bg-green-900/50 dark:text-green-400",
    button: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700",
  },
  info: {
    icon: "bg-sky-50/80 text-sky-600 dark:bg-blue-900/50 dark:text-blue-400",
    button: "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700",
  },
};

function ModalContent({ 
  options, 
  onClose 
}: { 
  options: ModalOptions; 
  onClose: () => void;
}) {
  const type = options.type || "confirm";
  const styles = modalStyles[type];

  const handleConfirm = () => {
    options.onConfirm?.();
    onClose();
  };

  const handleCancel = () => {
    options.onCancel?.();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleCancel}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[201] w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mx-4">
          {/* Header */}
          <div className="flex items-start gap-4 p-6 pb-4">
            <div className={cn("p-3 rounded-xl", styles.icon)}>
              {modalIcons[type]}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {options.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {options.message}
              </p>
            </div>
            <button
              onClick={handleCancel}
              className="p-1 rounded-lg hover:bg-slate-100/80 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {/* Actions */}
          <div className="flex gap-3 p-6 pt-2 justify-end">
            <Button
              variant="ghost"
              onClick={handleCancel}
            >
              {options.cancelText || "Cancelar"}
            </Button>
            <Button
              onClick={handleConfirm}
              className={cn("text-white", styles.button)}
            >
              {options.confirmText || "Confirmar"}
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalOptions, setModalOptions] = React.useState<ModalOptions | null>(null);

  const showModal = React.useCallback((options: ModalOptions) => {
    setModalOptions(options);
  }, []);

  const closeModal = React.useCallback(() => {
    setModalOptions(null);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      <AnimatePresence>
        {modalOptions && (
          <ModalContent options={modalOptions} onClose={closeModal} />
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
