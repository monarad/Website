import React, { Component } from 'react';
import styles from "./Card.module.css";
import down from "../images/down.svg"
import up from "../images/up.svg"
import iphone from "../images/iphone10.jpg"



class Card extends Component {
    constructor(){
        super()
        this.state={
            counter:0

        }

    }
    downHandler=()=>{
        if(this.state.counter>=1){
            this.setState(prevState=>({
                counter:prevState.counter-1,
            }))
        }
    }
    upHandler=()=>{
        this.setState(prevState=>({
            counter:prevState.counter+1,
        }))
    }
    render() {
        const{image,name,cost}=this.props
        const{counter}=this.state;
        return (
            <div className={styles.container}>
                <div><img src={image} alt=''/></div>
                <h3>{name}</h3>
                <p>{cost}{counter ? ` * ${counter}= ${counter * Number(cost.split(" ")[0])} $` : ""}</p>

                <div className={styles.counter}>
                    <img  className={!counter ? styles.deactive : ""} src={down} alt="down"  onClick={this.downHandler}/>
                    <span>{counter}</span>
                    <img src={up} alt="arrow" onClick={this.upHandler} />
                </div>

                
            </div>
        );
    }
}

export default Card;

