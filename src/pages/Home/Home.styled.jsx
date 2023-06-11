import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  padding-top: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Link = styled(StyledLink)`
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  padding: 8px;
  font-weight: 700;
  color: #2a363b;

  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.gray};
  text-transform: uppercase;
  font-weight: 700;
  color: ${p => p.theme.colors.orange};
  margin-bottom: 30px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid ${p => p.theme.colors.white};
  }
`;
