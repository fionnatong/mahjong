import React, { useState } from 'react';
import Setup from '../Setup';
import Scoreboard from '../../components/Scoreboard';
import ResultUpdate from '../ResultUpdate'
import { SetupFields, ResultUpdateFields, WIN_OPTIONS } from '../../constants'

const Mahjong = (): JSX.Element => {
  const [isSettingUp, setIsSettingUp] = useState<boolean>(true);
  const [bet, setBet] = useState<number>(0.1);
  const [players, setPlayers] = useState<{ [key: string]: number }>({});

  const onFinishSetup = (setupValues: { [key: string]: any}): void => {
    setBet(setupValues[SetupFields.Bet]);
    delete setupValues[SetupFields.Bet];

    const newPlayers: { [key: string]: number } = {};
    Object.values(setupValues).map((player: string) => newPlayers[player] = 0);
    setPlayers(newPlayers);
    setIsSettingUp(false);
  }

  const onUpdateResults = (results: any): void => {
    console.log('---onUpdateResults:', results);
    const newScore: { [key: string]: number } = { ...players };
    const TAI_TO_SCORE_MAP = [1, 2, 4, 8, 16];

    const change = TAI_TO_SCORE_MAP[results[ResultUpdateFields.Tai] - 1] * bet;
    console.log(change);

    switch (results[ResultUpdateFields.WinType]) {
      case WIN_OPTIONS.ZiMo:
        const zimoChange = change * 2;
        Object.keys(players).forEach((player: string) => {
          const score =
            (player === results[ResultUpdateFields.Winner]) ? newScore[player] + 3 * zimoChange :
            newScore[player] - zimoChange;
          newScore[player] = Number(score.toFixed(2));
        })
        break;
      
      case WIN_OPTIONS.FangPao:
        Object.keys(players).forEach((player: string) => {
          const score =
            (player === results[ResultUpdateFields.Winner]) ? newScore[player] + 4 * change :
            (player === results[ResultUpdateFields.Loser]) ? newScore[player] - 2 * change :
            newScore[player] - change;
          newScore[player] = Number(score.toFixed(2));
        })
        break;

      case WIN_OPTIONS.FangPaoBaoDa:
        const baodaChange = 4 * change;
        Object.keys(players).forEach((player: string) => {
          const score =
            (player === results[ResultUpdateFields.Winner]) ? newScore[player] + baodaChange :
            (player === results[ResultUpdateFields.Loser]) ? newScore[player] - baodaChange :
            newScore[player];
          newScore[player] = Number(score.toFixed(2));
        })
        break;
    }

    setPlayers(newScore);
  }

  if (isSettingUp) {
    return <Setup onFinish={onFinishSetup} />
  }

  return (
    <>
      <Scoreboard players={players} />
      <ResultUpdate playerNames={Object.keys(players)} onUpdateResults={onUpdateResults} />
    </>
  );
}

export default Mahjong;