import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state ={}
  }
  
  componentDidMount() {
    console.log("componentDidMount is running");
    axios
      .get("https://api.github.com/users/heymichelle/")
      .then(res => {
          console.log(res)
          this.setState({data: res.data});
          //function with createGitcard here or something?
      }) 
      .catch(err => console.log("Error:", err));
  };
    

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* put something like component similar <Pokemon pokemon={this.state.pokemon} */}
      </div>
    );
  }
}

export default App;

















  //invisible constructor. If you interact with state beyond the intial placement of state in the constructor then it will setStae changes. 


//   componentDidMount() {
//     console.log("componentDidMount is running");
//     axios
//       .get("https://api.github.com/users/heymichelle/")
//       .then(res => {
//           console.log(res)
//           this.setState({data: res.data});
//       }) 
//       .catch(err => console.log(err));
//   };

//   handleChanges = e => {
//     console.log(e.target.name, e.target.value);
//     this.setState({...this.state, dogBreed: e.target.value})
//   };

//   // fetchDoggos = () => {
//   //   e.preventDefault();
//   //   axios
//   //     .get("")
//   //     .then(res => {})
//   //     .catch(err => console.log(err));
//   // };

//   render() {
//     console.log("rendering");
//     return (
//       <div className="App">
//           <h1>Hello</h1>
//           {/* <input 
//             type="text"
//             name="dogBreed"
//             value={this.state.dogBreed}
//             onChange={this.handleChanges}
//           />
//           <button onClick={this.fetchDoggos}>Fetch doggos</button> */}

//           <div className="example">
//             {this.state.data.map(data => (
//               <img width="200" src={data} key={data} alt={data} />
//             ))}
//           </div>
//       </div>
//     )
//   }

// }


// export default App;
