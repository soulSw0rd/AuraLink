# Client | AuraLink

## 📌 Sommaire
1. [Installation](#💻-installation)
    * [Prérequis](#prérequis)
2. [Configuration](#configuration)
    * [Configuration du serveur cible](#configuration-du-serveur-cible)
    * [Configuration d'un appareil physique pour émulation](#configuration-dun-appareil-physique-pour-émulation)
3. [Utilisation](#utilisation)
    * [Lancement de l'application](#lancement-de-lapplication)

## 🎯 Badges
[![React Native](https://img.shields.io/badge/Framework-ReactNative-blue.svg)](https://reactnative.dev/docs/environment-setup)
[![OS Android](https://img.shields.io/badge/OS-Android-yellow.svg)](https://www.android.com/intl/fr_fr/)


## 💻 Installation

### Prérequis

* Installation et configuration de React Native

    [Liens de la documentation](https://reactnative.dev/docs/environment-setup)


## Configuration

### Configuration du serveur cible

* Dans le fichier [index.tsx du dossier conf](./AuraLink/config/index.tsx) renseignez l'addresse ip ainsi que le port d'écoute de votre serveur.

### Configuration d'un appareil physique pour émulation

Si vous souhaitez utiliser l'application directement sur votre appareil physique vous devrez :

* Activer le mode développeur de votre appareil
* Activer le débogage USB

## Utilisation

### Lancement de l'application

Après lancer le serveur, aller à la [racine du projet client](./AuraLink/) et entrez la commande :

```bash
npm start
```
Puis appuyer sur ```a``` pour lancer l'application sur un émulateur Android ou sur un appareil android branché via USB.