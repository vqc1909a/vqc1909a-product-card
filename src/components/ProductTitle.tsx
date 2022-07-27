import React from "react";
import { CSSProperties, useContext } from "react";
import { ProductCardContext } from './ProductCard';
import styles from "../styles/styles.module.css";

interface ProductTitleProps {
  title?: string,
  className?: string,
  style?: CSSProperties
}
export function ProductTitle({title = "", className, style}: ProductTitleProps){
  const {product} = useContext(ProductCardContext);

  return (
    <span className={`${styles.productDescription} ${className || ''}`} style={style || {}}>{title || product.title}</span>
  )
}

