import React from "react";
import renderer from "react-test-renderer";
import { ProductTitle } from '../../src/components/ProductTitle';

describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product"></ProductTitle>
        )
        console.log(wrapper.toJSON());

    })
})