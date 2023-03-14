import React from "react";
import CustomInput from "./CustomInput";

const TripCard = () => {
  return (
    <div className="card w-3/4 bg-base-100 shadow-md">
      <div className="card-body">
        <h1 className="text-xl font-extrabold">Villa Premium A3</h1>
        <div className="my-2 flex gap-4">
          <div className="w-1/4 space-y-2">
            <p>Check - In :</p>
            <CustomInput id="input-startClass" type="date" placeholder="" />
          </div>
          <div className="w-1/4 space-y-2">
            <p>Check - Out :</p>
            <CustomInput id="input-startClass" type="date" placeholder="" />
          </div>
        </div>
        <p className="text-[20px] font-semibold">$ 100 x 2 night</p>
        <p className="text-[24px] font-semibold">Total $200</p>
        <button className="btn-sm btn my-3 w-52 bg-color3">Beri Penilaian</button>
      </div>
    </div>
  );
};

export default TripCard;
