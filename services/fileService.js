const fs = require("fs").promises;
const path = require("path");

const getLocalUsers = async () => {
  const filePath = path.join(__dirname, "../data/users.json");
  const data = await fs.readFile(filePath);
  return JSON.parse(data);
};

const saveReport = async (finaldata) => {
  const logDir = path.join(__dirname, "../logs");
  const filePath = path.join(logDir, "final_report.json");

  await fs.mkdir(logDir, { recursive: true });

  const stringData = JSON.stringify(finaldata, null, 2);
  await fs.writeFile(filePath, stringData);
  console.log(`Report Save to:${filePath}`);
};

module.exports = { getLocalUsers, saveReport };
