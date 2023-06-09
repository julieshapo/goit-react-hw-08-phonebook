import { deleteContact } from '../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { Button, ContactItem, Name } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <Name>
        {name} : {number}
      </Name>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
