import React, { Component } from 'react';
import './App.css';



/*
  Tournament Controls - option 1:
    # of teams (usually 10, 2 pools of 5 teams, round robin, so 4 matches)
      Team names
    Qualifier - Round Robin
      # of Qualifier Pools (2)
      # of Matches per Qualifier (# teams in pool - 1)
      # of games per match (2)
      # of points per game (25)
      # of courts ?
      ?? How are qualifier pools seeded ??
    Playoffs
      # of Playoff Brackets (single elimination) (2 - Gold (top 4 teams) and Silver (next 4))
      # of games per match (1)

    Round Robin - abstract?  Track by Team number in pool?

  Tournament Controls - option 2:
    # of Qualifying Pools
      # of teams in each Pool
        # Team name
    # of Games Per Match (2)
    # of Playoff Brackets (2)
*/
class BlendersTourn extends Component {
    // myTeam(i){
    // return <Team />;
    // }
    render() {
        var pools = [];
        var max = this.props.pools;
        var tpp = this.props.teamsPerPool;
        for( var i = 1; i <= max ; i++){
            pools.push(<QualifierPool teamsPerPool={ tpp } poolNum={ i } />);
            /* {this.mysbvc(i)}; */
        }
        return (
            <div className="App">
            <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Blenders Tournament Proof of Concept in ReactJS</h1>
            </header>

            <TournamentControlPanel  val={ 3 } pools={ 2 } />
            {pools}

            <PlayoffBracket name={ 'Gold' }/>
            <PlayoffBracket name={ 'Silver' }/>

            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
                To get stopped, edit <code>src/App.js</code> and save to reload (HaHa).
            </p>
            </div>
        );
    }
}

class TournamentControlPanel extends Component {
    render(){
        return (
           <div className="sbvc">
           <p className="sbvc-p">
           TournamentControlPanel { this.props.pools } { this.props.val }
           </p>
           </div>
       );
    }
}
class QualifierPool extends Component {
    render(){
        var tpp = this.props.teamsPerPool;
        var matches = tpp - 1;   // round robin involves playing every other team in pool
        var teams = [];
        for( var i = 1; i <= tpp; i++){
            teams.push(<Team teamNum={i}/>);
        }
        return (
            <div className="pool">
            <p className="pool-p">
            Qualifier Pool-{ this.props.poolNum }
            </p>
                <table>
                <TeamHeader />
                { teams }
                </table>
                <MatchGrid poolNum={ this.props.poolNum } matches={matches}/>
            </div>
        );
    }
}
class TeamHeader extends Component {
    render(){
        return (
            <tr>
            <td>#</td>
            <td>Team Name</td>
            <td>Wins</td>
            <td>Losses</td>
            <td>Ratio</td>
            </tr>
        );
    }

}
class MatchGrid extends Component {
    render(){
        var nm = this.props.numMatches;
        var matches = [];
        for( var i = 1; i <= nm; i++){
            matches.push(<Match gamesPerMatch={2}/>);
        }
        return (
            <div className="matches">
            <p className="pool-p">
            MatchGrid Display for Pool-{ this.props.poolNum }
            </p>
                <table>
                <MatchHeader dispType={ 'header' } matchNum={ 'Match' } t1={ 'Team' } t2={ 'Team' } refTeam={ 'Referee' } numGames={ 2 } />
                <Match dispType={ 'match' }  matchNum={1} t1={ 1 } t2={ 3 } refTeam={ 4 } numGames={ 2 } />
                <Match dispType={ 'match' }  matchNum={2} t1={ 2 } t2={ 4 } refTeam={ 3 } numGames={ 2 } />
                <Match dispType={ 'match' }  matchNum={3} t1={ 1 } t2={ 4 } refTeam={ 2 } numGames={ 2 } />
                <Match dispType={ 'match' }  matchNum={4} t1={ 2 } t2={ 3 } refTeam={ 4 } numGames={ 2 } />
                <Match dispType={ 'match' }  matchNum={5} t1={ 3 } t2={ 4 } refTeam={ 1 } numGames={ 2 } />
                <Match dispType={ 'match' }  matchNum={6} t1={ 1 } t2={ 2 } refTeam={ 3 } numGames={ 2 } />
                </table>
            </div>
        );
    }
}
class Match extends Component {
    // <td><GameScore game="1" team="1"/><GameScore game="1" team="2"/></td>
    // <td><GameScore game="2" team="1"/><GameScore game="2" team="2"/></td>
    // <td><input type="text" size="4"></input><input type="text" size="4"></input></td>
    // <td><input type="text" size="4"></input><input type="text" size="4"></input></td>
    render(){
        return (
            <tr className="matches">
            <td>{ this.props.matchNum }</td>
            <td>{ this.props.refTeam }</td>
            <td>{ this.props.t1 } &nbsp;&nbsp; vs &nbsp;&nbsp; { this.props.t2 }</td>
            <td><MatchScore /></td>
            <td><MatchScore /></td>
            </tr>
        );
    }
}
class MatchHeader extends Component {
    render(){
        return (
            <tr className="matches">
            <td>{ this.props.matchNum }</td>
            <td>{ this.props.refTeam }</td>
            <td>{ this.props.t1 } &nbsp;&nbsp; vs &nbsp;&nbsp; { this.props.t2 }</td>
            <td>Scores Game-1</td>
            <td>Scores Game-2</td>
            </tr>
        );
    }
}
class Team extends Component {
    render(){
        return (
            <tr>
            <td>{this.props.teamNum}</td>
            <td><form><input type="text"></input></form></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        );
    }
}
// <div className="team">
// <p className="team-p">
// Team-{ this.props.teamNum }
// </p>
// </div>
class PlayoffBracket extends Component {
    render(){
        return (
            <div className="playoffBracket">
            <p className="playoffBracket-p">
            Playoff Bracket - { this.props.name }
            </p>
            </div>
        );
    }
}
// class GameScore extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
class MatchScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: 0,
      t2: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
          <input
            name="t1"
            type="number"
            size="4"
            value={this.state.t1}
            onChange={this.handleInputChange} />
          <input
            name="t2"
            type="number"
            size="4"
            value={this.state.t2}
            onChange={this.handleInputChange} />
      </form>
    );
  }
}
// class Team extends Component {
//   render(){
//     return (
//       <div className="team">
//         <p className="team-p">
//         Team.
//         </p>
//       </div>
//     );
//   }
// }

export default BlendersTourn;
