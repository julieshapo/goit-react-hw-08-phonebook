import { SubmitBtn } from './ButtonSubmit.styled';

export const ButtonSubmit = ({ type = 'submit', children, ...otherProps }) => {
  return (
    <SubmitBtn type={type} {...otherProps}>
      {children}
    </SubmitBtn>
  );
};
