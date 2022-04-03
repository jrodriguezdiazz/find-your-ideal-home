export interface UserListInterface {
  items: UserItemInterface[];
}

export interface UserItemInterface {
  id: string,
  name: string,
  image: string,
  placeCount: number,
}
