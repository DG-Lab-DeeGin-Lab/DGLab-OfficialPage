import React from 'react';
import styles from './card.scss';
const Projects = class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
            project: [
                {
                    name: 'BPSS',
                    description: 'nothing'
                },
                {
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
        <div className={styles.card}>
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