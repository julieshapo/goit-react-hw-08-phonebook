import styled from 'styled-components';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const Form = styled(FormikForm)`
  max-width: 400px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
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
