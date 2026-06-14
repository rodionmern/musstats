let currentTrackName = '';

async function fetchTrack() {
    try {
        const response = await fetch('/api/current-track');
        const data = await response.json();

        if (data.track !== currentTrackName) {
            currentTrackName = data.track;
            
            const artistNameEl = document.getElementById('artist');
            const trackNameEl = document.getElementById('track-name');
            const albumNameEl = document.getElementById('album-name');
            const artEl = document.getElementById('album-art');
            
            console.log(data.art_url)

            if (artistNameEl) artistNameEl.innerText = data.artist;;
            if (trackNameEl) trackNameEl.innerText = data.track;
            if (albumNameEl) albumNameEl.innerText = data.album;
            setTimeout(() => {
                    artEl.src = data.art_url;
                }, 50);
            trackNameEl.href = data.track_url;

            document.getElementById('all-scrobbles').innerText = data.scrobbles;
            
            console.log(`Сейчас играет: ${data.artist} - ${data.track}`);
        }
    } catch (error) {
        console.error('Ошибка загрузки трека:', error);
    }
}

fetchTrack();
setInterval(fetchTrack, 1500);