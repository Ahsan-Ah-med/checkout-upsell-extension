import React, { useState } from 'react';
import {
  render,
  DatePicker,
  useAppMetafields,
  useMetafield,
  useApplyMetafieldsChange,
  Banner,
  Image,
  useSettings,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const deliveryDate = useMetafield({
    namespace: "detail",
    key: "date"
  })
  
  const setDeliveryDate = useApplyMetafieldsChange();
  const {banner_image} = useSettings();
  return (
    <>
    <Image source={banner_image}/>
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
    </>
  );
}