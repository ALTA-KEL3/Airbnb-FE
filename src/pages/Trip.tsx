import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

import { TripType } from "../utils/types/DataType";

import Layout from "../components/Layout";
import TripCard from "../components/TripCard";
import Loading from "../components/Loading";

const Trip = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["villa", "alamat"]);

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

  const handleFeedback = async () => {
    navigate("/feedback");
    datas.map((item, index) => {
      setCookie("villa", item.name, { path: "/" });
    });
  };

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
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
              onFeedback={() => handleFeedback()}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Trip;
