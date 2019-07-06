import React from 'react';
import './App.css';
import { Post } from './components/post/Post';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  getComments(post) {
    let temp = Math.random() * Math.floor(3);
    if (Math.floor(temp) === 6) {
      return post.location.coordinates;
    }else if (Math.floor(temp) === 1) {
      return {'Ali': 'salam, khubi?', 'Hasan76': '♥♥♥', 'Hosein_m': 'از پیج ما هم دیدن کنید'};
    } else if (Math.floor(temp) === 1) {
      return {'AliReza': 'Khosh begzare', 'Hana': '♥', 'Hosein_m': 'از پیج ما هم دیدن کنید', 'Melika': ':)))'};
    } else if (Math.floor(temp) === 2) {
      return {'Reza': 'خخخخ', 'Ali__Reza': ':(', 'Ali__Reza': ':(', 'Al_za': 'غم آخرت باشه', 'Hosein_m': 'از پیج ما هم دیدن کنید'};
    } else if (Math.floor(temp) === 3) {
      return {'Ali__Reza': ':('};
    } else if (Math.floor(temp) === 4) {
      return {'Mahdi': 'ارادت'};
    } else {
      return {'alikhani_fanpage': '♥'};
    } 
  }
  
  async componentDidMount() {
    const res = await fetch('http://localhost:5000/');
    const resData = await res.json();
    this.setState({posts: resData.data});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="post">
            {this.state.posts.map(post=> {
              return (<Post src={post.picture.large} username={post.name} caption={post.email} comments={this.getComments(post)}  />);
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
