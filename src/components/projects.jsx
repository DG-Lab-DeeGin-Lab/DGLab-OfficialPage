import React from "react";
import styles from "./card.scss";
const Projects = class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [
        {
          id: 1,
          name: "BPSS",
          description:
            "使用 HyperLedger-Fabric 作為區塊鏈網路主體。並搭配 Vue.js, Koa.js, django 建置全端應用。",
          source: false,
        },
        {
          id: 2,
          name: "Chatting Room",
          description:
            "基於 Socket.io, Express.js, Vue.js 開發的匿名配對聊天室。",
          source: true,
        },
      ],
    };
  }
  render() {
    let ref = this.state.project;
    let card = ref.map((items) => {
      return (
        <div key={items.id} className={styles.card}>
          <h2 key={items.name}>{items.name}</h2>
          <div key={items.description}>{items.description}</div>
          {items.source ? (
            <div className={styles.label + " " + styles.open}>open</div>
          ) : (
            <div className={styles.label + " " + styles.closed}>closed</div>
          )}
        </div>
      );
    });
    return <div className={styles.container}>{card}</div>;
  }
};
export default Projects;
