// pages/order.js
import React from "react";

const Order = () => {
  // Your component logic here
  return <div>{/* Your JSX content here */}</div>;
};

export default Order;

// import axios from "axios";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookies";
// import { useUser } from "@/store/store";
// import BottomNav from "@/components/BottomMenu";
// import Center from "@/components/Center";
// import styled from "styled-components";

// const OrderContainer = styled.div`
//   display: block;
// `;

// const SingleOrder = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Order = () => {
//   const { name, setName, setBalance, setReferralCode, setUserId, userId } =
//     useUser();
//   const [loading, setLoading] = useState(false);
//   // const router = useRouter();
//   const handleGetUser = async () => {
//     try {
//       setLoading(true);
//       const token = Cookies.getItem("token");
//       const res = await axios.get(
//         `https://node-backend-v1.onrender.com/api/users/`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const loggedInUser = res.data.fullName;
//       setName(loggedInUser);
//       setBalance(res.data.balance);
//       setReferralCode(res.data.referralCode);
//       setUserId(res.data.id);
//       console.log(res.data);
//       console.log({ token, loggedInUser });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     handleGetUser();
//     console.log(`Name: ${name}`);
//     console.log(`User id: ${userId}`);
//   }, []);

//   const [newloading, setNewLoading] = useState(false);
//   const [withdrawals, setWithdrawals] = useState([]);
//   const [deposits, setDeposits] = useState([]);
//   const getWithdrawals = async () => {
//     try {
//       setNewLoading(true);
//       const res = await axios.get(
//         `https://node-backend-v1.onrender.com/api/withdraw/user?id=${userId}`
//       );
//       console.log(res.data);
//       setWithdrawals(res.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setNewLoading(false);
//     }
//   };

//   const getDeposits = async () => {
//     try {
//       setNewLoading(true);
//       const res = await axios.get(
//         `https://node-backend-v1.onrender.com/api/deposit/user?id=${userId}`
//       );
//       console.log(res.data);
//       setDeposits(res.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setNewLoading(false);
//     }
//   };

//   useEffect(() => {
//     getWithdrawals();
//     getDeposits();
//   }, [userId]);
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "rgb(13, 17, 25)",
//         border: "1px solid rgb(13, 17, 25)",
//         color: "white",
//       }}
//     >
//       <Center>
//         <OrderContainer>
//           <p>Withdrawal(s): </p>
//           <div>
//             {newloading && <p>Loading...</p>}
//             {withdrawals.map((withdrawal) => (
//               <SingleOrder>
//                 {!withdrawal.pending && withdrawal.approved ? (
//                   <p style={{ color: "green" }}>Approved</p>
//                 ) : !withdrawal.approved && withdrawal.pending ? (
//                   <p style={{ color: "yellow" }}>Pending</p>
//                 ) : (
//                   <p style={{ color: "#ff0000" }}>Failed</p>
//                 )}
//                 {console.log(withdrawal.pending)}₦
//                 {withdrawal && withdrawal.withdraw.toLocaleString()}
//               </SingleOrder>
//             ))}
//           </div>
//           <p>Deposit(s): </p>
//           <div>
//             {newloading && <p>Loading...</p>}
//             {deposits.map((deposit) => (
//               <SingleOrder key={deposit}>
//                 {!deposit.pending && deposit.approved ? (
//                   <p style={{ color: "green" }}>Approved</p>
//                 ) : !deposit.approved && deposit.pending ? (
//                   <p style={{ color: "yellow" }}>Pending</p>
//                 ) : (
//                   <p style={{ color: "#ff0000" }}>Failed</p>
//                 )}
//                 {console.log(deposit.pending)}₦
//                 {deposit.deposit.toLocaleString()}
//               </SingleOrder>
//             ))}
//           </div>
//         </OrderContainer>
//       </Center>
//       <BottomNav />
//     </div>
//   );
// };

// export default Order;
