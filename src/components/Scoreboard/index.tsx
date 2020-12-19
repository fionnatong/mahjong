import React from 'react';
import { Divider } from 'antd';

interface ScoreboardProps {
  players: { [key: string]: number };
}

const Scoreboard = (props: ScoreboardProps): JSX.Element => {
  return (
    <div className='scoreboard'>
      <Divider orientation='left' className='scoreboard__header'>Scoreboard</Divider>
      <div className='scoreboard__players'>
        {Object.keys(props.players).map((name: string) => <p className='scoreboard__players-score'>{name}: {props.players[name]}</p>)}
      </div>
    </div>
  );
}

export default Scoreboard;