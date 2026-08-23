import { check, sleep } from "k6";
import { options } from "../k6.config.js";
import { baseURL } from "../config/config.js";
import { postRequest, deleteRequest, handleSummary } from "../support/helpers.js";
import { createUserBody } from "../data/userBody.js";
import { createProductBody } from "../data/productBody.js";
import { createCartBody } from "../data/cartBody.js";

export { options };

export default function () {
  let res;

  // Create a user
  const userBody = createUserBody();
  res = postRequest(`${baseURL}/usuarios`, JSON.stringify(userBody), {
    "Content-Type": "application/json",
  });
  check(res, { "POST /usuarios status was 201": (r) => r.status === 201 });
  sleep(1);

  // Login
  res = postRequest(
    `${baseURL}/login`,
    JSON.stringify({
      email: userBody.email,
      password: userBody.password,
    }),
    {
      "Content-Type": "application/json",
    }
  );
  check(res, { "POST /login status was 200": (r) => r.status === 200 });
  const authToken = res.json().authorization;
  sleep(1);

  // Create a product
  const productBody = createProductBody();
  res = postRequest(`${baseURL}/produtos`, JSON.stringify(productBody), {
    "Content-Type": "application/json",
    Authorization: authToken,
  });
  check(res, { "POST /produtos status was 201": (r) => r.status === 201 });
  const productId = res.json()._id;
  sleep(1);

  // Create a cart
  const cartBody = createCartBody(productId);
  res = postRequest(`${baseURL}/carrinhos`, JSON.stringify(cartBody), {
    "Content-Type": "application/json",
    Authorization: authToken,
  });
  check(res, { "POST /carrinhos status was 201": (r) => r.status === 201 });
  sleep(1);

  // Delete a cart
  res = deleteRequest(`${baseURL}/carrinhos/concluir-compra`, {
    Authorization: authToken,
  });
  check(res, {
    "DELETE /carrinhos/concluir-compra status was 200": (r) => r.status === 200,
  });
}

export { handleSummary };