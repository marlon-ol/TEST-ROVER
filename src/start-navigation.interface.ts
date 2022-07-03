import { cleanInputType } from './types';

export interface IStartNavigation {
  /**
   * This interface method is used to run all commands of navigation.
   *  @return string;
   */
  dispatch(): string;

  /**
   * This interface method is used to set input before dispatch if was needed.
   * @params payload: any;
   * @returns this;
   */
  setCleanInput(payload: cleanInputType[]): this;
}
