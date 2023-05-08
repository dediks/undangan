import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToast = () => {
    const [toastId, setToastId] = useState(null);

    const showToast = (message, options = {}) => {
        if (toastId) {
            // close the previous toast if it's still open
            toast.dismiss(toastId);
        }
        setToastId(
            toast(message, {
                ...options,
                onClose: () => setToastId(null),
            })
        );
    };

    return showToast;
};

export default useToast;
