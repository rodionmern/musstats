let currentTrackName = '';

async function fetchTrack() {
    try {
        const response = await fetch('/api/current-track');

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        console.log(response)

        if (data.track !== currentTrackName) {
            currentTrackName = data.track;
            
            const artistNameEl = document.getElementById('artist');
            const trackNameEl = document.getElementById('track-name');
            const albumNameEl = document.getElementById('album-name');
            const artEl = document.getElementById('album-art');

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

        const status = document.querySelector('.status');
        let username = getUsername()
        
        if (username !== "rodionsaburov") {
            status.innerHTML = "Пользователь не найден или его настройки приватности не позволяют отобразить статистику."
            
            setTimeout(() => {status.innerHTML = "Устанавливаем пользователя по умолчанию..."}, 2500)
            document.cookie = `username=rodionsaburov; path=/; max-age=31536000`;
            updateStats()

            setTimeout(() => {status.innerHTML = ""}, 5000)
            document.querySelector('#stats-person-name').innerHTML = `Статистика пользователя rodionsaburov`;
        }
    }
}

fetchTrack();
setInterval(fetchTrack, 2000);