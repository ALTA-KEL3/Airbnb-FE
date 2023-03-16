import React, { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import moment from "moment";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { FeedbackProps, FeedbackType } from "../utils/types/DataType";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";

import gambar1 from "../assets/gambar1.svg";
import gambar2 from "../assets/gambar2.svg";
import gambar3 from "../assets/gambar3.svg";

import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiRoundStar } from "react-icons/gi";
import Loading from "../components/Loading";

const Reserve = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [facility, setFacility] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [feedback, setFeedback] = useState<FeedbackType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(`https://api-airbnb.projectfebe.online/homestays/${id}`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { name, address, facility, image, rating, price, phone } =
          res.data.data;
        setName(name);
        setAddress(address);
        setFacility(facility);
        setImage(image);
        setRating(rating);
        setPrice(price);
        setTelephone(phone);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    feedbackData();
  }, []);

  function feedbackData() {
    setLoading(true);
    axios
      .get(`https://api-airbnb.projectfebe.online/homestays/${id}/feedbacks`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setFeedback(data);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (checkIn && checkOut !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [checkIn, checkOut]);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   const body = {
  //     checkIn,
  //     checkOut,
  //     day,
  //     total,
  //   };

  //   axios
  //     .post(
  //       `https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/AirBnB/1.0.0/reservations`,
  //       body,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${checkToken}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       const { message } = res.data;
  //       MySwal.fire({
  //         icon: "success",
  //         title: message,
  //         text: "Silahkan lanjutkan konfirmasi dan pembayaran pesanan",
  //         showCancelButton: false,
  //       });
  //       navigate("/confirm");
  //     })
  //     .catch((err) => {
  //       const { data } = err.response;
  //       MySwal.fire({
  //         icon: "error",
  //         title: data.message,
  //         text: "Gagal melakukan reservasi",
  //         showCancelButton: false,
  //       });
  //     })
  //     .finally(() => setLoading(false));
  // };

  const handleSubmit = () => {
    MySwal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Silahkan Periksa Kembali Pesanan Anda ",
      showCancelButton: false,
    });
    navigate("/confirm");
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
    let sum = price * (1 + tot);
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
  localStorage.setItem("phone", JSON.stringify(telephone));

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <form className="px-16">
          <h1 className="mt-14 flex items-center gap-2 text-[30px] font-semibold tracking-wider text-color4">
            <HiBuildingOffice2 className="text-blue-500" size={30} /> {name}
            <p className="ml-4 flex items-center gap-1 text-[26px] font-semibold">
              <GiRoundStar className="text-yellow-400" size={28} />{" "}
              <span className="pt-1.5"> {rating}</span>
            </p>
          </h1>
          <p className="mt-2 pl-20 text-[18px] text-color4">{address}</p>

          <div className="mt-10 flex gap-2 pl-10">
            <div className="flex w-8/12 justify-center ">
              <img src={image} alt="gambar1.svg" className="w-11/12" />
            </div>
          </div>

          <p className="mt-4 w-8/12 pl-20 text-[22px] text-color4">
            Fasilitas :
          </p>
          <p className="mt-4 w-8/12 pl-20 text-[22px] text-color4">
            {facility}
          </p>

          <div className="mt-16 mb-20 ml-16 flex gap-20">
            <div className="w-5/12 space-y-4">
              {feedback?.map((item, index) => (
                <Feedback
                  id="feedback"
                  key={index}
                  profil={item.profile_picture}
                  name={item.name}
                  rating={item.rating}
                  ulasan={item.note}
                />
              ))}

              <p className="text-[14px] text-color4">
                lihat lebih banyak komentar ........
              </p>
            </div>

            <div className="w-5/12 text-color4">
              <div className="rounded-lg border border-color3 bg-white px-4 py-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]">
                <p className="text-[20px] font-semibold">Rp. {price} / malam</p>
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
                  onClick={() => handleSubmit()}
                />
              </div>

              <div className="mt-5 rounded-lg border border-color3 bg-white px-4 py-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]">
                <p className="border-b-2 border-color3 pb-3 text-[20px] font-semibold">
                  Rp. {price} x {day} night
                </p>
                <p className="pt-3 text-[24px] font-semibold">Total ${total}</p>
              </div>
            </div>
          </div>
        </form>
      )}
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
          >
            <img src={profil} alt="profil.svg" />
          </div>
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
