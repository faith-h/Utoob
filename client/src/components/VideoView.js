import React from 'react'
import axios from 'axios'
import { Header, Comment } from 'semantic-ui-react'

class VideoView extends React.Component {
  state = { video: [], comments: [] }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/videos/${id}`)
    .then(res => {
      this.setState({ video: res.data })
    })

    axios.get(`/api.videos/${id}/comments`)
    .then( res => {
      this.setState({ items: res.data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  listComments = () => {
    const { id } = this.props.match.params
    return this.state.comments.map( c => (
      <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>
        <Comment>
          <Comment.Content>
            <Comment.Text>
              { c.body }
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      // can add user/author, like actions, + time of post with more time
    ))
  }

  render() {
    const { video: {id, title}} = this.state
    return( 
    <>
    {/* // // video itself
    // // video info in segment
    //   <Container>
    //   { this.listComments() }
    //   // other videos next to comments
    //   </Container> */}
    </>
    )
  }
}

export default VideoView