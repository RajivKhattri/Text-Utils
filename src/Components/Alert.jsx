import React, { useState } from "react";

export default function Alert(props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} warning alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setVisible(false)}
        ></button>
      </div>
    )
  );
}
