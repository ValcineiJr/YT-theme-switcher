import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.secondary};
`;
