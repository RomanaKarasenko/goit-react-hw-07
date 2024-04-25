import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selector";
import styles from "./ContactList.module.css";

import Contact from "../contact/Contact";

function getfilteredContacts(contacts, filter) {
  if (filter.length > 0) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return contacts;
  }
}

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = getfilteredContacts(contacts, filter);
  return (
    <ul className={styles.ul}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
}

export default ContactList;
