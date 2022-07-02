import { cartesianPlane } from './types';

export default interface IMove {
  /**
   * This interface method implements a drive to any vehicle
   * @params empty
   * @return this
   */
  drive(): this;

  /**
   * This interface method implements an way to get position of any vehicle
   * @params empty
   * @return cartesianPlane
   */
  getPosition(): cartesianPlane;
}
