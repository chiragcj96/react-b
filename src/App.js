import React, { Component } from 'react';
import Titles from './Titles'


class App extends Component {
  state = {
    titles: [
      {id:1, t:'Interstellar'},
      {id:2, t:'Inception'}
    ]
  }

  deleteTitle = (id) => {
    const titles = this.state.titles.filter(title => {
      return title.id !== id
    });
    this.setState({
      titles: titles
    });
  }

  render(){
    return (
      <div className="Suggestion-app container">            {/*container is used here to display it within a boxed region*/}
        <h1 className="center blue-text">Title's</h1>
        <Titles titles={this.state.titles} deleteTitle={this.deleteTitle} />
        
      </div>
    );
  }
  
}

export default App;
