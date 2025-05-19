document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');

    // Funzione per visualizzare le notizie nell'HTML
    function displayNews(data) {
        if (!newsContainer) {
            console.error("Elemento 'news-container' non trovato.");
            return;
        }

        // Controlla se la variabile newsData esiste e non è vuota
        if (typeof newsData === 'undefined' || !newsData || newsData.length === 0) {
            newsContainer.innerHTML = '<p>Nessuna notizia disponibile al momento.</p>';
            console.warn("Variabile 'newsData' non trovata o vuota. Assicurati che notizie.json sia caricato correttamente prima di script.js e contenga 'var newsData = [...]'.");
            return;
        }

        // Pulisce il contenitore (rimuove il messaggio "Caricamento...")
        newsContainer.innerHTML = '';

        // Itera su ogni notizia nella variabile globale newsData
        newsData.forEach(newsItem => {
            const newsDiv = document.createElement('div');
            newsDiv.classList.add('news-item'); // Aggiunge una classe per lo stile CSS

            const title = document.createElement('h3');
            title.textContent = newsItem.titolo; // Imposta il titolo

            const text = document.createElement('p');
            text.textContent = newsItem.testo; // Imposta il corpo del testo

            newsDiv.appendChild(title); // Aggiunge il titolo al div
            newsDiv.appendChild(text);  // Aggiunge il testo al div

            newsContainer.appendChild(newsDiv); // Aggiunge il div della notizia al contenitore
        });
    }

    // Chiama direttamente la funzione per mostrare le notizie
    // Non c'è più bisogno di fetch, i dati sono già disponibili in 'newsData'
    displayNews();

});
