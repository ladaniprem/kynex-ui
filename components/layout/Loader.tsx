"use client";
import React from "react";
import styled from "styled-components";

const Loader: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="loader-wrapper">
        {"Generating".split("").map((char, i) => (
          <span key={i} className="loader-letter">
            {char}
          </span>
        ))}
        <div className="loader" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    margin: 2rem;

    font-family: "Poppins", sans-serif;
    font-size: 1.6em;
    font-weight: 600;
    user-select: none;
    color: #ff6b6b;
    scale: 2;
  }

  .loader {
    position: absolute;
    inset: 0;
    z-index: 1;

    mask: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 6px,
      black 7px,
      black 8px
    );
  }

  .loader::after {
    content: "";
    position: absolute;
    inset: 0;

    background-image:
      radial-gradient(circle, #ff4d4d 0%, transparent 50%);
    mask: radial-gradient(circle, transparent 0%, transparent 10%, black 25%);
    animation: transform-animation 2s infinite alternate,
               opacity-animation 4s infinite;
  }

  @keyframes transform-animation {
    from { transform: translateX(-55%); }
    to   { transform: translateX(55%); }
  }

  @keyframes opacity-animation {
    0%, 100% { opacity: 0; }
    20% { opacity: 1; }
  }

  .loader-letter {
    opacity: 0;
    animation: loader-letter-anim 4s infinite linear;
    z-index: 2;
  }

  .loader-letter:nth-child(n) {
    animation-delay: calc(var(--i) * 0.1s);
  }

  @keyframes loader-letter-anim {
    0% { opacity: 0; }
    10% {
      opacity: 1;
      transform: translateY(-2px);
    }
    100% { opacity: 0; }
  }
`;

export default Loader;
