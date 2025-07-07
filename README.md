Bien vu ! Voici la version corrigée du `README.md`, entièrement en markdown :

---

````markdown
# 🧪 Exercice : Tester une fonction avec Vitest

Dans ce projet React, une fonction nommée `formatUserName` a été créée pour formater un prénom et un nom d'utilisateur.

## 🎯 Objectif

Votre mission est d’écrire des tests unitaires pour cette fonction, en utilisant **Vitest**, un framework de test rapide et léger.

---

## 🚀 Étapes à suivre

### 1. Installer Vitest

Dans votre terminal, entrez la commande suivante pour installer les dépendances nécessaires :

```bash
npm install -D vitest
```

---

### 2. Vérifier la fonction

La fonction se trouve dans :

```
src/utils/formatUserName.js
```

Lisez-la bien pour comprendre son comportement avant de commencer à écrire vos tests.

---

### 3. Créer le fichier de test

Dans le dossier `src/utils`, créez un fichier nommé :

```
formatUserName.test.jsx
```

Dans ce fichier, vous allez utiliser `describe`, `it`, `expect` depuis `vitest`.

> 💡 Si vous ne savez pas comment écrire un test, inspirez-vous de cet exemple :
>
> ```js
> import { describe, it, expect } from "vitest";
> import { formatUserName } from "./formatUserName";
>
> describe("formatUserName", () => {
>   it("formate correctement un nom et prénom", () => {
>     const result = formatUserName("alice", "dupont");
>     expect(result).toBe("Dupont, Alice");
>   });
> });
> ```

---

### 4. Lancer les tests

Pour exécuter les tests :

```bash
npx vitest run
```

Ou pour une exécution interactive :

```bash
npx vitest
```

---

## 📁 Structure du projet

```
src/
 ├── App.jsx              → formulaire avec nom et prénom
 └── utils/
     ├── formatUserName.js        → fonction à tester
     └── formatUserName.test.jsx  → vos tests ici
```

---

## ✅ Livrable attendu

* Un fichier `formatUserName.test.jsx` avec au moins **3 tests pertinents**.
* Des tests clairs, précis et pertinents selon les cas d’usage.