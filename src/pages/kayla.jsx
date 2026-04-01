import fotoKayla from "../assets/kayla.jpg";
export default function Kayla() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-sky-100 to-purple-100 text-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-pink-300/30 blur-3xl"></div>
        <div className="absolute right-[-100px] top-[180px] h-80 w-80 rounded-full bg-sky-300/30 blur-3xl"></div>
        <div className="absolute bottom-[-120px] left-[25%] h-72 w-72 rounded-full bg-purple-300/30 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-8 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg md:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="relative mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-full bg-pink-300/40 blur-xl"></div>
              <img
                src={fotoKayla}
                alt="Foto Profil Kayla Rihadatul Haniyah"
                className="relative h-40 w-40 rounded-full border-4 border-pink-300 object-cover shadow-lg"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="mb-2 inline-block rounded-full border border-pink-200 bg-pink-100/80 px-4 py-1 text-sm font-medium text-pink-600">
                Profile Page
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-gray-800 md:text-5xl">
                Kayla Rihadatul Haniyah
              </h1>

              <p className="mt-3 text-base text-gray-600 md:text-lg">
                Mahasiswa Teknologi Informasi yang tertarik dengan Cybersecurity,
                 Data analyst, dan Data engineer
                
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <span className="rounded-xl border border-pink-200 bg-white/60 px-4 py-2 text-sm text-gray-700 shadow-sm">
                  Kelas: T2B
                </span>
                <span className="rounded-xl border border-sky-200 bg-white/60 px-4 py-2 text-sm text-gray-700 shadow-sm">
                  Prodi: D3 Teknologi Informasi
                </span>
                <span className="rounded-xl border border-purple-200 bg-white/60 px-4 py-2 text-sm text-gray-700 shadow-sm">
                  Domisili: Malang, Jawa Timur
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left side */}
          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-300 hover:scale-[1.01]">
              <h2 className="mb-5 text-xl font-semibold text-purple-500">
                Informasi Singkat
              </h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-pink-100 bg-white/60 p-4">
                  <p className="text-sm text-gray-500">Nama Lengkap</p>
                  <p className="mt-1 font-medium text-gray-800">
                    Kayla Rihadatul Haniyah
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-100 bg-white/60 p-4">
                  <p className="text-sm text-gray-500">Kelas</p>
                  <p className="mt-1 font-medium text-gray-800">T2B</p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-white/60 p-4">
                  <p className="text-sm text-gray-500">Jurusan / Prodi</p>
                  <p className="mt-1 font-medium text-gray-800">
                    Teknologi Informasi
                  </p>
                </div>

                <div className="rounded-2xl border border-pink-100 bg-white/60 p-4">
                  <p className="text-sm text-gray-500">Domisili</p>
                  <p className="mt-1 font-medium text-gray-800">
                    Malang, Jawa Timur
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-300 hover:scale-[1.01]">
              <h2 className="mb-4 text-xl font-semibold text-purple-500">
                 Minat
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "ReactJS",
                  "Tailwind CSS",
                  "JavaScript",
                  "Git & GitHub",
                  "UI/UX",
                  "Responsive Design",
                  "Cybersecurity",
                  "Data Analyst" ,
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-purple-200 bg-purple-100 px-4 py-2 text-sm text-purple-600 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-300 hover:scale-[1.005] md:p-8">
              <h2 className="mb-5 text-2xl font-semibold text-purple-500">
                Tentang Diri
              </h2>

              <p className="text-justify leading-8 text-gray-600">
                Halo, saya Kayla Rihadatul Haniyah, Saya telah memiliki minat yang 
                besar di bidang teknologi informasi sejak saya duduk di bangku SMP. 
                Ketertarikan tersebut terus berkembang seiring dengan meningkatnya rasa 
                ingin tahu saya terhadap dunia digital dan teknologi. Saya mulai lebih serius 
                mendalami bidang ini ketika saya berada di kelas 1 SMA dengan belajar membuat 
                website secara mandiri. Dari situ, saya mulai memahami dasar-dasar pengembangan web 
                serta bagaimana sebuah aplikasi dapat dibangun dan digunakan oleh banyak orang. 
                Seiring berjalannya waktu, saya tidak hanya fokus pada pengembangan web, 
                tetapi juga mulai mengeksplorasi berbagai bidang lain dalam teknologi informasi 
                seperti cybersecurity, data analyst, dan bidang terkait lainnya. 
                Proses belajar tersebut membuat saya semakin tertarik untuk terus mengembangkan kemampuan, 
                memperluas wawasan, serta mengikuti perkembangan teknologi yang terus berkembang pesat 
                hingga saat ini.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-300 hover:scale-[1.01]">
                <h3 className="mb-4 text-xl font-semibold text-purple-500">
                  Tujuan Belajar
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Menguasai dasar ReactJS dengan lebih baik</li>
                  <li>• Memahami workflow Git dan GitHub dalam tim</li>
                  <li>• Membuat UI yang menarik dengan Tailwind CSS</li>
                  <li>• Belajar membangun website yang responsive</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-300 hover:scale-[1.01]">
                <h3 className="mb-4 text-xl font-semibold text-purple-500">
                  Kontak
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>Email: kaylaahaniyah@gmail.com</p>
                  <p>Instagram: @kylaaarh</p>
                  <p>GitHub: github.com/kayla200507 -stack</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 rounded-3xl border border-white/40 bg-white/70 px-6 py-5 text-center text-sm text-gray-500 shadow-lg backdrop-blur-lg">
          Dibuat dengan ReactJS + Tailwind CSS untuk tugas project
          implementation.
        </div>
      </div>
    </div>
  );
}