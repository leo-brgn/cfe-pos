# CFE POS — fondation frontend

Première version consultable de l’espace de travail CFE Énergies. Ce jalon pose le design system, le tableau de bord et la navigation vers les futurs modules métier.

Les contenus et chiffres affichés sont fictifs. Le Copilote IA est une simulation locale et aucun service métier n’est connecté.

## Prérequis

- Node.js 22 ou une version ultérieure
- npm

## Installation

```bash
git clone https://github.com/leo-brgn/cfe-pos.git
cd cfe-pos
npm install
```

## Développement local

```bash
npm run dev
```

Vite affiche l’adresse locale à ouvrir dans le navigateur.

## Build de production

```bash
npm run build
```

Le site compilé est généré dans `dist/`. Pour le vérifier localement :

```bash
npm run preview
```

## Tests

La suite Playwright vérifie les interactions principales, le responsive et l’accessibilité automatisée :

```bash
npx playwright install chromium
npm test
```

## GitHub Pages

La configuration Vite utilise `base: '/cfe-pos/'`. Le workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) construit, teste et publie automatiquement la branche `main`. Il peut aussi être lancé manuellement depuis l’onglet **Actions**.

Lors de la première publication :

1. Ouvrir **Settings → Pages** dans le dépôt GitHub.
2. Choisir **GitHub Actions** comme source de déploiement.
3. Fusionner la Pull Request dans `main`, ou lancer le workflow manuellement.
4. Consulter <https://leo-brgn.github.io/cfe-pos/>.

Les poussées sur `feat/frontend-foundation` déploient également un aperçu à la même adresse pendant la phase de revue. Une fois la Pull Request fusionnée, `main` devient la source de référence.

## Structure

```text
src/
├── components/   composants réutilisables
├── pages/        écrans et modules
└── styles/       design tokens et styles responsive
tests/            tests fonctionnels et accessibilité
```

## Modules préparés

- CFE Comm
- CFE Formation
- CFE Adhésion
- CFE Services / Juridique
- CFE Élus & Mandats
- CFE Copilote IA

