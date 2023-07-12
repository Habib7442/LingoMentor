import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a69dbd67db0755a992");

export const account = new Account(client);

export const databases = new Databases(client, "64a69f759e473328b166");
