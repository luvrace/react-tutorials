import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 0;

  state = {
    information:[],
  }
  handleCreate = (data)=>{
    const { information } = this.state;
    this.setState({
      //비어있는 객체에 {} data를 넣고 id를 추가한다
      information: information.concat(Object.assign({}, data, {
        //1.
        // ...data,
        // id: this.id++

        //2.
        // name: data.name,
        // phone: data.phone,
        // id: this.id++

        //3.
        id: this.id++
        
      }))
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      infromation : information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information : information.map(
        info => {
          if (info.id === id){
          return {
            id,
            ...data,
          };
        }
        return info;
      }
      )
    })
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList 
          data = {this.state.information }
          onRemove = {this.handleRemove}
          onUpdate={this.state.handleUpdate}/>
      </div>
    )
  }
}



export default App