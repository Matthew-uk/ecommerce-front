import Center from "@/components/Center";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookies";
import axios from "axios";
import { useUser } from "@/store/store";
import { useRouter } from "next/navigation";
import AccountSection from "@/components/Account";
import BottomNav from "@/components/BottomMenu";
import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background: rgb(13, 17, 25); */
  /* padding: 20px; */
  padding-top: 2em;
  border-radius: 10px;
  width: 100%;
  margin: 0;
  img {
    width: 90% !important;
    /* border-radius: 10px; */
  }
`;

const AccountPage = () => {
  const { name, setName, setBalance, setReferralCode, setUserId, userId } =
    useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleGetUser = async () => {
    try {
      setLoading(true);
      const token = Cookies.getItem("token");
      const res = await axios.get(
        `https://cute-erin-seahorse-boot.cyclic.app/api/users/`,
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
      setUserId(res.data.id);
      console.log(res.data);
      console.log({ token, loggedInUser });
    } catch (error) {
      console.log(error);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUser();
    console.log(`Name: ${name}`);
    console.log(`User id: ${userId}`);
  }, []);
  return (
    <div
      style={{
        background: "rgb(13, 17, 25)",
        marginTop: "-1em",
      }}
    >
      {/* <Header /> */}

      <Center>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1em",
              alignContent: "center",
              color: "white",
              minHeight: "100vh",
            }}
          >
            <p>Loading user data...</p>
          </div>
        ) : (
          <>
            <ImgContainer>
              <img
                style={{ width: "100%" }}
                src="https://livent.ltd/static/livent/img/banner2.png"
              />
            </ImgContainer>
            <AccountSection />
          </>
        )}
      </Center>
      <BottomNav />
    </div>
  );
};

export default AccountPage;
