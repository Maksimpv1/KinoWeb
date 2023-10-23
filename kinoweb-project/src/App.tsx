import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Films } from "./components/films/films";
import { Help } from "./components/help/help";
import { MainBlock } from "./components/mainblock/mainBlock";
import { News } from "./components/news/news";
import { NotFound } from "./components/notFound/notFound";
import { ThemeProvider } from "./components/providers/themeProvider";
import { Search } from "./components/search/search";
import { Footer } from "./components/ui/footer/footer";
import { Header } from "./components/ui/header/header";

import "./App.css";

function App() {
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
