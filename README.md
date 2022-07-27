# vqc1909a-product-card

Este es un paquete de despliegue en npm


## Ejemplo

```javascript
  import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'vqc1909a-product-card';
```

```javascript
  <ProductCard key={product.id} product={product} initialValues={{count: 5}}>
    {({reset, count, increaseBy, maxCount, isMaxCountReached}) => (
      <>
        <ProductImage></ProductImage>
        <ProductTitle></ProductTitle>
        <ProductButtons></ProductButtons>
      </>
    )}

  </ProductCard>
```