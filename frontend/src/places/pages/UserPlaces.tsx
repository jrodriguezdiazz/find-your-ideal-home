import { useParams } from "react-router-dom";
import { PlaceListInterface } from "../../shared/interfaces/place-list";
import { UserPlacesParams } from "../../shared/interfaces/util";
import { PlaceList } from "../components/PlaceList";

const DUMMY_PLACE_LIST: PlaceListInterface = {
  items: [
    {
      key: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
      address: "20 W 34th St, New York, NY 10001",
      coordinates: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: "u1"
    },
    {
      key: "p2",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
      address: "20 W 34th St, New York, NY 10001",
      coordinates: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: "u2"
    }
  
  ]
};
export const UserPlaces = () => {
  const { userId } = useParams<UserPlacesParams>();
  
  const loadedPlaces = DUMMY_PLACE_LIST.items.filter(({ creator }) => creator === userId);
  return (
    <PlaceList items={ loadedPlaces } />
  );
};
