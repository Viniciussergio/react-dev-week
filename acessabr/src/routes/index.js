import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import Curitiba from '../pages/Curitiba';
import SaoPaulo from '../pages/SaoPaulo';
import RioDeJaneiro from '../pages/RioDeJaneiro';

const Routes = props => {
    return (
        <Router>
            <Switch>
                <Route path='/pr/curitiba' element={<Curitiba city={props.city}/>}/>
                <Route path='/sp/sao-paulo' element={<SaoPaulo city={props.city}/>}/>
                <Route path='/rj/rio-de-janeiro' element={<RioDeJaneiro city={props.city}/>}/>
            </Switch>
        </Router>
    );
}

export default Routes