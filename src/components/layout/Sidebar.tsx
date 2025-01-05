import React from 'react';
import { LayoutDashboard, Truck, FileText, Users, BarChart, Settings, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Truck, label: 'Pojazdy', href: '/vehicles' },
  { icon: FileText, label: 'Zlecenia', href: '/orders' },
  { icon: Users, label: 'Kierowcy', href: '/drivers' },
  { icon: BarChart, label: 'Raporty', href: '/reports' },
  { icon: Settings, label: 'Ustawienia', href: '/settings' },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState('/dashboard');

  return (
    <div className="w-64 bg-white border-r h-full">
      <div className="flex flex-col h-full">
        <div className="flex-1 py-6 space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant={activeItem === item.href ? 'secondary' : 'ghost'}
              className={`w-full justify-start px-3 py-2 ${
                activeItem === item.href 
                  ? 'bg-gray-100' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => {
                setActiveItem(item.href);
                window.location.href = item.href;
              }}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Button>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Transport-Tech Sp. z o.o.</p>
              <p className="text-xs text-gray-500">Plan: Premium</p>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;