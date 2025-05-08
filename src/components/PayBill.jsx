import { useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PayBill = () => {
  const { payBill } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [billPay, setBillPay] = useState(null);

  useEffect(() => {
    fetch("/bills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setBillPay(found);
      })
      .catch((err) => alert("Error loading bill:", err));
  }, [id]);

  const handlePay = () => {
    if (billPay) {
      payBill(billPay.id, billPay.amount);
      navigate("/bills");
    }
  };

  if (!billPay) {
    return <div className="pt-24 text-center text-lg">Loading bill...</div>;
  }

  return (
    <div className="pt-24 pb-14 px-3 md:px-0">
      <div className="flex flex-col md:flex-row gap-7 md:gap-20 bg-white shadow-lg p-3 rounded-md md:max-w-2xl mx-auto">
        <div className="flex justify-center md:justify-start">
          <img
            className="w-36 h-36 rounded-lg md:w-[250px] md:h-[250px]"
            src={billPay.logo}
            alt="Organization Logo"
          />
        </div>
        <div className="md:mt-8 space-y-2">
          <h2 className="text-xl md:text-2xl text-[#0c2f54] font-semibold">
            {billPay.organization}
          </h2>
          <p className="text-lg md:text-xl text-[#0c2f54]">
            Bill type: <span className="font-medium">{billPay.bill_type}</span>
          </p>
          <p className="text-base md:text-xl text-[#0c2f54]">
            Amount:{" "}
            <span className="text-lg md:text-xl font-semibold">
              ৳{billPay.amount}
            </span>
          </p>
          <p className="text-[#0c2f54] mb-2 md:mb-5">
            Due Date: {new Date(billPay.due_date).toLocaleDateString()}
          </p>
          <button
            onClick={handlePay}
            className="font-semibold bg-[#E0F2FE] text-[#0284C7] px-4 py-2 rounded hover:bg-[#0284C7] hover:text-white"
          >
            Pay Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayBill;
