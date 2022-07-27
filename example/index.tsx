import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../."
const App = () => {
  const product = {
    id: "1",
    title: "Coffee Mug 1",
    img: "/coffee-mug.png"
  }
  return (
    <ProductCard product={product} initialValues={{count: 5}}>
      {({reset, count, increaseBy, maxCount, isMaxCountReached}) => (
        <>
          <ProductImage></ProductImage>
          <ProductTitle></ProductTitle>
          <ProductButtons></ProductButtons>
        </>
      )}

    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
