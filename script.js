document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('game-list');
    const viewport = document.getElementById('game-viewport');
    const placeholder = document.getElementById('placeholder');

    // Fetch the games from our JSON file
    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(game => {
                // Create a button for each game
                const btn = document.createElement('button');
                btn.textContent = game.title;
                btn.className = 'game-btn';
                
                btn.onclick = () => {
                    // Update iframe and hide placeholder
                    viewport.src = game.url;
                    viewport.style.display = 'block';
                    placeholder.style.display = 'none';
                };

                gameList.appendChild(btn);
            });
        })
        .catch(err => console.error('Error loading games:', err));
});