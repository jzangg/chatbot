import quotes from './inspirational_quotes'

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
    const random = Math.floor(Math.random() * quotes.length)
    const Message = this.createChatBotMessage(quotes[random])
    this.updateChatbotState(Message)
  }

  help() {
    const helpMessage = this.createChatBotMessage("I would love to help you. I am your #1 supporter!")
    this.updateChatbotState(helpMessage)
  }

  hw() {
    const hwMessage = this.createChatBotMessage("I am excellent at doing my homework! I turn in all my assignments on time.")
    this.updateChatbotState(hwMessage)
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;
