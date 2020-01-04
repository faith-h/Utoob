import React from 'react'
import axios from 'axios'
import VideoForm from './VideoForm'
import { Header, Comment, Container, Segment, Button } from 'semantic-ui-react'

class VideoView extends React.Component {
  state = { video: {}, comments: [], toggle: false }

  componentDidMount() {
    const { video_id } = this.props.match.params
    axios.get(`/api/videos/${video_id}`)
    .then(res => {
      this.setState({ video: res.data })
    })

    axios.get(`/api/videos/${video_id}/comments`)
    .then( res => {
      this.setState({ items: res.data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  toggleForm = () => this.setState({ toggle: !this.state.toggle })
  
  handleDelete = () => {
    const { video_id } = this.props.match.params
    axios.delete(`/api/videos/${video_id}`)
    .then(res => {
      this.props.history.push('/')
  })
}

  listComments = () => {
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
    const { video } = this.state
    return( 
    <>
    <Container>
      <Segment>
        { video.title }

        { this.state.toggle ?
          <VideoForm />
          :
          <Button onClick={() => this.toggleForm()}>
            Edit
          </Button>
        }

        <Button onClick={this.handleDelete}>
          Delete
        </Button>
        {/* <Button onClick={this.toggleForm()}>
          Edit
        </Button>
        { this.state.toggle ?
        <VideoForm />
        :
        null
        } */}
      </Segment>
      {this.listComments()}
    </Container>

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