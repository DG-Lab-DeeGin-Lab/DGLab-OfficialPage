import React from "react";
const Home = class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: 'x',
      names: null
    }
  }
  render() {
    return(
    <div>
      <h1>Wellcome to DG Lab.</h1>
      {/* {this.state.names} */}
      <button onClick={()=>{console.log(this.props)}}>Submit</button>
    </div>
    );
  }
};
export default Home;
