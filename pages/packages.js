import BottomNav from "@/components/BottomMenu";
import Center from "@/components/Center";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookies";

const PackagesContainer = styled.div`
  background: #0d1119;
  min-height: 110vh;
  margin-top: -1em;
  color: #fff;
`;

const PackagesHeader = styled.div`
  padding-top: 2em;
  /* margin-top: 2em; */
`;

const InvestmentItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 250px;
  z-index: 0;
`;

const InvestmentPic = styled.div`
  position: relative;
`;

const InvestmentImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const InvestmentBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const InvestmentTitle = styled.b`
  display: block;
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const InvestmentSubtitle = styled.span`
  display: block;
  font-size: 0.8em;
  color: #777;
`;

const InvestmentParagraph = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const InvestmentHeading = styled.h4`
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 0.9em;
  padding: 0;
`;

const InvestmentHeading6 = styled.h6`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 0.9em;
  span {
    width: 50%;
  }
`;

const InvestmentButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  width: 100%;
`;

const InvestmentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const PackagesBody = styled.div``;

const ActiveInvestment = styled.div`
  /* border: 1px solid green; */
  margin-bottom: 1em;
  background: #07bc0c;
  border-radius: 5px;
  color: #fff;
  padding-block: 0.5em;
`;

const Packages = () => {
  const [sub, setSub] = useState(0);

  const getUserPackage = async () => {
    const token = Cookies.getItem("token");
    const res = await axios.get(
      `https://cute-erin-seahorse-boot.cyclic.app/api/users/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data.subscriptionPlan);
    setSub(res.data.subscriptionPlan);
  };

  useEffect(() => {
    getUserPackage();
  }, []);

  return (
    <PackagesContainer>
      <BottomNav />
      <Center>
        <PackagesHeader>
          <p style={{ fontSize: "1.5em" }}>Packages</p>
        </PackagesHeader>
        <PackagesBody></PackagesBody>
        <InvestmentContainer>
          <InvestmentItem>
            <ActiveInvestment>Active</ActiveInvestment>
            <InvestmentPic>
              <InvestmentImage
                src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
                alt=""
              />
              <InvestmentBottom>
                <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
                <InvestmentSubtitle>
                  Product Price: <span>₦{sub.toLocaleString()}</span>
                </InvestmentSubtitle>
                <InvestmentSubtitle>
                  Daily Income<span>₦{(sub / 5).toLocaleString()}</span>
                </InvestmentSubtitle>
              </InvestmentBottom>
            </InvestmentPic>
            <InvestmentParagraph>
              <span>Product Price</span>
              <span>₦{sub.toLocaleString()}</span>
            </InvestmentParagraph>
            <InvestmentHeading>
              <span>Daily Income (₦)</span>
              <span>Total Income(₦)</span>
            </InvestmentHeading>
            <InvestmentHeading6>
              <span>
                ₦<b>{(sub / 5).toLocaleString()}</b>
              </span>
              <span>
                ₦<b>{((sub / 5) * 9).toLocaleString()}</b>
              </span>
            </InvestmentHeading6>
            <InvestmentButton
              data-dai="ALUMINIUM-ION-1"
              data-money="2000"
              data-id="100"
              data-type_id="1"
              onClick={() => console.log("Hello")}
            >
              Invest Now
            </InvestmentButton>
            <p>Validity: 9 Days</p>
          </InvestmentItem>
        </InvestmentContainer>
      </Center>
    </PackagesContainer>
  );
};

export default Packages;
