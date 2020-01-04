import React from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'semantic-ui-react';




class VideoForm extends React.Component {
  state = {title: '', duration: '', genre: '', description: '', trailer: '',  }

  componentDidMount() {
    const { id } = this.props
    if (id)
      axios.get(`/api/videos/${id}`)
        .then(res => {
          const {title, duration, genre, description, trailer }= res.data         
          this.setState({title, duration, genre, description, trailer, })
        })
        .catch(err => {
          console.log(err.response)
        })
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const video = { ...this.state }
    const { id, update, toggleForm, } = this.props
    if (id) {
      axios.put(`/api/videos/${id}`, video)
        .then(res => {
          update(res.data)
          toggleForm()
        })
    } else {
      const { add, toggleForm, } = this.props
      axios.post('/api/videos', video)
        .then(res => {
          add(res.data)
          toggleForm()
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
          <Button
            inverted
            content='Cancel'
            color='red'
            icon='cancel'
            onClick={() => this.props.toggleForm()}
          />
        </Form>
      </Container>
    )
  }
}
 


export default VideoForm
