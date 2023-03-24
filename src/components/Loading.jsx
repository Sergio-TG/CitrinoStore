import React from "react";
import { DotLoader } from "react-spinners";


const Loading = () => {
  return (
    <div className='bloqueLoading'>
      <div className="loader">
      <DotLoader color="#36D7B7" loading={true} />
    </div>
    </div>
  );
};

export default Loading;