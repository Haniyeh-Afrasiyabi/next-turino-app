"use client";

import { useEffect, useState } from "react";
import { userTransactions } from "@/core/services/config";

function UserTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await userTransactions();
        setTransactions(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h3>transactions</h3>
      <div>
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <p>{transaction.amount}</p>

            <p>{transaction.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserTransactions;
