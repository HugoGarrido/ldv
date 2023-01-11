import styled from 'styled-components';

export const PageMaxWidth = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.page.maxWitdh}px;
`;
