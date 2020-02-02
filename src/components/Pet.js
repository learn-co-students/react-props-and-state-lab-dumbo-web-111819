import React from 'react'
//this.props.pet

// isAdopted property set to true
class Pet extends React.Component {
  // state ={
  //   isAdopted:false
  // }
  handleChange=(e) => {
    // debugger
    console.log(this.props.pet.id)
    // console.log(id)
    this.props.onAdoptPet(this.props.pet.id)
  }
  

  render() {
    const isAdoption =this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.handleChange} className="ui primary button">Adopt pet</button>

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender==='male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
         {isAdoption}
        </div>
      </div>
    )
  }
}

export default Pet
