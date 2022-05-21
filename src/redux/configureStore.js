import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createForms} from 'react-redux-form'; //para poder alamcenar nuestro form
import logger from 'redux-logger';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import {InitialFeedBack} from './forms';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders:Leaders,
            ...createForms({
                feedback: InitialFeedBack
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};