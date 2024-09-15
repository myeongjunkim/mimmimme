// notionClient.js

import { Client } from "@notionhq/client";
import dotenv from 'dotenv';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getNotionDatabase(databaseId) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch (error) {
    console.error("Error fetching Notion database:", error);
    throw error;
  }
}

export default notion;

