// Tokei sub commands
import inquirer from "inquirer";
import colors from "colors";
import KeyManager from "../lib/KeyManager.js";

const key = {
  // To set a Private API key
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key --".green + "https://nomics.com",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);
    if (key) {
      console.log(`API Key set`.blue);
    }
  },

  // Show Private Key
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Current API Key: ", key.yellow);

      return key;
    } catch (error) {
      console.error(error.message.red);
    }
  },

  // Delete Private Key
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log("Key removed".blue);

      return;
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

export default key;
