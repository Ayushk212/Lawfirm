import MainLayout from "../layouts/MainLayout";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <MainLayout>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-10">
            Practice Areas
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}