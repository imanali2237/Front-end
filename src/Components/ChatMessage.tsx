function ChatMessage(props: any) {
    const { message, sender } = props;

    return (
        <div>
            {sender === "robot" && <img src="robot.png" width="50"></img>}
            {message}
            {sender==="user"&&<img src="user.png" width="50"></img>}
        </div>

    )
}
export default ChatMessage