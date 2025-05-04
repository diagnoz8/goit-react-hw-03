import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import uniqid from 'uniqid';
import css from './ContactForm.module.css';
const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),

});
export default function ContactForm({ onAdd }) {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const handleSubmit = (values, actions) => {
        onAdd({
            name: values.name,
            number: values.number,
            id:  uniqid(),
        });
        		actions.resetForm();
    }
   
    return (
        <>
            <Formik initialValues={{
                name: "",
                number: ""
            }}
                onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
                <Form className={css.contactForm}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                      <ErrorMessage name="name" component="span" />

                     <label htmlFor={numberFieldId}>Number</label>
                    <Field type="text" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" component="span" />


                <button type="submit">Add contact</button>
            </Form>
    </Formik>
            
        </>
    )
}

