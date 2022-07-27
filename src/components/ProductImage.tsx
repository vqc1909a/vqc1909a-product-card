import React from "react";
import { CSSProperties, useContext } from "react";
import { ProductCardContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from "../styles/styles.module.css";


interface ProductImageProps {
  img?: string,
  className?: string,
  style?: CSSProperties
}

export function ProductImage({img = "", className, style}: ProductImageProps ){
  let {product} = useContext(ProductCardContext);
  let {img: imgProduct, title} = product;
  let imgToShow = img || imgProduct;
  return (
    <img className={`${styles.productImg} ${className || ''}`} src={imgToShow ? imgToShow : noImage} alt={title} style={style || {}}/>
  )
}

