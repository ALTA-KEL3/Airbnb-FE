import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";

import gambar1 from "../assets/gambar1.svg";
import BCA from "../assets/bca.svg";
import BNI from "../assets/bni.svg";
import BRI from "../assets/bri.svg";
import PERMATA from "../assets/permata.svg";
import MANDIRI from "../assets/mandiri.svg";

import { BsTelephone, BsPersonFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiRoundStar } from "react-icons/gi";

const Confirm = () => {
  return (
    <Layout>
      <div className="bg-color1 px-16">
        <h1 className="items-top flex gap-3 pt-14 text-[24px] font-semibold tracking-widest text-color4">
          Konfirmasi Pesanan
          <HiBuildingOffice2 className="text-color3" size={30} />
        </h1>

        <p className="mt-10 text-[20px] text-color4">Data Pemesan :</p>
        <p className="mt-2 flex justify-start gap-2 pl-3 text-[18px]  text-color4">
          <BsPersonFill size={22} /> M Agung Cahya D
        </p>
        <p className="mt-2 flex justify-start gap-2 pl-3 text-[18px] text-color4">
          {" "}
          <BsTelephone size={20} /> Contact Person : 089534556776
        </p>

        <p className="mt-10 text-[20px] text-color4">Data Pesanan :</p>

        <div className=" mt-8 flex flex-row px-4 ">
          <div className="flex w-6/12">
            <img src={gambar1} alt="gambar1.svg" className="w-11/12" />
          </div>

          <div className="flex w-6/12 flex-col justify-center ">
            <h1 className="flex items-center gap-2 text-[26px] font-semibold tracking-wider text-color4">
              Villa Premium Jepara
              <p className="flex items-center gap-1 text-[22px] font-semibold">
                <GiRoundStar className="text-yellow-400" size={26} />{" "}
                <span className="pt-1.5"> 5</span>
              </p>
            </h1>
            <p className="mt-1 text-[14px] text-color4">
              Jl. Manukwari no.10 Bangsal, Garum, Blitar
            </p>

            <p className="mt-5 text-[18px] tracking-wider text-color4">
              Fasilitas :
            </p>
            <p className="mt-1 text-[14px] text-color4">
              2 guest - 1 bedroom - 1 bed - bath - pool - wifi - kitchen
            </p>

            <p className="mt-5 flex items-center gap-1 text-[18px] text-color4">
              <BsTelephone size={20} /> Contact Person :{" "}
              <span className="font-semibold">089523445567</span>
            </p>

            <div className="mt-5 flex gap-14 text-[18px] text-color4">
              <div className="">
                <p className="font-semibold">Check - In :</p>
                <p className="text-[16px]">22 / 03 / 2022</p>
              </div>

              <div className="">
                <p className="font-semibold">Check - Out :</p>
                <p className="text-[16px]">23 / 03 / 2022</p>
              </div>
            </div>

            <div className="mt-5 w-8/12 rounded-lg border border-color3 bg-white px-4 py-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]">
              <p className="border-b-2 border-color3 pb-3 text-[18px] font-semibold">
                $ 100 x 2 night
              </p>
              <p className="pt-3 text-[20px] font-semibold">Total $200</p>
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
            <CustomButton id="btn-confirm" label="Selesaikan Pembayaran" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Confirm;
