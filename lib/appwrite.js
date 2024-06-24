import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.songtheng.aora",
  projectId: "6679abe80012db186a43",
  databaseId: "6679aecb001169357c0e",
  userCollectionId: "6679af830027816a979c",
  videoCollectionId: "6679afea0014a1c5feb7",
  StorageId: "6679b349000fb71644e0",
};

// Init React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform); // application ID or bundle ID.
