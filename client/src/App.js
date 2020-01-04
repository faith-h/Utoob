import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import VideoForm from './components/VideoForm';
import VideoView from './components/VideoView'
import Profile from './components/Profile'
import MyVideos from './components/MyVideos'
import MyFriends from './components/MyFriends'
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/videoform" component={VideoForm} />
          <Route exact path="/videos/:video_id" component={VideoView} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/myvideos" component={MyVideos} />
          <Route exact path="/myfriends" component={MyFriends} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;