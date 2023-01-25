import KeyManager from "../lib/KeyManager.js";
import CryptoAPI from "../lib/CryptoAPI.js";

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const cryptoAPI = new CryptoAPI(key);

      const priceOutputData = await cryptoAPI.getPriceData(cmd.coin, cmd.curr);
    } catch (err) {}
  },
};

export default check;
