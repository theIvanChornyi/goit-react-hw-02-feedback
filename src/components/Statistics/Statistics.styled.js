import styled from 'styled-components';

export const StatName = styled.span`
  text-transform: capitalize;
`;
export const StatValue = styled.span`
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
