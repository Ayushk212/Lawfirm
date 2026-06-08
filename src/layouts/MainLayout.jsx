import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import Newsletter from "../components/Newsletter";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 pt-20 md:pt-24">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Newsletter />

      <Footer />
    </div>
  );
}