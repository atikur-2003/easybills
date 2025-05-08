import { useParams } from "react-router";
import { useEffect, useState } from "react";

const PayBill = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    fetch("/bills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setBill(found);
      })
      .catch((err) => alert("Error loading bill:", err));
  }, [id]);

  if (!bill) return <p className="p-4">Loading or not found...</p>;

  return (
    <div className="pt-24 pb-14 px-3 md:px-0">
      <div className="flex flex-col md:flex-row gap-7 md:gap-20 bg-white shadow-lg p-3 rounded-md md:max-w-2xl mx-auto">
        <div className="flex justify-center md:justify-start">
          <img
            className="w-36 h-36 rounded-lg  md:w-[250px] md:h-[250px] "
            src={bill.logo}
            alt=""
          />
        </div>
        <div className="md:mt-8 space-y-2">
          <h2 className="text-xl md:text-2xl text-[#0c2f54] font-semibold">
            {bill.organization}
          </h2>
          <p className="text-lg md:text-xl text-[#0c2f54] font-medium">
            Bill type : {bill.bill_type}
          </p>
          <p className="text-base md:text-xl text-[#0c2f54]">
            Amount :{" "}
            <span className=" text-lg md:text-xl font-semibold">
              {bill.amount}
            </span>
          </p>
          <p className="text-[#0c2f54] mb-2 md:mb-5">
            Due Date: {new Date(bill.due_date).toLocaleDateString()}
          </p>

          <button className=" font-semibold bg-[#E0F2FE] text-[#0284C7] px-4 py-2 rounded hover:bg-[#0284C7] hover:text-white">
            {" "}
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayBill;
