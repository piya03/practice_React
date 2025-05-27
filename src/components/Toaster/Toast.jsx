import React, { useEffect, useState } from "react";

// Toast Component
const Toast = ({ message, type, duration }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  function getColor(type) {
    if (type === "success") {
      return "green";
    } else if (type === "error") {
      return "red";
    } else {
      return "blue";
    }
  }
  if (!visible) return null;

  return (
    <div
      style={{
        background: getColor(type),
        height: "50px",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
