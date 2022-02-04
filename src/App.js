import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';


function App() {
  return <>


  <GlobalStyle/> 

    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} ></Route>
        <Route exact path="/about" component={AboutPage} ></Route>
        <Route exact path="/blog" component={BlogPage} ></Route>
        <Route exact path="/skills" component={MySkillsPage} ></Route>
        <Route exact path="/work" component={WorkPage} ></Route>
      </Switch>
    </ThemeProvider>

    </>
    
}

export default App

