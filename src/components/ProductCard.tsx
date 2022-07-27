import React from "react";
import { createContext, CSSProperties} from "react";
//!Tenemos que importar los estilos como modulos
import styles from "../styles/styles.module.css";
import useProduct from '../hooks/useProduct';
import { Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import {ProductImage} from "./ProductImage";
import {ProductButtons} from "./ProductButtons";
import {ProductTitle} from "./ProductTitle";

interface ProductCardProps {
  product: Product,
  // children?: ReactElement | ReactElement[]
  // children?: JSX.Element | JSX.Element[],
  children: (args: ProductCardHandlers) => JSX.Element,
  className?: string,
  style?: CSSProperties,
  onChange?: (args: onChangeArgs) => any,
  value?: number
  initialValues?: InitialValues 
}

interface ProductContext {
  product: Product,
  counter: number,
  increaseBy: (value: number) => void,
  maxCount?: number,
  isMaxCountReached?: boolean
}

export const ProductCardContext = createContext<ProductContext>({} as ProductContext);


export function ProductCard({children, product, className, style, onChange, value, initialValues}: ProductCardProps){
  const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues});
  return (
    <ProductCardContext.Provider value={{product, counter, increaseBy, maxCount, isMaxCountReached}}>
      <div className={`${styles.productCard} ${className || ''}`} style={style || {}}>
        {/* El children es toda la función, no te olvides de eso */}
        {/* De esta manera podemos exponer tantas propiedades como funciones de nuestro componente */}
        {children({
          count: counter,
          increaseBy,
          product,
          reset,
          maxCount,
          isMaxCountReached
        })}
      </div> 
    </ProductCardContext.Provider>
  )
}

// function ProductCard({product, children}: ProductCardProps) {
//   const {title, img} = product;
//   const {counter, increaseBy} = useProduct();

//   return (
//     <div className={styles.productCard}>
//       {children}
//       {/* <ProductImage img={img} title={title}></ProductImage>
//       <ProductTitle title={title}></ProductTitle>
//       <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
//     </div>
//   )
// }

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

