import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Like from "../like"; 

test("El componente muestra 'Likes: 0' por defecto", () => {
    const { getByText } = render(<Like />);
    const likesText = getByText("Likes: 0");
  
    expect(likesText).toBeInTheDocument();
  });

  test("Hacer clic en el botón Like incrementa el número de likes en uno", () => {
    const { getByText } = render(<Like />);
    const likesText = getByText("Likes: 0");
    const likeButton = getByText("Like");
    fireEvent.click(likeButton);
    expect(likesText).toHaveTextContent("Likes: 1");
  });

  test("Hacer clic en el botón Dislike decrementa el número de likes en uno", () => {
    const { getByText } = render(<Like />);
    const likesText = getByText("Likes: 0");
    const dislikeButton = getByText("Dislike");
    fireEvent.click(dislikeButton);
    expect(likesText).toHaveTextContent("Likes: -1");
  });
  
  
  