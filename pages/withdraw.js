import Center from "@/components/Center";
import Header from "@/components/Header";
import { useUser } from "@/store/store";
import React, { useState } from "react";
import styled from "styled-components";

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

  return (
    <div style={{ background: "#222", minHeight: "100vh", color: "#fff" }}>
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
              <p>₦8000</p>
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
    </div>
  );
};

export default Withdraw;
