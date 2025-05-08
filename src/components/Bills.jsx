import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("/bills.json")
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => alert("Failed to load bills:", err));
  }, []);

  if (!bills.length) return <p>Loading...</p>;

  return (
    <div className="pt-18">
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {bills.map((bill) => (
          <div key={bill.id} className="flex flex-col md:flex-row gap-7 bg-white shadow-lg p-3 rounded-md">
            <div className="flex justify-center md:justify-start">
                <img className="w-36 h-36 rounded-lg  md:w-[250px] md:h-[250px] " src={bill.logo} alt="" />
            </div>
            <div className="md:mt-8 space-y-2">
              <h2 className="text-xl md:text-2xl text-[#0c2f54] font-semibold">{bill.organization}</h2>
              <p className="text-lg md:text-xl text-[#0c2f54] font-medium">Bill type : {bill.bill_type}</p>
              <p className="text-base md:text-xl text-[#0c2f54]">Amount : <span className=" text-lg md:text-xl font-semibold">{bill.amount}</span></p>
              <p className="text-[#0c2f54] mb-2 md:mb-5">Due Date: {new Date(bill.due_date).toLocaleDateString()}</p>

              <Link to={`/payBill/${bill.id}`}
                className=" font-semibold bg-[#E0F2FE] text-[#0284C7] px-4 py-2 rounded hover:bg-[#0284C7] hover:text-white"
              > Pay Now
              </Link>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
