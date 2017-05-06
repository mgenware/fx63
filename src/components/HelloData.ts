import MyLib from 'lib/MyLib';

export default class HelloData {
  msg: string;
  counter: number = 1;

  constructor() {
    this.msg = MyLib.getMessage();
  }

  increase() {
    this.counter++;
  }
}