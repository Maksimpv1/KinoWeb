import React from "react"
import { TextField } from "@mui/material";
import { Formik,  } from "formik"
import * as yup from 'yup';

interface IRegistration {
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    confirmPassword:string,
}

export const Registration = () => {

    const ValidationsSchema = yup.object().shape({
        firstName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        lastName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(8,'Min 8 symbols'),
        confirmPassword: yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('Обязательное поле'),
        email: yup.string().email('Введите верный Email').required('Обязательное поле'),
    })
    
    return(
        <div>
            <h2>Registration Form</h2>
            <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                password:'',
                confirmPassword:'',
                email:'',
            }}            
            validateOnBlur
            onSubmit ={(values:IRegistration) => {alert(
                `
                 Имя: ${values.firstName}
                 Фамилия: ${values.lastName}
                 Email: ${values.email}
                 Пароль: ${values.password}`
            )}}
            validationSchema={ValidationsSchema}
            >
       {({ values,errors,touched,handleChange, handleBlur,isValid,handleSubmit, dirty }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField 
                                id="outlined-basic" 
                                label="First Name" 
                                variant="outlined" 
                                type={`text`}
                                name={`firstName`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                />
                                {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                                
                                <TextField 
                                id="outlined-basic" 
                                label="Last Name" 
                                variant="outlined" 
                                type={`text`}
                                name={`lastName`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                />
                                {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                                
                                <TextField 
                                id="outlined-basic" 
                                label="Email" 
                                variant="outlined" 
                                type={`email`}
                                name={`email`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                />
                                {touched.email && errors.email && <p>{errors.email}</p>}
                                <TextField 
                                id="outlined-basic" 
                                label="Password" 
                                variant="outlined" 
                                type={`password`}
                                name={`password`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                />
                                {touched.password && errors.password && <p>{errors.password}</p>}
                                <TextField 
                                id="outlined-basic" 
                                label="Confirm password" 
                                variant="outlined" 
                                type={`password`}
                                name={`confirmPassword`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                />
                                {touched.confirmPassword && errors.confirmPassword && <p>
                                    {errors.confirmPassword}</p>}  
                               <button 
                                disabled={!isValid && !dirty}
                                type="submit">Submit</button>
                            </form>
                        )}
            </Formik>
        </div>
    )
}