// Affichage du catalogue
const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Ecran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];
const produits_lignes = produits.map(p => `Nom: ${p.nom} - Prix: ${p.prix} MAD`);
for (const produit of produits_lignes) {
  console.log(produit);
}

// Validité
function estValide(produit) {
  return Number.isFinite(produit.prix) && produit.prix >= 0 &&
    Number.isFinite(produit.stock) && produit.stock >= 0;
}
for (const produit of produits) {
  if (!estValide(produit)) {
    console.log(`Produit avec ID: ${produit.id} contient des données erronées!`)
  }
}

// Disponibilité
const produits_dispo = produits.filter(p =>
  estValide(p) && p.stock > 0
);
console.log('\nProduits en stock: ', produits_dispo.length);

// Valeur du stock
const total = produits_dispo.reduce((somme, produit) => {
  return somme + produit.prix * produit.stock
}, 0);
console.log('Valeur du stock: ', total, 'MAD\n');

// Prix minimal
function prixMin(tableau) {

  if (tableau.length === 0) return 'Aucun produit est disponible!'
  else {
    let { nom, prix } = tableau[0];
    for (const produit of tableau)
      if (produit.prix < prix) {
        ({ nom, prix } = produit);
      }
    return `Produit disponible le moins cher: ${nom} - Prix: ${prix} MAD`;
  }
}
console.log(prixMin(produits_dispo));

// Résumé
if (produits_dispo.length > 0) console.log('\nNom   -   prix   -   stock');
const produits_afficher = produits_dispo.map(p =>
  `${p.nom} - ${p.prix} MAD - ${p.stock} unités`
);
for (const produit of produits_afficher) {
  console.log(produit);
}
