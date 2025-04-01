import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ id, ...rest }) => {
        return (
          <li className={s.item} key={id}>
            <FriendListItem {...rest} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
