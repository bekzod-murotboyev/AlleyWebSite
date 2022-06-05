import Footer from "./components/Footer";
import Header from "./components/Header";
import Books from "./Pages/Books";
import MainPage from "./Pages/MainPage";
import News from "./Pages/News";
import Picture from "./Pages/PicturePage";
import Writers from "./Pages/Writer/writer";

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <News />
      <Writers />
      <Books />
      <Picture />
      <Footer />
    </div>
  );
}

export default App;
