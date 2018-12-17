import React, { Component } from 'react';
import Delayed from './components/delayed';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Timeline from './components/timeline';
import PostDetails from './components/postDetails';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        nomeImagem: '',
        showDiv: true
        // imagens: require.context('./fotos', true, /.png$/),
        // teste: './terra2.png'
      }
      // console.log(this.state.imagens);
      // console.log(this.state.imagens[this.state.teste])
    }

  addFigura(nomeImagem) {
      this.setState({
        nomeImagem: nomeImagem
      })
    }

  escondeJanela() {
    this.state.showDiv = false;
  }

  render() {
    return (
      <div className="App">
        <div style={{display: (this.state.showDiv ? 'block' : 'none') }}>
          <Delayed waitBeforeShow={1000}>
          <div className='App-p'> Oi. </div>
          </Delayed>
          <Delayed waitBeforeShow={4000}>
          <div className='App-p'> Você sabe o que é um  Doppelgänger ?</div>
          </Delayed>
          <Delayed waitBeforeShow={7000}>
          <div className='App-p'> É uma versão idêntica a nós em outros universos </div>
          </Delayed> 
          <Delayed waitBeforeShow={10000}>
          <div className='App-p'> Este sistema procurou as minhas versões no multiverso e encontrou 4 Paulos </div>
          </Delayed> 
          <Delayed waitBeforeShow={14000}>
          <div className='App-p'> Vamos ao trabalho ? {this.state.showDiv = false} </div>  
          </Delayed>
        </div> 
        <Delayed waitBeforeShow={16000}> 
          <div className='App-card' onClick={() => this.escondeJanela()}>
            <div className='App-ferramentas'>
               <button className='App-button-f' onClick={() => this.addFigura('./fotos/todos.png')}> Todos </button> 
               <button className='App-button-f' onClick={() => this.addFigura('./fotos/terra1.png')}> Terra1 </button> 
               <button className='App-button-f' onClick={() => this.addFigura('./fotos/terra2.png')}> Terra2 </button> 
               <button className='App-button-f' onClick={() => this.addFigura('./fotos/terra3.png')}> Terra3 </button> 
               <button className='App-button-f' onClick={() => this.addFigura('./fotos/terra4.png')}> Terra4 </button> 
               <button className='App-button-f' onClick={() => this.addFigura('./fotos/terra5.png')}> Terra5 </button> 
               <div className='App-fotos-f'>  <img src={window.location.origin + this.state.nomeImagem} alt={this.state.nomeImagem}/> </div>
            </div>
            <BrowserRouter>
              <Switch>
                <Route path='/post/:id' component={PostDetails} />
                <Route path='/sobre' component={this.aboutPage} />
                <Route exact path='/' component={Timeline}/>
                <Route path='*' component={this.showNotFound} />
              </Switch>
            </BrowserRouter>            
          </div> 
        </Delayed>
      </div>
    );
    
  }
}

export default App;
