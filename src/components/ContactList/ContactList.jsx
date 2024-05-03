import React from 'react'
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from 'react-redux';


const ContactList = () => {
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    return (
        <div >
            <ul className={css.contactList}>
                {(filter ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
                    : contacts).map((contact) => {
                        return <Contact key={contact.id} contact={contact} />;
                    })
                }
            </ul>
        </div>
    )
}

export default ContactList