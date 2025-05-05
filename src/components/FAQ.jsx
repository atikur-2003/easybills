import React from "react";

const FAQ = () => {
  return (
    <div className="my-20 max-w-11/12 mx-auto">
      <div className="text-center my-10">
        <h1 className="text-2xl font-bold">Frequently Asked Question</h1>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-lg font-semibold">
          1. How do I create an account?
        </div>
        <div className="collapse-content text-base text-gray-600">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold">
          2. How do I pay a utility bill on this website?
        </div>
        <div className="collapse-content text-base text-gray-600">
          After logging in, go to the "Bills" page, choose the bill you want to
          pay, and click the “Pay” button. Then, select a card and confirm your
          payment. The amount will be deducted from your balance.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold">
          3. What types of bills can I pay here?
        </div>
        <div className="collapse-content text-base text-gray-600">
          You can pay for electricity, gas, water, internet, tuition fees, and
          credit card bills. We support major service providers like DESCO,
          WASA, NESCO, Tista Gas, and more.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold">
          4. How do I update my profile information?
        </div>
        <div className="collapse-content text-base text-gray-600">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold">
          5. Is my personal and payment information secure?
        </div>
        <div className="collapse-content text-base text-gray-600">
          Yes! We use Firebase Authentication and secure hosting. All data is
          encrypted and protected with industry-standard security practices.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
