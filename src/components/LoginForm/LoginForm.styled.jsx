import styled from 'styled-components';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 320px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Field = styled(FormikField)`
  font-size: 16px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: ${p => p.theme.colors.error};
`;

export const Button = styled.button`
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid ${p => p.theme.colors.gray};
  text-transform: uppercase;
  font-weight: 700;
  color: ${p => p.theme.colors.orange};
  margin-bottom: 30px;

  :hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid ${p => p.theme.colors.gray};
  }
`;
