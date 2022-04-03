import {FunctionComponent} from "react";
import { Card } from "../../shared/components/UIElements/Card";
import { UserListInterface } from "../../shared/interfaces/user";
import { UserItem } from "./UserItem"
import "./UserItem.css"

export const UserList: FunctionComponent<UserListInterface> = ({ items }) => {
  if (!items.length) {
    return (
      <div className="center" >
        <Card>
          <h2>No user found</h2>
        </Card>
      </div>
    )
  }
  return (
    <ul className="users-list">
      {items.map(({id, image, placeCount, name}) => <UserItem key={id} id={id} name={name} image={image} placeCount={placeCount}/>)}
    </ul>
  );
}
