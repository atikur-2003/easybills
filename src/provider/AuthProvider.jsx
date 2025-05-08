import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(10000);
  const [paidBills, setPaidBills] = useState([]);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    setLoading(true);
    setBalance(10000); 
    setPaidBills([]); 
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const payBill = (billId, amount) => {
    if (paidBills.includes(billId)) {
      Swal.fire({ 
        icon: "error", 
        text: "Bill already paid" 
        });
      return;
    }

    if (balance < amount) {
      Swal.fire({ icon: "error", 
        text: "Insufficient balance" 
    });
      return;
    }

    setBalance((prev) => prev - amount);
    setPaidBills((prev) => [...prev, billId]);

    Swal.fire({
      icon: "success",
      text: "Bill Paid Successfully!",
    });
  };
  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    updateUser,
    balance,
    paidBills,
    payBill,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
