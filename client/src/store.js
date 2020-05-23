import {createStore} from 'redux';

import rootReducer from './reducer/root-reducer';

const store = createStore(rootReducer);

export default store;

// В этом файле мы подключаем стор. В нем бутут хранится все состояния наших компонентов.