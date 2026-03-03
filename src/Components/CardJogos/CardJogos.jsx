import React from "react";
import "./CardJogos.css";

function CardJogo({
  id,
  capa,
  titulo,
  genero,
  preco,          // preço atual (promocional quando onSale=true)
  precoOriginal,  // preço antigo (só usado quando onSale=true)
  onSale = false,
}) {
  // Tratamento do preço "Grátis"
  let precoFinal;
  if (preco === 0 || preco === "0" || preco === "Grátis") {
    precoFinal = "Grátis";
  } else {
    precoFinal = `R$ ${Number(preco).toFixed(2)}`;
  }

  // Cálculo do desconto
  let percentualDesconto = null;
  if (onSale && precoOriginal && Number(precoOriginal) > Number(preco)) {
    percentualDesconto = Math.round(
      ((Number(precoOriginal) - Number(preco)) / Number(precoOriginal)) * 100
    );
  }

  return (
    <div className="card" id={id}>
      <img src={capa} alt={titulo} className="card-imagem" />

      <h2 className="card-titulo">{titulo}</h2>

      <p className="card-genero">
        <strong>Gênero:</strong> {genero}
      </p>

      <div className="preco-container">
        {onSale && precoOriginal && percentualDesconto !== null ? (
          <>
            {/* Preço antigo – riscado vermelho */}
            <span className="preco-antigo">
              R$ {Number(precoOriginal).toFixed(2)}
            </span>

            {/* Preço novo – verde e maior */}
            <span className="preco-novo">
              {precoFinal}
            </span>

            {/* Badge de desconto */}
            <span className="desconto-badge">-{percentualDesconto}%</span>
          </>
        ) : (
          /* Sem promoção - valor normal */
          <span className={`preco ${onSale ? "promo" : ""}`}>
            {onSale && <span className="badge-promo">PROMOÇÃO</span>}
            {precoFinal}
          </span>
        )}
      </div>

      {/* Botão Curtir (se quiser adicionar depois) */}
      {/* <button className="btn-curtir">Curtir</button> */}
    </div>
  );
}

export default CardJogo;