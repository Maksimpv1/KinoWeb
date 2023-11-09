import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";

import { Films } from "./components/films/films";
import { Film } from "./components/films/fimsComponents/film";
import { Help } from "./components/help/help";
import { LoginForm } from "./components/loginForm/loginForm";
import { MainBlock } from "./components/mainblock/mainBlock";
import { News } from "./components/news/news";
import { NotFound } from "./components/notFound/notFound";
import { Profile } from "./components/profile/profile";
import { ThemeProvider } from "./components/providers/themeProvider";
import { Registration } from "./components/registration/registration";
import { Search } from "./components/search/search";
import { Footer } from "./components/ui/footer/footer";
import { Header } from "./components/ui/header/header";
import { fetchFilms, getFavoritFilm } from "./redux/reducers/filmsReducer";
import { AppDispatch, useAppSelectorType } from "./redux/store/store";
import { dbFirebase } from "./firebase";

import "./App.css";

function App() {

  const dispatch = useDispatch<AppDispatch>()

  const fetchingValue = useAppSelectorType((state) => state.films.filmsFetching)
  const logState = useAppSelectorType((state) => state.auth.logState)
  const user = useAppSelectorType((state) => state.auth.user)
  
    useEffect(() => {
      dispatch(fetchFilms())
  },[fetchingValue])

  useEffect(() => {
    if(logState){
        const filmsRef = doc(dbFirebase, "favorits", user?.uid)
        const getFavData = onSnapshot(filmsRef, (film) =>{
            if(film.exists()){
                const filmData = film.data()
                dispatch(getFavoritFilm({ filmData }))
                console.log("Документ пришёл")
                console.log(filmData.favorits)
                
            }else{
                console.log("No Items in db");
            }
        })
        return () => {
            getFavData();
        }
    }

}, [logState]);

  
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<MainBlock/>}/>
              <Route path="/News" element={<News/>}/>
              <Route path="/Search" element={<Search/>}/>
              <Route path="/Help" element={<Help/>}/>
              <Route path="/Films" element={<Films/>}/>
              <Route path="/Film/:id" element={<Film/>}/>
              <Route path="/Login" element={<LoginForm/>}/>
              <Route path="/Registration" element={<Registration/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;



