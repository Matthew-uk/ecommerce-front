import { useUser } from "@/store/store";
import React from "react";
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
  margin: 10px 0;
  font-size: 0.9em;
`;

const InvestmentHeading6 = styled.h6`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 0.9em;
`;

const InvestmentButton = styled.div`
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const Investment = () => {
  const { balance } = useUser();
  const handleRouting = () => {
    if (balance < 4000) {
      alert("You need minimum of ₦4000 to invest");
    }
  };
  return (
    <InvestmentContainer style={{ width: "100%" }}>
      <InvestmentHeader>
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
                8 <span>Total times</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                24 Hour<span>Discount</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>500</span>
            <span>4000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Per Income 24 Hour(₦)</span>
            <span>Gross income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>2000</b>
            </span>
            <InvestmentButton
              data-dai="ALUMINIUM-ION-1"
              data-money="2000"
              data-id="100"
              data-type_id="1"
            >
              Invest Now
            </InvestmentButton>
          </InvestmentHeading6>
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
                8 <span>Total times</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                24 Hour<span>Discount</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>500</span>
            <span>4000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Per Income 24 Hour(₦)</span>
            <span>Gross income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>2000</b>
            </span>
            <InvestmentButton
              data-dai="ALUMINIUM-ION-1"
              data-money="2000"
              data-id="100"
              data-type_id="1"
            >
              Invest Now
            </InvestmentButton>
          </InvestmentHeading6>
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
                8 <span>Total times</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                24 Hour<span>Discount</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>500</span>
            <span>4000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Per Income 24 Hour(₦)</span>
            <span>Gross income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>2000</b>
            </span>
            <InvestmentButton
              data-dai="ALUMINIUM-ION-1"
              data-money="2000"
              data-id="100"
              data-type_id="1"
            >
              Invest Now
            </InvestmentButton>
          </InvestmentHeading6>
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
                8 <span>Total times</span>
              </InvestmentSubtitle>
              <InvestmentSubtitle>
                24 Hour<span>Discount</span>
              </InvestmentSubtitle>
            </InvestmentBottom>
          </InvestmentPic>
          <InvestmentParagraph>
            <span>500</span>
            <span>4000</span>
          </InvestmentParagraph>
          <InvestmentHeading>
            <span>Per Income 24 Hour(₦)</span>
            <span>Gross income(₦)</span>
          </InvestmentHeading>
          <InvestmentHeading6>
            <span>
              ₦<b>2000</b>
            </span>
            <InvestmentButton onClick={handleRouting}>
              Invest Now
            </InvestmentButton>
          </InvestmentHeading6>
        </InvestmentItem>
      </InvestmentList>
    </InvestmentContainer>
  );
};

export default Investment;
