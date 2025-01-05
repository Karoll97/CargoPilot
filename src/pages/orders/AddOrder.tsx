import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AddOrder = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2"
          onClick={() => window.location.href = '/orders'}
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć do listy
        </Button>
        <h1 className="text-2xl font-bold">Nowe zlecenie</h1>
      </div>
      {/* Formularz dodawania zlecenia będzie tutaj */}
    </div>
  );
};

export default AddOrder;