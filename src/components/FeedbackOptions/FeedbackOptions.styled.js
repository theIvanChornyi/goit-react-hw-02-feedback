import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  display: flex;
  background-color: ${p => p.theme.colors.accent};

  padding: ${p => p.theme.space[1]}px;

  color: ${p => p.theme.colors.btnText};
  text-transform: capitalize;

  border: none;
  border-radius: ${p => p.theme.radii.small}px;

  transition: color, background-color 400ms;

  :hover,
  :focus {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const FeedbackItem = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.space[0]}px;
  }
`;
