async function getTour(id) {
  const res = await fetch(`http://localhost:6500/tour/${id}`);
  if (!res.ok) throw new Error("خطا در دریافت تور");
  return res.json();
}

export default async function TourDetailPage({ params }) {
  const tour = await getTour(params.tourId);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{tour.title}</h1>
      <img src={tour.image} alt={tour.title} className="w-full h-60 object-cover rounded" />

      <div className="mt-4 space-y-2">
        <p>از: {tour.origin.name}</p>
        <p>به: {tour.destination.name}</p>
        <p>شروع: {new Date(tour.startDate).toLocaleDateString()}</p>
        <p>پایان: {new Date(tour.endDate).toLocaleDateString()}</p>
        <p>قیمت: {Number(tour.price).toLocaleString()} تومان</p>
        <p>ظرفیت باقی‌مانده: {tour.availableSeats}</p>

        <ul className="mt-2 list-disc list-inside">
          {tour.options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}