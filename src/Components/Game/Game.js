import React, {Component} from 'react';
import {Row, Col} from 'antd';
import { Button } from 'antd';
import { Typography } from 'antd';
import './Game.css';

const styles = {
    healthbar: {
        backgroundColor: '#000',
        margin: '0',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    justifyCenter: {
        display: 'flex',
        justifyContent: 'center'
    }
}

class Game extends Component {
    constructor() {
        super();
        this.state = {
            playerHealth: 100,
            monsterHealth: 100,
            gameButtons: false,
            gameEnd: false
        }
    }
    startGame = () => {
        this.setState ({
            gameButtons: true
        })
    }
    attack = () => {
        if(this.state.playerHealth == 100 && this.state.monsterHealth == 100) {
            this.setState({
                playerHealth: Math.floor(Math.random() * 100),
                monsterHealth: Math.floor(Math.random() * 100)
            })
        }
        else if(this.state.playerHealth > 10 && this.state.monsterHealth > 5){
            this.setState({
                playerHealth: this.state.playerHealth - 10,
                monsterHealth: this.state.monsterHealth - 5
            })  
        }
        else if(this.state.playerHealth > this.state.monsterHealth) {
            alert('Player Wins!');
            this.endGame ();
        }
        else if(this.state.playerHealth < this.state.monsterHealth)  {
            alert('Moster Wins!')
            this.endGame();
        }
        
    }
    specialAttack = () => {
        if(this.state.playerHealth == 100 && this.state.monsterHealth == 100) {
            this.setState({
                playerHealth: Math.floor(Math.random() * 100),
                monsterHealth: Math.floor(Math.random() * 100)
            })
        }
        else if(this.state.playerHealth > 5 && this.state.monsterHealth > 10){
            this.setState({
                playerHealth: this.state.playerHealth - 5,
                monsterHealth: this.state.monsterHealth - 10
            })
        }
        else if(this.state.playerHealth > this.state.monsterHealth) {
            alert('Player Wins!');
            this.endGame();
        }
        else if(this.state.playerHealth < this.state.monsterHealth)  {
            alert('Moster Wins!');
            this.endGame();
        }
    }
    heal = () => {
        if(this.state.playerHealth < 90) {
            this.setState({
                playerHealth: this.state.playerHealth + 10
            })
        }
        else if(this.state.playerHealth = 100){
            alert('Player Health can not exceed 100!')
            this.setState({
                playerHealth: 100
            })
        }
    }
    giveUp = () => {
        if(this.state.playerHealth > this.state.monsterHealth) {
            alert('Player Wins!')
        }
        else if(this.state.playerHealth < this.state.monsterHealth)  {
            alert('Moster Wins!')
        }
        this.setState({
            playerHealth: 100,
            monsterHealth: 100,
            gameButtons: false
        })
    }
    endGame = () => {
        this.setState({
            playerHealth: 100,
            monsterHealth: 100
        })
    }
    
    render() {
        return (
            <div className='game'>
                <Row justify='center'>
                    <Col span = {5}>
                        <h1 className = "text-center">YOU</h1>
                        <div className = "healthbar">
                            <div className = "healthbar text-center" 
                            style={{
                                width: this.state.playerHealth + '%',
                                backgroundColor: '#000',
                                justifyContent: 'center'
                            }}>    
                                {this.state.playerHealth}
                            </div>
                        </div>
                    </Col>
                    <Col span = {2}></Col>
                    <Col span = {5}>
                        <h1 className = "text-center">MONSTER</h1>
                        <div className = "healthbar">
                            <div className = "healthbar text-center" 
                            style={{
                                width: this.state.monsterHealth + '%',
                                backgroundColor: '#000',
                                justifyContent: 'center'
                            }}> 
                                {this.state.monsterHealth}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{margin: '35px 0'}}>
                    <Col span = {24} style={styles.justifyCenter}>
                        <Button id="start-game" type='dashed' onClick={this.startGame}> 
                            START NEW GAME
                        </Button>
                    </Col>
                </Row>
                <Row id='gameButtons' className={this.state.gameButtons ? 'd-block' : 'd-none'}>
                    <Col span={24} style={styles.justifyCenter}>
                        <Button id="attack" type='dashed' onClick={this.attack}> 
                            ATTACK
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Button id="special-attack" type='dashed' onClick={this.specialAttack}> 
                            SPECIAL ATTACK
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Button id="heal" type='dashed' onClick={this.heal}> 
                            HEAL
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Button id="give-up" type='dashed' onClick={this.giveUp}> 
                            GIVE UP
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Button type='dashed' onClick={this.endGame.bind(this)}> 
                            RESTART THE GAME
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Game;