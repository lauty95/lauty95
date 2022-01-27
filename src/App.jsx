import { useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  let styles = {
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode ? "white" : "black"
  }

  return (
    <div style={styles}>
      <Toggle />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;