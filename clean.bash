#! /bin/bash

echo "Suppression des fichiers js..."
TAB=(". login Upload Mock dashboard")
for i in $TAB
do
	if [[ $(ls MVC/$i) =~ .*js*. ]]; then
		rm MVC/$i/*.js
		echo "Dossier $i nettoyé"
	fi
done