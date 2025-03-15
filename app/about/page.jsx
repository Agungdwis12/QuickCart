export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Tentang QuickCart</h1>
        <p className="text-gray-600 text-lg">
          QuickCart adalah platform e-commerce sederhana yang saya bangun untuk memperdalam pemahaman tentang full-stack development. Menggunakan{" "}
          <span className="font-semibold text-blue-600">Next.js, MongoDB, Inngest, Cloudinary, Clerk</span>, dan <span className="font-semibold text-blue-600">Vercel</span>, aplikasi ini dirancang untuk memberikan pengalaman jual beli yang
          efisien dan mudah digunakan.
        </p>

        <h2 className="text-2xl font-bold text-gray-700 mt-6">✨ Fitur Utama</h2>
        <ul className="text-gray-600 text-lg mt-3 space-y-2">
          <li>✅ Login & Registrasi dengan Clerk</li>
          <li>✅ Seller dapat menambah & menghapus produk</li>
          <li>✅ Perhitungan total harga otomatis</li>
          <li>✅ Menambahkan produk ke keranjang</li>
          <li>✅ Order produk dengan mudah</li>
        </ul>

        <div className="mt-8">
          <a href="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
