import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import { HomestayType } from "../utils/types/DataType";

import CustomInput from "../components/CustomInput";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Card from "../components/Card";

import { BiSearchAlt } from "react-icons/bi";

const StaysList = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<HomestayType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(`https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/AirBnB/1.0.0/homestays`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setList(data);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  const filterList = list.filter((item) => item.name?.toLowerCase().includes(search.toLowerCase()));

  {
    list.map((item) => console.log(item.image1));
  }

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="mx-auto flex w-7/12 items-center gap-2 rounded-xl border border-color4 px-2 py-0 lg:w-4/12 lg:py-2">
            <CustomInput
              id="input-search"
              type="search"
              placeholder="Temukan penginapan ...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-ghost input h-8 w-full max-w-full rounded-lg bg-color1 px-4 py-0 font-normal text-color4 placeholder-slate-400 outline-none disabled:bg-slate-400 md:text-[14px] lg:text-[18px]"
            />
            <BiSearchAlt size={38} />
          </div>

          <div className="mt-16 grid grid-cols-4 justify-items-center gap-5 p-10">
            <>
              {filterList.map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.name}
                  image={"https://images.unsplash.com/photo-1597256817041-0c75c0633658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80"}
                  star={item.rating}
                  description={item.facility}
                  cost={item.price}
                />
              ))}
            </>
          </div>
        </>
      )}

      <Footer />
    </Layout>
  );
};

export default StaysList;
