export class HttpClient {
  constructor(url) {
    this.baseUrl = url;
  }
  async getAll() {
    const promise = await fetch(this.baseUrl);
    const data = await promise.json();
    return data;
  }
}
