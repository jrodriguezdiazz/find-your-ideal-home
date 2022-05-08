import { FunctionComponent } from 'react';
import { Button } from '../../shared/components/FormElements/Button';
import { Card } from '../../shared/components/UIElements/Card';
import { PlaceItemInterface } from '../../shared/interfaces/place-item';
import './PlaceList.css';

export const PlaceItem: FunctionComponent<PlaceItemInterface> = ({
  key,
  imageUrl,
  title,
  address,
  description,
}) => (
  <li className="place-item">
    <Card>
      <div className="place-item__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="place-item__info">
        <h2>{title}</h2>
        <h3>{address}</h3>
        <p>{description}</p>
      </div>
      <div className="place-item__actions">
        <Button inverse>View on map</Button>
        <Button to={`/places/${key}/`}>Edit</Button>
        <Button danger>Delete</Button>
      </div>
    </Card>
  </li>
);
