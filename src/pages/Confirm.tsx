import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Loading from "../components/Loading";
import Layout from "../components/Layout";

import PERMATA from "../assets/permata.svg";
import MANDIRI from "../assets/mandiri.svg";
import gambar1 from "../assets/gambar1.svg";
import BCA from "../assets/bca.svg";
import BNI from "../assets/bni.svg";
import BRI from "../assets/bri.svg";

import { BsTelephone, BsPersonFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiRoundStar } from "react-icons/gi";
import { TripType } from "../utils/types/DataType";

const Confirm = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [facility, setFacility] = useState<string>("");
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [admin, setAdmin] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

  const [user, setUser] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(`https://api-airbnb.projectfebe.online/profile`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { name, phone } = res.data.data;
        setUser(name);
        setPhone(phone);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    localData();
  }, []);

  function localData() {
    setLoading(true);
    const nameLocal = localStorage.getItem("name");
    setName(JSON.parse(nameLocal || ""));

    const addressLocal = localStorage.getItem("address");
    setAddress(JSON.parse(addressLocal || ""));

    const facilityLocal = localStorage.getItem("facility");
    setFacility(JSON.parse(facilityLocal || ""));

    const checkinLocal = localStorage.getItem("check_in");
    setCheckIn(JSON.parse(checkinLocal || ""));

    const checkoutLocal = localStorage.getItem("check_out");
    setCheckOut(JSON.parse(checkoutLocal || ""));

    const adminLocal = localStorage.getItem("phone");
    setAdmin(JSON.parse(adminLocal || ""));

    const dayLocal = localStorage.getItem("day");
    setDay(JSON.parse(dayLocal || ""));

    const totalLocal = localStorage.getItem("total");
    setTotal(JSON.parse(totalLocal || ""));

    setLoading(false);
  }

  const convert = `{"name" : "${name}", "check_in" : "${checkIn}", "check_out" : "${checkOut}", "day" : "${day}", "total" :"${total}"}`;

  const obj = JSON.parse(convert);

  const handleTrip = () => {
    const checkExist = localStorage.getItem("Trip");
    if (checkExist) {
      let parseFav: TripType[] = JSON.parse(checkExist);
      parseFav.push(obj);
      localStorage.setItem("Trip", JSON.stringify(parseFav));
    } else {
      localStorage.setItem("Trip", JSON.stringify([obj]));
    }

    MySwal.fire({
      icon: "success",
      title: "Sukses Membuat Reservasi",
      text: "reservasi berhasil ditambahkan pada riwayat",
      showCancelButton: false,
    });
    navigate("/list");
  };

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-color1 px-16">
          <h1 className="items-top flex gap-3 pt-14 text-[24px] font-semibold tracking-widest text-color4">
            Konfirmasi Pesanan
            <HiBuildingOffice2 className="text-color3" size={30} />
          </h1>

          <p className="mt-10 text-[20px] text-color4">Data Pemesan :</p>
          <p className="mt-2 flex justify-start gap-2 pl-3 text-[18px]  text-color4">
            <BsPersonFill size={22} /> {user}
          </p>
          <p className="mt-2 flex justify-start gap-2 pl-3 text-[18px] text-color4">
            {" "}
            <BsTelephone size={20} /> Contact Person :{" "}
            {phone === "" ? "nomor kosong" : phone}
          </p>

          <p className="mt-10 text-[20px] text-color4">Data Pesanan :</p>

          <div className=" mt-8 flex flex-row px-4 ">
            <div className="flex w-6/12">
              <img src={gambar1} alt="gambar1.svg" className="w-11/12" />
            </div>

            <div className="flex w-6/12 flex-col justify-center ">
              <h1 className="flex items-center gap-2 text-[26px] font-semibold tracking-wider text-color4">
                {name}
                <p className="flex items-center gap-1 text-[22px] font-semibold">
                  <GiRoundStar className="text-yellow-400" size={26} />{" "}
                  <span className="pt-1.5"> 5</span>
                </p>
              </h1>
              <p className="mt-1 text-[14px] text-color4">{address}</p>

              <p className="mt-5 text-[18px] tracking-wider text-color4">
                Fasilitas :
              </p>
              <p className="mt-1 text-[14px] text-color4">{facility}</p>

              <p className="mt-5 flex items-center gap-1 text-[18px] text-color4">
                <BsTelephone size={20} /> Contact Person :{" "}
                <span className="font-semibold">{admin}</span>
              </p>

              <div className="mt-5 flex gap-14 text-[18px] text-color4">
                <div className="">
                  <p className="font-semibold">Check - In :</p>
                  <p className="text-[16px]">{checkIn}</p>
                </div>

                <div className="">
                  <p className="font-semibold">Check - Out :</p>
                  <p className="text-[16px]">{checkOut}</p>
                </div>
              </div>

              <div className="mt-5 w-8/12 rounded-lg border border-color3 bg-white px-4 py-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]">
                <p className="border-b-2 border-color3 pb-3 text-[18px] font-semibold">
                  Rp. 100 x {day} malam
                </p>
                <p className="pt-3 text-[20px] font-semibold">
                  Total Rp. {total}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 w-6/12 px-6">
            <p className=" text-[26px] font-semibold tracking-wider text-color4">
              Pembayaran Pesanan
            </p>

            <p className="mt-2 text-[18px] tracking-wider text-color4">
              Pilih bank untuk proses pembayaran :
            </p>

            <div className="label mt-4 w-4/12 cursor-pointer justify-start space-x-4 ">
              <input
                type="radio"
                name="radio-1"
                className="radio border border-color3 checked:bg-color4"
              />
              <img src={BCA} alt="bca.svg" className="w-24" />
            </div>

            <div className="label mt-4 w-4/12 cursor-pointer justify-start space-x-4 ">
              <input
                type="radio"
                name="radio-1"
                className="radio border border-color3 checked:bg-color4"
              />
              <img src={BNI} alt="bca.svg" className="w-24" />
            </div>

            <div className="label mt-4 w-4/12 cursor-pointer justify-start space-x-4 ">
              <input
                type="radio"
                name="radio-1"
                className="radio border border-color3 checked:bg-color4"
              />
              <img src={BRI} alt="bca.svg" className="-mt-1 w-32" />
            </div>

            <div className="label mt-4 w-4/12 cursor-pointer justify-start space-x-4 ">
              <input
                type="radio"
                name="radio-1"
                className="radio border border-color3 checked:bg-color4"
              />
              <img src={MANDIRI} alt="bca.svg" className="-mt-4 w-32" />
            </div>

            <div className="label mt-2 w-4/12 cursor-pointer justify-start space-x-4 ">
              <input
                type="radio"
                name="radio-1"
                className="radio border border-color3 checked:bg-color4"
              />
              <img src={PERMATA} alt="bca.svg" className="-mt-4 w-32" />
            </div>

            <div className="my-10">
              <CustomButton
                id="btn-confirm"
                label="Selesaikan Pembayaran"
                onClickTrip={() => handleTrip()}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Confirm;
