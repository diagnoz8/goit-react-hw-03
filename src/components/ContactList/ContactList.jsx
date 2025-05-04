import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
export default function ContactList({contacts, onRemove}) {
    return (
            <ul className={css.contactList}>
            {contacts.map(contact => (<li className={css.contactListItem } key={contact.id}>
                    <Contact contactData={contact} onRemove={onRemove} />
                </li>)

                )}
            </ul>
    )
}