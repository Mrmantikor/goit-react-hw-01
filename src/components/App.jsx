import Container from './Container/Container.jsx';

import userData from '../data/userData.json';
import Profile from './Profile/Profile';

import FriendList from './FriendList/FriendList.jsx';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <Container>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
