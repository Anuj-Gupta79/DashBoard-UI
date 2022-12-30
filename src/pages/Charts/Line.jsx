import React from "react";

import { Header, LineChart } from "../../components";

const Line = () => {
    return (
    <div className="m-2 md:m-10 bg-white p-10 mt-24  rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart></LineChart>
      </div>
    </div>    
  );
};

export default Line;