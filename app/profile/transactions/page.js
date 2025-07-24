"use client";

import { useEffect, useState } from "react";
import { userTransactions } from "@/core/services/config";

function UserTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const data = await userTransactions();
        setTransactions(data);
      } catch (err) {
        setError("مشکلی در دریافت تراکنش‌ها پیش آمده");
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);
  return (
    <div>
      <h3>transactions</h3>
      <div>
        {loading ? (
          <p>در حال بارگذاری...</p>
        ) : error ? (
          <p>{error}</p>
        ) : transactions.length === 0 ? (
          <p>تراکنشی وجود ندارد</p>
        ) : (
          transactions.map((transaction) => (
            <div key={transaction.id}>
              <p>{transaction.amount}</p>
              <p>
                {new Date(transaction.createdAt).toLocaleDateString("fa-IR")}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserTransactions;
