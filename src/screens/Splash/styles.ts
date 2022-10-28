import styled from "styled-components/native";

export const SplashContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.header};
`;
