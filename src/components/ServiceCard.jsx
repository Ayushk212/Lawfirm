export default function ServiceCard({
  title,
  description
}) {
  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-3">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}