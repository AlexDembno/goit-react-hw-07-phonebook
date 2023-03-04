import ContactElement from 'components/ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteContacts } from 'redux/contactsSlice/contactOperations';
import { selectContacts } from 'redux/contactsSlice/contacts-selectors';
import { selectFilter } from 'redux/filterSlise/filter-selectors';
import style from './Contacts.module.css';

function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const findName = () => {
    if (!filter) {
      return contacts;
    }
    const result = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return result;
  };

  const filterName = findName();

  const deleteNumber = contactId => {
    dispatch(fetchDeleteContacts(contactId));
  };

  return (
    <ul>
      {filterName.map(({ id, name, number }) => {
        return (
          <li key={id} className={style.item}>
            <ContactElement
              name={name}
              number={number}
              onClick={() => deleteNumber(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
