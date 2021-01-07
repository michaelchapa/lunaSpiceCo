import React from 'react';
import { Formik, useField, Form} from 'formik';
import * as Yup from 'yup';
import { Styles } from './Styles';

const CustomTextInput = ({label, ...props}) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
        <label htmlFor = {props.id || props.name}>{label}</label>
            <input className = "shipping-text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className = "error">{meta.error}</div>
            ): null}
        </>
    )
}

const CustomCheckbox = ({children, ...props}) => {
    const [field, meta, helpers] = useField(props, 'checkbox');
    return (
        <>
        <label className = "checkbox">
            <input type = "checkbox" {...field} {...props} />
            {children}
        </label>
        {meta.touched && meta.error ? (
            <div className = "error">{meta.error}</div>
        ): null}
        </>
    )
}

const CustomSelect = ({label, ...props}) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
        <label htmlFor = {props.id || props.name}>{label}</label>
            <select className = "shipping-select-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className = "error">{meta.error}</div>
            ): null}
        </>
    )
}

function ShippingForm() {
    return (
        <Styles>
            <Formik
                initialValues = {{
                    name: '',
                    email: '',
                    address1: '', 
                    address2: '',
                    city: '',
                    state: '',
                    zipcode: '', 
                    acceptedTerms: '',
                }}

                validationSchema = {Yup.object({
                    name: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(13, 'Must be less than 13 characters')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    address1: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(35, 'Must be less than 35 characters')
                        .required('Required'),
                    address2: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(35, 'Must be less than 35 characters'),
                    city: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(35, 'Must be less than 35 characters')
                        .required('Required'),
                    state: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(35, 'Must be less than 35 characters')
                        .required('Required'),
                    zipcode: Yup.number()
                        .min(5, 'Must be 5 digits')
                        .max(5, 'Must be 5 digits')
                        .required('Required'),
                    accepted: Yup.boolean()
                        .oneOf([true], 'You must accept the Terms & Conditions')
                        .required('Required')
                })}

                onSubmit={(values, { setSubmitting, resetForm}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 3000)
                }}
            >
                {props => (
                    <Form>
                        <h1>Shipping</h1>
                        <CustomTextInput label = "Name" name = "name" type = "text" placeholder = "Frank" />
                        <CustomTextInput label = "Email" name = "email" type = "email" placeholder = "frankdeTank@cuk.com" />
                    </Form>
                )}

            </Formik>
        </Styles>
    )
}

export default ShippingForm
