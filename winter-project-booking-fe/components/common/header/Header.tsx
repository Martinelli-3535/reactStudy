import React from "react";
import styled from "@emotion/styled";

import theme from "styles/theme";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <LogoContainer>
          <span className="material-symbols-outlined">favorite</span>
          <Title>책 정보 제공 서비스</Title>
        </LogoContainer>
      </Link>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: ${theme.primary.blue100};
  height: 5rem;
  color: ${theme.text.white};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    height: 4rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: ${theme.fontSize.xl};
  color: ${theme.text.white};
  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    font-size: ${theme.fontSize.md};
  }
`;
