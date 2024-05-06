import { getUserId } from "@/app/lib/actions";
import React, { useState, useEffect } from "react";
import apiService from "@/app/services/apiService";

import ConversationDetail from "@/app/components/inbox/conversationDetail";
import { getAccessToken } from "@/app/lib/actions";
import { UserType } from "../page";

export type MessageType = {
    id: string;
    name: string;
    body: string;
    conversationId: string;
    sent_to: UserType;
    created_by: UserType;
}

const ConversationPage = async ({ params}: { params: { id:string } }) => {
    const userId = await getUserId();
    const token = await getAccessToken();

    if (!userId || !token) {
        return (
            <main className="max-w-[1500px] mx-auto px-6 pb-6 py-12">
                <p>You must be logged in to view your inbox.</p>
            </main>
        )
    }

    const conversation = await apiService.get(`/api/chat/${params.id}/`);

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail
                userId={userId}
                token={token}
                messages={conversation.messages}
                conversation={conversation.conversation}
            />
        </main>
    )
}

export default ConversationPage;