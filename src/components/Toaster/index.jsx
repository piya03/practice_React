import React, { useState } from "react";
import Toast from "./Toast";
const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  function addToast({ message, type, duration }) {
    const id = Date.now();
    const newToastMsg = { id, message, type, duration };
    setToasts((prev) => [...prev, newToastMsg]);

    setTimeout(() => {
      removeToast(id);
    }, [duration]);
  }

  function removeToast(id) {
    setToasts((prev) => prev.filter((elem) => elem.id !== id));
  }

  return (
    <div>
      <div>
        <button
          onClick={() =>
            addToast({
              message: "Success Message",
              type: "success",
              duration: 3000,
            })
          }
        >
          {" "}
          Show Success
        </button>
        <button
          onClick={() =>
            addToast({
              message: "Error Message",
              type: "error",
              duration: 3000,
            })
          }
        >
          Show Error
        </button>
        <button
          onClick={() =>
            addToast({
              message: "Info Message",
              type: "info",
              duration: 3000,
            })
          }
        >
          Show Info
        </button>
      </div>

      {toasts.map((elem) => {
        return (
          <Toast
            key={elem.id}
            message={elem.message}
            type={elem.type}
            duration={elem.duration}
          />
        );
      })}
    </div>
  );
};

export default ToastContainer;
