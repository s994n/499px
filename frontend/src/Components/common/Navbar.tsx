import React from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import DropdownAvatar from './commonSubComponents/DropdownAvatar'
import { isAuthenticated, getIsGettingToKnow } from '../../lib/auth'
import { getUserProfile } from '../../lib/api'
import { getAvatar, getUserId } from '../../lib/assets'

type StateType = {
  avatarImg: string;
}

type Props = RouteComponentProps<{}, {}, StateType>
interface State {
  avatar: string | null;
  userId: number | null;
}

class Navbar extends React.Component<Props, State> {

  state = {
    avatar: '',
    userId: null
  }

  async componentDidMount(): Promise<void> {
    if (isAuthenticated()){
      try {
        const response = await getUserProfile()
        const { id }: {id: number} = response.data
        const avatar = getAvatar()
    
        this.setState({
          avatar,
          userId: id
        })
      } catch (err) {
        console.error(err)
      }
    }
  }


  render(): JSX.Element {

    const avatar = getAvatar()
    const localUserId = getUserId()

    return (
      <nav className='navbar'>
        <div className='logo'>
          {isAuthenticated() &&
            <Link to='/photoshome' style={{ textDecoration: 'none', color: 'black' }}>
              <p>499<sup>px</sup></p>
            </Link>
          }
          {!isAuthenticated() &&
            <p>499<sup>px</sup></p>
          }
        </div>
        <div className='nav-btns'>
          {(!getIsGettingToKnow() && !isAuthenticated()) &&
            <div>
              <Link
                to={'/login'}
                data-cy='navbar-login'
              >
                Log in
              </Link>
              <Button className='lozenge' as={Link} to={'/join'}>
                Sign up
              </Button>
            </div>
          }
          {isAuthenticated() &&
            <Menu.Item>
              <DropdownAvatar
                sourceImage={this.props.location.state ? this.props.location.state.avatarImg : avatar}
                userId={localUserId}>
              </DropdownAvatar>
              <Button className='lozenge upload' as={Link} to={'/upload'}>
                <Icon name='arrow up' />
            Upload
              </Button>
            </Menu.Item>
          }
        </div>

      </nav>

    )

  }

}

export default withRouter(Navbar)