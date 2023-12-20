import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "js-cookies";
import axios from "axios";
import { useRouter } from "next/router";
import { useUser } from "@/store/store";
import Header from "@/components/Header";
import { toast } from "react-toastify";
import BottomNav from "@/components/BottomMenu";

const DarkBankWrap = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  color: #fff;
  /* width: 100%; */
`;

const DarkNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    cursor: pointer;
    i {
      /* Your styles for the icon go here */
    }
  }
`;

const DarkTipsBox = styled.div`
  margin: 20px 0;
  .tips {
    font-size: 14px;
    color: #333;
  }
`;

const DarkListWrap = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const DarkLi = styled.li`
  margin-bottom: 20px;
  /* border: 1px solid red; */
  span {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
  }
  input,
  select {
    width: 100%;
    height: 2em;
    /* padding: 10px; */
    font-size: 14px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  p {
    margin: 5px 0;
    color: red;
    font-size: 12px;
  }
  b {
    display: block;
    width: 16px;
    height: 16px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

const DarkBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const DarkWithdraw = () => {
  const { balance, withdrawal } = useUser();
  const [amount, setAmount] = useState(0);

  const { name, setName, setBalance, setReferralCode, setUserId, userId } =
    useUser();
  const [loading, setLoading] = useState(false);
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
  }, []);

  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankIfsc, setBankIfsc] = useState("");
  const [nameError, setNameError] = useState("");
  const [accountError, setAccountError] = useState("");
  const [bankList, setBankList] = useState([
    {
      name: "Abbey Mortgage Bank",
      slug: "abbey-mortgage-bank",
      code: "801",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Above Only MFB",
      slug: "above-only-mfb",
      code: "51204",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Access Bank",
      slug: "access-bank",
      code: "044",
      longCode: "044150149",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Access Bank (Diamond)",
      slug: "access-bank-diamond",
      code: "063",
      longCode: "063150162",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "ALAT by WEMA",
      slug: "alat-by-wema",
      code: "035A",
      longCode: "035150103",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Amju Unique MFB",
      slug: "amju-unique-mfb",
      code: "50926",
      longCode: "511080896",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "ASO Savings and Loans",
      slug: "asosavings",
      code: "401",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Bainescredit MFB",
      slug: "bainescredit-mfb",
      code: "51229",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Bowen Microfinance Bank",
      slug: "bowen-microfinance-bank",
      code: "50931",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Carbon",
      slug: "carbon",
      code: "565",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "CEMCS Microfinance Bank",
      slug: "cemcs-microfinance-bank",
      code: "50823",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Citibank Nigeria",
      slug: "citibank-nigeria",
      code: "023",
      longCode: "023150005",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Coronation Merchant Bank",
      slug: "coronation-merchant-bank",
      code: "559",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Ecobank Nigeria",
      slug: "ecobank-nigeria",
      code: "050",
      longCode: "050150010",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Ekondo Microfinance Bank",
      slug: "ekondo-microfinance-bank",
      code: "562",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Eyowo",
      slug: "eyowo",
      code: "50126",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Fidelity Bank",
      slug: "fidelity-bank",
      code: "070",
      longCode: "070150003",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Firmus MFB",
      slug: "firmus-mfb",
      code: "51314",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "First Bank of Nigeria",
      slug: "first-bank-of-nigeria",
      code: "011",
      longCode: "011151003",
      gateway: "ibank",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "First City Monument Bank",
      slug: "first-city-monument-bank",
      code: "214",
      longCode: "214150018",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "FSDH Merchant Bank Limited",
      slug: "fsdh-merchant-bank-limited",
      code: "501",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Globus Bank",
      slug: "globus-bank",
      code: "00103",
      longCode: "103015001",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "GoMoney",
      slug: "gomoney",
      code: "100022",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Guaranty Trust Bank",
      slug: "guaranty-trust-bank",
      code: "058",
      longCode: "058152036",
      gateway: "ibank",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Hackman Microfinance Bank",
      slug: "hackman-microfinance-bank",
      code: "51251",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Hasal Microfinance Bank",
      slug: "hasal-microfinance-bank",
      code: "50383",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Heritage Bank",
      slug: "heritage-bank",
      code: "030",
      longCode: "030159992",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Ibile Microfinance Bank",
      slug: "ibile-mfb",
      code: "51244",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Infinity MFB",
      slug: "infinity-mfb",
      code: "50457",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Jaiz Bank",
      slug: "jaiz-bank",
      code: "301",
      longCode: "301080020",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Kadpoly MFB",
      slug: "kadpoly-mfb",
      code: "50502",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Keystone Bank",
      slug: "keystone-bank",
      code: "082",
      longCode: "082150017",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Kredi Money MFB LTD",
      slug: "kredi-money-mfb",
      code: "50200",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Kuda Bank",
      slug: "kuda-bank",
      code: "50211",
      longCode: "",
      gateway: "digitalbankmandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Lagos Building Investment Company Plc.",
      slug: "lbic-plc",
      code: "90052",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Links MFB",
      slug: "links-mfb",
      code: "50549",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Lotus Bank",
      slug: "lotus-bank",
      code: "303",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Mayfair MFB",
      slug: "mayfair-mfb",
      code: "50563",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Mint MFB",
      slug: "mint-mfb",
      code: "50304",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Opay",
      slug: "mint-mfb",
      code: "50304",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Paga",
      slug: "paga",
      code: "100002",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "PalmPay",
      slug: "palmpay",
      code: "999991",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Parallex Bank",
      slug: "parallex-bank",
      code: "104",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Parkway - ReadyCash",
      slug: "parkway-ready-cash",
      code: "311",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Paycom",
      slug: "paycom",
      code: "999992",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Petra Mircofinance Bank Plc",
      slug: "petra-microfinance-bank-plc",
      code: "50746",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Polaris Bank",
      slug: "polaris-bank",
      code: "076",
      longCode: "076151006",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Providus Bank",
      slug: "providus-bank",
      code: "101",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "QuickFund MFB",
      slug: "quickfund-mfb",
      code: "51293",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Rand Merchant Bank",
      slug: "rand-merchant-bank",
      code: "502",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Rubies MFB",
      slug: "rubies-mfb",
      code: "125",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Sparkle Microfinance Bank",
      slug: "sparkle-microfinance-bank",
      code: "51310",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Stanbic IBTC Bank",
      slug: "stanbic-ibtc-bank",
      code: "221",
      longCode: "221159522",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Standard Chartered Bank",
      slug: "standard-chartered-bank",
      code: "068",
      longCode: "068150015",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Sterling Bank",
      slug: "sterling-bank",
      code: "232",
      longCode: "232150016",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Suntrust Bank",
      slug: "suntrust-bank",
      code: "100",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "TAJ Bank",
      slug: "taj-bank",
      code: "302",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Tangerine Money",
      slug: "tangerine-money",
      code: "51269",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "TCF MFB",
      slug: "tcf-mfb",
      code: "51211",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Titan Bank",
      slug: "titan-bank",
      code: "102",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Unical MFB",
      slug: "unical-mfb",
      code: "50871",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Union Bank of Nigeria",
      slug: "union-bank-of-nigeria",
      code: "032",
      longCode: "032080474",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "United Bank For Africa",
      slug: "united-bank-for-africa",
      code: "033",
      longCode: "033153513",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Unity Bank",
      slug: "unity-bank",
      code: "215",
      longCode: "215154097",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "VFD Microfinance Bank Limited",
      slug: "vfd",
      code: "566",
      longCode: "",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Wema Bank",
      slug: "wema-bank",
      code: "035",
      longCode: "035150103",
      gateway: null,
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
    {
      name: "Zenith Bank",
      slug: "zenith-bank",
      code: "057",
      longCode: "057150013",
      gateway: "emandate",
      active: true,
      country: "Nigeria",
      currency: "NGN",
      type: "nuban",
    },
  ]);

  const [withdrawLoading, setWithdrawLoading] = useState(false);

  const handleSubmit = async () => {
    if (!bankName) {
      setNameError("Please type your name");
    } else {
      setNameError("");
    }

    if (!bankAccount) {
      setAccountError("Please enter bank account");
    } else {
      setAccountError("");
    }

    if (bankName && bankAccount) {
      // Perform submission logic here
      console.log("Username:", bankName);
      console.log("Bank Account:", bankAccount);
      console.log("Bank Name:", bankIfsc);
      console.log("Withdrawal Amount:", withdrawal);
      console.log("User Id:", userId);
      try {
        setWithdrawLoading(true);
        const res = await axios.post(
          "https://node-backend-v1.onrender.com/api/withdraw",
          {
            userId,
            withdraw: withdrawal,
            bankName,
            accountName: bankIfsc,
            accountNumber: bankAccount,
          }
        );
        console.log(res.data);
        toast.success(
          "Your Money is on it's way. You will your receive payment within 24 Hours."
        );
        router.push("/account");
      } catch (error) {
        console.log(error);
        toast.error(
          "An error try again. If this persists try re-logging in...",
          {
            position: "top-center",
            autoClose: 5000,
          }
        );
      } finally {
        setWithdrawLoading(false);
      }
    }
  };

  return (
    <div
      style={{
        background: "#222",
        minHeight: "100vh",
        margin: "0",
        width: "100%",
        color: "#fff",
      }}
    >
      {loading ? (
        <p>Hold on, Loading User details</p>
      ) : (
        <>
          {/* <DarkNavbar>
            <span onClick={() => onBack()}>
              <i></i>
            </span>
            <span>bank account</span>
            <span></span>
          </DarkNavbar> */}
          {/* <Header /> */}
          <BottomNav />
          <DarkBankWrap>
            <DarkTipsBox>
              <p className="tips" style={{ color: "#fff" }}>
                Please input the following 3 parts to facilitate your
                withdrawal.
              </p>
            </DarkTipsBox>
            <DarkListWrap>
              <ul>
                <DarkLi>
                  <span>Account Name</span>
                  <input
                    type="text"
                    id="bank_name"
                    className="name"
                    placeholder="Please type your name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                  {nameError && <p>{nameError}</p>}
                  {/* <b className="close"></b> */}
                </DarkLi>
                <DarkLi>
                  <span>Bank account</span>
                  <input
                    type="text"
                    id="bank_user"
                    className="account"
                    placeholder="Please enter bank account"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                  {accountError && <p>{accountError}</p>}
                  {/* <b className="close"></b> */}
                </DarkLi>
                <DarkLi>
                  <span>Bank name</span>
                  <select
                    name="bank_ifsc"
                    id="bank_ifsc"
                    value={bankIfsc}
                    onChange={(e) => setBankIfsc(e.target.value)}
                  >
                    <option value="">Please select bank</option>
                    {bankList.map((bank) => (
                      <option key={bank.code} value={bank.name}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                </DarkLi>
              </ul>
              <DarkBtn disabled={withdrawLoading} onClick={handleSubmit}>
                {withdrawLoading ? "Loading..." : "Submit"}
              </DarkBtn>
            </DarkListWrap>
          </DarkBankWrap>
        </>
      )}
    </div>
  );
};

export default DarkWithdraw;
