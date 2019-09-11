import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #e60059;
  text-align: end;
  height: 8vh;
  padding-top: 20px;
`;

const Navlink = styled.p`
  padding-right: 30px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #4a306e;
    text-decoration: none;
  }
`;

export { Nav, Navlink };
