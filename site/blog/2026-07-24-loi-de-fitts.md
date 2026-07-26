---
title: "La loi de Fitts en 2 minutes"
resume: "Pourquoi vos boutons font 44 px — la loi UX la plus citée, expliquée sans équation."
lecture: 2
---
La loi de Fitts (1954) tient en une phrase : **plus une cible est proche et grande,
plus elle est rapide à atteindre.** C'est tout. Mais tout en découle.

## Ce que ça implique, concrètement

- **Les cibles tactiles font 44 px minimum.** Un doigt n'est pas un curseur — sous
  cette taille, les erreurs de tap explosent. C'est le token `--tap-target` de Chantilly.
- **Les actions fréquentes sont grandes et proches.** Le bouton principal d'un
  formulaire se place là où le regard (et le pouce) arrive naturellement : après le
  dernier champ, pas à l'autre bout de l'écran.
- **Les bords et les coins de l'écran sont précieux.** Une cible collée au bord est
  « infiniment profonde » : on ne peut pas la dépasser. C'est pourquoi les barres de
  menus en haut d'écran sont si rapides.
- **Étendez les zones cliquables.** Le label d'une checkbox doit être cliquable, pas
  seulement la case de 20 px — Chantilly le fait par défaut.

## L'erreur classique

Les liens « en savoir plus » minuscules, les icônes de 16 px sans padding, les croix
de fermeture d'1 centimètre carré dans un coin. Jolis en maquette. Punitifs au pouce.

## À retenir

Si une action est importante, rendez-la **grosse, proche, et au bord** quand c'est
possible. Fitts a mesuré le reste pour vous — il y a 70 ans.
