import { AvailableDirections, AvailableTurnDirections } from '../../types';

export default interface ISpin {
  /**
   * This interface method implements a method to turn (left/right) any vehicle
   * @params empty
   * @return this
   */
  turn(direction: AvailableTurnDirections): this;

  /**
   * This interface method implements an way to get the direction of any vehicle
   * @params empty
   * @return string<AvailableDirections>
   */
  getDirection(): AvailableDirections;
}
