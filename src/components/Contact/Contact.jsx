import css from './Contact.module.css'
export default function Contact({ contactData, onRemove }) {
    
    return (
        <>
            <ul>
                <li >{contactData.name}</li>
                <li >{contactData.number}</li>
         </ul>
            <button onClick={() => onRemove(contactData.id)}>Delete</button>
        </>
        
    )
}