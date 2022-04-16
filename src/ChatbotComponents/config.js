import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "Alex Long Impersonator",
  initialMessages: [createChatBotMessage("Hello, my name is Alex Long, the #1 HackDavis director")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#9E3EBC",
    },
  },
}

export default config;
