import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  font-size: 14px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 6px;
  border: 1px solid ${p => p.theme.colors.gray};
  color: ${p => p.theme.colors.orange};
  background-color: ${p => p.theme.colors.white};

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid ${p => p.theme.colors.white};
  }
`;
