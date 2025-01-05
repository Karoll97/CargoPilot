import React, { useState } from 'react';
import { Search, Send, Phone, MoreVertical, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isOwn: boolean;
}

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  status: 'online' | 'offline' | 'busy';
  lastMessage?: string;
  unreadCount?: number;
}

const ChatInterface = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [message, setMessage] = useState('');
  
  // Przykładowe dane - w produkcji będą pobierane z API
  const contacts: Contact[] = [
    {
      id: '1',
      name: 'Jan Kowalski',
      status: 'online',
      lastMessage: 'Jestem w drodze do klienta',
      unreadCount: 2
    },
    {
      id: '2',
      name: 'Anna Nowak',
      status: 'offline',
      lastMessage: 'Rozładunek zakończony',
    }
  ];

  const messages: Message[] = [
    {
      id: '1',
      content: 'Dzień dobry, jestem już na miejscu rozładunku',
      sender: 'Jan Kowalski',
      timestamp: new Date(2024, 0, 5, 9, 30),
      isOwn: false
    },
    {
      id: '2',
      content: 'Super, proszę czekać na dokumenty',
      sender: 'Dispatcher',
      timestamp: new Date(2024, 0, 5, 9, 31),
      isOwn: true
    }
  ];

  const getStatusColor = (status: Contact['status']) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'busy':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-500';
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Tu będzie logika wysyłania wiadomości
    setMessage('');
  };

  return (
    <div className="h-full flex flex-col">
      {/* Lista kontaktów */}
      {!selectedContact && (
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Szukaj kontaktów..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className="w-full p-4 flex items-start space-x-3 hover:bg-gray-50"
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span 
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(contact.status)}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-medium truncate">{contact.name}</p>
                    {contact.unreadCount && (
                      <Badge className="bg-blue-100 text-blue-800">
                        {contact.unreadCount}
                      </Badge>
                    )}
                  </div>
                  {contact.lastMessage && (
                    <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Widok czatu */}
      {selectedContact && (
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedContact(null)}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Avatar>
                  <AvatarImage src={selectedContact.avatar} />
                  <AvatarFallback>
                    {selectedContact.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedContact.name}</p>
                  <p className="text-sm text-gray-500">
                    {selectedContact.status === 'online' ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg px-4 py-2 ${
                    msg.isOwn
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  <p>{msg.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.isOwn ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Napisz wiadomość..."
                className="flex-1 rounded-lg border border-gray-200 px-4 py-2"
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;