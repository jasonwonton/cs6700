import React, { Component } from 'react';
import BuildAPCSalesTopics from '../components/BuildAPCSalesTopics'


class Home extends Component {
  render() {
      return (
          <div className="condiv home">
            <h1 className="name">Subreddit Analysis by FastText</h1>
            <div className='rowC'>
              <BuildAPCSalesTopics/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          )
      }
  }
  
  export default Home