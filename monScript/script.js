function ajouterAuPanier(nomProduit) {
    const message = document.getElementById("message-panier");

    if (message) {
        message.textContent = nomProduit + " a été ajouté au panier !";
    }
}