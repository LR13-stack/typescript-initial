export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}



// const shoppingCart = [phone, tablet];
// const tax = 0.15;


// const [ total, taxTotal ] = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// });

// console.log('Total', total );
// console.log('Tax', taxTotal );
