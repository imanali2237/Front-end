import { useState } from "react";
function TextInput(){
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value)
        
    }
    
    const [text,setText]=useState("");


    return (
        <div>
            <form>
                <label>Enter text</label>
                <input 
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                    style={{ padding: '8px', fontSize: '16px', width: '250px' }}
                />
            </form>
             <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>You typed:</strong> {text}
      </div>
        </div>
    ); 
}
export default TextInput
