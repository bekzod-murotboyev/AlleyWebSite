import Header from "../components/Header";
import MainPage from "./MainPage";
import News from "./News";
import Writers from "./Writer/writer";
import Books from "./Books";
import Picture from "./PicturePage";
import Footer from "../components/Footer";
import Video from "../Pages/VideoPage/video"
import Map from "./MapPage/Map";
function Main() {

    return (
        <div>
            <Header/>
            <MainPage/>
            <Video />
            <News/>
            <Writers/>
            <Books />
            <Picture/>
            {/*<Map zoomLevel={14}/>*/}
            <Footer/>
        </div>
    )
}

export default Main