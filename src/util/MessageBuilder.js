export default class MessageBuilder {
  constructor(message = '') {
    this.message = message;
  }

  append(part) {
    if (part) {
      return new MessageBuilder(`${this.message} ${part}`);
    }
    return new MessageBuilder(this.message);
  }
}
