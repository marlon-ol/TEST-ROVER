import Plateau from './plateau';
import Rover from './rover';
import { AvailableDirections, AvailableTurnDirections } from './rover/types';
import { cleanInputType, outputArray, outputData } from './types';

export default class StartNavigation {
  private cleanInput: cleanInputType[] = [];

  constructor(input: string) {
    this.cleanInput = this.readInput(input);
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
    const plateauData: string[] = this.cleanInput.shift() ?? ['0', '0'];
    const plateau = new Plateau(Number(plateauData[0]), Number(plateauData[1]));

    var outputs: outputArray = [];
    this.cleanInput.forEach((value, index) => {
      if (value.length === 3) {
        const rover = new Rover(
          Number(value[0]),
          Number(value[1]),
          <AvailableDirections>value[2],
          plateau,
        );

        const commandsArray: string[] = this.cleanInput[index + 1];
        commandsArray.forEach((command, intra_index) => {
          if (['R', 'L'].includes(command)) {
            rover.turn(<AvailableTurnDirections>command);
          } else if (command === 'M') {
            rover.drive();
          }
          if (intra_index + 1 === commandsArray.length) {
            outputs = outputs.concat({
              position: rover.getPosition(),
              direction: rover.getDirection(),
            });
          }
        });
      }
    });
    return this.getStringfiedOutput(outputs);
  }

  private getStringfiedOutput(outputs: outputArray): string {
    return outputs
      .map((value: outputData): string =>
        [value.position.x, value.position.y, value.direction].join(' '),
      )
      .join('\n');
  }

  setCleanInput(payload: any): this {
    this.cleanInput = payload;
    return this;
  }
}