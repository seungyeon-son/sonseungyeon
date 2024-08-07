"use client";

import Link from "next/link";
import styled from "styled-components";

import Button from "./Button";

const HeaderArea = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
  mix-blend-mode: difference;
  div.container {
    position: fixed;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    width: calc(100% - 72px);
    max-width: 1464px;
    height: 64px;
    border-radius: 12px;
    background: linear-gradient(90deg, rgba(51, 65, 85, 0.5) 0%, rgba(148, 151, 189, 0.25) 100%);
    box-shadow: 0px 4px 10px 1px rgb(49 55 56 / 50%);
    backdrop-filter: blur(20px);
    margin: 0 auto;
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1080px) {
    top: 16px;
    width: calc(100% - 32px);
    div.container {
      padding: 0 24px;
    }
  }

  @media (max-width: 640px) {
    top: 16px;
    width: calc(100% - 32px);
    div.container {
      padding: 0 24px;
    }
  }
`;

export const Navigation = () => {
  return (
    <HeaderArea>
      <div className="container">
        <Link href="/" className="text-white" prefetch={false} aria-label="Home">
          Logo
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/about" className="text-slate-300 hover:text-slate-50 transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="/archive" className="text-slate-300 hover:text-slate-50 transition-colors" prefetch={false}>
            Work
          </Link>
          <Button aria-label="Menu" size="sm" variant="primary" value="" disabled={false}>
            <Link
              href="mailto:au1gust8@gmail.com"
              target="_blank"
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              Contact
            </Link>
          </Button>
        </nav>
      </div>
    </HeaderArea>
  );
};
