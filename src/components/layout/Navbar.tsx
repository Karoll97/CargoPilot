import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className="h-16 border-b bg-white">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-blue-600">CargoPilot</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5 text-gray-500" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <p className="text-sm font-medium">Jan Kowalski</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;