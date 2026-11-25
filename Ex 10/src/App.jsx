import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'Abdirahman', email: 'maancabdi28@gmail.com', number: '0637467972' },
    { id: 2, name: 'Mustafe', email: 'mancado124@gmail.com', number: '0633717745' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
