export const createUserBody = () => {
  const email = `${Date.now()}@qa.com`;
  return {
    nome: "Samuel Andrade",
    email: email,
    password: "testing",
    administrador: "true",
  };
};