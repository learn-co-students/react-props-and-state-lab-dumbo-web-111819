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

  updateFilter = (event) => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
  }

  fetchPets = (event) => {
    let fetchUrl = "/api/pets"
    if(this.state.filters.type !== "all"){
      fetchUrl = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(`${fetchUrl}`)
      .then(r=>r.json())
      .then(data=>{
        this.setState({
          pets: data
        })
      })
  }

  adopt = (petId) => {
    let pets = this.state.pets 
    let targetPet = pets.filter(pet => pet.id === petId)
    targetPet[0].isAdopted = true
    let arr = pets.filter(pet => pet.id !== petId)
    let newarr = [...arr, targetPet[0]]
    // console.log([newarr])
    this.setState({
        pets: newarr
    }, ()=> console.log(this.state.pets))
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
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adopt} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
