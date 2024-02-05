// useState is a React hook
import { useState, useContext, createContext} from "react";

export const EmojiContext = createContext();


export function EmojiChanger() {

// const [mood, setMood] = useState('😐');
const { mood, setMood } = useContext(EmojiContext);


const handleSadEmoji = () => {
    let newEmoji = ""
}

const handleEmojiContext = () => {
    setMood(mood)
}


return (

<div className="MoodChanger componentBox">
    <h2>
Current Mood: {mood} 
</h2>

<button
onClick={() => setMood('😀')}>
Make Emoji Happy
</button>

<button
onClick={() => setMood('😔')}>
Make Emoji Sad
</button>

</div>
)}

export function EmojiProvider({ children }) {
    const [mood, setMood] = useState('😐');

    return (
        <EmojiContext.Provider value={{ mood, setMood }}>
            {children}
        </EmojiContext.Provider>
    );
}

export default EmojiChanger
