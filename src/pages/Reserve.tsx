import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import moment from "moment";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";

import { FeedbackProps } from "../utils/types/DataType";

import gambar1 from "../assets/gambar1.svg";
import gambar2 from "../assets/gambar2.svg";
import gambar3 from "../assets/gambar3.svg";

import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiRoundStar } from "react-icons/gi";

const Reserve = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [total, setTotal] = useState(0);
  const [day, setDay] = useState(0);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [name, setName] = useState<string>("Villa Green Field");
  const [address, setAddress] = useState<string>("Jl.Gajahmada Blitar, Garum");
  const [facility, setFacility] = useState<string>(
    "2 Bedroom - 1 karaoke - 1 pool - 2 bathroom"
  );
  const [phone, setPhone] = useState<string>("089589987227");

  useEffect(() => {
    if (checkIn && checkOut !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [checkIn, checkOut]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      checkIn,
      checkOut,
      day,
      total,
    };

    axios
      .post(
        `https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/AirBnB/1.0.0/reservations`,
        body,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Silahkan lanjutkan konfirmasi dan pembayaran pesanan",
          showCancelButton: false,
        });
        navigate("/confirm");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Gagal melakukan reservasi",
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleStart = async (e: any) => {
    setStart(e.target.value);
    setCheckIn(e.target.value);
  };

  const handleEnd = async (e: any) => {
    setEnd(e.target.value);
    setCheckOut(e.target.value);
  };

  const startTime = moment(start);
  const endTime = moment(end);
  const diff = endTime.diff(startTime);
  const diffDuration = moment.duration(diff);
  let tot = diffDuration.days();

  const handleSum = () => {
    let sum = 200 * (1 + tot);
    setDay(1 + tot);
    setTotal(sum);
  };

  useEffect(() => {
    handleSum();
  });

  localStorage.setItem("total", JSON.stringify(total));
  localStorage.setItem("day", JSON.stringify(day));
  localStorage.setItem("check_in", JSON.stringify(checkIn));
  localStorage.setItem("check_out", JSON.stringify(checkOut));
  localStorage.setItem("name", JSON.stringify(name));
  localStorage.setItem("address", JSON.stringify(address));
  localStorage.setItem("facility", JSON.stringify(facility));
  localStorage.setItem("phone", JSON.stringify(phone));

  return (
    <Layout>
      <form onSubmit={(e) => handleSubmit(e)} className="px-16">
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
              <p className="text-[20px] font-semibold">$ 100 / night</p>
              <div className="mt-6 mb-6 flex gap-4">
                <div className="w-6/12 space-y-2">
                  <p>Check - In :</p>
                  <CustomInput
                    id="input-checkIn"
                    type="date"
                    placeholder=""
                    onChange={handleStart}
                  />
                </div>
                <div className="w-6/12 space-y-2">
                  <p>Check - Out :</p>
                  <CustomInput
                    id="input-checkOut"
                    type="date"
                    placeholder=""
                    onChange={handleEnd}
                  />
                </div>
              </div>
              <CustomButton
                id="btn-reservasi"
                label="Reservasi"
                loading={disable || loading}
              />
            </div>

            <div className="mt-5 rounded-lg border border-color3 bg-white px-4 py-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]">
              <p className="border-b-2 border-color3 pb-3 text-[20px] font-semibold">
                $ 100 x {day} night
              </p>
              <p className="pt-3 text-[24px] font-semibold">Total ${total}</p>
            </div>
          </div>
        </div>
      </form>
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

export default Reserve;
