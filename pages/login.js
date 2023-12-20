import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Cookies from "js-cookies";
import { toast } from "react-toastify";

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  a {
    color: rgb(237, 42, 42);
  }
  @media screen and (max-width: 917px) {
    flex-direction: column;
  }
`;

const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media screen and (max-width: 917px) {
    min-height: 80vh;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-top: -3em;
    background: white;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #078ea6;
  @media screen and (max-width: 917px) {
    min-height: 30vh !important;
    z-index: -1;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  border-radius: 6px;
  flex-wrap: wrap;
  padding: 0.5em;
`;

const FormTitle = styled.div`
  padding: 0.5em;
  text-align: center;
  /* font-family: "Courier New", Courier, monospace; */
  margin-bottom: 0.2em;
  h2 {
    color: rgb(237, 42, 42);
  }
  h2::after {
    content: "";
    display: block;
    width: 40px;
    height: 3px;
    margin: 0.1em auto;
    background: rgb(237, 42, 42);
    border-radius: 3px;
    /* border: 1px solid red; */
  }
  p {
    font-size: 1em;
    font-weight: bolder;
  }
`;

const InputCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 90%;
  padding: 0.3em;
  text-align: left;
  input {
    width: 97%;
    height: 2.5em;
    border-radius: 1.7px;
    border: 1px solid grey;
    padding: 0.1em 0.4em;
  }
  label {
    padding-bottom: 0.5em;
  }
`;

const Register = styled.div`
  width: 90%;
  padding: 0.5em 0;
`;

const SubmitBtn = styled.button`
  width: 90%;
  font-family: monospace;
  background: transparent;
  border: 1.5px solid rgb(237, 42, 42);
  padding: 0.7em 0;
  font-size: 1.2em;
  cursor: pointer;
  color: rgb(237, 42, 42);
  border-radius: 2px;
  transition: all 0.4s ease-out;
  :hover {
    color: aliceblue;
    /* border: 1px solid aliceblue; */
    background: rgb(237, 42, 42);
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ForgotPassword = styled.div`
  width: 90%;
  text-align: center;
  padding-block: 0.7em;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };
    console.log({ email, password });
    try {
      if (email && password) {
        setLoading(true);
        console.log(loading);
        const res = await axios.post(
          "https://node-backend-v1.onrender.com/api/users/login",
          loginDetails
        );
        console.log(res.data.user.token);
        Cookies.setItem("token", res.data.user.token);
        router.push("/account");
        console.log(res);
        toast.success("Login Successful");
      } else {
        toast.error("Input Email and Password");
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message !== undefined) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
    // try {
    //   loginDetails = {
    //     email,
    //     password,
    //   };
    // } catch (error) {
    //   console.log("An error occured!!!");
    // } finally {
    //   setLoading(false);
    // }
    // return loginDetails;
  };

  return (
    <div>
      <Hero>
        <HeroLeft>
          <h2>Twinkas!!!</h2>
        </HeroLeft>
        <HeroRight className="right">
          <Form id="form" className="form" onSubmit={handleLogin}>
            <FormTitle className="title">
              <h2>Sign in</h2>
              <p>login to access your dashboard</p>
            </FormTitle>
            <InputCard
              className="input-card"
              onChange={(e) => setEmail(e.target.value)}
            >
              <label>Email address</label>
              <input
                // style={{ fontFamily: "revert-layer" }}
                type="email"
                placeholder="Email/Phone Number"
                required={true}
              />
            </InputCard>
            <InputCard
              className="input-card"
              onChange={(e) => setPassword(e.target.value)}
            >
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </InputCard>
            <Register className="register">
              <p>
                Dont have an account? <Link href="/signup">Register</Link>
              </p>
            </Register>
            <SubmitBtn disabled={loading} type="submit" onClick={handleLogin}>
              {loading ? "Loading..." : "login"}
            </SubmitBtn>
            <ForgotPassword className="forgot-password">
              <p>
                Forgot Password? <Link href="/forgot-password">Click here</Link>
              </p>
            </ForgotPassword>
          </Form>
        </HeroRight>
      </Hero>
    </div>
  );
};

export default LoginPage;
