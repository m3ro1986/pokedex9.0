import { HashRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import './styles/App.css';

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route element={<ProtectedRoutes/>}>
                    
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
