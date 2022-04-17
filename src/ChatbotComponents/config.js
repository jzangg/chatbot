import { createChatBotMessage } from 'react-chatbot-kit';
import { BotAvatar, UserAvatar } from './Avatars';

const config = {
  botName: "Alex Long Impersonator",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />
  },
  initialMessages: [createChatBotMessage("Hello, my name is Alex Long, the #1 HackDavis director")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#9E3EBC",
    },
  },
}

export default config;
