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



onChangeType=(updateFilterState) => {
  // console.log(updateFilterState)
  this.setState({
    filters:{
      type:updateFilterState
    }
  })
} 


onFindPetsClick=() => {
  if(this.state.filters.type==='all'){
    fetch('/api/pets')
    .then(response=>response.json())
    .then(pojos=>{
      this.setState({
        pets:pojos
      })
      // console.log(pojos)
    })

  }
  else if(this.state.filters.type==='cat'){
    fetch('/api/pets?type=cat')
    .then(response=>response.json())
    .then(pojos=>{
      this.setState({
        pets:pojos
      })
      // console.log(pojos)
    })

  }
  else if(this.state.filters.type==='dog'){
    fetch('/api/pets?type=dog')
    .then(response=>response.json())
    .then(pojos=>{
      this.setState({
        pets:pojos
      })
      // console.log(pojos)
    })

  }
  else if(this.state.filters.type==='micropig'){
    fetch('/api/pets?type=micropig')
    .then(response=>response.json())
    .then(pojos=>{
      this.setState({
        pets:pojos
      })
      // console.log(pojos)
    })

  }



  
  // console.log(listOfPets)
}
onAdoptPet=(petId) => {
  // console.log(petId)
  let foundPet=this.state.pets.find(element=>element.id === petId)
  foundPet.isAdopted=true
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
