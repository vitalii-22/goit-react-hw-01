import css from './FriendListItem.module.css';
// import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  // const classNameStatus = [css.userFriendStatus];

  // if (isOnline) {
  //   classNameStatus.push('is-online');
  // } else {
  //   classNameStatus.push('is-offline');
  // }

  return (
    <div>
      <img
        className={css.userFriendImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p>{name}</p>
      {/* <p className={classNameStatus.join(' ')}>
        {isOnline ? 'Online' : 'Offline'}
      </p> */}
      {isOnline ? (
        <p
          style={{
            color: 'green',
            fontSize: 16,
            marginTop: 5,
          }}
        >
          Online
        </p>
      ) : (
        <p
          style={{
            color: 'red',
            fontSize: 16,
            marginTop: 5,
          }}
        >
          Offline
        </p>
      )}
    </div>
  );
};

export default FriendListItem;
