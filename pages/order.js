import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookies";
import { useUser } from "@/store/store";
import BottomNav from "@/components/BottomMenu";
import Center from "@/components/Center";
import styled from "styled-components";

// Remove unused styled component
// const OrderContainer = styled.div`
//   display: block;
// `;

const SingleOrder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Order = () => {
  const { name, setName, setBalance, setReferralCode, setUserId, userId } =
    useUser();
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [withdrawals, setWithdrawals] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const [display, setDisplay] = useState("deposit");

  const handleGetUser = async () => {
    try {
      setLoadingUser(true);
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
      console.error("Error fetching user:", error);
      // Display a user-friendly error message
    } finally {
      setLoadingUser(false);
    }
  };

  const getWithdrawals = async () => {
    try {
      setLoadingData(true);
      const res = await axios.get(
        `https://node-backend-v1.onrender.com/api/withdraw/user?id=${userId}`
      );
      console.log(res.data);
      setWithdrawals(res.data);
    } catch (error) {
      console.error("Error fetching withdrawals:", error);
      // Display a user-friendly error message
    } finally {
      setLoadingData(false);
    }
  };

  const getDeposits = async () => {
    try {
      setLoadingData(true);
      const res = await axios.get(
        `https://cute-erin-seahorse-boot.cyclic.app/api/deposit/user?id=${userId}`
      );
      console.log(res.data);
      setDeposits(res.data);
    } catch (error) {
      console.error("Error fetching deposits:", error);
      // Display a user-friendly error message
    } finally {
      setLoadingData(false);
    }
  };

  const renderOrders = (orders) => {
    return (
      <div>
        {loadingData && <p>Loading...</p>}
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order, index) => (
            <SingleOrder key={index}>
              {(!order.pending && order.approved && (
                <p style={{ color: "green" }}>Approved</p>
              )) ||
                (!order.approved && order.pending && (
                  <p style={{ color: "yellow" }}>Pending</p>
                )) || <p style={{ color: "#ff0000" }}>Failed</p>}
              {order && (
                <>
                  {order.pending}
                  {`₦${
                    order.withdraw.toLocaleString() ||
                    order.deposit.toLocaleString()
                  }`}
                </>
              )}
            </SingleOrder>
          ))
        ) : (
          <p>No orders to display</p>
        )}
      </div>
    );
  };
  useEffect(() => {
    handleGetUser();
    console.log(`Name: ${name}`);
    console.log(`User id: ${userId}`);
  }, []);

  useEffect(() => {
    getWithdrawals();
    getDeposits();
  }, [userId]);

  const OrderHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    p {
      text-align: center;
      border: 1px solid aliceblue;
      width: 50%;
      padding-block: 1em;
    }
  `;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "rgb(13, 17, 25)",
        border: "1px solid rgb(13, 17, 25)",
        color: "white",
      }}
    >
      <Center>
        {/* Removed OrderContainer */}
        <div>
          <OrderHeader>
            <p
              style={{ color: display === "withdrawal" ? "red" : "inherit" }}
              onClick={() => {
                console.log("Withdrawal clicked");
                setDisplay("withdrawal");
              }}
            >
              Withdrawal
            </p>
            <p
              style={{ color: display === "deposit" ? "red" : "inherit" }}
              onClick={() => {
                console.log("Deposit clicked");
                setDisplay("deposit");
              }}
            >
              Deposits
            </p>
          </OrderHeader>
          {display === "withdrawal" && renderOrders(withdrawals)}
          {display === "deposit" && renderOrders(deposits)}
        </div>
      </Center>
      <BottomNav />
    </div>
  );
};

export default Order;
