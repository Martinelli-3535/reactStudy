import React from "react";
import styled from "@emotion/styled";

import theme from "styles/theme";

const Footer = () => {
  return (
    <Container>
      {new Date().getFullYear()} © {process.env.NEXT_PUBLIC_COPYRIGHT}
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  height: 6rem;
  background-color: ${theme.primary.blue100};
  color: ${theme.text.white};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    height: 4rem;
    font-size: ${theme.fontSize.sm};
  }
`;
