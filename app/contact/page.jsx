import Navbar from "@/components/Navbar"; // Pastikan path ini sesuai dengan struktur foldermu
import Footer from "@/components/Footer"; // Pastikan path ini sesuai dengan struktur foldermu

export default function ContactPage() {
  return (
    <div>
      {/* Menampilkan Navbar */}
      <Navbar />

      {/* Konten Halaman Contact */}
      <div className="min-h-screen bg-gray-100 py-12 px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
          {/* Judul Halaman */}
          <h1 className="text-4xl font-extrabold text-black-600 text-center mb-10">Hubungi Kami</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulir Kontak */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Kirim Pesan</h2>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                      Nama
                    </label>
                    <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg mt-2" placeholder="Masukkan Nama Anda" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg mt-2" placeholder="Masukkan Email Anda" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                      Pesan
                    </label>
                    <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded-lg mt-2" rows="5" placeholder="Masukkan Pesan Anda" />
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>

            {/* Informasi Kontak */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Informasi Kontak</h2>
              <p className="text-lg text-gray-600 mb-4">Kami siap membantu Anda. Berikut adalah beberapa cara untuk menghubungi kami:</p>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l18 12M3 18l18-12" />
                  </svg>
                  <span className="text-lg text-gray-700">support@quickcart.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79l-7.47-7.47m0 0L12 6M21 12l-7.47 7.47m0 0L12 18" />
                  </svg>
                  <span className="text-lg text-gray-700">(021) 123-4567</span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12l8-4" />
                  </svg>
                  <span className="text-lg text-gray-700">www.quickcart.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menampilkan Footer */}
      <Footer />
    </div>
  );
}
