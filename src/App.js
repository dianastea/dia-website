import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences2";
import Classes from "./components/Classes2";
import About from "./components/About";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css";
import { Repeat } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    h4: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 300,
      letterSpacing: 0.75,
    },
  },
});

export default function App() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const experiencesRef = useRef(null);
  const classesRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar scrollToSection={scrollToSection} />
          <div ref={heroRef}>
            <Hero />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={experiencesRef}>
            <Experiences />
          </div>
          <div ref={classesRef}>
            <Classes />
          </div>
          {/* <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/" element={<Experiences />} />
            <Route path="/" element={<Classes />} />
          </Routes> */}
        </div>
      </ThemeProvider>
    </Router>
  );
}
