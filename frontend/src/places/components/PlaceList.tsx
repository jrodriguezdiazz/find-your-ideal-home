import { FunctionComponent } from "react";
import { Card } from "../../shared/components/UIElements/Card";
import { PlaceListInterface } from "../../shared/interfaces/place-list";
import { PlaceItem } from "./PlaceItem";
import "./PlaceList.css";

export const PlaceList: FunctionComponent<PlaceListInterface> = ({ items }) => {
  return !items.length ? <div className={ " place-list center" }>
      <Card>
        <h2> No places found. Maybe create one?</h2>
        <button>Share Places</button>
      </Card>
    </div>
    : <ul className={ "place-list" }>
      { items.map((place) => <PlaceItem { ...place } />) }
    </ul>;

};
