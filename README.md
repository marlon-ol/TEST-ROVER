# TEST-ROVER

## Story

A squad of robotic rovers are to be landed by NASA on a plateau on
Mars. This plateau, which is curiously rectangular, must be navigated
by the rovers so that their on-board cameras can get a complete view
of the surrounding terrain to send back to Earth.
A rover's position and location is represented by a combination of x
and y co-ordinates and a letter representing one of the four cardinal
compass points. The plateau is divided up into a grid to simplify
navigation. An example position might be 0, 0, N, which means the
rover is in the bottom left corner and facing North.
In order to control a rover, NASA sends a simple string of letters.
The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the
rover spin 90 degrees left or right respectively, without moving from
its current spot. 'M' means move forward one grid point, and maintain
the same heading.
Assume that the square directly North from (x, y) is (x, y+1).

## Goals

    Practice TDD and code smells, design patterns and principles.
    100% of Code and Branches COVERAGE.

## Technical description

Develop an api that moves a Rover around an Plateau.

- The input expected is a list of commands.

Sample api:

```
const app = StartNavigation("5 5\n1 2 N\n\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM")
app.dispatch() // Will return the new positions of Rovers
```

## Technical Reqs

- [NodeJs v18.4.0](https://nodejs.org/ar/blog/release/v18.4.0/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

# Instalation

Be first, clone its project to your computer.
After this, you can run

```
    cd ~/you-name/TEST-ROVER
    yarn install
    yarn test
    yarn coverage
```
