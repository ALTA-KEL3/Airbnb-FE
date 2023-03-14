import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Profile = () => {
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
                <h2 className="card-title mb-8 mt-0 text-4xl font-extrabold">John Doe</h2>
              </div>
            </div>
            <button className="btn bg-color3">Tambah Penginapan</button>
          </div>
          <div>
            <h1 className="my-5 text-4xl font-extrabold">Halo, saya John</h1>
            <div className="mb-5">
              <h1 className="text-2xl font-extrabold">Alamat</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos quidem delectus rerum cumque fugit eum cupiditate. Expedita, molestias quis.</p>
            </div>
            <div className="mb-16 flex gap-8">
              <div>
                <h1 className="text-2xl font-extrabold">Telepon</h1>
                <p>081820384283</p>
              </div>
              <div>
                <h1 className="text-2xl font-extrabold">Status</h1>
                <p>Hosting</p>
              </div>
            </div>
            <a href="">Perbarui Profil</a>
          </div>
        </div>
        <div className="px-28">
          <h1 className="mb-5 text-4xl font-extrabold">Penginapan saya</h1>
          <div className="grid grid-cols-4 justify-items-center gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;