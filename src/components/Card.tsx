import React, { FC, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import { HomestayType } from "../utils/types/DataType";
import Footer from "./Footer";

import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title?: string;
  star?: number;
  image?: string;
  description?: string;
  cost?: number;
  id?: number;
  check_id?: number;
}

export const Card: FC<CardProps> = ({
  id,
  title,
  star,
  image,
  description,
  cost,
  check_id,
}) => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["token"]);
  const checkToken = cookies.token;

  const [verified, setVerified] = useState<HomestayType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api-airbnb.projectfebe.online/myhomestays`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setVerified(data);
      })
      .catch((err) => {
        alert(err.response.toString());
      });
  }

  function onClickReserve() {
    verified.map((item) =>
      item.id == id
        ? navigate(`/detailstaycation/${id}`)
        : navigate(`/reservasi/${id}`)
    );
  }

  {
    verified.map((item) => console.log(item.id));
  }

  return (
    <div>
      <div className="card-compact card w-64 bg-base-100 shadow-xl ">
        <figure onClick={() => onClickReserve()}>
          <img src={image} alt="image.svg" />
        </figure>
        <div className="card-body justify-between">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{title}</h2>
            <div className="flex items-center">
              <AiFillStar size={25} className="text-color3" />
              <p className="text-[20px]">{star}</p>
            </div>
          </div>
          <p className="mt-2 text-justify text-[14px] leading-5 line-clamp-2">
            {description}
          </p>
          <p className="mt-4 font-bold">{cost} $ / Malam</p>
        </div>
      </div>
    </div>
  );
};

export const CardHost: FC<CardProps> = ({
  id,
  title,
  star,
  image,
  description,
  cost,
}) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detailstaycation/${id}`);
  }

  return (
    <div>
      <div className="card-compact card w-64 bg-base-100 shadow-xl ">
        <figure onClick={() => onClickDetail()}>
          <img src={image} alt="image.svg" className="bg-contain" />
        </figure>
        <div className="card-body justify-between">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{title}</h2>
            <div className="flex items-center">
              <AiFillStar size={25} className="text-color3" />
              <p className="text-[20px]">{star}</p>
            </div>
          </div>
          <p className="mt-2 text-justify text-[14px] leading-5 line-clamp-2">
            {description}
          </p>
          <p className="mt-4 font-bold">Rp.{cost} / Malam</p>
        </div>
      </div>
    </div>
  );
};
