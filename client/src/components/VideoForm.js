import React from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'semantic-ui-react';

class VideoForm extends React.Component {
  state = { videos: [], title: '', duration: '', genre: '', description: '', trailer: '',  }

  componentDidMount() {
    axios.get('/api/videos')
    .then(res => {
      this.setState({ videos: res.data })
    })
    .catch(err => {
      console.log(err.response)
    })
    const { id } = this.props
    if (id)
      axios.get(`/api/videos/${id}`)
        .then(res => {
          const {title, duration, genre, description, trailer }= res.data         
          this.setState({title, duration, genre, description, trailer, })
        })
        .catch(err => {
          console.log(err)
        })
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const video = { ...this.state }
    const { id, update, } = this.props
    if (id) {
      axios.put(`/api/videos/${id}`, video)
        .then(res => {
          update(res.data)
        })
    } else {
      axios.post('/api/videos', video)
        .then(res => {
          this.setState({ videos: [res.data, ...this.state.videos] })
        })
    }
  }



  render() {
    const {title, duration, genre, description, trailer } = this.state
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
            name="title"
            placeholder="Title Name"
            autoFocus
            value={title}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            name="duration"
            placeholder="Video Duration"
            value={duration}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            name="genre"
            placeholder="Genre"
            value={genre}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
            required
          />
            <Form.Input
            name="trailer"
            placeholder="Trailer Url"
            value={trailer}
            onChange={this.handleChange}
            
          />
           <Button
            inverted
            icon='send'
            content='Submit'
            color='green'
          />
        </Form>
      </Container>
    )
  }
}
 


export default VideoForm
