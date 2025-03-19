import React, { useState, useEffect } from "react";
import { FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaQuoteLeft, FaShoppingCart } from "react-icons/fa";

export default function SmartGreenTech() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-[#F2FFF5] min-h-screen text-gray-900">
      {/* Navbar */}
      <nav className="bg-[#007A33] text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold">SmartGreenTech</h1>
        <ul className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"}`}>
          <li><a href="index.html" className="hover:underline">หน้าแรก</a></li>
          <li><a href="about.html" className="hover:underline">เกี่ยวกับเรา</a></li>
          <li><a href="services.html" className="hover:underline">บริการ</a></li>
          <li><a href="projects.html" className="hover:underline">ผลงาน</a></li>
          <li><a href="reviews.html" className="hover:underline">รีวิวจากลูกค้า</a></li>
          <li><a href="contact.html" className="hover:underline">ติดต่อเรา</a></li>
          <li><a href="https://www.maxpower-shop.com/" target="_blank" className="hover:underline flex items-center"><FaShoppingCart className="mr-2" />MaxPower</a></li>
        </ul>
        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-white text-4xl font-bold bg-green-700 shadow-lg">
        <h1>SmartGreenTech</h1>
        <p className="text-lg mt-2">พลังงานสะอาดเพื่ออนาคต</p>
      </header>

      {/* Home Section */}
      <section id="home" className="p-8 text-center">
        <h2 className="text-3xl font-semibold text-[#007A33]">ยินดีต้อนรับสู่ SmartGreenTech</h2>
        <p className="mt-2 text-lg">ผู้นำด้านพลังงานสะอาดและโซลาร์เซลล์</p>
        <img src="images/solar.jpg" alt="พลังงานแสงอาทิตย์" className="mx-auto mt-6 rounded-lg shadow-lg w-2/3" />
      </section>

      {/* Services Section */}
      <section id="services" className="p-8 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold text-[#007A33]">บริการของเรา</h2>
        <p className="mt-2 text-lg">ออกแบบและติดตั้งระบบพลังงานสะอาดครบวงจร พร้อมให้คำปรึกษาโดยผู้เชี่ยวชาญ</p>
        <a href="services.html" className="mt-4 inline-block bg-[#007A33] text-white px-6 py-3 rounded-lg shadow-md">ดูรายละเอียด</a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8 text-center">
        <h2 className="text-3xl font-semibold text-[#007A33]">ผลงานของเรา</h2>
        <p className="mt-2 text-lg">ชมโครงการที่เราได้ติดตั้งและดำเนินการ</p>
        <a href="projects.html" className="mt-4 inline-block bg-[#007A33] text-white px-6 py-3 rounded-lg shadow-md">ดูผลงานทั้งหมด</a>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="p-8 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold text-[#007A33]">รีวิวจากลูกค้า</h2>
        <p className="mt-2 text-lg">ความคิดเห็นจากลูกค้าของเรา</p>
        <a href="reviews.html" className="mt-4 inline-block bg-[#007A33] text-white px-6 py-3 rounded-lg shadow-md">อ่านรีวิว</a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 text-center">
        <h2 className="text-3xl font-semibold text-[#007A33]">ติดต่อเรา</h2>
        <p className="mt-2 text-lg">ข้อมูลการติดต่อและที่ตั้งของเรา</p>
        <a href="contact.html" className="mt-4 inline-block bg-[#007A33] text-white px-6 py-3 rounded-lg shadow-md">ดูรายละเอียดการติดต่อ</a>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-[#007A33] text-white mt-8">
        <p>© 2025 SmartGreenTech. สงวนลิขสิทธิ์</p>
        <p>ที่อยู่: 200/215 หมู่ 1 ต.บางเสาธง อ.บางเสาธง จ.สมุทรปราการ 10570</p>
        <p>ติดต่อเรา: marketing@smartgreentech.co.th | โทร: 02-102-4255, 083-991-9690</p>
      </footer>
    </div>
  );
}
