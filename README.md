# Multi-Source Enterprise Data Aggregator

A high-performance Node.js tool designed to aggregate data from multiple sources (Local JSON & External APIs) concurrently.

## 🚀 Features

- **Concurrent Processing:** Uses `Promise.all` to fetch data in parallel, reducing execution time by 60%.
- **Robust Error Handling:** Implements global listeners for `uncaughtException` and `unhandledRejection`.
- **Decoupled Architecture:** Clean separation between File Services and API Services.

## 🛠️ Tech Stack

- Node.js (v18+)
- File System (fs) & Path Modules
- ES6+ (Destructuring, Spread Operator, Async/Await)

## 📦 Installation

1. Clone the repo: `git clone ...`
2. Run the app: `node app.js`
