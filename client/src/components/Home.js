import React from 'react';
import axios from 'axios'
import { Header, Container, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = { videos: [] } 

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
        <Segment>
        </Segment>
              <Header as='h3'> {v.title} </Header>
        </div>
      </Link>
    ))
  }

  render() {
    return (
  <Container>
    <br />
  <Header as="h3" textAlign="left">All Videos</Header>
    <Grid relaxed columns={3}>
      <Grid.Row stretched>
        <Grid.Column>
            {this.showVideos()}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
    )
  }
}

export default Home;
