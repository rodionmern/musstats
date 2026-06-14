async function updateStats() {
    try {
        const response = await fetch('/api/tops');
        const data = await response.json();

        if (data['artists'] && data['albums']) {
            const artists = document.querySelector('.artists');
            const albums = document.querySelector('.albums');
            const status = document.querySelector('.status');

            artists.innerHTML = "";
            albums.innerHTML = "";

            for (let i = 0; i < 5; i++) {
                artists.innerHTML += `
                <div class="artist">
                    <p><a href="${ data['artists'][i][2]}">${ data['artists'][i][0] }</a></p>
                    <p><strong>${ data['artists'][i][1] } раз</strong></p>
                </div>
                `
            }

            for (let i = 0; i < 5; i++) {
                albums.innerHTML += `
                    <div class="album">
                        <div class="album-info">
                            <img src="${ data['albums'][i][2] }" alt="Album art" class="album-art">
                            <p><a href="${ data['albums'][i][4]} ">${ data['albums'][i][0] }</a></p>
                            <p><strong>${ data['albums'][i][1] }</strong></p>
                        </div>
                        
                        <p align="right"><small>${ data['albums'][i][3] } слушек</small></p>
                    </div>
                `
            }

            status.innerHTML = "Списки обновлены"
            setTimeout(() => {status.innerHTML = ""}, 2000)
        }
    } catch (error) {
        console.error('Ошибка загрузки трека:', error);
    }
}

updateStats();
setInterval(updateStats, 300000);