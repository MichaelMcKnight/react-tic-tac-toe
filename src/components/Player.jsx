import { useState } from "react";

const Player = ({initialName, symbol, isActive, onChangeName}) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  const changeHandle = (event) => {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={changeHandle} />
    btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{btnCaption}</button>
    </li>
  );
}

export default Player;