import React from 'react'

import Pet from './Pet'
//this.props.pets
//this.props.onAdoptPet(petId)


class PetBrowser extends React.Component {
  render() {
    let arrayOfComponents=this.props.pets.map(petObj=>(<Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdoptPet}/>))
    return (<div className="ui cards">
      {arrayOfComponents}
      </div>
    )
  }
}

export default PetBrowser
//PET COMPONENT SHOULD GO HERE