import React, {Component} from 'react';
import "../App.css";

class PostCreator extends Component {
    constructor(){
        super();
        this.state = {
            text: '',
            BD: [{
                id: 0,
                content: "",
                author: "",
                time: 0,
                initialLikes: 0
            }]
        }
    }
    
    createPost(){
        const newPost = {
            content: this.state.text,
            author: '???',
            time: new Date().getTime(),
            initialLikes: 0
        }
        this.props.onCreate(newPost);
        this.atualizarBD('Inc');
    }

    atualizarBD(chaveOp) {

        if (chaveOp === "Inc") {
            console.log(this.state.BD);
            var novaPessoa = {
                id: this.state.BD.length + 1,
                author: '???',
                content: this.state.text,
                time: new Date().getTime(),
                initialLikes: 0 }

                this.state.BD.push(novaPessoa);
        }
    
        if (chaveOp === "Alt") {
            for (var i = 0; i < this.state.BD.length; i++) {
                // if (this.state.BD[i].id === {}) {
                //     this.state.BD[i].author = {};
                //     this.state.BD[i].content = {};
                //     this.state.BD[i].time = {};
                //     this.state.BD[i].initialLikes = {};
                // }
            }     
        }
    
        if (chaveOp === "Exc") {
            for (var x = 0; x < this.state.BD.length; x++) {
                if (this.state.BD[x].id === {}) {
                    this.state.BD.splice(x, 1);
                }
            }
        }

        localStorage.setItem('myBD', this.state.BD);
    }   

    render(){
        return(
            <div>
                <input className='App-input'
                 onChange={(event)=>{
                    const value = event.target.value;
                    this.setState({text: value})
                }}
                value={this.state.text} />

                <button className='App-button' onClick={()=>this.createPost()}> Postar </button> 
            </div>
        )
    }
}

export default PostCreator;