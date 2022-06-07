import {Routes, Route} from "react-router";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Main from "./Pages/Main";
import Writers from "./Pages/Writer/writer";
// import Books from "./Pages/Books";


function App() {
    return (
        <div>
            <Routes>
                <Route path={"/login"} element={<SignIn/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/writers"} element={<Writers />}/>
                {/*<Route path={"/books"} element={<Books limit={100}/>}/>*/}
                <Route path={"/"} element={<Main/>}/>

            </Routes>
        </div>
    );
}

export default App;
