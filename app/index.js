import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import routes from './config/routes'
import users from 'redux/modules/users'

const store = createStore(users)
console.log(store);
console.log(store.getState());

ReactDOM.render(
    routes,
    document.getElementById('app')
)
