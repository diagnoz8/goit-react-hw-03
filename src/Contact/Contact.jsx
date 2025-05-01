export default function Contact({ contactData }) {
    return (
        <>
            <ul>
                <li>{contactData.name}</li>
                <li>{contactData.number}</li>
         </ul>
            <button>Delete</button>
        </>
        
    )
}