import Container from './Container/Container.jsx';
import userData from '../data/userData.json';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList.jsx';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../data/transactions.json';
import '../components/App.scss';

const App = () => {
  return (
    <Container>
      <Profile
        myname={userData.usermyname}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        className="profile-text"
      />

      <FriendList friends={friends} className="friend-list-text" />
      <TransactionHistory items={transactions} className="transaction-text" />
    </Container>
  );
};

export default App;
