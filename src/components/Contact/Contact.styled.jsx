import styled from 'styled-components';

export const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Name = styled.div`
  font-size: 14px;

  @media screen and (min-width: 420px) {
    font-size: 16px;
  }

  @media screen and (min-width: 620px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  height: 24px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  border: 1px solid ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.orange};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid ${p => p.theme.colors.white};
  }
`;
