import React from "react";
import styled from "styled-components";
// import { FaHome, FaUsers, FaLink, FaPhone } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
// import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";

const BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: white;
  transition: color 0.3s ease;
  text-decoration: none;
  &:hover {
    color: #0078e8;
  }

  svg {
    margin-bottom: 5px;
  }
`;

const BottomNav = () => {
  return (
    <BottomNavContainer>
      <NavItem href={"/account"}>
        <CiHome size={20} />
        Home
      </NavItem>
      <NavItem href={"/link"}>
        <IoShareSocialOutline size={20} />
        Invite
      </NavItem>
      <NavItem href={"/packages"}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid white",
            borderRadius: "100px",
            width: "1.3em",
            height: "1.3em",
            padding: "0.1em",
          }}
        >
          <TbCurrencyNaira size={20} />
        </div>
        Packages
      </NavItem>
      <NavItem href={"/team"}>
        <RiTeamLine size={20} />
        Team
      </NavItem>
      {/* <NavItem href={"https://t.me/+23eQgUNdn0U4NjFk"}> */}
      <NavItem href={"/profile"}>
        <FaRegUser size={20} style={{ color: "#fff" }} />
        Profile
      </NavItem>
    </BottomNavContainer>
  );
};

export default BottomNav;
