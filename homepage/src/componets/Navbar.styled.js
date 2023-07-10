import styled from "styled-components";

export const NavbarComponent = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  background-color: ${(props) => props.bg};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
