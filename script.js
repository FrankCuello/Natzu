document.addEventListener('DOMContentLoaded', () => {
    const leftEmojiContainer = document.querySelector('.emoji-column.left');
    const rightEmojiContainer = document.querySelector('.emoji-column.right');

    const leftEmojis = ['👾', '🚀', '🌟', '🎮', '💜'];
    const rightEmojis = ['💖', '✨', '🏆', '🎧', '💫'];

    function addEmojisToColumn(container, emojis) {
        emojis.forEach(emojiText => {
            const emojiSpan = document.createElement('span');
            emojiSpan.textContent = emojiText;
            container.appendChild(emojiSpan);
        });
    }

    addEmojisToColumn(leftEmojiContainer, leftEmojis);
    addEmojisToColumn(rightEmojiContainer, rightEmojis);

    // Opcional: Cambiar la frase motivadora de vez en cuando
    const quotes = [
        "Natzu, cada nivel superado es un paso más hacia tu leyenda. ¡Que tus jugadas sean épicas y tu diversión infinita!",
        "¡Natzu, en el juego de la vida y en tus partidas, tú eres la MVP! Sigue brillando.",
        "Que tus APM sean altos y tus enemigos caigan rápido. ¡A ganar, Natzu!",
        "¡Natzu, no hay bug que te detenga ni boss que se te resista! ¡A por todas!",
        "Con cada clic, Natzu, construyes tu imperio. ¡Domina el juego!"
    ];
    const quoteElement = document.getElementById('quote');
    let quoteIndex = 0;

    // Descomenta las siguientes líneas si quieres que la frase cambie automáticamente
    /*
    setInterval(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        quoteElement.style.opacity = 0; // Para efecto de fade
        setTimeout(() => {
            quoteElement.textContent = quotes[quoteIndex];
            quoteElement.style.opacity = 1;
        }, 500); // Tiempo para el fade out antes de cambiar texto
    }, 10000); // Cambia cada 10 segundos
    */
});