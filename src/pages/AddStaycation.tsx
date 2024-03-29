import Reaact, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios, { AxiosRequestConfig } from "axios";
import CurrencyInput from "react-currency-input-field";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";

import Bg from "../assets/bgImage.svg";

import { HiBuildingOffice2 } from "react-icons/hi2";
import Loading from "../components/Loading";

const AddStaycation = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [disable, setDisable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (name && description && file && address && phone && price !== null) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, description, file, address, phone, price]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      setFile(fileList[0]);
    }
  };

  const handleSubmit = async (e: Reaact.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("phone", phone);
      formData.append("price", price.toString());
      formData.append("facility", description);

      console.log(formData);

      axios
        .post(`https://api-airbnb.projectfebe.online/homestays`, formData, {
          headers: {
            Authorization: `Bearer ${checkToken}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const { message } = res.data;

          MySwal.fire({
            icon: "success",
            title: message,
            text: "Sukses menambahkan homestay",
            showCancelButton: false,
          });

          Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
          );

          navigate("/profile");
        })
        .catch((err) => {
          const { data } = err.response;
          MySwal.fire({
            icon: "error",
            title: data.message,
            text: "Gagal menambahkan homestay",
            showCancelButton: false,
          });
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className="px-24">
          <h1 className="items-top flex gap-3 pt-14 text-[28px] font-semibold tracking-wider text-color4">
            Daftarkan Penginapan Anda
            <HiBuildingOffice2 className="text-color3" size={40} />
          </h1>

          <div className=" mt-14 flex flex-row">
            <div className="w-4/12 pl-10">
              <div className="flex w-10/12">
                <img src={Bg} alt="bg.svg" className="w-full" />
              </div>

              <p className="mt-10 mb-5 text-[20px] text-color4">
                Tambahkan Gambar :
              </p>
              <input
                id="upload_gambar"
                type="file"
                multiple
                accept="image.png, image.jpeg, image.jpg"
                onChange={handleFileChange}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                />

                <CurrencyInput
                  className="w-56 bg-zinc-600 text-zinc-50 "
                  prefix='Rp. '
                  placeholder="Rp. "
                  decimalSeparator=','
                  groupSeparator='.'
                />
              </div>

              <div className="mt-6 flex items-center justify-start gap-12 pr-36">
                <p className="w-11/12 text-start text-[18px] text-color4">
                  Telephone :
                </p>
                <CustomInput
                  id="input-judul"
                  type="text"
                  placeholder="contoh: 089523894186"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mt-5 flex items-center gap-4">
                <p className="w-7/12 text-start text-[18px] text-color4">
                  Alamat Penginapan :
                </p>
                <textarea
                  id="input-judul"
                  typeof="text"
                  placeholder="Contoh : Jl. Manukwari no.10 Bangsal, Garum, Blitar"
                  className="w-full rounded-xl border border-color3 px-4 py-4 text-color4"
                  onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-16 ml-10 mb-20">
            <CustomButton
              id=" btn-tambahpenginapan"
              label="Daftarkan Penginapan"
              type="submit"
              loading={disable || loading}
            />
          </div>
        </form>
      )}
    </Layout>
  );
};

export default AddStaycation;
