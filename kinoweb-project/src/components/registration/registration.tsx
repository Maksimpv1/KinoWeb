import React, { useContext, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import { Formik,  } from "formik"
import * as yup from 'yup';

import { setUser } from "../../redux/reducers/authorisation";
import { changeValueBurgerHandle } from "../../redux/reducers/burgerReduser";
import { AppDispatch } from "../../redux/store/store";
import { ErrorMessage, FormButton, FormTitle, LoginFormMain, TextFieldContainer } from "../loginForm/loginFormStyle";
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock, Wrapper } from "../shared/styledComponents";

import imgBack from "./img/Registration.jpg"

interface IRegistration {
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    confirmPassword:string,
}

export const Registration = () => {

     const navigate = useNavigate()
    
    const themes = useContext(ThemeContext);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(changeValueBurgerHandle({ value:false }))
    },[])

    const handlerRegistration = (email:string, password:string , firstName:string , lastname:string )=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user })=>{
                console.log(user)
                const displayName = (firstName + ' ' + lastname) 
                dispatch(setUser({
                    email:user.email,
                    uid:user.uid,
                    token:user.refreshToken,
                    displayName: user.displayName,
                }))
                navigate('/Login')
            })
            .catch(console.error)
    }

    const ValidationsSchema = yup.object().shape({
        firstName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        lastName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(8,'Min 8 symbols'),
        confirmPassword: yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('Обязательное поле'),
        email: yup.string().email('Введите верный Email').required('Обязательное поле'),
    })
    
    return(
        <Container colorbg = {themes.BACKGROUND_THEME}>
            <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            Register to start watching your favorite movies
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer> 
            <SpaceLine></SpaceLine>
            <Wrapper>
                <FormTitle colortext={themes.TEXT_THEME}>Registration Form</FormTitle>
                <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    password:'',
                    confirmPassword:'',
                    email:'',
                }}            
                validateOnBlur
                onSubmit ={(values:IRegistration) => {
                    handlerRegistration(values.email,values.password, values.firstName, values.lastName )
                    }}
                validationSchema={ValidationsSchema}
                >
        {({ values,errors,touched,handleChange, handleBlur,isValid,handleSubmit, dirty }) => (
                                <LoginFormMain onSubmit={handleSubmit}>
                                    <TextFieldContainer>
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
                                        {touched.firstName && errors.firstName && 
                                        <ErrorMessage>{errors.firstName}</ErrorMessage>}
                                    </TextFieldContainer>
                                    
                                    <TextFieldContainer>
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
                                        {touched.lastName && errors.lastName && 
                                        <ErrorMessage>{errors.lastName}</ErrorMessage>}
                                    </TextFieldContainer>
                                    
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

                                    <TextFieldContainer>
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
                                        {touched.confirmPassword && errors.confirmPassword && 
                                        <ErrorMessage>{errors.confirmPassword}</ErrorMessage>} 
                                    </TextFieldContainer> 
                                    
                                <FormButton 
                                    disabled={!isValid && !dirty}
                                    type="submit">Submit</FormButton>
                                </LoginFormMain>
                            )}
                </Formik>
            </Wrapper>
            <SpaceLine></SpaceLine>
        </Container>
    )
}