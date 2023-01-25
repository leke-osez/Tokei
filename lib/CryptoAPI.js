// Calls the nomics API to get crytocurrency data

import axios from "axios";
import colors from "colors";
import resultConverter from "../utils/resultConverter";

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    // Insert base API url e.g nomics.com
    this.baseURL = ``;
  }

  async getPriceData(coinOption, currOption) {
    try {
      const res = await axios.get(
        `${this.baseURL}?key=${apiKey}&id=${coinOption}&convert=${currOption}`
      );
      return resultConverter(res.data, currOption);
    } catch (err) {}
  }
}

export default CryptoAPI;
