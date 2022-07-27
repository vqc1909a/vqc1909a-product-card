import React from "react";
import { CSSProperties, useContext} from "react";
import { ProductCardContext } from './ProductCard';
import styles from "../styles/styles.module.css";

interface ProductButtonsProps {
  className?: string,
  style?: CSSProperties
}

export function ProductButtons({className, style}: ProductButtonsProps){
  const {counter, increaseBy, isMaxCountReached} = useContext(ProductCardContext);


  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style || {}}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxCountReached ? styles.disabled: ''}`} onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}
