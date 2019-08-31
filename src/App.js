import React, { Component } from 'react';
import Titles from './Titles'
import AddTitle from './AddTitle'


class App extends Component {
  state = {
    titles: [
      {id:1, text:'Interstellar'},
      {id:2, text:'Inception'}
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

  addTitle = (title) => {
    title.id = Math.random();
    let titles = [...this.state.titles, title];               {/* Using the spread operator to grab the text of (new)this.state and dumping it to (old)Array titles, x=x+x' */}
    this.setState({
      titles
    });
  }

  render(){
    return (
      <div className="title-app container">            {/*container is used here to display it within a boxed region*/}
        <h1 className="center blue-text">Title's</h1>
        <Titles titles={this.state.titles} deleteTitle={this.deleteTitle} />
        <AddTitle addTitle={this.addTitle}/>
      </div>
    );
  }

}

export default App;
