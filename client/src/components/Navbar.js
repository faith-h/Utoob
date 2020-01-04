import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, Button, Dropdown } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  // state = { toggle: false }

  // toggleUserView = () => this.setState({ toggle: !this.state.toggle})

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <>
        <Menu.Menu position='right'>
        <Menu.Item>
          <Image circular src={require('../images/user.png')} 
            as='a'
            style={{ height: '40px', width: '40px'}}
            />
            <Dropdown>
          <Dropdown.Menu>
          <Dropdown.Item text='Profile' href='/profile' />
          <Dropdown.Item text='MyVideos' href ='/myvideos' />
          <Dropdown.Item text='MyFriends' href ='/myfriends' />
          <Dropdown.Divider />
          <Dropdown.Item text='LogOut'  onClick={() => handleLogout(this.props.history)}/>
          </Dropdown.Menu>
          </Dropdown>
          </Menu.Item>
          </Menu.Menu>
          <Menu.Item>
          <Button as={ Link }
            color='red'
            size='tiny'
            to='/videoform'
            // figure out route to video form
            > Upload Video 
            </Button>
        </Menu.Item>
      </>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
              <Menu.Item>
            <Link to= './'>

          <Image src={require('../images/logo.png')} 
          as='a'
          size='small'
          href='localhost:3000'
          />
          </Link>
          </Menu.Item>
          { this.rightNavItems() }
        </Menu>
      </div>
    );
  };
};

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    );
  };
};

export default withRouter(ConnectedNavbar);
