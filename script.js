document.addEventListener('DOMContentLoaded', () => {
    // Get all card elements
    const cards = document.querySelectorAll('.card');

    // Check for SpeechSynthesis API support
    if ('speechSynthesis' in window) {
        // Create the speech synthesis object once
        const synth = window.speechSynthesis;

        // Function to speak the French word
        const speakWord = (word) => {
            // Stop any currently speaking utterance
            synth.cancel();

            // Create a new utterance object
            const utterance = new SpeechSynthesisUtterance(word);

            // Set the language to French
            // 'fr-FR' is a standard locale for French
            utterance.lang = 'fr-FR'; 

            // Set the volume, rate, and pitch (optional but recommended)
            utterance.volume = 1; // 0 to 1
            utterance.rate = 1.0; // 0.1 to 10
            utterance.pitch = 1.0; // 0 to 2

            // Speak the utterance
            synth.speak(utterance);
        };

        // Attach the click event listener to each card
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // Get the French word from the data-word attribute
                const frenchWord = card.getAttribute('data-word');
                if (frenchWord) {
                    speakWord(frenchWord);
                }
            });
        });
    } else {
        // Fallback for browsers that do not support the API
        console.error("Speech Synthesis API not supported in this browser.");
        alert("وظيفة النطق الصوتي غير مدعومة في متصفحك.");
    }
});
