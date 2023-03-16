import Layout from "../components/Layout";

import { GiRoundStar } from "react-icons/gi";

import Rating from "../assets/feedback.svg";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Feedback = () => {
  return (
    <Layout>
      <div className="bg-color1 px-16">
        <h1 className="flex items-center gap-3 pt-14 text-[28px] font-bold text-color4">
          Tambah Ulasan dan Penilaian
          <GiRoundStar className="text-yellow-400" size={30} />{" "}
        </h1>

        <div className="flex">
          <div className="flex w-7/12 flex-col">
            <p className="mt-10 text-[18px] text-color4">Villa Premium Jepara</p>
            <p className="mt-2 text-[18px] text-color4">Jl. Manukwari no.10 Bangsal, Garum, Blitar</p>

            <label className="rating mb-2 mt-10 text-[20px] text-color4">Berikan penilaian anda disini :</label>

            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
            </div>

            <label className=" text mt-8 text-[20px] text-color4">Tambah Ulasan :</label>
            <textarea id="text-ulasan" placeholder="Tambahkan ulasan anda disini ......." className="text boder mt-2 h-32 w-8/12 rounded-xl border-color3 p-4" />

            <div className="mt-10">
              <CustomButton id="btn-feedback" label="Tambahkan Ulasan" />
            </div>
          </div>

          <div className="flex w-5/12 justify-center">
            <img src={Rating} alt="feedback.svg" className="w-11/12" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
