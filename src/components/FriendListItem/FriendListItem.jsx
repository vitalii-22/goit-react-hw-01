import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img
        className={css.userFriendImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p>{name}</p>
      <p className={css.userFriendStatus}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
