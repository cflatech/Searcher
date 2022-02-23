import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.VFC<Props> = (props) => {
  return (
    <>
      <button
        className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 px-5 py-1.5 rounded-md text-white"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
