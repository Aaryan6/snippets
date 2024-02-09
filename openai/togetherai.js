// This code is used to generate a chat completion based on together ai model.
import OpenAI from "openai";
import "dotenv/config";

const perplexity = new OpenAI({
  apiKey: process.env.TOGETHER_AI_API_KEY || "",
  baseURL: "https://api.together.xyz",
});

async function main() {
  // Generated a chat completion based on the prompt
  const response = await perplexity.chat.completions.create({
    model: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
    stream: false,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: "Write a poem on vercel.",
      },
    ],
  });

  console.log(response.choices[0].message);
}

main();
