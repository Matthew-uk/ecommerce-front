import { useUser } from "@/store/store";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiDownload, FiUpload, FiShare2 } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Investment from "./investment";
import ReferToEarn from "./refer";
// import NewProducts from "./NewProducts";
// import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/models/Product";
// import { Product } from "@/models/Product";

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  min-height: 80vh;
  margin-top: -1em;
`;

const AccountNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  width: 100%;
  border-radius: 20px;
  height: max-content;
  /* padding-block: 1em; */
  /* background: rebeccapurple; */
  color: #000;
`;

const AccountAction = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 1em;
  background: gray;
  padding-bottom: 1em;
  color: aliceblue;
  border-radius: 20px;
`;

const AccountActionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border-right: 1px solid #333;
  padding-right: 0.9em; */

  // Add styling for the copy button
  cursor: pointer;
  &:hover {
    color: yellow; // Change color on hover (optional)
  }
`;

const AccountSection = () => {
  const { name, balance, referralCode } = useUser();
  const [isCopied, setIsCopied] = useState(false);
  const referralCodeUrl = `https://omars.vercel.app/signup?ref=${referralCode}`;

  const copyReferralCode = () => {
    // Replace 'your-referral-code' with the actual code you want to copy

    // Create a temporary textarea element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = referralCodeUrl;

    // Append the textarea to the document
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(tempTextArea);

    // Set state to indicate that the text has been copied
    setIsCopied(true);

    // Reset the copied state after a short delay (optional)
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  // useEffect(() => {
  //   const getNewProducts = async () => {
  //     await mongooseConnect();
  //     const newProducts = await Product.find({}, null, {
  //       sort: { _id: -1 },
  //       limit: 10,
  //     });
  //     console.log(newProducts);
  //   };
  //   getNewProducts();
  // }, []);

  return (
    <AccountContainer>
      <AccountNav>
        <div style={{ paddingInline: "1em" }}>
          <p style={{ color: "#fff", paddingTop: "1em" }}>
            Hello, <span style={{ fontWeight: "bolder" }}>{name}</span>
          </p>
          <div>
            <span style={{ color: "white" }}>Total Balance</span>
            <p style={{ fontSize: "1.5em", color: "#07bc0c" }}>
              ₦{balance.toLocaleString()}
            </p>
          </div>
        </div>
        <AccountAction>
          <AccountActionItem>
            <Link
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "aliceblue",
              }}
              href={"/deposit"}
            >
              <p>Deposit</p>
              <FiDownload size={25} />
            </Link>
          </AccountActionItem>
          <AccountActionItem>
            <Link
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "aliceblue",
              }}
              href={"/withdraw"}
            >
              <p>Withdraw</p>
              <FiUpload size={25} />
            </Link>
          </AccountActionItem>
        </AccountAction>
      </AccountNav>
      {/* <Link
        href={"/products"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          textDecoration: "none",
          color: "#000",
        }}
      >
        <p style={{ fontSize: "1.2em" }}>Our Products</p>
        <FaArrowRight />
      </Link> */}
      {/* <ReferToEarn
        link={referralCodeUrl}
        copyReferralCode={copyReferralCode}
        isCopied={isCopied}
      /> */}
      <Investment />
      {/* <NewProducts products={featuredProduct} /> */}
    </AccountContainer>
  );
};

export default AccountSection;
