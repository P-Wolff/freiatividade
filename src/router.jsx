import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/pages/app/App';


export default function Navegacao() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> } />

            </Routes>
        </BrowserRouter>
        );
} 