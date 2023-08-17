import styled from 'styled-components';

export const SubmitBtn = styled.button`
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.gray};
  text-transform: uppercase;
  font-weight: 700;
  padding: 8px;
  color: ${p => p.theme.colors.orange};
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 30px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid ${p => p.theme.colors.white};
  }
`;
