"use client";

import Link from "next/link";
import styled from "styled-components";

import Button from "./Button";

const HeaderArea = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  mix-blend-mode: difference;
  div.container {
    position: fixed;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(148, 151, 189, 0) 100%);
    /* box-shadow: 0px 4px 20px 1px rgb(49 55 56 / 15%); */
    /* backdrop-filter: blur(20px); */
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
        <Link href="/" className="text-slate-300" prefetch={false} aria-label="Home">
          SSY
        </Link>
        <nav className="hidden md:flex items-center justify-between space-x-20">
          <Link href="/about" className="text-slate-300 hover:text-slate-50 transition-colors" prefetch={false}>
            ABOUT
          </Link>
          <Link href="/archive" className="text-slate-300 hover:text-slate-50 transition-colors" prefetch={false}>
            WORKS
          </Link>
          <Button aria-label="Menu" size="sm" variant="ghost" value="" disabled={false}>
            <Link
              href="mailto:au1gust8@gmail.com"
              target="_blank"
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              CONTACT
            </Link>
          </Button>
        </nav>
        <p className="text-slate-300">PORTFOLIO</p>
      </div>
    </HeaderArea>
  );
};
