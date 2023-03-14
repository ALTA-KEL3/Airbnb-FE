import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { Homestay } from "../utils/types/DataType";
import Swal from "../utils/Swal";

import Layout from "../components/Layout";
import Card from "../components/Card";

const Profile = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [homestay, setHomestay] = useState<Homestay[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(
        `https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/AirBnB/1.0.0/user`,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { name, email, address, role, phone, photo_profile } =
          res.data.data;

        setName(name);
        setEmail(email);
        setAddress(address);
        setRole(role);
        setPhone(phone);
        setPhoto(photo_profile);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchHomestay();
  }, []);

  function fetchHomestay() {
    setLoading(true);
    axios
      .get(
        `https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/AirBnB/1.0.0/user`,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const {} = res.data.data;
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <Layout>
        <div className="flex gap-10 py-16 px-28">
          <div className="grid justify-items-center gap-5">
            <div className="card h-[400px] w-[350px] bg-base-100 shadow-md">
              <figure className="px-10 pt-5">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Shoes"
                  className="h-[200px] w-[200px] rounded-full object-cover object-center"
                />
              </figure>
              <div className="card-body items-center p-4 text-center">
                <a href="">Perbarui Foto</a>
                <h2 className="card-title mb-8 mt-0 text-4xl font-extrabold capitalize">
                  {name}
                </h2>
              </div>
            </div>
            <button className="btn bg-color3">Tambah Penginapan</button>
          </div>
          <div>
            <h1 className="my-5 text-4xl font-extrabold capitalize">
              Halo, saya {name}
            </h1>
            <div className="mb-5 mt-10">
              <h1 className="text-2xl font-extrabold">Alamat</h1>
              <p>{address}</p>
            </div>
            <div className="mb-16 flex gap-8">
              <div>
                <h1 className="text-2xl font-extrabold">Telepon</h1>
                <p>{phone}</p>
              </div>
              <div>
                <h1 className="text-2xl font-extrabold">E-mail</h1>
                <p>{email}</p>
              </div>
              <div>
                <h1 className="text-2xl font-extrabold">Status</h1>
                <p>{role === "" ? "status belum disetting" : role}</p>
              </div>
            </div>
            <label htmlFor="my-modal-4" className="cursor-pointer">
              Perbarui Profil
            </label>
          </div>
        </div>
        <div className="px-28">
          <h1 className="mb-5 text-4xl font-extrabold">Penginapan saya</h1>
          <div className="grid grid-cols-4 justify-items-center gap-5">
            <Card />
          </div>
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        {/* <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative bg-color1" htmlFor="">
            <h3 className="text-center text-lg font-bold">Edit Data</h3>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input-bordered input w-full"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input-bordered input w-full"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input-bordered input w-full"
              />
              <label className="label">
                <span className="label-text">Alamat</span>
              </label>
              <textarea
                className="textarea-bordered textarea"
                placeholder="Bio"
              ></textarea>
              <label className="label">
                <span className="label-text">Telepon</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input-bordered input w-full"
              />
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select className="select-bordered select">
                  <option selected>User</option>
                  <option>Hosting</option>
                </select>
              </div>

              <div className="my-3 flex justify-end gap-5">
                <button className="btn-sm btn w-24 bg-color3 text-white">
                  Cancel
                </button>
                <button className="btn-sm btn w-24 bg-color3 text-white">
                  Save
                </button>
              </div>
            </div>
          </label>
        </label> */}
      </Layout>
    </div>
  );
};

export default Profile;
