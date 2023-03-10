import React, { FC, useState, useEffect } from "react";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";

import { FeedbackProps } from "../utils/DataType";

import gambar1 from "../assets/gambar1.svg";
import gambar2 from "../assets/gambar2.svg";
import gambar3 from "../assets/gambar3.svg";

import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import EditStaycation from "./EditStaycation";

const DetailStaycation = () => {
  const [modal, setModal] = useState<string>("modal");

  const handleModal = async () => {
    setModal("modal-open");
  };

  return (
    <Layout>
      <div className="relative px-16">
        <h1 className="mt-14 flex items-center gap-2 text-[30px] font-semibold tracking-wider text-color4">
          <HiBuildingOffice2 className="text-blue-500" size={30} /> Villa
          Premium Jepara
          <p className="ml-4 flex items-center gap-1 text-[26px] font-semibold">
            <GiRoundStar className="text-yellow-400" size={28} />{" "}
            <span className="pt-1.5"> 5</span>
          </p>
        </h1>
        <p className="mt-2 pl-20 text-[18px] text-color4">
          Jl. Manukwari no.10 Bangsal, Garum, Blitar
        </p>

        <div className="absolute top-2 right-12 flex gap-5">
          <div className="flex gap-1 text-[14px] text-red-600 hover:cursor-pointer hover:text-red-400">
            <FaRegTrashAlt size={18} /> Delete
          </div>
          <div
            className="flex gap-1 text-[14px] text-color4 hover:cursor-pointer hover:text-blue-500"
            onClick={() => handleModal()}
          >
            <FiEdit size={18} /> Edit
          </div>
        </div>

        <div className="mt-10 flex gap-2 pl-10">
          <div className="flex w-7/12 justify-center ">
            <img src={gambar1} alt="gambar1.svg" className="w-11/12" />
          </div>
          <div className="flex w-4/12 flex-col items-center justify-center gap-8">
            <img src={gambar3} alt="gambar3.svg" className="w-10/12" />
            <img src={gambar2} alt="gambar2.svg" className="w-10/12" />
          </div>
        </div>

        <p className="mt-4 w-6/12 pl-20 text-[22px] text-color4">
          2 guest - 1 bedroom - 1 bed - bath - pool - wifi - kitchen
        </p>

        <div className="mt-16 mb-20 ml-16 flex gap-20">
          <div className="w-5/12 space-y-4">
            <Feedback
              id="feedback"
              name="Adam Malik"
              rating={5}
              ulasan="Penginapan yang sempurna, fasilitas sangat lengkap dengan harga yang terjangkau"
            />
            <Feedback
              id="feedback"
              name="Adam Malik"
              rating={5}
              ulasan="Penginapan yang sempurna, fasilitas sangat lengkap dengan harga yang terjangkau"
            />
            <Feedback
              id="feedback"
              name="Adam Malik"
              rating={5}
              ulasan="Penginapan yang sempurna, fasilitas sangat lengkap dengan harga yang terjangkau"
            />

            <p className="text-[14px] text-color4">
              lihat lebih banyak komentar ........
            </p>
          </div>

          <div className="w-5/12 text-color4">
            <div className="rounded-lg border border-color3 bg-white px-4 py-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]">
              <p className="text-[20px] font-semibold">
                Harga Sewa : $ 100 / night
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="modal-login" className={`modal ${modal}`}>
        <div className="modal-box max-w-full bg-color1 shadow-xl md:w-11/12 lg:w-11/12">
          <div
            onClick={() => setModal("modal")}
            className="rounded-ful absolute right-2 top-2 z-50 rounded-3xl bg-color4 px-2 py-0.5 text-[20px] font-bold text-color1 hover:cursor-pointer hover:bg-blue-500  hover:text-color4"
          >
            <p onClick={() => setModal("modal")}>???</p>
          </div>
          <EditStaycation />
        </div>
      </div>
    </Layout>
  );
};

const Feedback: FC<FeedbackProps> = ({ id, profil, name, rating, ulasan }) => {
  return (
    <div className="rounded-lg py-4 px-5 text-[15px] text-color4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between font-semibold">
        <div className="flex items-center gap-2">
          <div
            className="h-8 w-8 overflow-hidden rounded-full bg-contain"
            style={{
              backgroundImage: `URL(${"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})`,
            }}
          ></div>
          {name}
        </div>

        <p className="flex items-start justify-center gap-1">
          <GiRoundStar className="text-yellow-400" size={18} /> {rating}
        </p>
      </div>

      <p className="mt-4 text-[14px]">{ulasan}</p>
    </div>
  );
};

export default DetailStaycation;
