export const environment = {
  production: true
};

export const SpotifyConfiguration= {
  clientId: 'b261a78d3cba4d2d902c00bbc65938fa',
  authEndpoint:'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", 
    "user-read-recently-played", 
    "user-read-playback-state", 
    "user-top-read", 
    "user-modify-playback-state", 
    "user-library-read", 
    "playlist-read-private", 
    "playlist-read-collaborative"
  ]
};
