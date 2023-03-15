import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

interface CardProps {
  title?: string;
  star?: number;
  image?: string;
  description?: string;
  cost?: number;
  id?: number;
}

export const Card: FC<CardProps> = ({ id, title, star, image, description, cost }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detailstaycation/${id}`);
  }

  return (
    <div>
      <div className="card card-compact w-64 bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="image.svg" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title" onClick={() => onClickDetail()}>
              {title}
            </h2>
            <div className="flex items-center">
              <AiFillStar size={25} className="text-color3" />
              <p className="text-[20px]">{star}</p>
            </div>
          </div>
          <p className="mt-2 text-justify text-[14px] leading-5 line-clamp-2">{description}</p>
          <p className="mt-4 font-bold">{cost} $ / Malam</p>
        </div>
      </div>
    </div>
  );
};

export const CardHost: FC<CardProps> = ({ id, title, star, image, description, cost }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detailstaycation/${id}`);
  }

  return (
    <div>
      <div className="card card-compact w-64 bg-base-100 shadow-xl ">
        <figure onClick={() => onClickDetail()}>
          <img src={image} alt="image.svg" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{title}</h2>
            <div className="flex items-center">
              <AiFillStar size={25} className="text-color3" />
              <p className="text-[20px]">{star}</p>
            </div>
          </div>
          <p className="mt-2 text-justify text-[14px] leading-5 line-clamp-2">{description}</p>
          <p className="mt-4 font-bold">Rp.{cost} / Malam</p>
        </div>
      </div>
    </div>
  );
};
