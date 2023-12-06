import React from "react";
import styled from "styled-components";
// import { FaHome, FaUsers, FaLink, FaPhone } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
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
      <NavItem href={"/team"}>
        <RiTeamLine size={20} />
        Team
      </NavItem>
      <NavItem href={"/link"}>
        <FiSend size={20} />
        Link
      </NavItem>
      <NavItem href={"https://t.me/omasinc"}>
        <BiSupport size={20} />
        Contact Us
      </NavItem>
    </BottomNavContainer>
  );
};

export default BottomNav;
