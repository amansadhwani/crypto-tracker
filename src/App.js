import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Coins from './pages/Coins';
import { makeStyles } from "@material-ui/core";

const App = () => {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coins/:id" element={<Coins />} />
      </Routes>
    </div>
  );
}

export default App;
