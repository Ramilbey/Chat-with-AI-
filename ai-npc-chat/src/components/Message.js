function Message({ from, text }) {
    const isUser = from === 'user';
    return (
      <div style={{
        textAlign: isUser ? 'right' : 'left',
        margin: '5px 0',
        color: isUser ? 'blue' : 'green'
      }}>
        <strong>{isUser ? 'You' : 'ShaykhBot'}:</strong> {text}
      </div>
    );
  }
  
  export default Message;
  