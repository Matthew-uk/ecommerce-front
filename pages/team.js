import Center from "@/components/Center";
import Header from "@/components/Header";
import { useUser } from "@/store/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookies";
import BottomNav from "@/components/BottomMenu";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-top: 1em;
`;
const TeamNav = styled.div`
  background: aliceblue;
  color: #222;
  border-radius: 10px;
`;
const TeamNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TeamNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: column;
`;
const TopNavP = styled.p`
  text-align: center;
  font-size: 0.9em;
`;
const TopNavAmount = styled.p`
  font-size: 1.5em;
  color: rgb(7, 188, 12);
`;

const TeamInfo = styled.div`
  padding: 0.5em;
  background: #333;
  border-radius: 10px;
  span {
    font-size: 0.8em;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  color: #fff;
  gap: 1em;
`;

const TeamMember = styled.div`
  /* height: 5em; */
  padding: 1em 0.5em;
  background: #2e333e;
  border-radius: 10px;
`;

const TeamMemberDetails = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
  justify-content: space-between;
`;

const TeamMemberDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

const Team = () => {
  const {
    name,
    setName,
    setBalance,
    setReferralCode,
    setUserId,
    userId,
    balance,
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

  return (
    <div
      style={{
        background: "#0D1119",
        minHeight: "100vh",
        paddingBottom: "1em",
        color: "#fff",
        marginTop: "-1.3em",
      }}
    >
      <BottomNav />
      <Center>
        {loading ? (
          <p style={{ paddingTop: "3em" }}>Loading user Data...</p>
        ) : (
          <TeamContainer>
            <h3>Team</h3>
            <TeamNav>
              <TeamNavContainer>
                <TeamNavItem>
                  <TopNavAmount>{referrals.length}</TopNavAmount>
                  <TopNavP>Total Number of Referrals</TopNavP>
                </TeamNavItem>
                <TeamNavItem>
                  <TopNavAmount>
                    ₦{referralAmount.toLocaleString()}
                  </TopNavAmount>
                  <TopNavP>Gross Referral Iccome</TopNavP>
                </TeamNavItem>
              </TeamNavContainer>
            </TeamNav>
            <h3>Team Details</h3>
            <TeamInfo>
              <p>
                My Team Info{" "}
                <span
                  style={{
                    color: "#9BA2FF",
                    fontSize: "1em",
                    background: "#424045",
                    padding: "0.5em",
                    borderRadius: "10px",
                    fontStyle: "italic",
                  }}
                >
                  LV 1
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    number of people
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>₦ 0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    bonus(₦)
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>₦ 0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    all promotions(₦)
                  </span>
                </div>
              </div>
            </TeamInfo>
            {/* Team Info 2 */}
            <TeamInfo>
              <p>
                My Team Info{" "}
                <span
                  style={{
                    color: "#48BFE5",
                    fontSize: "1em",
                    background: "#424045",
                    padding: "0.5em",
                    borderRadius: "10px",
                    fontStyle: "italic",
                  }}
                >
                  LV 2
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    number of people
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>₦ 0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    bonus(₦)
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>₦ 0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    all promotions(₦)
                  </span>
                </div>
              </div>
            </TeamInfo>
            {/* Team Info 3 */}
            <TeamInfo>
              <p>
                My Team Info{" "}
                <span
                  style={{
                    color: "#FF9100",
                    fontSize: "1em",
                    background: "#424045",
                    padding: "0.5em",
                    borderRadius: "10px",
                    fontStyle: "italic",
                  }}
                >
                  LV 3
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    number of people
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>₦ 0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    bonus(₦)
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>₦ 0</p>
                  <span style={{ textAlign: "center", color: "#7B848F" }}>
                    all promotions(₦)
                  </span>
                </div>
              </div>
            </TeamInfo>
          </TeamContainer>
        )}
      </Center>
    </div>
  );
};

export default Team;
