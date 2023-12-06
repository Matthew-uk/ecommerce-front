import Center from "@/components/Center";
import Header from "@/components/Header";
import { useUser } from "@/store/store";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookies";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const WithdrawContainer = styled.div``;

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WithdrawInputContainer = styled.div`
  background: #ccc;
  color: #000;
  padding: 1em;
  border-radius: 20px;
`;

const WithdrawInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  background: transparent;
  outline: none;
  transition: all 0.3s ease-in-out;
  width: 50%;
  :focus {
    border-bottom: 2px solid rebeccapurple;
    width: 100%;
  }
`;

const Withdraw = () => {
  const { balance } = useUser();
  const [amount, setAmount] = useState(0);

  const handleWithdrawChange = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  const WithdrawConditions = styled.div`
    display: flex;
    flex-direction: row;
    height: max-content;
    margin-top: 3em;
    justify-content: space-between;
  `;
  const WithdrawCondition = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* width: 50px;
    height: 50px; */
    img {
      width: 50px;
      height: 50px;
    }
  `;

  const WithdrawBtn = styled.button`
    background: #0078e8;
    width: 100%;
    padding-block: 1em;
    color: #fff;
    border: none;
    border-radius: 5px;
  `;

  const {
    name,
    setName,
    setBalance,
    setReferralCode,
    setUserId,
    userId,
    setWithdrawal,
  } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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
      setUserId(res.data.id);
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
    console.log(`User id: ${userId}`);
  }, []);

  const handleWithdrawal = () => {
    if (amount > balance) {
      toast.error(
        "You don't have enough balance to withdraw the amount you entered. Try funding your account",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
      router.push("/deposit");
    } else if (amount < 800) {
      toast.warn("Minimum Withdrawal of ₦800");
    } else {
      setWithdrawal(amount);
      router.push("/account-details");
    }
  };

  return (
    <div style={{ background: "#222", minHeight: "100vh", color: "#fff" }}>
      {loading ? (
        <p>Hold on, Loading User details</p>
      ) : (
        <>
          <Header />
          <Center>
            <WithdrawContainer>
              <p>Withdraw your funds</p>
              <Balance>
                <p style={{ color: "#7FFBB0", letterSpacing: "2px" }}>
                  ₦{balance.toLocaleString()}
                </p>
              </Balance>
              <WithdrawInputContainer>
                <p>Enter amount you would like to withdraw</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5em",
                  }}
                >
                  ₦
                  <WithdrawInput
                    type="number"
                    placeholder="Enter amount to withdraw"
                    onChange={handleWithdrawChange}
                    value={amount}
                  ></WithdrawInput>
                  <p onClick={() => setAmount(balance)}>All</p>
                </div>
                <WithdrawBtn
                  onClick={handleWithdrawal}
                  style={{ background: "#0078E8", width: "100%" }}
                >
                  Withdraw
                </WithdrawBtn>
              </WithdrawInputContainer>
              <WithdrawConditions>
                <WithdrawCondition>
                  <img
                    src={"https://livent.ltd/static/livent/img/ic_vip1.png"}
                    alt="24H"
                  />
                  <p>Auto</p>
                </WithdrawCondition>
                <WithdrawCondition>
                  <img
                    src={"https://livent.ltd/static/livent/img/ic_vip2.png"}
                    alt="24H"
                  />
                  <p>24H Arrival Time</p>
                </WithdrawCondition>
                <WithdrawCondition>
                  <img
                    src={"https://livent.ltd/static/livent/img/ic_vip3.png"}
                    alt="24H"
                  />
                  <p>₦800</p>
                </WithdrawCondition>
                {/* <WithdrawCondition>
              <img
                src={"https://livent.ltd/static/livent/img/ic_vip2.png"}
                alt="24H"
              />
              <p>24H</p>
            </WithdrawCondition> */}
              </WithdrawConditions>
            </WithdrawContainer>
          </Center>
        </>
      )}
    </div>
  );
};

export default Withdraw;
