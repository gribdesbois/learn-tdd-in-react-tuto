import NewMessageForm from './components/NewMessageForm'

const App = () => {
  const handleSend = (newMessage) => {}
  return (
    <div>
      <NewMessageForm onSend={handleSend} />
    </div>
  )
}
export default App
