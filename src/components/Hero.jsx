import React from "react";
import chef from "../assets/chef.svg.svg";
import styled from "styled-components";
import { LuChefHat } from "react-icons/lu";
const HeroWrapper = styled.section`
  .hero_container {
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--text-color);
    color: var(--dark-color);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media (min-width: 768px) {
      height: 40vh;
      flex-direction: row;
    }
    @media (max-width: 768px) {
      position: relative
    }
    img {
      height: 100%;
      max-width: 300px;
    }
    .chef_content {
      .chef_icon {
        font-size: 30px;
      }
      .chef_content-info {
        display: flex;
        flex-direction: column;
        justify-content: center;

        font-size: calc(25px + 0.390625vw);

        .title_left {
          align-self: right;
        }
        .chef_title {
          text-transform: capitalize;
        }
      }
    }
  }
`;
function Hero() {
  return (
    <HeroWrapper>
      <div>
        <div className='hero_container'>
          <img src={chef} alt='chef_academy' />

          <div className='chef_content'>
            <LuChefHat className='chef_icon' />

            <div className='chef_content-info'>
              <h1 className='chef_title'>Chef</h1>
              <h1 className='chef_title title_left'>Academy</h1>
              <h1 className='chef_title'>Secrets</h1>
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}

export default Hero;
