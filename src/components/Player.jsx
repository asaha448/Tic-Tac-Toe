import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const edit= <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title"
  aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Edit Player Name</title>
    <desc>A line styled icon from Orion Icon Library.</desc>
    <path strokeWidth="4"
    strokeMiterlimit="10" stroke="#9ccab3" fill="none" d="M58.4 18.77l.941-.941c3.637-3.638 2.7-8.595-.941-12.233s-8.6-4.58-12.234-.94l-.941.941"
    data-name="layer2" strokeLinejoin="round" strokeLinecap="round"></path>
    <path d="M52.639 24.535l5.766-5.765L45.229 5.596l-5.764 5.764"
    strokeWidth="4" strokeMiterlimit="10" stroke="#9ccab3" fill="none" data-name="layer1"
    strokeLinejoin="round" strokeLinecap="round"></path>
    <path d="M19.582 57.59l33.057-33.055L39.465 11.36 6.409 44.416 2.352 61.649l17.23-4.059zM6.409 44.416L19.582 57.59"
    strokeWidth="4" strokeMiterlimit="10" stroke="#9ccab3" fill="none" data-name="layer1"
    strokeLinejoin="round" strokeLinecap="round"></path>
  </svg>;
  const save= <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
  aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Save Player Name</title>
    <desc>A line styled icon from Orion Icon Library.</desc>
    <path data-name="layer1"
    fill="none" stroke="#c5b0dd" strokeMiterlimit="10" strokeWidth="4" d="M24 54L2 31.491l5.28-5.04L24 43l32.773-33L62 16 24 54z"
    strokeLinejoin="round" strokeLinecap="round"></path>
  </svg>;
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? save : edit}</button>
    </li>
  );
}