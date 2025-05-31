import { useState } from 'react';

function InputBox({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '80%', padding: '8px' }}
      />
      <button onClick={handleSend} style={{ padding: '8px' }}>Send</button>
    </div>
  );
}

export default InputBox;
