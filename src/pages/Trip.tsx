import React from "react";
import Layout from "../components/Layout";
import TripCard from "../components/TripCard";

const Trip = () => {
  return (
    <div>
      <Layout>
        <div className="grid justify-items-center gap-10">
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </Layout>
    </div>
  );
};

export default Trip;
