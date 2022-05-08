export interface UserItemInterface {
  id: string;
  name: string;
  image: string;
  placeCount: number;
}

export interface UserListInterface {
  items: UserItemInterface[];
}
