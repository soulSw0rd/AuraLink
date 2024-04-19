# AuraLink

## 📌 Sommaire
1. [Projet](#💻-projet)
    * [Présentation](#présentation)
    * [Serveur](#serveur)
    * [Client](#client)

## 🎯 Badges
[![Python](https://img.shields.io/badge/Langage-Python3.12-blue.svg)](https://www.syscom-prorep.com/application-technologie/ble)
[![Pandas - Python](https://img.shields.io/badge/Donnée-Pandas-red.svg)](https://visualstudio.microsoft.com/fr/xamarin/)
[![Flask - Python](https://img.shields.io/badge/API-Flask-red.svg)](https://learn.microsoft.com/fr-fr/dotnet/csharp/)
[![React Native](https://img.shields.io/badge/Framework-ReactNative-blue.svg)](https://docs.micropython.org/en/latest/)
[![OS Android](https://img.shields.io/badge/OS-Android-yellow.svg)](https://www.android.com/intl/fr_fr/)

## 💻 Projet

### Présentation

AuraLink est une application Android permettant à l'utilisateur de deviner la probabilité aue celui-ci à de match avec un profil généré aléatoirement qui lui sera présenté.
C'est profil et probabilité sont basées sur un dataset extrait des résultats d'un speed dating. 

[Liens de téléchargement](https://data.world/annavmontoya/speed-dating-experiment)

[Liens sur le repos](./Serveur/Speed_Dating_Data.csv)

### Serveur

Le serveur est une API réalisée en Python à l'aide du module Flask.
Il permettra à l'utilisateur de ce connecter et de recevoir les données formater à l'aide du module Pandas et à adapter à l'utilisation de l'application et ce sans avoir à toucher aux dataset d'origine.

[Installation et utilisation](./Serveur/README.md)

### Client

Le client est une application mobile Android réalisée avec React Native qui communique qvec l'API du serveur afin de recevoir différents profils généré aléatoirement et permettre la personalisation du profil utilisateur ainsi que la boucle de jeu.

[Installation et utilisation]()