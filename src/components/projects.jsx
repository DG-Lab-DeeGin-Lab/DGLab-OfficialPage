import React from 'react';
import styles from './card.scss';
const Projects = class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
            project: [
                {
                    id:1,
                    name: 'BPSS',
                    description: 'nothing'
                },
                {
                    id:2,
                    name: 'Chatting Room',
                    description: 'nothing'
                }
            ]
        }
    }
    render(){
        let ref = this.state.project;
        let card = ref.map((items)=>{
        return (
        <div key={items.id} className={styles.card}>
        <div key={items.name}>{items.name}</div>
        </div>
        )
        })
        return(
            <div className={styles.container}>
                {card}
            </div>
        )
    }
}
export default Projects;