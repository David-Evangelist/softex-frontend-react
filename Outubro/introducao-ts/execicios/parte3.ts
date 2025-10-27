const showProduct = (product: Product) => {
  return `Nome: ${product.name};\nPreço: ${product.price}; \nEm Estoque: ${product.emEstoque}`;
};

interface Product {
  name: string;
  price: number;
  emEstoque: boolean;
}

let myProduct: Product = {
  name: "Feijão",
  price: 12,
  emEstoque: true,
};

console.log(showProduct(myProduct))