// toastUtils.js
import toast from "react-hot-toast";
import { FaCheck, FaTimes } from "react-icons/fa";

export const ToastSuccess = (message) => {
  toast.success(message, {
    duration: 3000,
    position: "top-right",
    style: {
      borderRadius: "8px",
      background: "#1f2937",
      color: "#f9fafb",
      fontSize: "14px",
      fontWeight: "500",
      padding: "12px 16px",
    },
    icon: (
      <FaCheck className="w-6 h-6 p-1.5 text-black bg-white rounded-full" />
    ),
  });
};

export const ToastError = (message) => {
  toast.error(message, {
    duration: 3000,
    position: "top-right",
    style: {
      borderRadius: "8px",
      background: "#1f2937",
      color: "#f9fafb",
      fontSize: "14px",
      fontWeight: "500",
      padding: "12px 16px",
    },
    icon: (
      <FaTimes className="w-6 h-6 p-1 text-red-500 bg-white rounded-full" />
    ),
  });
};
