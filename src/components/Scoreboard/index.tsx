import React from 'react';
import { Divider } from 'antd';
import { Player } from '../../constants'

interface ScoreboardProps {
  players: Player[];
}

const Scoreboard = (props: ScoreboardProps): JSX.Element => {
  return (
    <div className='scoreboard'>
      <Divider orientation='left' className='scoreboard__header'>Scoreboard</Divider>
      <div className='scoreboard__players'>
        {props.players.map((player: Player) => <div className='scoreboard__players-score'>{player.name}: {player.score}</div>)}
      </div>
    </div>
  );
}

export default Scoreboard;