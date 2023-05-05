class QuizAPI {
    url = "";
    data = null;
    constructor(newURL) {
      this.url = newURL;
    }
    async getData() {
      const response = await fetch(this.url);
      const data = await response.json();
      this.data = data["questions"];
      return this.data;
    }
}