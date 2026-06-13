from flask import Flask, render_template
from lastfm import getNowPlaying, getTopAlbums, getTopArtists

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    nowPlaying = getNowPlaying()
    topAlbums = getTopAlbums()
    topArtists = getTopArtists()
    return render_template('home.html', now=nowPlaying, albums=topAlbums, artists=topArtists)
    
 
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1717, debug=True)

