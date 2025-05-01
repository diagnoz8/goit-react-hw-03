import { useId } from 'react';
export default function ContactForm({ onAdd }) {
    const id = useId();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAdd({
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
            id: id,
        });
        evt.target.reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <input type="text" name="number"/>

                <button>Add contact</button>
            </form>
        </>
    )
}