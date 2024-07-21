import { useState } from "react";

function Modal({ props, children }) {
  const { visible } = props;

  if (visible) {
    return <div className="sticky top-1/2 left-1/2">{children}</div>;
  }
}

export default Modal;
