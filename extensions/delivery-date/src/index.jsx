import React, { useState } from 'react';
import {
  render,
  DatePicker,
  useAppMetafields,
  useMetafield,
  useApplyMetafieldsChange
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const deliveryDate = useMetafield({
    namespace: "detail",
    key: "date"
  })
  
  const setDeliveryDate = useApplyMetafieldsChange();

  return (
    <DatePicker
      selected={deliveryDate?.value}
      onChange={ (value) => {
        setDeliveryDate({
          type: "updateMetafield",
          namespace: "detail",
          key: "date",
          valueType: "string",
          value,
        })
      } }
    />
  );
}