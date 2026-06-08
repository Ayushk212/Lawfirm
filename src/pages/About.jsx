import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-6">
          About Our Firm
        </h1>

        <p className="text-lg text-slate-600">
          We provide trusted legal services with professionalism and integrity.
        </p>
      </div>
    </MainLayout>
  );
}