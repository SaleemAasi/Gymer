import React from 'react';
import './Hero.css';
import '../App.css';
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion';
import Header from './Header/Header';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 668;

  // Define initial left position based on screen width
  const initialLeftPosition = mobile ? '178px' : '238px';

  return (
    <div className='hero' id='home'>
      <div className="blur hero-b"></div>
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <motion.div
            initial={{ left: initialLeftPosition }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          />
          <span>the best fitness club in the town</span>
        </div>
        
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span><span>Your </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className='span'>
            in here we will help you to shape and build ideal body and live up you life to fullest
          </div>
        </div>

        <div className="figure">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+'/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={970} start={800} delay='4' preFix='+'/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay='4' preFix='+'/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>16bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className='hero_image' />

        <motion.img
          whileInView={{ right: "20rem" }}
          initial={{ right: "11rem" }}
          transition={transition}
          src={hero_image_back} alt="" className='hero_image_back'
        />

        <motion.div
          whileInView={{ right: "28rem" }}
          initial={{ right: "37rem" }}
          transition={transition}
          className='calories'
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
