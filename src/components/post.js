import React, {Component} from 'react';

class Post extends Component {

    constructor(props){
        super(props);
        this.state = {
            likes: props.post.initialLikes
        }
        this.doLike = this.doLike.bind(this);
    }

    doLike(){
        this.setState({likes: this.state.likes + 1});
        // {this.atualizaBD('Alt')};
    }

    render(){
        const post = this.props.post;
        return(
            <div className='App-posts'>
                <div className='App-posts-col1'>
                    {/* <p> {this.nomeImagem} </p> */}
                    
                </div>
                <div className='App-posts-col2'>
                    <p className='App-posts-p'>{post.content}</p>
                    <p className='App-posts-p'>{post.author}</p>
                    <p className='App-posts-p'>{post.time}</p>
                    <p className='App-posts-p'>Likes: {this.state.likes}</p>
                    <button className='App-button-f' onClick={this.doLike}> Like </button>
                </div>
            </div>
        )
    }
}

export default Post;