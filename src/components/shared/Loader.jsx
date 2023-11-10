import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <TailSpin
        height="80"
        width="80"
        color="#FF5722"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
