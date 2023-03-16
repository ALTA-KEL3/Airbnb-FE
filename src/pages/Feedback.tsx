import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import { GiRoundStar } from "react-icons/gi";

import Rating from "../assets/feedback.svg";

import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";

const Feedback = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [cookie, , removeCookies] = useCookies(["token", "villa"]);
  const checkToken = cookie.token;
  const checkVilla = cookie.villa;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [rating, setRating] = useState<number>(0);
  const [ulasan, setUlasan] = useState<string>("");

  useEffect(() => {
    if (rating !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [rating]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      rating,
      noted: ulasan,
    };

    axios
      .post(`https://api-airbnb.projectfebe.online/feedbacks`, body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          icon: "success",
          title: message,
          text: "Sukses menambahkan feedback",
          showCancelButton: false,
        });
        navigate("/list");
        removeCookies("villa");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Gagal menambahkan feedback",
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="bg-color1 px-16">
        <h1 className="flex items-center gap-3 pt-14 text-[28px] font-bold text-color4">
          Tambah Ulasan dan Penilaian
          <GiRoundStar className="text-yellow-400" size={30} />{" "}
        </h1>

        <div className="flex">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex w-7/12 flex-col"
          >
            <p className="mt-10 text-[30px] text-color4">{checkVilla}</p>

            <label className="rating mb-2 mt-10 text-[20px] text-color4">
              Berikan penilaian anda disini :
            </label>

            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                value={1}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                value={2}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                value={3}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                value={4}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                value={5}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
            </div>

            <label className=" text mt-8 text-[20px] text-color4">
              Tambah Ulasan :
            </label>
            <textarea
              id="text-ulasan"
              placeholder="Tambahkan ulasan anda disini ......."
              className="text boder mt-2 h-32 w-8/12 rounded-xl border-color3 p-4"
              onChange={(e) => setUlasan(e.target.value)}
            />

            <div className="mt-10">
              <CustomButton
                id="btn-feedback"
                label="Tambahkan Ulasan"
                loading={disable || loading}
              />
            </div>
          </form>

          <div className="flex w-5/12 justify-center">
            <img src={Rating} alt="feedback.svg" className="w-11/12" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
