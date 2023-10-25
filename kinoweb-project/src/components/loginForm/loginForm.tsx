import React from "react"
import { NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import { Formik,  } from "formik"
import * as yup from 'yup';

interface ILoginForm {
    password:string,
    email:string,
}

export const LoginForm = () => {
    const ValidationsSchema = yup.object().shape({
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(8,'Min 8 symbols'),
        email: yup.string().email('Введите верный Email').required('Обязательное поле'),
    })
    return(
        <div>
            <h2>Login form</h2>
            <Formik
            initialValues = {{
                email:'',
                password:'',
            }}
            validateOnBlur
                onSubmit ={(values:ILoginForm) => {alert(
                    `
                     Email: ${values.email}
                     Пароль: ${values.password}`
                )}}
                validationSchema={ValidationsSchema}            
            >
                 {({ values,errors,touched,handleChange, handleBlur,isValid,handleSubmit, dirty }) => (
                            <form onSubmit={handleSubmit}>
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
                                {touched.email && errors.email && 
                                <p>{errors.email}</p>}
                                
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
                                {touched.password && errors.password && 
                                <p>{errors.password}</p>}
                                <div>
                                <button type="submit" disabled={!isValid && !dirty}>
                                login
                                </button>
                                </div> 
                            </form>
                        )}  

            </Formik>
            <NavLink to="/Registration">Registration</NavLink>
        </div>
    )
}