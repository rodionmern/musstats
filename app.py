from flask import Flask, render_template, request, jsonify
from lastfm import getNowPlaying, getTopAlbums, getTopArtists

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    username = request.cookies.get('username')
    if username is None:
        username = 'rodionsaburov'
    print(username)

    nowPlaying = getNowPlaying(username)
    topAlbums = getTopAlbums(username)
    topArtists = getTopArtists(username)
    return render_template('home.html', now=nowPlaying, albums=topAlbums, artists=topArtists)

@app.route('/api/current-track')
def api_current_track():
    username = request.cookies.get('username')
    if username is None:
        username = 'rodionsaburov'
    
    data = getNowPlaying(username)
    return jsonify({
        'artist': data[0],
        'track': data[1],
        'album': data[2],
        'art_url': data[3],
        'track_url': data[4],
        'scrobbles': data[5]
    })

@app.route('/api/tops')
def api_tops():
    username = request.cookies.get('username')
    if username is None:
        username = 'rodionsaburov'
    
    albums_data = getTopAlbums(username)
    artists_data = getTopArtists(username)
    return jsonify({
        'albums': albums_data,
        'artists': artists_data
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1717, debug=True)

