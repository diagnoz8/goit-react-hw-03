import Contact from "../Contact/Contact"
export default function ContactList({contacts, onRemove}) {
    return (
            <ul>
            {contacts.map(contact => (<li key={contact.id}>
                    <Contact contactData={contact} onRemove={onRemove} />
                </li>)

                )}
            </ul>
    )
}