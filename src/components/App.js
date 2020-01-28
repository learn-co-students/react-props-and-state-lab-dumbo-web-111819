import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    let animal = e.target.value
    this.setState({filters:{type: animal}})
  }

  onFindPetsClick = (e) =>{
    const {type} = this.state.filters
    if(type === 'all'){
      fetch('/api/pets')
        .then(r => r.json())
        .then(json => this.setState({pets : json}))
    } else {
      fetch(`/api/pets?type=${type}`)
        .then(r => r.json())
        .then(json => this.setState({pets : json}))
    }
  }

  onAdoptPet = (id) => {
    this.setState(prevState => {
      return {pets: prevState.pets.map(pet =>{
        if(pet.id === id){
          pet.isAdopted = true
          console.log(pet)
        }
        return pet
      })}
    })
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets ={this.state.pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
