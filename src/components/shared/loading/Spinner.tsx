import React from "react";

type SpineerProps = {
  info: string;
};

function Spinner(props: SpineerProps) {
  const { info = "Loading..." } = props;

  return <div>{info}</div>;
}

export default Spinner;
