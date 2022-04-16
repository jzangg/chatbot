class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
   createClientMessage,
   stateRef,
   createCustomMessage,
   ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hello, I love you.")
    this.updateChatbotState(greetingMessage)
  }

  inspirationalQuote() {
    
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;
