import React, { ReactNode, createContext, useContext, useState } from "react";
import { AlertSeverity } from "src/feedback/Alert/Alert";
import Toast, { ToastProps } from "src/feedback/Toast/Toast";
import { generateUniqueId } from "src/utils/utils";

const ToasterContext = createContext<Toaster | boolean>(false);

type ToasterOptions = Omit<ToastProps, "children" | "severity">;
type ToasterArgs = {
  message: string;
  severity: AlertSeverity;
  options?: ToasterOptions;
};

type ToasterAction = (message: string, options?: ToasterOptions) => void;

type Toaster = {
  success: ToasterAction;
  info: ToasterAction;
  warning: ToasterAction;
  danger: ToasterAction;
};

const Toaster = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToasterArgs | null>(null);

  const success: ToasterAction = (message, options) =>
    setToast({ message, severity: "success", options });
  const info: ToasterAction = (message, options) =>
    setToast({ message, severity: "info", options });
  const warning: ToasterAction = (message, options) =>
    setToast({ message, severity: "warning", options });
  const danger: ToasterAction = (message, options) =>
    setToast({ message, severity: "danger", options });

  return (
    <ToasterContext.Provider value={{ success, info, warning, danger }}>
      {children}
      {toast && (
        <Toast
          key={generateUniqueId()}
          position={toast.options?.position ?? "bottom-centered"}
          severity={toast.severity}
          {...toast.options}
        >
          {toast.message}
        </Toast>
      )}
    </ToasterContext.Provider>
  );
};

const useToaster = (): Toaster => {
  const context = useContext(ToasterContext);

  if (false === context) {
    throw new Error("Toaster provider is missing.");
  }

  return context as Toaster;
};

export default Toaster;
export { useToaster };
export type { ToasterOptions };
