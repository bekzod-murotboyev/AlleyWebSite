import {Routes, Route} from "react-router";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Main from "./Pages/Main";


function App() {
    return (
        <div>
            <Routes>
                <Route path={"/login"} element={<SignIn/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/"} element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;
