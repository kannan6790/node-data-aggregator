const { getLocalUsers, saveReport } = require("./services/fileService");
const { getRemoteDetails } = require("./services/apiService");
const { findUserById } = require("./services/searchService");

process.on("unhandledRejection", (err) => {
  console.error("CRITICAL ERROR:", err.message);
  process.exit(1);
});

async function aggrgateData() {
  try {
    console.log("start Aggregation...");
    console.time("PerformanceTimer");

    const localUsers = await getLocalUsers();

    const detailPromises = localUsers.map((user) => getRemoteDetails(user.id));
    const remoteDetails = await Promise.all(detailPromises);

    const finalReport = localUsers.map((user, index) => {
      return { ...user, ...remoteDetails[index] };
    });
    console.table(finalReport);
    console.timeEnd("PerformanceTimer");

    await saveReport(finalReport);

    const usernew = findUserById(finalReport, 1);
    console.log("search Result:", usernew);
  } catch (error) {
    console.error("Aggregation Failed:", error.message);
  }
}

aggrgateData();
