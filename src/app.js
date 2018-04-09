import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import ProgressIndicator from './components/progress-indicator/ProgressIndicator'
import PageHeader from './components/headers/page-header/PageHeader'

const MainPageLoadable = Loadable({
    loader: () => import('./views/src/MainPage'),
    loading: ProgressIndicator,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
    }
})

const CategoriesPageLoadable = Loadable({
    loader: () => import('./views/src/CategoriesViewPage'),
    loading: ProgressIndicator,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
    }
})

const PostsViewPageLoadable = Loadable({
    loader: () => import('./views/src/PostsViewPage'),
    loading: ProgressIndicator,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
    }
})

const CreatePostPageLoadable = Loadable({
    loader: () => import('./views/src/CreatePostPage'),
    loading: ProgressIndicator,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
    }
})

const texts = {
    logo: 'Readable',
    menu: {
        categories: 'Categories',
        posts: 'Posts',
        makePost: 'Make Post'
    }
}


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader texts={texts}/>
                <Route exact path="/" render={() => (
                    <MainPageLoadable />

                )} />
                <Route exact path="/categories" render={() => (
                    <CategoriesPageLoadable />

                )} />
                <Route exact path="/posts" render={() => (
                    <PostsViewPageLoadable />

                )} />
                <Route exact path="/makepost" render={() => (
                    <CreatePostPageLoadable />

                )} />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))