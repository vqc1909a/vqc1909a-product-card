import { useEffect, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';


interface UseProductArgs{
  onChange?: (args: onChangeArgs) => void,
  product: Product,
  value?: number,
  initialValues?: InitialValues
}

const useProduct = ({onChange, product, value, initialValues}: UseProductArgs) => {

  //!El useState solamente se instancia una vez aunque su componente se vuelva  a renderizar muchas veces, es por eso que mantiene su primer valor de instancia luego va cambiando con el setCounter
  const [counter, setCounter] = useState<number>(initialValues?.count || 0);

  const increaseBy = (value: number): void => {
    let valueMax = Math.max(counter + value, 0);
    let newValue = initialValues?.maxCount ? Math.min(valueMax, initialValues.maxCount) : valueMax; 
    setCounter(newValue);
    onChange && onChange({product, count: newValue});
  }


  const reset = () => {
      setCounter(initialValues?.count || 0)
  }



  useEffect(() => {
    if(value === undefined) return;
    setCounter(value);
  }, [value])

  return {counter, increaseBy, maxCount: initialValues?.maxCount, isMaxCountReached: !!(counter === initialValues?.maxCount), reset};
}

export default useProduct