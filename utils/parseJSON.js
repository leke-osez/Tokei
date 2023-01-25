import { readFile } from "node:fs/promises";

const parseJSON = async (relPath) => {
  const fileUrl = new URL(relPath, import.meta.url);
  const parsedPackageJSON = JSON.parse(await readFile(fileUrl, "utf8"));

  return parsedPackageJSON;
};

export default parseJSON;
