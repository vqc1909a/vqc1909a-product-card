import React from "react";
import renderer from "react-test-renderer";
import { ProductImage } from '../../src/components/ProductImage';
import { ProductCard } from '../../src/components/ProductCard';

import { product2 } from '../data/products';


describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"></ProductImage>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    test('debe de mostrar iamgen del componente con la imagen del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage></ProductImage>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})