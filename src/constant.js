export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.503215',
      bl_lng: '25.324261',
      tr_lat: '42.869652',
      tr_lng: '44.552871',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': 'f9c207ba31msh4c2b93a87d02f09p1e9192jsn80446e7d1bc9',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

  export const options2 = {
    headers: {
      'X-RapidAPI-Key': 'f9c207ba31msh4c2b93a87d02f09p1e9192jsn80446e7d1bc9',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
}