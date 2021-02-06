process.on("beforeExit", () =>
    console.log("before exit"));

process.on("exit", () =>
    console.log("exit"));

console.log("running");
