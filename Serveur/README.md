# Serveur | AuraLink

## 📌 Sommaire
1. [Installation](#💻-projet)
    * [Prérequis](#présentation)
2. [Configuration]()
    * [Configuration des Ports]()
3. [Utilisation]()
    * [Lancement de l'API]()
    * [Compréhension des Fonctions]()

## 🎯 Badges
[![Python](https://img.shields.io/badge/Langage-Python3.12-blue.svg)](https://www.syscom-prorep.com/application-technologie/ble)
[![Pandas - Python](https://img.shields.io/badge/Donnée-Pandas-red.svg)](https://visualstudio.microsoft.com/fr/xamarin/)
[![Flask - Python](https://img.shields.io/badge/API-Flask-red.svg)](https://learn.microsoft.com/fr-fr/dotnet/csharp/)


## 💻 Installation

### Prérequis

* Installation de Python 3.12

    [Liens de téléchargement]()

* Installation du module Flask *(nécessaire pour le fonctionnement de l'API)*

    ```pip install flask ```

* Installation du module Pandas *(nécessaire pour le traitement des données)*
    
    ```pip install pandas```

## Configuration

### Configuration des ports

* Dans le fichier [serveur.conf]() remplacez le port actuel ( à l'origine ```5000``` ) par le port sur lequel vous souhaitez que votre API reçoive les requêtes.
* Configurez votre parfeu de manière à ce qu'il accepte les entrées et sorties sur ce port.

## Utilisation

### Lancement de l'API

Pour lancer l'API afin que l'application puisse s'y connecter, il vous suffit de vous rendre dans le répertoire de fichier ```API.py``` et d'éxécuter la commande :

```bash
py API.py
```

### Compréhension des fonctions

Pour fonctionner, l'API appelle plusieurs méthodes de la class [DataTreatment](./data.py) chaqu'une de ces méthodes sont expliqués et démontrer (avec l'ordre d'éxécution) dans le fichier [dataTreatment.ipynb](./dataTreatment.ipynb).