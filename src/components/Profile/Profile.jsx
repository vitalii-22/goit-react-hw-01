// import clsx from 'clsx';
import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardHeadContainer}>
        <img className={css.cardImg} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.cardList}>
        <li className={css.cardItem}>
          <span className={css.cardItemTitle}>Followers</span>
          <span className={css.cardItemText}>{followers}</span>
        </li>
        <li className={css.cardItem}>
          <span className={css.cardItemTitle}>Views</span>
          <span className={css.cardItemText}>{views}</span>
        </li>
        <li className={css.cardItem}>
          <span className={css.cardItemTitle}>Likes</span>
          <span className={css.cardItemText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
