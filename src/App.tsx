import './App.css'
import ChatInput from './Components/ChatInput'
import ChatMessage from './Components/ChatMessage'
// import Counter from './Components/Counter'
// import MyForm from './Components/MyForm'
// import TextInput from './Components/TextInput'
function App() {

  return (
    <>
    <ChatInput></ChatInput>
    <ChatMessage message="Hello chatbot" sender="user"></ChatMessage>
    <ChatMessage message="Hello! how can i help you today" sender="robot"></ChatMessage>
    </>

   
  )
}

export default App
