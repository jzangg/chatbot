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
    else if (lowercaseMessage.includes('help')) {
      this.actionProvider.help()
    }
    else if (lowercaseMessage.includes('hw') || lowercaseMessage.includes('homework')) {
      this.actionProvider.hw()
    }
    else {
      this.actionProvider.inspirationalQuote()
    }
  }
}

export default MessageParser;
