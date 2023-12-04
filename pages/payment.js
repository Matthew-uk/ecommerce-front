import React, { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { IconContext } from "react-icons";
import ClipboardJS from "clipboard";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useUser } from "@/store/store";
import Image from "next/image";
import axios from "axios";

const Wrapper = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background: #f9f9f9;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 20px;
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  height: 40px;
  background: url(static/img/logo.png) no-repeat;
  background-size: cover;
`;

const MethodMain = styled.div`
  padding: 20px;
`;

const Tabs = styled.div`
  display: flex;
`;

const ActiveTab = styled.div`
  flex: 1;
  margin-left: 10px;
  line-height: 2.5;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  background: linear-gradient(to bottom right, #4a90e2, #ff69b4);
  border-radius: 10px;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Caption = styled.div`
  color: #555;
`;

const BoldText = styled.b`
  color: #ff69b4;
`;

const PayMethod = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
`;

const PayMethodItem = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 15px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
`;

const BtnTip = styled.div`
  color: #ff4500;
  text-align: center;
  margin-top: 20px;
`;

const Bottom = styled.div`
  margin-top: 30px;
`;

const Btn = styled.button`
  font-size: 1.5rem;
  border-radius: 22px;
  color: #fff;
  background: linear-gradient(to bottom right, #4a90e2, #ff69b4);
  border: none;
  width: 100%;
  line-height: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.3s ease;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background: linear-gradient(to bottom right, #3279a8, #ff5c99);
  }
`;

const ClipboardIcon = styled(FiCopy)`
  margin-left: 8px;
  cursor: pointer;
`;

const FileUploadContainer = styled(PayMethodItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileInputLabel = styled.div`
  margin-bottom: 0.5rem;
`;

const FileInput = styled.input`
  display: none;
`;

const FileUploadButton = styled.label`
  font-size: 1.2rem;
  background: #4a90e2;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const PaymentPage = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState("");
  const [imgLoading, setImgLoading] = useState(false);
  const { deposit, userId } = useUser();
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  //   console.log(file);
  //   try {
  //     setImgLoading(true);
  //     const img = axios.post(
  //       "https://node-backend-v1.onrender.com/api/upload/",
  //       file
  //     );
  //     console.log(img);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setImgLoading(false);
  //   }
  // };
  async function handleFileChange(event) {
    const files = event.target?.files;
    if (files?.length > 0) {
      setImgLoading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("image", file);
      }

      try {
        const res = await axios.post(
          "https://node-backend-v1.onrender.com/api/upload",
          data
        );
        setImage(res.data.signedUrl);
        console.log(image);
        setImages([...images, res.data.signedUrl]);
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle error, show error message, etc.
      } finally {
        setImgLoading(false);
      }
    }
  }

  const handleDeposit = async () => {
    try {
      const res = await axios.post(
        "https://node-backend-v1.onrender.com/api/deposit/",
        {
          userId,
          deposit,
          proofOfPayment: image,
        }
      );
      console.log(res.data);
      router.push("/account");
    } catch (error) {
      console.log(error);
    }
    console.log({ deposit, image });
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(".copy");

    clipboard.on("success", (e) => {
      console.log(e);
    });

    clipboard.on("error", (e) => {
      console.log(e);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <Header>
        <h2 style={{ color: "#ff69b4" }}>OMAS PAYMENT GATEWAY</h2>
      </Header>
      <MethodMain>
        <Tabs>
          <ActiveTab id="amount">₦{deposit.toLocaleString()}</ActiveTab>
        </Tabs>
      </MethodMain>
      <div>
        <Title>Make Transfer</Title>
        <Caption>
          Make a transfer of <BoldText>₦{deposit.toLocaleString()}</BoldText> to
          the account
        </Caption>
        <PayMethod>
          <PayMethodItem>
            <div>Account Number</div>
            <div
              className="input copy"
              data-clipboard-action="copy"
              data-clipboard-target="#accountNumber"
            >
              <span id="accountNumber" style={{ fontSize: "1rem" }}>
                5365059512
              </span>
              <IconContext.Provider
                value={{ size: "1.5rem", color: "#4a90e2" }}
              >
                <ClipboardIcon />
              </IconContext.Provider>
            </div>
          </PayMethodItem>
          <PayMethodItem>
            <div>Bank Name</div>
            <div
              className="input copy"
              data-clipboard-action="copy"
              data-clipboard-target="#bankName"
            >
              <span id="bankName" style={{ fontSize: "1rem" }}>
                Moniepoint MFB
              </span>
              <IconContext.Provider
                value={{ size: "1.5rem", color: "#4a90e2" }}
              >
                <ClipboardIcon />
              </IconContext.Provider>
            </div>
          </PayMethodItem>
          <PayMethodItem>
            <div>Account Name</div>
            <div
              className="input copy"
              data-clipboard-action="copy"
              data-clipboard-target="#accountName"
            >
              <span id="accountName" style={{ fontSize: "1rem" }}>
                WISDOM JOSEPH
              </span>
              <IconContext.Provider
                value={{ size: "1.5rem", color: "#4a90e2" }}
              >
                <ClipboardIcon />
              </IconContext.Provider>
            </div>
          </PayMethodItem>
          <PayMethodItem>
            <FileUploadContainer>
              <FileInputLabel>Upload Proof of Payment</FileInputLabel>
              <div>
                <FileInput
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={handleFileChange}
                  id="fileInput"
                />
                <FileUploadButton htmlFor="fileInput">
                  Choose File
                </FileUploadButton>
              </div>
              {imgLoading && <p>Loading...</p>}
              {image && (
                <img
                  style={{
                    marginTop: "1em",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  src={image}
                  alt="Image"
                  width={50}
                  height={50}
                />
              )}
            </FileUploadContainer>
          </PayMethodItem>
        </PayMethod>
        <BtnTip>
          This account is valid for one time
          <br />
          Please do not transfer multiple times
        </BtnTip>
        <Bottom>
          <Btn onClick={handleDeposit}>I have made the payment</Btn>
        </Bottom>
      </div>
    </Wrapper>
  );
};

export default PaymentPage;
