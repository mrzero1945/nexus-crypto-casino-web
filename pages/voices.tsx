import React, { useState, useEffect } from 'react';

function SpeechSynthesizer() {
  // Explicitly define the type of voices as SpeechSynthesisVoice[]
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const handleVoicesChanged = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoiceIndex(0);
    };

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
  }, []);

  const handleVoiceChange = (event:any) => {
    setSelectedVoiceIndex(Number(event.target.value));
  };

  const handleTextChange = (event:any) => {
    setText(event.target.value);
  };

  const speak = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.voice = voices[selectedVoiceIndex];
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <select value={selectedVoiceIndex} onChange={handleVoiceChange}>
        {voices.map((voice, index) => (
          <option key={voice.name} value={index}>
            {voice.name}
          </option>
        ))}
      </select>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={speak}>Speak</button>
    </div>
  );
}

export default SpeechSynthesizer;
