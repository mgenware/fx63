export default class HelloData {
  msg: string = 'Message from Hello Component';
  counter: number = 1;

  increase() {
    this.counter++;
  }
}