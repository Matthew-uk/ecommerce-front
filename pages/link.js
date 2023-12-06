import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegCircleUser } from "react-icons/fa6";
import Center from "@/components/Center";
import { useUser } from "@/store/store";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookies";
import { toast } from "react-toastify";

const LinkContainer = styled.div`
  height: 100%;
  color: #fff;
`;

const InviteProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 1em;
`;

const InviteDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const InviteProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  border-radius: 10px;
  background: #fff;
  color: #000;
  gap: 1em;
  padding-top: 1em;
`;

const InviteBtn = styled.button`
  background: #0078e8;
  color: #fff;
  padding-block: 1em;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Link = () => {
  const {
    name,
    setName,
    setBalance,
    setReferralCode,
    setUserId,
    userId,
    balance,
    referralCode,
  } = useUser();
  const [loading, setLoading] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [referralAmount, setReferralAmount] = useState(0);
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
      setReferrals(res.data.referrals);
      setReferralAmount(res.data.referralAmount);
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
    console.log(referrals);
  }, []);
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

  useEffect(() => {
    if (isCopied) {
      toast.success("Link Copied", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  }, [isCopied]);

  return (
    <div
      style={{
        background:
          'url("https://livent.ltd/static/livent/img/bg_invite@2x.png")',
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <Header />
      <Center>
        {loading ? (
          <p style={{ color: "#fff" }}>Loading user Data...</p>
        ) : (
          <LinkContainer>
            <h4 style={{ textAlign: "center" }}>
              Get Rewarded for inviting your friends.
            </h4>
            <InviteProfileContainer>
              <InviteProfile>
                <FaRegCircleUser
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                  // width={100} height={100}
                />
                <InviteDetails>
                  <p>Invite Id: {referralCode}</p>
                </InviteDetails>
              </InviteProfile>
              <InviteBtn onClick={copyReferralCode}>Copy</InviteBtn>
            </InviteProfileContainer>
          </LinkContainer>
        )}
      </Center>
      {/* {isCopied &&
        toast.success("Link Copied", {
          position: "top-center",
          autoClose: 1000,
        })} */}
    </div>
  );
};

export default Link;
