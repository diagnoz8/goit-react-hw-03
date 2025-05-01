import { Formik, Form, Field } from "formik";
import { useId } from "react";

export default function ContactForm({ onAdd }) {
     const nameFieldId = useId();
         const numberFieldId = useId();
    const handleSubmit = (values, actions) => {
        onAdd({
            name: values.name,
            number: values.number,
            id:  Date.now(),
        });
        		actions.resetForm();

    }
    return (
        <>
            <Formik initialValues={{
                name: "",
                number: ""
            }} onSubmit={handleSubmit}>
                <Form>
                    <label htmlFor={nameFieldId}>Name</label>

                    <Field type="text" name="name" id={nameFieldId} />
                     <label htmlFor={numberFieldId}>Number</label>

                    <Field type="text" name="number" id={numberFieldId } />

                <button type="submit">Add contact</button>
            </Form>
    </Formik>
            
        </>
    )
}

