# Epreuve FDJ

Backend:
Stack :  NestJS avec Mongodb
Frontend: 
stack : Agular
Pour lancer le projet : 

1 - installer mongodb et mongodb tools
2 - Dans /data, vous trouverez les fichiers bson que vous pourriez importer avec ` $ mongorestore --drop -d sports -c players ./players.bson`
3 - lancez votre serveur
4 - installer les dépendances avec `npm i`
5 - lancer le projet avec `nest run-start` (vérifiez bien que le port 3000 est bien libre)

-- front
6 - installer les dépendances du dosser sport-app
7 - lancer le client avec `ng serve`

Notes concernant cette épreuve: 

Les tests unitaires ont été faite sur la partie backend.
Un limite pour les entrées récupérés depuis la bdd a été faite

Points d'améliorations : 

- Possibilité de configurer : `CacheInterceptor` pour ajouter la possibilité de cacher des éléments
- Possibilité d'installer Elastic pour améliorer le temps d'éxécution avec des indexs
- possibilité d'utiliser un store/query pour le front.
- Possibilité d'utiliser les intercepteurs pour les erreurs serveur au front.


Merci de lire les commentaires qui existent dans le code.
