import  {Player}           from '../../domain/player';
import  {IPlayerAPIObject} from '../api';


export function playerAdapter(obj: IPlayerAPIObject) {
  return new Player(
    obj.name,
    obj.position,
    obj.jerseyNumber,
    obj.dateOfBirth,
    obj.nationality,
    obj.contractUntil,
    obj.marketValue
  );
}
