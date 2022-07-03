import Plateau from './plateau';
import Rover from './rover';
import { ROVER_TURN_DIRECTIONS } from './rover/constants';
import { AvailableDirections, AvailableTurnDirections } from './rover/types';
import { IStartNavigation } from './start-navigation.interface';
import { cleanInputType, outputArray, outputData } from './types';

export default class StartNavigation implements IStartNavigation {
  private cleanInput: cleanInputType[] = [];
  private outputs: outputArray = [];
  private plateau: Plateau;

  constructor(input: string) {
    const readInput = this.readInput(input);
    const [plateau_x, plateau_y]: any = readInput.shift();

    this.cleanInput = readInput;
    this.plateau = new Plateau(plateau_x, plateau_y);
  }

  private readInput(input: string): cleanInputType[] {
    const inputArray: string[] = input.split('\n');
    const cleanInput: cleanInputType[] = inputArray.map(
      (line: string): string[] => {
        return line
          .split('')
          .filter((digit: string): boolean => digit.trim() !== '');
      },
    );

    if (!cleanInput[0].length) {
      throw new Error('Invalid input data');
    }
    return cleanInput;
  }

  dispatch(): string {
    this.cleanInput.forEach(this.runCommandLine);
    return this.getStringfiedOutput(this.outputs);
  }

  private runCommandLine = async (
    value: cleanInputType,
    index: number,
  ): Promise<void> => {
    if (value.length === 3) {
      const [rover_x, rover_y, rover_direction] = value;
      const commandsArray: string[] = this.cleanInput[index + 1];
      const rover = new Rover(
        Number(rover_x),
        Number(rover_y),
        <AvailableDirections>rover_direction,
        this.plateau,
      );

      commandsArray.forEach((command, intra_index) => {
        this.threatMovement(command, rover);

        if (intra_index + 1 === commandsArray.length) {
          this.saveRoverPosition(rover);
        }
      });
    }
  };

  private saveRoverPosition(rover: Rover) {
    this.outputs.push({
      position: rover.getPosition(),
      direction: rover.getDirection(),
    });
  }

  private getStringfiedOutput(outputs: outputArray): string {
    return outputs
      .map((value: outputData): string =>
        [value.position.x, value.position.y, value.direction].join(' '),
      )
      .join('\n');
  }

  private async threatMovement(command: string, rover: Rover): Promise<void> {
    if (ROVER_TURN_DIRECTIONS.includes(command)) {
      rover.turn(<AvailableTurnDirections>command);
    } else if (command === 'M') {
      rover.drive();
    }
  }

  setCleanInput(payload: cleanInputType[]): this {
    this.cleanInput = payload;
    return this;
  }
}
