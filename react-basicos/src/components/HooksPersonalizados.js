import React from "react";
import { useFetch } from "../hooks/useFetch.js";

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/",
   urlJsonplaceholder = "https://jsonplaceholder.typicode.com/users";
  let { data, isPending, error } = useFetch(urlJsonplaceholder);
  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <pre style={{ whiteSpace: "pre-wrap", fontSize: "1rem" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
      <h3>
        <mark> {JSON.stringify(error)}</mark>
      </h3>
    </>
  );
}
