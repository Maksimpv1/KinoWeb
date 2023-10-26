import { useAppSelectorType } from "../../redux/store/store"

export const useAuth = ()=>{
    const { 
        firstName ,
        lastName ,
        email ,
        password ,
        token,
        id } = useAppSelectorType((state) => state.auth);

    return{
        isAuth: Boolean(email),
        firstName,
        lastName,
        email,
        password,
        token,
        id,
    }
}