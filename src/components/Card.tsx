import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import Footer from "./Footer";

interface CardProps {
  title?: string;
  star?: number;
  image?: string;
  description?: string;
  cost?: number;
}

const Card: FC<CardProps> = ({ title, star, image, description, cost }) => {
  return (
    <div>
      <div className="card-compact card w-64 bg-base-100 shadow-xl ">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1597256817041-0c75c0633658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80"
            alt="image.svg"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{title}</h2>
            <div className="flex items-center">
              <AiFillStar size={25} className="text-color3" />
              <p className="text-[20px]">{star}</p>
            </div>
          </div>
          <p className="mt-2 text-justify text-[14px] leading-5 line-clamp-3">
            {description}
          </p>
          <p className="mt-4 font-bold">{cost} $ / Night</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
