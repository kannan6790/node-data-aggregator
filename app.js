const { getLocalUsers, saveReport } = require("./services/fileService");
const { getRemoteDetails } = require("./services/apiService");

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
      return { ...user, ...remoteDetails };
    });
    console.table(finalReport);
    console.timeEnd("PerformanceTimer");

    await saveReport(finalReport);
  } catch (error) {
    console.error("Aggregation Failed:", error.message);
  }
}

aggrgateData();
