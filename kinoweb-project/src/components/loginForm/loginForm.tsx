import React, { useContext, useEffect } from "react"
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { Formik,  } from "formik"
import * as yup from 'yup';

import { changeValueBurgerHandle } from "../../redux/reducers/burgerReduser";
import { AppDispatch } from "../../redux/store/store";
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { Container, Wrapper } from "../shared/styledComponents";

import { ErrorMessage, FormButton, FormTitle, LoginFormMain, RegisterLink, TextFieldContainer } from "./loginFormStyle";

interface ILoginForm {
    password:string,
    email:string,
}

export const LoginForm = () => {
    
    const themes = useContext(ThemeContext);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(changeValueBurgerHandle({ value:false }))
    },[])

    const ValidationsSchema = yup.object().shape({
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(8,'Min 8 symbols'),
        email: yup.string().email('Введите верный Email').required('Обязательное поле'),
    })
    return(
        <Container colorbg = {themes.BACKGROUND_THEME}>
            <SpaceLine></SpaceLine>
            <Wrapper>
                <FormTitle colortext={themes.TEXT_THEME}>Login form</FormTitle>
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
                                <LoginFormMain onSubmit={handleSubmit}>
                                    <TextFieldContainer>
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
                                        <ErrorMessage>{errors.email}</ErrorMessage>}
                                    </TextFieldContainer>
                                    <TextFieldContainer>
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
                                        <ErrorMessage>{errors.password}</ErrorMessage>}
                                    </TextFieldContainer>
                                    <div>
                                    <FormButton type="submit" disabled={!isValid && !dirty}>
                                    Login
                                    </FormButton>
                                    </div> 
                                    <RegisterLink to="/Registration">Dont have an account?</RegisterLink>
                                </LoginFormMain>
                            )}  
                </Formik>
            </Wrapper>
            <SpaceLine></SpaceLine>
        </Container>
    )
}