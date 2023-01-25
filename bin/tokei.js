#!/usr/bin/env node

import { program } from "commander";
// import pkg from  assert { type: "json" };
import parseJSON from "../utils/parseJSON.js";

const pkg = await parseJSON("../package.json");

program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://nomics.com")
  .command("check", "Check coin Price Info")
  .parse(process.argv);
