
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast'

import Navbar from './Components/common/Navbar'
import Home from './Components/common/Home'
import Join from './Components/auth/Join'
import Signup from './Components/auth/Signup'
import GetToKnow from './Components/auth/GetToKnow'
import Login from './Components/auth/Login'
import PhotosHome from './Components/photos/PhotosHome'
import PhotosUpload from './Components/photos/PhotosUpload'
import PhotosSubmit from './Components/photos/PhotoSubmit'
import PhotosProfile from './Components/photos/PhotosProfile'
import PhotoShow from './Components/photos/PhotoShow'
import PhotosLiked from './Components/photos/PhotosLiked'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Notifications />
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/join' component={Join} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/gettoknow' component={GetToKnow} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/liked' component={PhotosLiked} />
          <Route path='/photoshome' component={PhotosHome} />
          <Route path='/upload' component={PhotosUpload} />
          <Route path='/submitphoto' component={PhotosSubmit} />
          <Route path='/profile/:id' component={PhotosProfile} />
          <Route path='/photos/:id' component={PhotoShow} />

        </Switch>
      </BrowserRouter>
    </>
  )

}

export default App


