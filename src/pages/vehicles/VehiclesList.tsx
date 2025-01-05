import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const VehiclesList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pojazdy</h1>
        <Button onClick={() => window.location.href = '/vehicles/add'}>
          <Plus className="h-5 w-5 mr-2" />
          Dodaj pojazd
        </Button>
      </div>
      {/* Lista pojazdów będzie tutaj */}
    </div>
  );
};

export default VehiclesList;