const getRemoteDetails = (id) => {
  return new Promise((resolve) => {
    resolve({ id, lastlogin: new Date().toISOString(), status: "Active" });
  }, 1500);
};

module.exports = { getRemoteDetails };
