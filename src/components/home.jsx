import React from "react";
import styles from './card.scss'
const Home = class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      people: [
        {
          name: 'IAN',
          exp: 'SITCON 2020'
        },
        {
          name: 'EC',
          exp: ''
        }
      ]
    }
  }
  render() {
    let ref = this.state.people;
    let people = ref.map(items=> {return(
    <li>{items.name}</li>
    )});
    return(
    <div>
      <div className={styles.container}>
      <h1>Wellcome to DG Lab.</h1>
      <h2>Co founder</h2>
        {people}
      </div>
    </div>
    );
  }
};
export default Home;
