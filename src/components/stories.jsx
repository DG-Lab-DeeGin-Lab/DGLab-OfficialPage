import React from 'react';
import styles from './stories.scss';
import axios from 'axios';
const Stories = class Stories extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result:false
        };
    }
    componentDidMount(){
        axios.get('https://dg-lab-c5d9c.firebaseio.com/stories.json')
        .then((res)=>{
            this.setState({
                result: Array.from(res.data)
            })
        })
    }
    render(){
        const { result } = this.state;
        if(result){
            let story = result.map((items)=>{
                return(
                <div key={items.id} className={styles.story__box}>
                    <img key={items.imgSrc} src={items.imgSrc} alt=""/>
                    <div key={items.title}>{items.title}</div>
                    <div key={items.author}>作者：{items.author}</div>
                    {items.inside?(<button>點我看更多</button>):(<a href={items.content}>外部連結</a>)}
                </div>
                )
            })
            return(
                <div className={styles.container}>
                    <h1>Our Stories</h1>
                    <div className={styles.story}>
                        {story}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={styles.container}>
                    <h1>Our Stories</h1>
                    <div>fetching...</div>
                </div>
            )
        }
    }
}
export default Stories;