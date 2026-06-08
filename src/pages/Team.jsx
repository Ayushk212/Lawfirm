import MainLayout from "../layouts/MainLayout";

export default function Team() {
  return (
    <MainLayout>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-10">
            Our Team
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border p-6 rounded-xl">
              <h3 className="font-semibold">Managing Partner</h3>
              <p className="text-slate-600 mt-2">
                Senior legal expert with litigation experience.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-semibold">Senior Associate</h3>
              <p className="text-slate-600 mt-2">
                Handles corporate and civil matters.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-semibold">Legal Consultant</h3>
              <p className="text-slate-600 mt-2">
                Provides advisory and compliance support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}