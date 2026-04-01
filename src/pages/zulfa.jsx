import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import codeImg from "../assets/image.jpg";
import uxImg from "../assets/ux.jpg";
import designImg from "../assets/design.jpg";

export default function Profile() {

  const profile = {
    email: "zulfafti@gmail.com",
    kelas: "T2B",
    domisili: "Malang",
    prodi: "Teknik Informatika",
    skills: ["Frontend", "Backend", "cyber security", "UI/UX"],
  };

  return (
    <div className="min-h-screen bg-[#f5f7f2] text-gray-700 font-sans pb-20">

      {/* BANNER */}
      <div className="relative h-60 bg-gradient-to-r from-orange-200 to-green-200">

        {/* TOMBOL KELUAR */}
        <button
          className="absolute top-5 left-5 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl shadow hover:bg-white transition font-medium"
          onClick={() => window.location.href = "/"}
        >
          Keluar
        </button>

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 top-30"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <img
            src={profileImg}
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
            alt="profile"
          />
        </motion.div>
      </div>

      {/* PROFILE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto -mt-1 bg-white rounded-2xl shadow-lg p-15 text-center"
      >
        <span className="text-green-600 text-sm border px-3 py-1 rounded-full">
          D3 Teknologi Informasi
        </span>

        <h1 className="text-3xl font-bold mt-4">Zulfa Fitri</h1>
        <div className="w-12 h-1 bg-green-500 mx-auto mt-2 rounded"></div>

        <motion.div
          key="SkillsSection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto text-center w-fit mt-7"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {profile.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm hover:scale-110 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="flex flex-cols-1 md:grid-cols-2 gap-6 w-[80%] max-w-3xl mt-8 mx-auto">
        {/* PROFILE BOX */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow p-7 transition-transform hover:scale-[1.02] hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-[#67aa6a] mb-3 flex items-center gap-2">
            Profile
          </h3>

          <p><b>Kelas:</b> T2B</p>
          <p><b>Domisili:</b> Malang</p>
          <p><b>Universitas:</b> Brawijaya</p>
          <p><b>Email:</b> zulfafti@gmail.com</p>
        </motion.div>

        {/* ABOUT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow p-6 text-justify transition-transform hover:scale-[1.02] hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-[#67aa6a] mb-3">
            Tentang Diri
          </h3>

          <p className="text-gray-600 mb-3">
            Saya adalah Zulfa Fitri, mahasiswa Teknologi Informasi di Universitas Brawijaya yang tertarik pada dunia pengembangan web dan desain digital. Saya menikmati proses belajar hal baru, terutama yang berhubungan dengan pemrograman, UI/UX, dan teknologi kreatif. Dalam keseharian, saya sering mengerjakan proyek kecil untuk menambah pengalaman dan memperkuat kemampuan saya. Saya tipe orang yang teliti, suka eksplorasi, dan selalu ingin meningkatkan kualitas pekerjaan saya. Bagi saya, bidang teknologi bukan hanya tentang kode, tetapi juga tentang bagaimana menciptakan solusi yang bermanfaat dan memiliki nilai estetika yang baik.
          </p>
        </motion.div>
      </div>

      {/* PENCAPAIAN */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow p-6 mt-10 w-[85%] max-w-3xl mt-8 mx-auto"
      >
        <h3 className="text-xl font-semibold text-[#67aa6a] mb-6">
          Pencapaian
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 rounded-xl px-6 py-4 text-center shadow"
          >
            <motion.img
              src={codeImg}
              className="w-45 mx-auto"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <p className="text-lg font-semibold mt-3">Tokopedia Frontend Team</p>
            <p className="bg-[#a8d3a8] text-white px-3 py-1 mt-6 rounded-lg text-sm">
              2023-2024
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#b4e6b4] rounded-xl px-6 py-4 text-center shadow"
          >
            <motion.img
              src={uxImg}
              className="w-45 mx-auto"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <p className="text-lg font-semibold mt-3">UI/UX Canva Team</p>
            <p className="bg-[#a8d3a8] text-white px-3 py-1 mt-13 rounded-lg text-sm">
              2024-2025
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 rounded-xl px-6 py-4 text-center shadow"
          >
            <motion.img
              src={designImg}
              className="w-45 mx-auto"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <p className="text-lg font-semibold mt-3">Graphic Designer Blibli Team</p>
            <p className="bg-[#a8d3a8] text-white px-3 py-1 mt-2 rounded-lg text-sm">
              2025-2026
            </p>
          </motion.div>

        </div>

      </motion.div>

    </div>
  );
}