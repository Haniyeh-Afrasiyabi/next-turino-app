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
      <div>
        {loading ? (
          <p>در حال بارگذاری...</p>
        ) : error ? (
          <p>{error}</p>
        ) : transactions.length === 0 ? (
          <p>تراکنشی وجود ندارد</p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-gray9">
            <table className="min-w-full divide-y divide-gray9 text-sm ">
              <thead className="bg-gray-100 text-gray-700 bg-white1 ">
                <tr>
                  <th className="text-center px-4 py-3 font-normal text-base">
                    تاریخ و ساعت
                  </th>
                  <th className="text-center px-4 py-3 font-normal text-base">
                    مبلغ(تومان)
                  </th>
                  <th className="hidden text-center px-4 py-3 font-normal text-base lg:block">
                    نوع تراکنش
                  </th>
                  <th className="text-center px-4 py-3 font-normal text-base">
                    شماره سفارش
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800 text-center text-sm font-light">
                      {new Date(transaction.createdAt).toLocaleDateString(
                        "fa-IR"
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-center text-sm font-light">
                      {transaction.amount}
                    </td>
                    <td className="hidden px-4 py-3 text-gray-800 text-center text-sm font-light lg:block">
                      ثبت نام در تور گردشگری
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-center text-sm font-light">
                      سفارش ۱۲۰۵۴۹۰۲
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserTransactions;
