"use client";
import { useEffect, useState } from "react";
import { userTours } from "@/core/services/config";

function UserTours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchUserTours = async () => {
      try {
        const data = await userTours();
        setTours(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserTours();
  }, []);

  return (
    <div>
      <h3>my-tours</h3>
      <div>
        {tours.map((tour) => (
          <div key={tour.id}>{tour.title || "🛑 عنوان موجود نیست"}</div>
        ))}
      </div>
    </div>
  );
}

export default UserTours;
