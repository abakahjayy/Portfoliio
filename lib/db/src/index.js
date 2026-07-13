import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI must be set. Did you forget to provision a database?",
  );
}

let connectPromise = null;

/**
 * Connects to MongoDB using MONGODB_URI. Safe to call multiple times --
 * subsequent calls reuse the same in-flight/established connection.
 */
export function connectDB() {
  if (!connectPromise) {
    connectPromise = mongoose.connect(process.env.MONGODB_URI);
  }
  return connectPromise;
}

export { mongoose };
export * from "./schema/index.js";
