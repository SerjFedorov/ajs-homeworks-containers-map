// TODO: write your code here

export const errors = [
  [1, 'Character not found'],
  [2, 'Character is bad'],
  [3, 'The name must be of the string type!'],
  [4, 'The name must not be shorter than 2 characters!'],
  [5, 'The name must not be longer than 10 characters!'],
  [6, 'The type must be from Bowman, Swordsman, Wizard, Daemon, Undead, Zombie'],
];

export default class ErrorRepository {
  constructor() {
    this.errors = new Map(errors);
  }

  translate(code) {
    const value = this.errors.get(code);
    return value || 'Unknown error';
  }
}
