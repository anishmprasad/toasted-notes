// @flow
import * as React from "react";
import "./Alert.css";

type Props = {
  id: string,
  title: string | React.Node,
  onClose: () => void
};

const Alert = ({ id, title, onClose }: Props) => {
  return (
    <div id={id} className="Toaster__alert">
      {typeof title === "string" ? (
        <div className="Toaster__alert_text">{title}</div>
      ) : (
        title
      )}

      {onClose && <Close onClose={onClose} />}
    </div>
  );
};

const Close = ({ onClose }) => (
  <button
    className="Toaster__alert_close"
    type="button"
    aria-label="Close"
    onClick={onClose}
  >
    <span aria-hidden="true">×</span>
  </button>
);

export default Alert;