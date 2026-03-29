import React, { useState } from 'react';

const LanikaProfile = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* LinkedIn Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Keisya Lanika</h1>
              <p className="text-sm text-gray-500">500+ koneksi</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 shadow-sm transition-all duration-200">
              💬 Pesan
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-200">
              Ikuti
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDEBAR - Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border p-8 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300">
            
            {/* Profile Picture  */}
            <div className="text-center mb-8">
                <div className="inline-block">
                     <img 
                        src="/foto-keisya.jpg" 
                        className="w-36 h-36 mx-auto rounded-3xl border-6 border-white shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-400 cursor-pointer object-cover ring-4 ring-gray-100 hover:ring-purple-200"
                        alt="Keisya Lanika" 
                     />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-1">Keisya Lanika</h2>
                <p className="text-blue-600 font-semibold text-xl">UI/UX Designer</p>
            </div>

            {/* Quick Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <span className="w-6 text-center mr-3">🎓</span>
                <span className="text-sm font-medium">TI-3 • Teknologi Informasi</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-6 text-center mr-3">📍</span>
                <span className="text-sm font-medium">Blitar, Jawa Timur</span>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
                👤 Tentang
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Saya adalah mahasiswa Teknologi Informasi di Universitas Brawijaya 
                yang memiliki minat besar dalam bidang pengembangan web dan desain UI/UX. 
                Saya aktif dalam organisasi kampus seperti BEM Fakultas Vokasi dan 
                Himpunan Mahasiswa, yang membantu saya mengembangkan kemampuan komunikasi, 
                kerja sama tim, serta kepemimpinan. Saya memiliki ketertarikan pada 
                frontend development menggunakan React serta desain menggunakan Figma. 
                Saya terus belajar dan mengembangkan diri untuk menjadi individu yang siap 
                menghadapi tantangan di dunia kerja. ✨
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200 flex items-center justify-center">
                💬 Kirim Pesan
              </button>
              <button className="w-full border-2 border-gray-200 py-3 px-6 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-200">
                👁️ Lihat Profil Lengkap
              </button>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Experience */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h3 className="font-semibold text-xl text-gray-900 mb-6 flex items-center">
              💼 Pengalaman
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">UI/UX Designer Intern</h4>
                  <p className="text-blue-600 font-semibold mb-2">PT Digital Creative</p>
                  <p className="text-sm text-gray-500 mb-2">Juni 2024 - Sekarang</p>
                  <p className="text-sm text-gray-600">Mendesain UI/UX untuk web & mobile apps</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Mahasiswa TI</h4>
                  <p className="text-gray-600 font-semibold mb-2">Universitas Brawijaya</p>
                  <p className="text-sm text-gray-500">2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h3 className="font-semibold text-xl text-gray-900 mb-6 flex items-center">
              🛠️ Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Figma', 'React', 'Tailwind CSS', 'UI/UX Design', 'JavaScript', 'Prototyping', 'HTML/CSS'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium border border-blue-200 hover:from-blue-200 hover:to-purple-200 cursor-pointer transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h3 className="font-semibold text-xl text-gray-900 mb-6 flex items-center">
              📈 Aktivitas Terbaru
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Menambahkan skill baru: Prototyping</p>
                  <p className="text-sm text-gray-500">2 jam yang lalu</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Update pengalaman magang</p>
                  <p className="text-sm text-gray-500">1 hari yang lalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanikaProfile;