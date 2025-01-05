import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ChatInterface from '@/components/chat/ChatInterface';

const ChatPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Czat</h1>
        <div className="bg-white rounded-lg shadow-sm">
          <ChatInterface />
        </div>
      </div>
    </MainLayout>
  );
};

export default ChatPage;