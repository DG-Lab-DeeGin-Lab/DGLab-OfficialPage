import React from "react";
import styles from './card.scss'
const Home = class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      people: [
        {
          id:1,
          pictuere_url:'https://avatars3.githubusercontent.com/u/42661015?s=460&u=06eab7d7740496192f081d9538a2f1b7c877d1f7&v=4',
          name: 'IAN',
          exp: 'Speaker @ SITCON 2020'
        },
        {
          id:2,
          pictuere_url:'https://avatars1.githubusercontent.com/u/23449425?s=460&u=fbbcb5368ee41f82174918ee434be6e1200e5610&v=4',
          name: 'EC',
          exp: '黑蘋果愛好者'
        }
      ]
    }
  }
  render() {
    let ref = this.state.people;
    let people = ref.map(items=> {return(
    <div key={items.id} className={styles.card}>
      <div className={styles.card__picFrame}>
        <img className={styles.card__pic} src={items.pictuere_url} alt=""/>
      </div>
      <div>{items.name}</div>
      <li>{items.exp}</li>
    </div>
    )});
    return(
    <div>
      <div className={styles.container}>
      <h1>Wellcome to DG Lab.</h1>
      <h2 className={styles.focus}>Co founder</h2>
        {people}
      </div>
    </div>
    );
  }
};
export default Home;
