import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Casa from '../pages/Casa'
import Enlace1 from '../pages/Enlace1';
import Enlace2 from '../pages/Enlace2';
import NotFound from '../pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Casa/>}/>
                <Route exact path='/enlace1' element={<Enlace1/>}/>
                <Route exact path='/enlace2' element={<Enlace2/>}/>
                <Route path='*' element= {<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;