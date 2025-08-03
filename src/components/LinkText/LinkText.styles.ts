import styled from 'styled-components/native';

export const StyledText = styled.Text<{ color: string; underline: boolean }>`
  color: ${({ color }) => color};
  text-decoration-line: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-size: 16px;
`;