import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { HomeType } from "../utils/types/DataType";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

import Bg from "../assets/bgImage.svg";

import { HiBuildingOffice2 } from "react-icons/hi2";
import Loading from "../components/Loading";

const EditStaycation = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const { id } = useParams();

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [submit, setSubmit] = useState<HomeType>({});
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [phone, setPhone] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [fasilitas, setFasilitas] = useState<string>("");
  const [gambar, setGambar] = useState<string>("");

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
        const { name, price, phone, address, facility } = res.data.data;
        setName(name);
        setPrice(price);
        setPhone(phone);
        setAddress(address);
        setFasilitas(facility);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof submit;
    for (key in submit) {
      formData.append(key, submit[key]);
    }

    axios
      .put(`https://api-airbnb.projectfebe.online/homestays/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Update data berhasil",
          showCancelButton: false,
        });
        setSubmit({});
        navigate(`/profile`);
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Update data gagal",
          showCancelButton: false,
        });
      })
      .finally(() => fetchData())
      .finally(() => setLoading(false));
  };

  const handleChange = (value: string | File, key: keyof typeof submit) => {
    let temp = { ...submit };
    temp[key] = value;
    setSubmit(temp);
  };

  return (
    <div className="w-full">
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={(e) => handleSubmit(e)} className="px-16">
          <h1 className="items-top flex gap-3 pt-2 text-[24px] font-semibold tracking-wider text-color4">
            Perbarui Data Anda
            <HiBuildingOffice2 className="text-color3" size={30} />
          </h1>

          <div className=" mt-8 flex flex-row">
            <div className="w-4/12 ">
              <div className="flex w-9/12">
                <img src={Bg} alt="bg.svg" className="w-full" />
              </div>

              <p className="mt-5 mb-5 text-[20px] text-color4">
                Tambahkan Gambar :
              </p>
              <input
                id="upload_gambar"
                type="file"
                accept="image.png, image.jpeg, image.jpg"
                className="block w-full text-[16px] text-color4 file:mr-4 file:rounded-lg file:bg-color4 file:py-2 file:px-8 file:text-[18px] file:text-color1 hover:file:bg-color3"
                onChange={(e) => {
                  if (!e.currentTarget.files) {
                    return;
                  }

                  setGambar(URL.createObjectURL(e.currentTarget.files[0]));
                  handleChange(e.currentTarget.files[0], "image1");
                }}
              />
            </div>

            <div className="w-8/12 px-16 ">
              <div className="flex items-center gap-4">
                <p className="w-7/12 text-start text-[18px] text-color4">
                  Judul Penginapan :
                </p>
                <CustomInput
                  id="input-judul"
                  type="text"
                  placeholder="Contoh : Villa Premium Jepara"
                  defaultValue={name}
                  onChange={(e) => handleChange(e.target.value, "name")}
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
                  defaultValue={price}
                  onChange={(e) => handleChange(e.target.value, "price")}
                />
              </div>

              <div className="mt-6 flex items-center justify-start gap-12 pr-36">
                <p className="w-11/12 text-start text-[18px] text-color4">
                  Telepon :
                </p>
                <CustomInput
                  id="input-judul"
                  type="text"
                  placeholder="Angka : 100"
                  defaultValue={phone}
                  onChange={(e) => handleChange(e.target.value, "phone")}
                />
              </div>

              <div className="mt-5 flex items-center gap-4">
                <p className="w-7/12 text-start text-[18px] text-color4">
                  Alamat :
                </p>
                <textarea
                  id="input-judul"
                  typeof="text"
                  placeholder="Contoh : Jl. Manukwari no.10 Bangsal, Garum, Blitar"
                  className="w-full rounded-xl border border-color3 px-4 py-4 text-color4"
                  defaultValue={address}
                  onChange={(e) => handleChange(e.target.value, "address")}
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
                  defaultValue={fasilitas}
                  onChange={(e) => handleChange(e.target.value, "facility")}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <CustomButton
              id=" btn-tambahpenginapan"
              label="Perbarui Data"
              loading={loading}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default EditStaycation;
