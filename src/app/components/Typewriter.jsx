"use client"
import React, { useEffect, useState } from 'react';

export default function Typewriter({ 
  phrases = [],
  typeSpeed = 100,    // Velocidad de escritura (ms por carácter)
  deleteSpeed = 50,   // Velocidad de borrado (ms por carácter)
  pause = 1500        // Tiempo de pausa cuando termina de escribir una frase (ms)
}) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pause]);

  return <span>{text}</span>;
}
