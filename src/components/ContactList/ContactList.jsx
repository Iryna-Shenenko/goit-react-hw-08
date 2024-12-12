import css from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";


const ContactList = () => {

    const filteredContacts = useSelector(selectFilteredContacts);

    


  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          {...contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;