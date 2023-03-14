import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const StaysList = () => {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-4 justify-items-center gap-5 p-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Layout>
    </>
  );
};

export default StaysList;
