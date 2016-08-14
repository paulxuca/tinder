/**
*
* MatchMessengerBlock
*
*/

import React, { PropTypes } from 'react';
import { getAge, convertDistanceToLocal, parsePingTime } from 'utils/operations';

import Text from 'components/Text';
import styles from './styles.css';

function MessengerCard(props) {
  const person = props.data.person;
  const age = person && person.birth_date ? getAge(person.birth_date) : null;
  const messages = props.data.messages;
  const recentMessage = messages && messages[messages.length - 1] && messages[messages.length - 1].message;

  if (person) {
    return (
      <div onClick={() => props.onClick(person._id)} className={styles.matchBlock}>
        <div className={styles.matchAvatarContainer}>
          <div
            className={styles.matchAvatar}
            style={{
              backgroundImage: `url(${person && person.photos && person.photos[0].processedFiles[0].url})`,
            }}
          />
        </div>
        <div className={styles.matchDetails}>
          <Text type="matchName">{person && person.name}</Text>
          <Text type="matchRecentMessage">{recentMessage}</Text>
        </div>
      </div>
    );
  }
  return null;
}

MessengerCard.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MessengerCard;