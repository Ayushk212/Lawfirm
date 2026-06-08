import MainLayout from "../layouts/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-slate-600">
          Page Not Found
        </p>
      </div>
    </MainLayout>
  );
}