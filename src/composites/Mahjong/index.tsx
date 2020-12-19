import React, { useState } from 'react';
import Setup from '../Setup';
import Scoreboard from '../../components/Scoreboard';
import { SetupFields, Player } from '../../constants'

const Mahjong = (): JSX.Element => {
  const [isSettingUp, setIsSettingUp] = useState<boolean>(true);
  const [bet, setBet] = useState<number>(0.1);
  const [players, setPlayers] = useState<Player[]>([]);

  const onFinishSetup = (setupValues: any): void => {
    setBet(setupValues[SetupFields.Bet]);
    delete setupValues[SetupFields.Bet];

    const newPlayers: Player[] = [];
    for (const player in setupValues) {
      const newPlayer: Player = {
        name: setupValues[player],
        score: 0
      }
      newPlayers.push(newPlayer);
    }
    setPlayers(newPlayers);
    setIsSettingUp(false);
  }

  if (isSettingUp) {
    return <Setup onFinish={onFinishSetup} />
  }

  return (
    <>
      <Scoreboard players={players} />
    </>
  );
}

export default Mahjong;