import React, { FC } from "react";
import { useNavigate } from "react-router";

import CustomInput from "./CustomInput";

interface TripProps {
  id?: string;
  name?: string;
  checkIn?: string;
  checkOut?: string;
  price?: string;
  day?: string;
  total?: string;
}

const TripCard: FC<TripProps> = ({
  id,
  name,
  checkIn,
  checkOut,
  price,
  day,
  total,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card w-3/4 bg-base-100 shadow-md">
      <div className="card-body">
        <h1 className="text-xl font-extrabold">{name}</h1>
        <div className="my-2 flex gap-4">
          <div className="w-1/4 space-y-2">
            <p>Check - In :</p>
            <p>{checkIn}</p>
          </div>
          <div className="w-1/4 space-y-2">
            <p>Check - Out :</p>
            <p>{checkOut}</p>
          </div>
        </div>
        <p className="text-[20px] font-semibold">$ 100 x {day} malam</p>
        <p className="text-[24px] font-semibold">Total Rp.{total}</p>
        <button
          onClick={() => navigate("/feedback")}
          className="btn-sm btn my-3 w-52 bg-color3"
        >
          Beri Penilaian
        </button>
      </div>
    </div>
  );
};

export default TripCard;
