class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercaseMessage = message.toLowerCase()

    if (lowercaseMessage.includes('hello')) {
      this.actionProvider.greet()
    }
    else {
      
    }
  }
}

export default MessageParser;
