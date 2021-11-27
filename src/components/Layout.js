import Container from "@mui/material/Container";

import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Container component="main" maxWidth="s">
        {children}
      </Container>
    </>
  );
};

export default Layout;
