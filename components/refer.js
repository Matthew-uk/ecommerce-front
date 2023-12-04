import React from "react";
import styled from "styled-components";

const ReferToEarnContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.1em;
  color: #555;
  margin-bottom: 20px;
`;

const ReferralCode = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const InviteButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
`;

const ReferToEarn = ({ link, copyReferralCode, isCopied }) => {
  const referralCode = link; // Replace with the actual referral code

  const handleInviteClick = () => {
    // Implement the logic for sending invites
    console.log("Invite button clicked!");
  };

  return (
    <ReferToEarnContainer>
      <Title>Refer to Earn</Title>
      <Description>
        Invite your friends and earn ₦200 for each successful referral.
      </Description>
      <ReferralCode>Your Referral Code: {referralCode}</ReferralCode>
      <InviteButton onClick={copyReferralCode}>Invite Friends</InviteButton>
      <br />
      {isCopied && <span> Copied!</span>}
    </ReferToEarnContainer>
  );
};

export default ReferToEarn;
