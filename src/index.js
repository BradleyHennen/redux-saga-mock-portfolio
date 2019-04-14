import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


// Create the rootSaga generator function

//----SAGAS----
const sagaMiddleware = createSagaMiddleware();

function* getProjectList(action) {
    try {
        const getResponse = yield axios.get('/portfolio');
        const action = { type: 'SET_PROJECTS', payload: getResponse.data };
        yield put(action);
    }
    catch (error) {
        console.log(`Couldn't get projects`);
        alert(`Sorry couldn't get projects. Try again later.`)
    }
}

function* getTags(action) {
    try {
        const getResponse = yield axios.get('/portfolio/tags');
        const action = { type: 'SET_TAGS', payload: getResponse.data };
        yield put(action);
    }
    catch (error) {
        console.log(`Couldn't get projects`);
        alert(`Sorry couldn't get projects. Try again later.`)
    }
}

function* addProject(action) {
    console.log('In addProject Saga', action.payload);
    try {
        yield axios.post('/portfolio', action.payload);
        yield put({ type: 'GET_PROJECTS' })
    }
    catch (error) {
        console.log(`couldn't add new project`, error);
        alert(`Sorry, couldn't add your project.  Try again later.`);
    }
}

function* addTag(action) {
    console.log('In addTag Saga', action.payload);
    try {
        yield axios.post('/portfolio/tags', action.payload);
        yield put({ type: 'GET_TAGS' });
    }
    catch (error) {
        console.log(`couldn't add new tag`, error);
        alert(`Sorry, couldn't add your tag.  Try again later.`);
    }
}

function* deleteProject(action) {
    try {
        yield axios.delete(`/portfolio/${action.payload}`);
        yield put({ type: 'GET_PROJECTS' });
    }
    catch (error) {
        console.log(`Couldn't delete plant.`, error);
        alert(`Sorry couldn't delete plant. Try again later.`);
    }
}

function* rootSaga() {
    yield takeEvery('GET_PROJECTS', getProjectList);
    yield takeEvery('ADD_PROJECT', addProject);
    yield takeEvery('GET_TAGS', getTags);
    yield takeEvery('DELETE_PROJECT', deleteProject);
    yield takeEvery('ADD_TAG', addTag);
}

//----REDUCERS----
// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
