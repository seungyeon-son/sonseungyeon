"use client";

import Link from "next/link";
import styled from "styled-components";

const FooterArea = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  border-top: 1px solid #0002;

  @media (max-width: 1080px) {
  }

  @media (max-width: 640px) {
  }
`;

export const Footer = () => {
  return (
    <FooterArea>
      <footer>
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#c" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#c" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </FooterArea>
  );
};
