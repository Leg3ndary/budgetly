"use client";

import { useChat } from "@ai-sdk/react";

export default function ChatPage() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/chat",
    });

    return (
        <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`p-4 rounded-lg ${
                            message.role === "user"
                                ? "bg-blue-100 ml-auto"
                                : "bg-gray-100"
                        } max-w-[80%]`}
                    >
                        {message.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
