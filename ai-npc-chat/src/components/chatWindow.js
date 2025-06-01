import axios from "axios";
import { useState } from "react";
import Message from "./Message";
import InputBox from "./InputBox";

function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Salom, men ShaykhBot. Qur'on haqida savolingiz bormi?",
    },
  ]);

  const sendMessage = async (text) => {
    const newMessages = [...messages, { from: 'user', text }];
    setMessages(newMessages);
  
    const aiText = await generateAIResponse(text);
    const response = { from: 'ai', text: aiText };
    setMessages([...newMessages, response]);
  };
  

  const generateAIResponse = async (userInput) => {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      console.log('API Key:' , apiKey)

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  };

  return (
    <div
      style={{
        width: "400px",
        border: "2px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>🕌 ShaykhBot Chat</h3>
      <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, i) => (
          <Message key={i} from={msg.from} text={msg.text} />
        ))}
      </div>
      <InputBox onSend={sendMessage} />
    </div>
  );
}

export default ChatWindow;
