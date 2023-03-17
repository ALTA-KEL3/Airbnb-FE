import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { handleAuth } from "../utils/redux/reducer/reduser";
import { HomestayType, UserType } from "../utils/types/DataType";
import Swal from "../utils/Swal";

import Layout from "../components/Layout";
import { CardHost } from "../components/Card";
import Loading from "../components/Loading";
import { set } from "immer/dist/internal";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const [cookie, setCookie, removeCookie] = useCookies(["token", "id", "role"]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;
  const checkId = cookie.id;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [homestay, setHomestay] = useState<HomestayType[]>([]);
  const [profileData, setProfileData] = useState<UserType>({});
  const [avatar, setAvatar] = useState<any>({});

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      setFile(fileList[0]);
    }
  };

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
        const { name, email, address, role, phone, profile_picture } =
          res.data.data;
        setProfileData(res.data.data);
        setAvatar(profile_picture);
        setName(name);
        setEmail(email);
        setAddress(address);
        setRole(role);
        setPhone(phone);
        setPhone(phone);
        setPhoto(profile_picture);
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
      .get(`https://api-airbnb.projectfebe.online/myhomestays`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setHomestay(data);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  function editProfile() {
    axios
      .put(
        `https://api-airbnb.projectfebe.online/profile`,
        {
          name: `${name}`,
          email: `${newEmail}`,
          password: `${password}`,
          address: `${address}`,
          role: `${role}`,
          phone: `${phone}`,
        },
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update Succes",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res.data.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Update failed",
        });
      });
  }

  function changePhoto() {
    axios
      .put(
        `https://api-airbnb.projectfebe.online/profile`,
        {
          photo_profile: `${avatar}`,
        },
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update Succes",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res.data.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Update failed",
        });
      });
  }

  function handleDelete() {
    MySwal.fire({
      icon: "warning",
      title: "Menghapus Akun ?",
      text: "klik kembali untuk membatalkan",
      confirmButtonText: "Lanjutkan",
      cancelButtonText: "Kembali",
    }).then((oke) => {
      if (oke.isConfirmed) {
        setLoading(true);
        axios
          .delete(`https://api-airbnb.projectfebe.online/profile`, {
            headers: {
              Authorization: `Bearer ${checkToken}`,
            },
          })
          .then((res) => {
            const { message } = res.data;

            MySwal.fire({
              icon: "success",
              title: message,
              text: "Berhasil menonaktifkan akun",
              showCancelButton: false,
            });

            dispatch(handleAuth(false));
            removeCookie("token");
            removeCookie("role");
            removeCookie("id");

            navigate("/");
          })
          .catch((err) => {
            const { data } = err.response;
            MySwal.fire({
              icon: "error",
              title: data.message,
              text: "Gagal menonaktifkan akun",
              showCancelButton: false,
            });
          })
          .finally(() => setLoading(false));
      }
    });
  }

  const handleAdd = async () => {
    role === "user"
      ? MySwal.fire({
          icon: "error",
          title: "Akses Ditolak",
          text: "lakukan update data dan jadilah host",
          showCancelButton: false,
        })
      : navigate("/addstaycation");
  };

  const handleChange = (
    value: string | File,
    key: keyof typeof profileData
  ) => {
    let temp = { ...profileData };
    temp[key] = value;
    setProfileData(temp);
  };

  const clearData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
    setRole("");
    setPhone("");
  };

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex gap-10 py-16 px-28">
            <div className="grid justify-items-center gap-5">
              <div className="card h-[400px] w-[350px] bg-base-100 shadow-md">
                <figure className="px-10 pt-5">
                  <img
                    src={photo}
                    alt="avatar.svg"
                    className="h-[200px] w-[200px] rounded-full object-cover object-center"
                  />
                </figure>
                <div className="card-body items-center p-4 text-center">
                  <label htmlFor="my-modal-5" className="cursor-pointer">
                    Perbarui Foto
                  </label>
                  <h2 className="card-title mb-8 mt-0 text-4xl font-extrabold capitalize">
                    {name}
                  </h2>
                </div>
              </div>
              <button onClick={() => handleAdd()} className="btn bg-color3">
                Tambah Penginapan
              </button>
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
              <div className="flex gap-5">
                <label htmlFor="my-modal-4" className="cursor-pointer">
                  Perbarui Profil
                </label>
                <p
                  onClick={() => handleDelete()}
                  className="text-[16px] text-red-500 hover:cursor-pointer hover:text-orange-300"
                >
                  Deactivate Account
                </p>
              </div>
            </div>
          </div>
          <div className="px-28">
            <h1 className="mb-5 text-4xl font-extrabold">Penginapan saya</h1>
            <div className="grid grid-cols-4 justify-items-center gap-5">
              {homestay.map((item, index) => (
                <CardHost
                  key={index}
                  image={item.image}
                  title={item.name}
                  star={item.rating}
                  description={item.facility}
                  id={item.id}
                  cost={item.price}
                  check_id={checkId}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-color1" htmlFor="">
          <h3 className="text-center text-lg font-bold">Edit Data</h3>
          <div className="form-control w-full">
            <form action="">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input-bordered input w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input-bordered input w-full"
                defaultValue={email}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input-bordered input w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Alamat</span>
              </label>
              <textarea
                className="textarea-bordered textarea w-full"
                placeholder="Bio"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
              <label className="label">
                <span className="label-text">Telepon</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input-bordered input w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select
                  className="select-bordered select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="User">User</option>
                  <option value="Hosting">Hosting</option>
                </select>
              </div>

              <div className="my-3 flex justify-end gap-5">
                <label
                  htmlFor="my-modal-4"
                  className="btn-sm btn w-24 bg-color3 text-white"
                >
                  Cancel
                </label>
                <label
                  htmlFor="my-modal-4"
                  className="btn-sm btn w-24 bg-color3 text-white"
                  onClick={() => editProfile()}
                >
                  Save
                </label>
              </div>
            </form>
          </div>
        </label>
      </label>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <label className="modal-box relative bg-color1" htmlFor="">
          <h3 className="text-center text-lg font-bold">Edit Data</h3>
          <div className="form-control w-full">
            <form action="">
              <label className="label">
                <span className="label-text">Foto Profil</span>
              </label>
              <input
                className=""
                type="file"
                placeholder="Foto Profil"
                onChange={(e) => {
                  if (!e.currentTarget.files) {
                    return;
                  }
                  setAvatar(e.currentTarget.files[0]);
                  handleChange(e.currentTarget.files[0], "photo_profile");
                }}
              />
              <label
                htmlFor="my-modal-5"
                className="btn-sm btn w-24 bg-color3 text-white"
                onClick={() => changePhoto()}
              >
                Save
              </label>
            </form>
          </div>
        </label>
      </label>

      {loading ? <Loading /> : <Footer />}
    </Layout>
  );
};

export default Profile;
