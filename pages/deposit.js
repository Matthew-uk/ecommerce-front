import BottomNav from "@/components/BottomMenu";
import Center from "@/components/Center";
import Header from "@/components/Header";
import { useUser } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";

const DepositContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: #222;
  border-radius: 8px;
  color: #fff;
  padding-block: 1em;
  padding-inline: 1em;
  /* min-height: 80vh; */
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;
  padding-bottom: 1em;
`;

const Price = styled.div`
  width: 25%;
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
  /* font-family: mono; */
  :hover {
    color: #fff;
    background: #000;
  }
`;

const AmountInput = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  width: 100%;
  background: transparent;
  padding: 5px;
  color: #fff;
  outline: none;
  transition: all 0.3s ease-in-out;
  margin-top: 1em;
  font-size: 1em;
  /* font-family: mono; */
  letter-spacing: 2px;
  font-family: "Poppins", sans-serif;
  :focus {
    border: none;
    border-bottom: 1px solid rebeccapurple;
    border-radius: 0px;
  }
  ::placeholder {
    /* color: #fff; */
  }
`;

const DepositBtn = styled.button`
  border: none;
  width: max-content;
  margin-top: 1em;
  background: #1f618d;
  text-align: center;
  padding: 1em 2em;
  color: #fff;
  transition: all 0.3s ease-in-out;
  letter-spacing: 1.5px;
  font-weight: bolder;
  /* border-radius: 5px; */
  :hover {
    color: #1f618d;
    background: #fff;
  }
`;

const LoadingText = styled.p`
  color: #1f618d;
  font-size: 1.2em;
  margin-top: 1em;
`;

const DepositPage = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setDeposit } = useUser();

  const handleChangeAmount = (amount) => {
    setDepositAmount(amount);
  };

  const handleDeposit = () => {
    // Simulate loading for 3 seconds
    setLoading(true);
    setTimeout(() => {
      // Perform deposit logic here
      console.log("Making deposit...");
      setLoading(false);
      router.push("/payment");
    }, 3000);
    setDeposit(depositAmount);
  };

  return (
    <div style={{ background: "#0D1119", color: "#fff", height: "100vh" }}>
      <BottomNav />
      <Center>
        <DepositContainer>
          <p>Enter/Select the amount you would like to deposit.</p>
          <p>Choose Amount:</p>
          <PriceContainer>
            <Price onClick={() => handleChangeAmount(2000)}>₦2,000</Price>
            <Price onClick={() => handleChangeAmount(5000)}>₦5,000</Price>
            <Price onClick={() => handleChangeAmount(10000)}>₦10,000</Price>
            <Price onClick={() => handleChangeAmount(20000)}>₦20,000</Price>
            <Price onClick={() => handleChangeAmount(25000)}>₦25,000</Price>
            <Price onClick={() => handleChangeAmount(50000)}>₦50,000</Price>
            <Price onClick={() => handleChangeAmount(100000)}>₦100,000</Price>
            <Price onClick={() => handleChangeAmount(200000)}>₦200,000</Price>
            <Price onClick={() => handleChangeAmount(400000)}>₦400,000</Price>
          </PriceContainer>
          <AmountInput
            type="number"
            placeholder="Other Amount in (NGN)"
            onChange={(e) => setDepositAmount(e.target.value)}
            value={depositAmount}
          />
          <DepositBtn onClick={handleDeposit}>
            {loading ? "Making Deposit..." : "Deposit"}
          </DepositBtn>
          {loading && <LoadingText>Making deposit...</LoadingText>}
        </DepositContainer>
      </Center>
    </div>
  );
};

export default DepositPage;
