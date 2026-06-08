import MainLayout from "../layouts/MainLayout";

export default function FAQ() {
  return (
    <MainLayout>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-10">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                How do I book a consultation?
              </h3>
              <p className="text-slate-600">
                You can contact us via phone or email to schedule a meeting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you handle court cases?
              </h3>
              <p className="text-slate-600">
                Yes, we represent clients in various courts across jurisdictions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What areas of law do you cover?
              </h3>
              <p className="text-slate-600">
                Civil, criminal, family, corporate, and property law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}