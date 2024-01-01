import React, { useState } from 'react';
import { FaTimes, FaSun } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const PromotionBar = () => {
  const [showPromotion, setShowPromotion] = useState(true);

  // Configuring the continuous rotation animation
  const { rotate } = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    config: { duration: 5000, reset: true },
    loop: { reverse: true },
  });

  const handleCloseClick = () => {
    setShowPromotion(false);
  };

  return (
    <>
      {showPromotion && (
        <div className='flex items-center justify-center w-full py-2 mx-auto text-white bg-primary relative'>
          {/* Animated Spring Icon - Left */}
          <animated.div style={{ transform: rotate.interpolate((r) => `rotate(${r}deg)`) }} className='mr-2'>
            <FaSun size={24} />
          </animated.div>

          {/* Promotion Text */}
          <div className='flex sm:hidden items-center'>
            Get extra 20% off this wedding session when you try our services!
          </div>
          <div className='flex md:hidden items-center'>
          "Extra 20% Off Wedding Session Offer"
          </div>

          {/* Animated Spring Icon - Right */}
          <animated.div style={{ transform: rotate.interpolate((r) => `rotate(${r}deg)`) }} className='ml-2'>
            <FaSun size={24} />
          </animated.div>

          {/* Close Button */}
          <button onClick={handleCloseClick} className='absolute top-2 right-2 text-white cursor-pointer focus:outline-none'>
            <FaTimes />
          </button>
        </div>
      )}
    </>
  );
};

export default PromotionBar;
