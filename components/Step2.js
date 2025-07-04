import React, { useState, useEffect, useContext } from 'react';
import Step2Mobile from './Step2Mobile';
import Step2PC from './Step2PC';
import { DataContext } from '../pages';
import SendData from '../hooks/SendData';

const Step2 = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const { AllData, setAllData } = useContext(DataContext);
  const { Unik, Step, setStep, ContinueWithFacebook } = props;
  const [beginTimer, setBeginTimer] = useState(false);

  // Pass beginTimer state and setter to child components
  const enhancedProps = {
    ...props,
    parentBeginTimer: beginTimer,
    setParentBeginTimer: setBeginTimer,
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Initial check

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup
  }, []);

  // // Effect for sending data when Step 2 is opened
  // useEffect(() => {
  //   if (Step === 2) {
  //     const params = {
  //       ...AllData,
  //       id: Unik,
  //       currentStep: ContinueWithFacebook ? 'User clicked Continue with facebook' : 'User clicked continue with email'
  //     };
  //     SendData(params);
  //   } 
  // }, []);

  // Effect for the timer functionality
  useEffect(() => {
    if (beginTimer) {
      const timer = setTimeout(() => {
        setStep(3);
      }, 60000);
      
      return () => clearTimeout(timer);
    }
  }, [beginTimer, setStep]);

  if (isMobile) {
    return <Step2Mobile {...enhancedProps} />;
  }

  return <Step2PC {...enhancedProps} />;
};

export default Step2;