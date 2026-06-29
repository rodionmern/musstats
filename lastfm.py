import requests

apikey = "1357be3f7e4f50ecf63850d870f3d36d"
# username = "rodionsaburov"

def getNowPlaying(username):
    url = f"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user={username}&api_key={apikey}&format=json&nowplaying=true&limit=1"

    response = requests.get(url)
    response.raise_for_status()
    data = response.json()

    artist = data['recenttracks']['track'][0]['artist']['#text']
    trackName = data['recenttracks']['track'][0]['name']
    album = data['recenttracks']['track'][0]['album']['#text']
    artURL = data['recenttracks']['track'][0]['image'][3]['#text']
    trackURL = data['recenttracks']['track'][0]['url']
    allScrobbles = data['recenttracks']['@attr']['totalPages']

    return [artist, trackName, album, artURL, trackURL, allScrobbles]

def getTopTrack(username):
    url = f"https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user={username}&api_key={apikey}&format=json&nowplaying=true&limit=1"

    response = requests.get(url)
    response.raise_for_status()
    data = response.json()

    artist = data['toptracks']['track'][0]['artist']['name']
    trackName = data['toptracks']['track'][0]['name']
    artURL = data['toptracks']['track'][0]['image'][2]['#text']
    artistURL = data['toptracks']['track'][0]['artist']['url']
    trackURL = data['toptracks']['track'][0]['url']
    trackScrobbles = data['toptracks']['track'][0]['playcount']

    return [artist, trackName, artURL, artistURL, trackURL, trackScrobbles]


def getTopAlbums(username):
    url = f"https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user={username}&api_key={apikey}&format=json&nowplaying=true&limit=5"

    response = requests.get(url)
    response.raise_for_status()
    data = response.json()

    topAlbums = []

    for i in range(5):
        albumName = data['topalbums']['album'][i]['name']
        artist = data['topalbums']['album'][i]['artist']['name']
        artURL = data['topalbums']['album'][i]['image'][2]['#text']
        playCount = data['topalbums']['album'][i]['playcount']
        url = data['topalbums']['album'][i]['url']
        # artURL = data['topalbums']['album'][i]['#text']
        topAlbums.append([albumName, artist, artURL, playCount, url])
    
    return topAlbums

def getTopArtists(username):
    url = f"https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user={username}&api_key={apikey}&format=json&nowplaying=true&limit=5"

    response = requests.get(url)
    response.raise_for_status()
    data = response.json()

    topArtists = []

    for i in range(5):
        artistName = data['topartists']['artist'][i]['name']
        playCount = data['topartists']['artist'][i]['playcount']
        url = data['topartists']['artist'][i]['url']
        # artURL = data['topalbums']['album'][i]['#text']
        topArtists.append([artistName, playCount, url])

    return topArtists