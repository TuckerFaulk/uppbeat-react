import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import AudioComp from "./components/AudioComp";
import "./api/axiosDefaults";
import Index from "./pages/Index";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Index />
      <AudioComp />
    </div>
  );
}

export default App;
