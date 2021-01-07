export default {
  query: "kitten",
  page: 1,
  perPage: 4,
  baseUrl: "https://api.pexels.com/v1",
  getFetch() {
    let key = "563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af";
    let params = `/search?query=${this.query}`;
    let url = this.baseUrl + params;
    let options = {
      method: "GET",
      headers: {
        Authorization: key,
      },
    };
    return fetch(url, options)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        return data.photos;
      })
      .then((resolt) => {
        // console.log(resolt);
      });
  },
};
