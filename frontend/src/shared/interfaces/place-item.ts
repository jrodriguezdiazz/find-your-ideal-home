export interface PlaceItemInterface {
  key: string;
  imageUrl: string;
  title: string;
  description: string;
  address: string;
  creator: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
