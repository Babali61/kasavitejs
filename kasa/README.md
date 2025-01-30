# Kasa - Application de Location Immobilière

## À propos du projet

Ce projet est une refonte technique de l'application Kasa, initialement développée avec Create React App (CRA) sur le dépot suivant : https://github.com/Babali61/kasa . Les principales améliorations incluent :

1. Migration de Create React App vers Vite.js pour bénéficier de :
   - Des temps de build optimisés
   - Une configuration plus moderne et plus légère
   - De meilleures performances en développement

2. Migration des fichiers `.js` vers `.jsx` pour :
   - Une meilleure cohérence avec les bonnes pratiques React
   - Une meilleure lisibilité du code
   - Une meilleure génération du DOM par l'interpréteur des balises html

Les fonctionnalités et le design restent identiques à la version CRA, seule l'infrastructure technique a été modernisée.

## Prérequis

- Node.js (version recommandée : 18.x ou supérieure)
- npm (généralement installé avec Node.js)

## Installation

1. Clonez le projet sur votre machine :
```bash
git clone [URL_DU_REPO]
cd kasa
```

2. Installez les dépendances :
```bash
npm install
```

## Démarrage du projet

Pour lancer l'application en mode développement :
```bash
npm run dev
```
L'application sera accessible à l'adresse : `http://localhost:5173`

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run preview` : Permet de prévisualiser la version de production
- `npm run lint` : Exécute le linter pour vérifier le code

## Technologies utilisées

- React 18
- Vite
- React Router DOM
- SASS
- FontAwesome

## Structure du projet

Le projet suit une architecture modulaire avec :
- `/src/components` : Composants réutilisables
- `/src/pages` : Pages de l'application
- `/src/styles` : Fichiers de style SCSS
