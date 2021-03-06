import React from 'react';
import axios from 'axios'
import { Header, Container, Grid, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    state = { videos: [] } 
  
    componentDidMount() {
      axios.get('/api/videos')
      .then(res => {
        this.setState({ videos: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  
    showVideos = () => {
      return this.state.videos.map( v => (
        <Link to={`/api/videos/${v.id}`}>
          <Segment>
          </Segment>
                <Header as='h3'> {v.title} </Header>
        </Link>
      ))
    }
  
    render() {
      return (
        <>
    <Container>
      <br />
    <Header as="h3" textAlign="left">All Videos</Header>
      <Grid relaxed columns={3}>
        <Grid.Row stretched>
          <Grid.Column>
              {this.showVideos()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    </>
      )
    }
  }
  

// const Home = () => (
// <>
//   <Header>All Videos</Header>
//   <Grid>
//   <Grid.Row columns={2} align="right">
//     <Grid.Column>
//       <Image src='https://pbs.twimg.com/profile_images/1084624835379191808/boDA_nvF.jpg' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTcvMDkvMjkvMDcvNDEvNDEvMTkyL1cxc2laaUlzSWpJd01UY3ZNRGt2TWpZdk1Ea3ZNelF2TWpndk56QXhMMmR5WldGMExYLmpwZyJdLFsicCIsInRodW1iIiwiMjAwMHg2MDBcdTAwM2UiXSxbInAiLCJvcHRpbWl6ZSJdXQ' />
//     </Grid.Column>
//   </Grid.Row>
//   <Grid.Row columns={2} align="left">
//     <Grid.Column>
//       <Image src='https://media.vlipsy.com/vlips/VYOjH6ii/preview.jpg' />
//     </Grid.Column>
//   </Grid.Row>

//   <Grid.Row columns={5}>
//     <Grid.Column>
//       <Image src='data:image/jpeg;base64,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' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1495%252C823%252C42%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C881%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-10%252F282db930-f4f9-11e9-b86f-3c8877682dc5%26client%3Da1acac3e1b3290917d92%26signature%3D04147e18907a1c7ab9cc460d5dc626dfa4d65b32&client=amp-blogside-v2&signature=828320dc178e7e7ca568e92b40a9d62e9f3e64be' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='https://i.ytimg.com/vi/x_YzgwnDvH4/maxresdefault.jpg' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='https://vignette.wikia.nocookie.net/spongebob/images/a/a2/Culture_Shock_135.png/revision/latest?cb=20190818105556' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='https://www.malcare.com/wp-content/uploads/2019/05/why-is-my-website-slow-1080x675.png' />
//     </Grid.Column>
//   </Grid.Row>

//   <Grid.Row columns={5}>
//     <Grid.Column>
//       <Image src='https://66.media.tumblr.com/7ef14c8c5dc91e6cb7389377423833f4/tumblr_nxaz5gtp4e1uz53k3o1_400.png' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='https://i.imgur.com/CjJsBKW.jpg' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='https://i.redd.it/v4ah5tu1czb21.jpg' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='https://i.imgur.com/ZCCM9Fr.png?fb' />
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
// </>
// )
export default Home;
