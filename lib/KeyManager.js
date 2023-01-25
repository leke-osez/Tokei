import Configstore from "configstore";
import parseJSON from "../utils/parseJSON.js";

const pkg = await parseJSON("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error(
        'No API Key Found, get API Key from "https://nomics.com"'
      );
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error(
        'No API Key Found, get API Key from "https://nomics.com"'
      );
    }

    this.conf.delete("apiKey");
  }
}

export default KeyManager;
