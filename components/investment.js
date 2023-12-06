import { useUser } from "@/store/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const InvestmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #222; */
`;

const InvestmentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  &::after {
    content: "";
    height: 2px;
    width: 30%;
    background: #000;
    margin: -0.5em 0;
  }
`;

const InvestmentList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  z-index: -1;
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

const Investment = () => {
  const { balance } = useUser();
  const router = useRouter();
  const { userId } = useUser();
  const [loading, setLoading] = useState(false);
  const handleRouting = async (amount) => {
    if (balance < amount) {
      // alert(`You need minimum of ₦${amount} to invest`);
      toast.warn(`You need minimum of ₦${amount} to invest`, {
        position: "top-center",
        autoClose: 3000,
      });
      router.push("/deposit");
    } else {
      try {
        setLoading(true);
        const res = await axios.patch(
          "https://node-backend-v1.onrender.com/api/users/subscription",
          {
            userId,
            subscriptionPlan: amount,
          }
        );
        console.log(res.data);
        toast.success(
          `Congratulations, You have just successfully invested ${amount}, you are expected to earn ${
            amount / 5
          } Daily`,
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      } catch (error) {
        toast.error("An error occured, try refreshing and trying again...");
      } finally {
        setLoading(false);
      }

      // router.push("/depos
    }
  };
  return (
    <InvestmentContainer style={{ width: "100%" }}>
      <InvestmentHeader>
        {loading &&
          toast.info("Hold on while we process your investment...", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })}
        <p
          style={{
            fontSize: "1.1em",
            textAlign: "center",
            width: "100%",
          }}
        >
          Checkout our Investment Plans
        </p>
      </InvestmentHeader>
      <InvestmentList>
        {/* Repeat this block for each investment item */}
        <InvestmentItem>
          <InvestmentPic>
            <InvestmentImage
              src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
              alt=""
            />
            <InvestmentBottom>
              <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
              <InvestmentSubtitle>
                Product Price: <span>₦2,000</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                Daily Income<span>₦400</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>Product Price</span>
            <span>₦2,000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Daily Income (₦)</span>
            <span>Total Income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>400</b>
            </span>
            <span>
              ₦<b>11,600</b>
            </span>
          </InvestmentHeading6>
          <InvestmentButton
            data-dai="ALUMINIUM-ION-1"
            data-money="2000"
            data-id="100"
            data-type_id="1"
            onClick={() => handleRouting(2000)}
          >
            Invest Now
          </InvestmentButton>
          <p>Validity: 29 days</p>
        </InvestmentItem>
        {/* Repeat this block for each investment item */}
        <InvestmentItem>
          <InvestmentPic>
            <InvestmentImage
              src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
              alt=""
            />
            <InvestmentBottom>
              <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
              <InvestmentSubtitle>
                Product Price: <span>₦5,000</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                Daily Income<span>₦1,000</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>Product Price</span>
            <span>₦5,000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Daily Income (₦)</span>
            <span>Total Income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>1000</b>
            </span>
            <span>
              ₦<b>29,000</b>
            </span>
          </InvestmentHeading6>
          <InvestmentButton
            data-dai="ALUMINIUM-ION-1"
            data-money="2000"
            data-id="100"
            data-type_id="1"
            onClick={() => handleRouting(5000)}
          >
            Invest Now
          </InvestmentButton>
          <p>Validity: 29 days</p>
        </InvestmentItem>
        {/* card 3 */}
        <InvestmentItem>
          <InvestmentPic>
            <InvestmentImage
              src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
              alt=""
            />
            <InvestmentBottom>
              <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
              <InvestmentSubtitle>
                Product Price: <span>₦10,000</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                Daily Income<span>₦2,000</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>Product Price</span>
            <span>₦10,000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Daily Income (₦)</span>
            <span>Total Income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>2,000</b>
            </span>
            <span>
              ₦<b>58,000</b>
            </span>
          </InvestmentHeading6>
          <InvestmentButton
            data-dai="ALUMINIUM-ION-1"
            data-money="2000"
            data-id="100"
            data-type_id="1"
            onClick={() => handleRouting(10000)}
          >
            Invest Now
          </InvestmentButton>
          <p>Validity: 29 days</p>
        </InvestmentItem>
        {/* Card 4 */}
        <InvestmentItem>
          <InvestmentPic>
            <InvestmentImage
              src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
              alt=""
            />
            <InvestmentBottom>
              <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
              <InvestmentSubtitle>
                Product Price: <span>₦20,000</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                Daily Income<span>₦4000</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>Product Price</span>
            <span>₦20,000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Daily Income (₦)</span>
            <span>Total Income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>4000</b>
            </span>
            <span>
              ₦<b>116,000</b>
            </span>
          </InvestmentHeading6>
          <InvestmentButton
            data-dai="ALUMINIUM-ION-1"
            data-money="2000"
            data-id="100"
            data-type_id="1"
            onClick={() => handleRouting(20000)}
          >
            Invest Now
          </InvestmentButton>
          <p>Validity: 29 days</p>
        </InvestmentItem>
        {/* 5 */}
        <InvestmentItem>
          <InvestmentPic>
            <InvestmentImage
              src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
              alt=""
            />
            <InvestmentBottom>
              <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
              <InvestmentSubtitle>
                Product Price: <span>₦25,000</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                Daily Income<span>₦5,200</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>Product Price</span>
            <span>₦25,000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Daily Income (₦)</span>
            <span>Total Income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>5,200</b>
            </span>
            <span>
              ₦<b>150,800</b>
            </span>
          </InvestmentHeading6>
          <InvestmentButton
            data-dai="ALUMINIUM-ION-1"
            data-money="2000"
            data-id="100"
            data-type_id="1"
            onClick={() => handleRouting(25000)}
          >
            Invest Now
          </InvestmentButton>
          <p>Validity: 29 days</p>
        </InvestmentItem>
        {/* 7 */}
        <InvestmentItem>
          <InvestmentPic>
            <InvestmentImage
              src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
              alt=""
            />
            <InvestmentBottom>
              <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
              <InvestmentSubtitle>
                Product Price: <span>₦50,000</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                Daily Income<span>₦10,000</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>Product Price</span>
            <span>₦50,000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Daily Income (₦)</span>
            <span>Total Income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>10,000</b>
            </span>
            <span>
              ₦<b>290,000</b>
            </span>
          </InvestmentHeading6>
          <InvestmentButton
            data-dai="ALUMINIUM-ION-1"
            data-money="2000"
            data-id="100"
            data-type_id="1"
            onClick={() => handleRouting(50000)}
          >
            Invest Now
          </InvestmentButton>
          <p>Validity: 29 days</p>
        </InvestmentItem>
        {/* 8 */}
        <InvestmentItem>
          <InvestmentPic>
            <InvestmentImage
              src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
              alt=""
            />
            <InvestmentBottom>
              <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
              <InvestmentSubtitle>
                Product Price: <span>₦100,000</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                Daily Income<span>₦20,000</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>Product Price</span>
            <span>₦100,000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Daily Income (₦)</span>
            <span>Total Income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>20,000</b>
            </span>
            <span>
              ₦<b>580,000</b>
            </span>
          </InvestmentHeading6>
          <InvestmentButton
            data-dai="ALUMINIUM-ION-1"
            data-money="2000"
            data-id="100"
            data-type_id="1"
            onClick={() => handleRouting(100000)}
          >
            Invest Now
          </InvestmentButton>
          <p>Validity: 29 days</p>
        </InvestmentItem>
        {/* 9 */}
        <InvestmentItem>
          <InvestmentPic>
            <InvestmentImage
              src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
              alt=""
            />
            <InvestmentBottom>
              <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
              <InvestmentSubtitle>
                Product Price: <span>₦200,000</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                Daily Income<span>₦40,000</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>Product Price</span>
            <span>₦200,000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Daily Income (₦)</span>
            <span>Total Income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>40,000</b>
            </span>
            <span>
              ₦<b>1,160,000</b>
            </span>
          </InvestmentHeading6>
          <InvestmentButton
            data-dai="ALUMINIUM-ION-1"
            data-money="2000"
            data-id="100"
            data-type_id="1"
            onClick={() => handleRouting(200000)}
          >
            Invest Now
          </InvestmentButton>
          <p>Validity: 29 days</p>
        </InvestmentItem>
      </InvestmentList>
      {/* 10 */}
      <InvestmentItem>
        <InvestmentPic>
          <InvestmentImage
            src="https://livent.ltd/static/livent/img/ic_pic1@2x.png"
            alt=""
          />
          <InvestmentBottom>
            <InvestmentTitle>ALUMINIUM-ION-1</InvestmentTitle>
            <InvestmentSubtitle>
              Product Price: <span>₦400,000</span>
            </InvestmentSubtitle>
            <InvestmentSubtitle>
              Daily Income<span>₦80,000</span>
            </InvestmentSubtitle>
          </InvestmentBottom>
        </InvestmentPic>
        <InvestmentParagraph>
          <span>Product Price</span>
          <span>₦400,000</span>
        </InvestmentParagraph>
        <InvestmentHeading>
          <span>Daily Income (₦)</span>
          <span>Total Income(₦)</span>
        </InvestmentHeading>
        <InvestmentHeading6>
          <span>
            ₦<b>80,000</b>
          </span>
          <span>
            ₦<b>2,320,000</b>
          </span>
        </InvestmentHeading6>
        <InvestmentButton
          data-dai="ALUMINIUM-ION-1"
          data-money="2000"
          data-id="100"
          data-type_id="1"
          onClick={() => handleRouting(400000)}
        >
          Invest Now
        </InvestmentButton>
        <p>Validity: 29 days</p>
      </InvestmentItem>
    </InvestmentContainer>
  );
};

export default Investment;
