import React from 'react'
import { Input } from '@nextui-org/react';

const OrderFormFields = () => {
  return (
    <div className="space-y-4">
    <Input
        label="Your Name (Optional)"
        name="name"
        placeholder="How should we address you?"
      />
      
      <Input
        label="Quantity (Optional)"
        name="quantity"
        type="number"
        min={1}
        placeholder="How many would you like?"
      />

      <Input
        label="City"
        name="city"
        isRequired
        placeholder="Enter your city"
      />

      <Input
        label="State/Province"
        name="stateProvince"
        isRequired
        placeholder="Enter your state or province"
      />

      <Input
        label="Country"
        name="country"
        isRequired
        placeholder="Enter your country"
      />
    </div>
  );
};

export default OrderFormFields