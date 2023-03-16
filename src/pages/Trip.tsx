import React, { useState, useEffect } from "react";

import { TripType } from "../utils/types/DataType";

import Layout from "../components/Layout";
import TripCard from "../components/TripCard";

const Trip = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [datas, setDatas] = useState<TripType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    const getTrip = localStorage.getItem("Trip");
    if (getTrip) {
      setDatas(JSON.parse(getTrip));
    }
    setLoading(false);
  }

  return (
    <Layout>
      <div className="grid justify-items-center gap-10">
        {datas.map((item, index) => (
          <TripCard
            key={index}
            id="history reservasi"
            name={item.name}
            checkIn={item.check_in}
            checkOut={item.check_out}
            day={item.day}
            total={item.total}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Trip;
