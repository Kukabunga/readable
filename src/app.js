import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import ProgressIndicator from './components/progress-indicator/ProgressIndicator'

const MainPageLoadable = Loadable({
    loader: () => import('./views/src/MainPage'),
    loading: ProgressIndicator
})

const CategoriesPageLoadable = Loadable({
    loader: () => import('./views/src/CategoriesViewPage'),
    loading: ProgressIndicator
})

const PostsViewPageLoadable = Loadable({
    loader: () => import('./views/src/PostsViewPage'),
    loading: ProgressIndicator
})

const CreatePostPageLoadable = Loadable({
    loader: () => import('./views/src/CreatePostPage'),
    loading: ProgressIndicator
})

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/* MainMenu */}
                <Route exactPath ="/" render={() => ()}>
                </Route>
            </React.Fragment>
        )
    }
}