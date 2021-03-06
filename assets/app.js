/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import PostList from './pages/Posts/PostList'
import Post from './pages/Posts/Post'
import NewPost from './pages/Posts/NewPost';

const App = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route index element={<PostList/>}/>
                    <Route path='post/:postId' element={<Post/>}/>
                    <Route path='post/new' element={<NewPost/>}/>
                </Route>
            </Routes>         
        </div>
    )   
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
document.getElementById('root'))

