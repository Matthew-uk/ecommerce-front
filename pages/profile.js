import BottomNav from "@/components/BottomMenu";
import Center from "@/components/Center";
import React from "react";
import { FiDownload, FiUpload } from "react-icons/fi";
import { FaHistory } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import styled from "styled-components";
import Link from "next/link";

const ProfileContainer = styled.div`
  min-height: 100vh;
  background: rgb(13, 17, 25);
  color: #fff;
  margin-top: -1em;
`;

const ProfileHeader = styled.div`
  padding-top: 1em;
  font-size: 1.3em;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  h3::after {
    content: "";
    position: relative;
  }
`;

const ProfileContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: aliceblue;
  border-radius: 10px;
  padding-inline: 1em;
  color: #000;
`;

const ProfileContent = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em 0;
  gap: 0.5em;
  text-decoration: none;
  color: #000;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <Center>
        <ProfileHeader>
          <h4>Profile</h4>
        </ProfileHeader>
        <ProfileContents>
          <ProfileContent href={"/deposit"}>
            <FiDownload size={25} />
            Deposit Funds
          </ProfileContent>
          <ProfileContent href={"/withdraw"}>
            <FiUpload size={25} />
            Withdraw Funds
          </ProfileContent>
          <ProfileContent href={"/order"}>
            <FaHistory size={25} />
            Transaction History
          </ProfileContent>
          <ProfileContent href={"/team"}>
            <RiTeamFill size={25} />
            My Team
          </ProfileContent>
        </ProfileContents>
      </Center>
      <BottomNav />
    </ProfileContainer>
  );
};

export default Profile;
