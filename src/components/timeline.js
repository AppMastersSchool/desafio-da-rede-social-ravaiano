import React, {Component} from 'react';
import Post from './post';
import PostCreator from './postCreator';

class Timeline extends Component { 
    constructor(){
      super();
      this.state = {
        posts: []
        // posts: this.iniciarPosts
      }
    }

    iniciarPosts(){
      const posts = JSON.parse(localStorage.getItem('myBD'));
    }

    insertPost(post){
      const myPosts = this.state.posts;
      myPosts.unshift(post);
      this.setState({posts: myPosts});
    }

    onNavigate(post){
      this.props.history.push('/post/' + post.time);
    }

    render(){
      return(
        <div>
          <PostCreator onCreate={this.insertPost.bind(this)} />
          {this.state.posts.map((post,i) => {
            return (
              <Post 
              onNavigate={() => this.onNavigate(post)}
              key={post.time} 
              post={post}/>
            )
          })}      
        </div>
      )
    }
}

export default Timeline;