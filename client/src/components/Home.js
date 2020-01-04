import React from 'react';
import axios from 'axios'
import { Header, Container, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = { videoS: [] } 

  componentDidMount() {
    axios.get('/api/videos')
    .then(res => {
      this.setState({ videos: res.data })
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  showVideos = () => {
    return this.state.videos.map( v => (
      <Link to={`/api/videos/${v.id}`}>
        <div style={{ padding: '60px', }}>
        <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
        </div>
      </Link>
    ))
  }

  render() {
    return (
  <Container>
    <br />
  <Header as="h3" textAlign="left">All Videos</Header>
  </Container>
    )
  }
}

export default Home;
