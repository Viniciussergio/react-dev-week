import {Routes as Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import { LocationContext } from '../contexts/LocationContext';
import { useState } from 'react';
import Header from '../components/Header';
import { FilterContext } from '../contexts/FilterContext';

const Routes = () => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [filteredPlace, setFilteredPlace] = useState('');
    return (
        <FilterContext.Provider value={{filteredPlace, setFilteredPlace}}>
            <LocationContext.Provider value={{city, setCity, state, setState}}>
                <Header />
                <Switch>
                    <Route path='/:state/:city' element={<Home city={city} state={state}/>}/>
                </Switch>
            </LocationContext.Provider>
        </FilterContext.Provider>
    );
};

export default Routes