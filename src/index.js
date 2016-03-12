import React from "react"
import { render } from "react-dom"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { syncHistoryWithStore, routerReducer } from "react-router-redux"
import injectTapEventPlugin from "react-tap-event-plugin"
import "normalize.css"

import reducers from "./reducers"
import Blog from "./containers/Blog"
import Posts from "./containers/Posts"

injectTapEventPlugin()

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Blog}>
        <Route path="posts">
          <IndexRoute component={Posts} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("blog-app")
)
