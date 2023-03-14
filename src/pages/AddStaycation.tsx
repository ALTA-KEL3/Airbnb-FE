import Layout from "../components/Layout";

import Bg from "../assets/bgImage.svg";

import { HiBuildingOffice2 } from "react-icons/hi2";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const AddStaycation = () => {
  return (
    <Layout>
      <div className="px-24">
        <h1 className="items-top flex gap-3 pt-14 text-[28px] font-semibold tracking-wider text-color4">
          Daftarkan Penginapan Anda
          <HiBuildingOffice2 className="text-color3" size={40} />
        </h1>

        <div className=" mt-14 flex flex-row">
          <div className="w-5/12 ">
            <div className="flex gap-2">
              <div className="flex w-72 ">
                <img src={Bg} alt="bg.svg" className="w-full" />
              </div>

              <div className="gap- flex w-40 flex-col justify-center gap-4  pl-6">
                <img src={Bg} alt="bg.svg" className="w-full" />
                <img src={Bg} alt="bg.svg" className="w-full" />
              </div>
            </div>

            <p className="mt-10 mb-5 text-[20px] text-color4">
              Tambahkan Gambar :
            </p>
            <input
              id="upload_gambar"
              type="file"
              accept="image.png, image.jpeg, image.jpg"
              className="block w-full text-[16px] text-color4 file:mr-4 file:rounded-lg file:bg-color4 file:py-2 file:px-8 file:text-[18px] file:text-color1 hover:file:bg-color3"
            />
          </div>

          <div className="w-7/12 px-16 ">
            <div className="mt-8 flex items-center gap-4">
              <p className="w-7/12 text-start text-[18px] text-color4">
                Judul Penginapan :
              </p>
              <CustomInput
                id="input-judul"
                type="text"
                placeholder="Contoh : Villa Premium Jepara"
              />
            </div>

            <div className="mt-6 flex items-center justify-start gap-12 pr-36">
              <p className="w-11/12 text-start text-[18px] text-color4">
                Harga Sewa :
              </p>
              <CustomInput
                id="input-judul"
                type="text"
                placeholder="Angka : 100"
              />
            </div>

            <div className="pt-6">
              <p className="w-9/12 text-start text-[18px] text-color4">
                Fasilitas Penginapan :
              </p>
              <textarea
                id="input-judul"
                typeof="text"
                placeholder="Contoh : 2 guest - 1 bedroom - 1 bed - bath - pool - wifi - kitchen"
                className="mt-3 w-full rounded-xl border border-color3 px-4 py-4 text-color4"
              />
            </div>
          </div>
        </div>

        {/* <div className="mt-20 flex gap-2">
          <div className="flex w-4/12 justify-center">
            <img src={Bg} alt="bg.svg" className="w-12/12" />
          </div>

          <div className="gap- flex w-4/12 flex-col justify-center gap-4 pl-6">
            <img src={Bg} alt="bg.svg" className="w-5/12" />
            <img src={Bg} alt="bg.svg" className="w-5/12" />
          </div>
        </div>
        <p className="mt-5 mb-5 text-[20px] text-color4">Tambahkan Gambar :</p>
        <input
          id="upload_gambar"
          type="file"
          accept="image.png, image.jpeg, image.jpg"
          className="block w-full text-[16px] text-color4 file:mr-4 file:rounded-lg file:bg-color4 file:py-2 file:px-8 file:text-[18px] file:text-color1 hover:file:bg-color3"
        />

        <div className="w-5/12 pr-6">
          <div className="mt-8 flex items-center gap-4">
            <p className="w-7/12 text-start text-[18px] text-color4">
              Judul Penginapan :
            </p>
            <CustomInput
              id="input-judul"
              type="text"
              placeholder="Contoh : Villa Premium Jepara"
            />
          </div>

          <div className="mt-12 flex w-11/12 items-center justify-start">
            <p className="w-9/12 text-start text-[18px] text-color4">
              Harga Sewa :
            </p>
            <CustomInput
              id="input-judul"
              type="text"
              placeholder="Masukkan Angka : 100"
            />
          </div>
        </div>

        <div className="w-6/12 pt-6">
          <p className="w-9/12 text-start text-[18px] text-color4">
            Fasilitas Penginapan :
          </p>
          <textarea
            id="input-judul"
            typeof="text"
            placeholder="Contoh : 2 guest - 1 bedroom - 1 bed - bath - pool - wifi - kitchen"
            className="mt-3 w-11/12 rounded-xl border border-color3 px-4 py-4 text-color4"
          />
        </div> */}

        <div className="mt-16 mb-20">
          <CustomButton
            id=" btn-tambahpenginapan"
            label="Daftarkan Penginapan"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AddStaycation;
