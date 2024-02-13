import React, {Component} from 'react'
import ReactPopUp from '../ReactpopUp/ReactPopUp'

import EachItem from '../EachItem/EachItem'
import './RockPaperScissor.css'

class RockPaperScissor extends Component {
  state = {
    score: 0,
    isPlaying: true,
    personChoice: {},
    computerChoice: {},
    result: '',
  }

  checkResult = itemObj => {
    const {score} = this.state

    const {choicesList} = this.props
    const computerChoiceRandomNum = Math.floor(Math.random() * 3)
    const computerChoiceObj = choicesList[computerChoiceRandomNum]

    let result
    if (itemObj.id === computerChoiceObj.id) {
      result = 'DRAW'
    } else if (
      (itemObj.id === 'PAPER' && computerChoiceObj.id === 'ROCK') ||
      (itemObj.id === 'SCISSORS' && computerChoiceObj.id === 'PAPER') ||
      (itemObj.id === 'ROCK' && computerChoiceObj.id === 'SCISSORS')
    ) {
      result = 'WON'
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      result = 'LOSE'
      this.setState(prevState => ({score: prevState.score - 1}))
    }

    this.setState({
      personChoice: {...itemObj},
      computerChoice: {...computerChoiceObj},
      result,
      isPlaying: false,
    })
  }

  playAgain = () => {
    this.setState({isPlaying: true})
  }

  renderPlayingScene = () => {
    const {choicesList} = this.props
    return (
      <ul className="uList">
        {choicesList.map(e => (
          <EachItem checkResult={this.checkResult} key={e.id} itemObj={e} />
        ))}
      </ul>
    )
  }

  renderResult = () => {
    const {personChoice, computerChoice, result} = this.state
    return (
      <>
        <div className="ResultContainer">
          <div className="eachResultItem">
            <h1 className="eachresultHeading">You</h1>
            <img
              className="resultImage"
              src={personChoice.imageUrl}
              alt="your choice"
            />
          </div>
          <div className="eachResultItem">
            <h1 className="eachresultHeading">Opponent</h1>
            <img
              className="resultImage"
              src={computerChoice.imageUrl}
              alt="opponent choice"
            />
          </div>
        </div>
        <div className="PLAYAGAINCONATINER">
          {result === 'DRAW' ? (
            <p className="result-heading">IT IS {result}</p>
          ) : (
            <p className="result-heading">YOU {result}</p>
          )}

          <button
            onClick={this.playAgain}
            className="play-again-btn"
            type="button"
          >
            PLAY AGAIN
          </button>
        </div>
      </>
    )
  }

  render() {
    const {score, isPlaying} = this.state
    return (
      <div className="bgCont">
        <div className="scoreCardContainer">
          <div className="equipmentName">
            <h1 className="main-heading">Rock Paper Scissors</h1>
          </div>
          <div className="scoreCard">
            <p>Score</p>
            <p className="score">{score}</p>
          </div>
        </div>

        {isPlaying ? this.renderPlayingScene() : this.renderResult()}
        <div className="rules-btn-container">
          <ReactPopUp />
        </div>
      </div>
    )
  }
}

export default RockPaperScissor
