import Center from "@/components/Center";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookies";
import axios from "axios";
import { useUser } from "@/store/store";
import { useRouter } from "next/navigation";
import AccountSection from "@/components/Account";

const AccountPage = () => {
  const { name, setName, setBalance, setReferralCode } = useUser();
  const [loading, setLoading] = useState(false);
  const handleGetUser = async () => {
    try {
      setLoading(true);
      const token = Cookies.getItem("token");
      const res = await axios.get(
        `https://node-backend-v1.onrender.com/api/users/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const loggedInUser = res.data.fullName;
      setName(loggedInUser);
      setBalance(res.data.balance);
      setReferralCode(res.data.referralCode);
      console.log(res.data);
      console.log({ token, loggedInUser });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUser();
    console.log(`Name: ${name}`);
  }, []);
  return (
    <div>
      <Header />
      <Center>{loading ? "Loading user data..." : <AccountSection />}</Center>
    </div>
  );
};

export default AccountPage;
