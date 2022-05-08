import { UserItemInterface } from '../../shared/interfaces/user';
import { UserList } from '../components/UserList';

export const Users = () => {
  const USERS: UserItemInterface[] = [
    {
      id: 'u1',
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      placeCount: 2,
    },
    {
      id: 'u2',
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      placeCount: 3,
    },
  ];
  return <UserList items={USERS} />;
};
