import React, {Component}from 'react';
import Post from './post';

class PostDetails extends Component {
    constructor(){
        super();
        this.state = {
            post: null
        }
    }

    render(){
        if(this.state.post === null){
            return (<div>Loading</div>)
        } else {
            return(
                <div>
                    <Post post={this.state.post} />
                </div>
            )
            
        }
 
    }
}
export default PostDetails;