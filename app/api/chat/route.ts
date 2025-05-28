import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
    const { messages } = await req.json();

    //   const model = openrouter.chat('google/gemini-2.0-flash-exp:free');
    const model = openrouter.chat("deepseek/deepseek-chat-v3-0324:free");

    const response = streamText({
        model,
        messages,
    });

    return (await response).toDataStreamResponse();
}
