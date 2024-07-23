"use client";

import styled from "styled-components";

const FooterArea = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 40px 24px;
  width: 100%;
  background: #293856;
  align-items: center;
`;

export const Footer = () => {
  return (
    <FooterArea>
      <p className="text-slate-500 text-sm">&copy; 2024 Seungyeon Son. All rights reserved.</p>
    </FooterArea>
  );
};
