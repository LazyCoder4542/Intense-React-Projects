const APIController = (function () {
  const clientID = "d4a761107257443a8f8f2dee1bb3cfa9";
  const clientSecret = "adaaefac3e004dd3b1b3862cb30d2787";

  // private Methods
  const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        //'Authorization': "Basic" + btoa(clientID + ":" + clientSecret),
      },
      body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`,
    });

    const data = await result.json();
    return data.access_token;
  };
  const _getGenres = async (token) => {
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
      {
        method: "GET",
        headers: {
          'Authorization': "Bearer" + token,
        },
      }
    );
    const data = await result.json();
    return data.categories.items;
  };
  const _getPlaylistByGenre = async (token, genreID) => {
    const limit = 10;
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreID}/playlists?limit=${limit}`,
      {
        method: "GET",
        headers: {
          'Authorization': "Bearer" + token,
        },
      }
    );
    const data = await result.json();
    return data.playlists.items;
  };
  const _getTracks = async (token, tracksEndPoint) => {
    const limit = 10;
    const result = await fetch(`${tracksEndPoint}?limit=${limit}`,
      {
        method: "GET",
        headers: {
          'Authorization': "Bearer" + token,
        },
      }
    );
    const data = await result.json();
    return data.items;
  };
  const _getTrack = async (token, trackEndPoint) => {
    const result = await fetch(`${trackEndPoint}`,
      {
        method: "GET",
        headers: {
          'Authorization': "Bearer" + token,
        },
      }
    );
    const data = await result.json();
    return data;
  };
  return {
    getToken() {
      return _getToken();
    },
    getGenres(token) {
      return _getGenres(token);
    },
    getPlaylistByGenre(token, genreID) {
      return _getPlaylistByGenre(token, genreID);
    },
    getTracks(token, tracksEndPoint) {
      return _getTracks(token, tracksEndPoint);
    },
    getTrack(token, trackEndPoint) {
      return _getTrack(token, trackEndPoint);
    }
  }
})();

export default APIController;
