import styled from 'styled-components';

export const PagePadding = styled.div`
  width: 100%;
  padding-left: ${({ theme }) => theme.page.paddingX.base}px;
  padding-right: ${({ theme }) => theme.page.paddingX.base}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding-left: ${({ theme }) => theme.page.paddingX.small}px;
    padding-right: ${({ theme }) => theme.page.paddingX.small}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-left: ${({ theme }) => theme.page.paddingX.medium}px;
    padding-right: ${({ theme }) => theme.page.paddingX.medium}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-left: ${({ theme }) => theme.page.paddingX.large}px;
    padding-right: ${({ theme }) => theme.page.paddingX.large}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    padding-left: ${({ theme }) => theme.page.paddingX.wide}px;
    padding-right: ${({ theme }) => theme.page.paddingX.wide}px;
  }
`;
