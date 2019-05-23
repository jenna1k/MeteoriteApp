import React, { Component } from 'react';
import Header from './Header';
import './Home.css'

class Home extends Component {
  constructor() {
    super();
    this.state= {
      data: [],
      searchfield: '',
      searchresult: [],
      typed: false,
    }

  this.onSearchChange = this.onSearchChange.bind(this);
  this.onSearchClick = this.onSearchClick.bind(this);
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value, typed: true})
  }

  onSearchClick = (e) => {
    this.setState({ searchresult: this.state.data
      .filter(elem => {
        return elem.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
    })
  }

  componentDidMount(){
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data
      })
    })
  }


  render(){
      return (
        <div>
          <Header searchfield={this.state.searchfield} onSearchChange={this.onSearchChange} onSearchClick={this.onSearchClick} />
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Id</th> 
                <th>Name Type</th>
                <th>Rec Class</th>
                <th>Mass (g)</th>
                <th>Fall</th>
                <th>Year</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </tbody>

            <tbody>
            {this.state.typed ? this.state.searchresult.map((elem, key)=>(
                <tr>
                  <td>{elem.name}</td>
                  <td>{elem.id}</td> 
                  <td>{elem.nametype}</td>
                  <td>{elem.recclass}</td>
                  <td>{elem.mass}</td>
                  <td>{elem.fall}</td>
                  <td>{elem.year}</td>
                  <td>{elem.reclat}</td>
                  <td>{elem.reclong}</td>
                </tr>
            )) : this.state.data.map((elem, key)=>(
                <tr>
                  <td>{elem.name}</td>
                  <td>{elem.id}</td> 
                  <td>{elem.nametype}</td>
                  <td>{elem.recclass}</td>
                  <td>{elem.mass}</td>
                  <td>{elem.fall}</td>
                  <td>{elem.year}</td>
                  <td>{elem.reclat}</td>
                  <td>{elem.reclong}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      );
  }

}

export default Home;