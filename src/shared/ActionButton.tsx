import React from "react";

type Props = {
  children: React.ReactNode;
  btnAction: () => void;
};

const ActionButton = ({ children, btnAction }: Props) => {
  return (
    <button
      className="btn rounded-md px-10 py-2 border border-[#ffc132] hover:text-white"
      onClick={() => btnAction()}
    >
      {children}
    </button>
  );
};

export default ActionButton;
