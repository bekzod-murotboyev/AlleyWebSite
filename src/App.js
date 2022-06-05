import SignIn from "./page/SignIn";
import Dashboard from "./page/Dashboard";
import {Route, Routes} from "react-router";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/login'} element={<SignIn/>}/>
                <Route path={'/Dashboard'} element={<Dashboard/>}/>
            </Routes>
        </div>
    );
}

export default App;

