import React, { useContext, useEffect } from "react"
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { TextField } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik,  } from "formik"
import * as yup from 'yup';

import { loginStateSwitch, setUser } from "../../redux/reducers/authorisation";
import { changeValueBurgerHandle } from "../../redux/reducers/burgerReduser";
import { AppDispatch, useAppSelectorType } from "../../redux/store/store";
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock, Wrapper } from "../shared/styledComponents";

import imgBack from "./img/LoginBack.jpg";
import { ErrorMessage, FormButton, FormTitle, LoginFormMain, RegisterLink, TextFieldContainer } from "./loginFormStyle";

interface ILoginForm {
    password:string,
    email:string,
}

export const LoginForm = () => {

    const navigate = useNavigate()

    const themes = useContext(ThemeContext);

    const dispatch = useDispatch<AppDispatch>();

    const loginState = useAppSelectorType((state) => state.auth.logState)

    useEffect(()=>{
        dispatch(changeValueBurgerHandle({ value:false }))
    },[])

    const handlerLogin = (email:string, password:string)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user })=>{
                dispatch(setUser({
                    email:user.email,
                    uid:user.uid,
                    token:user.refreshToken,
                }))
                dispatch(loginStateSwitch({ LogStateBol:true }))
                navigate('/Profile')
            })
            .catch(() => alert("invalid user"))
    }

    const ValidationsSchema = yup.object().shape({
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(8,'Min 8 symbols'),
        email: yup.string().email('Введите верный Email').required('Обязательное поле'),
    })
    return  !loginState ? (
        <Container colorbg = {themes.BACKGROUND_THEME}>
            <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            Login soon to start watching your favorit movies
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer> 
            <SpaceLine></SpaceLine>
            <Wrapper>
                <FormTitle colortext={themes.TEXT_THEME}>Login form</FormTitle>
                <Formik
                initialValues = {{
                    email:'',
                    password:'',
                }}
                validateOnBlur
                    onSubmit ={(values:ILoginForm) => {
                        handlerLogin(values.email,values.password)
                        }}
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
    ) : (
        <Navigate to="/Profile"/>
    )
}