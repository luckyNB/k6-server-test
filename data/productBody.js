export const createProductBody = () => {
  const productName = `Product ${Math.floor(Math.random() * 1000000)}`;
  return {
    nome: productName,
    preco: 50,
    descricao: "Product description",
    quantidade: 50,
  };
};
