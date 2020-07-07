
# Webprogrammierung Abschlussprojekt 

URL zu Ihrer Anwendung in der Cloud
https://friendly-hermann-208bfc.netlify.app

Auflistung der verwendeten fremden Codebestandteile (nur falls vorhanden, siehe unten)
Es wurden CSS Klassen aus Bootstrap verwendet.
Es wurden Templates aus Bootstrap 4 verwendet. Die Templates dienten nur als Grundlage und wurden für unsere Zwecke angepasst.
Zu finden:
in der Home.vue View:	https://getbootstrap.com/docs/4.0/components/jumbotron/
etc.

Kurze Beschreibung und Begründung der Architektur Ihres Codes

Die Seite ist eine Single Page Application. Die App.vue ist die Parent Component. 
Die einzelnen Views Home, Jokes, About und Beer werden in der App.vue anstelle der Router View gerendert.
Als Architektur für unseren Code würden wir den Begriff "nested Components" verwenden, da BeerCardComp, CardComp, DropDownComp 
und TitleComp als wiederverwendbare Components konzipiert wurden die in den einzelnen Views verwendet werden.
So wird TitleComp.vue in jeder view verwendet um den Titel anzuzeigen. 
In Home.vue wird damit auch noch der Text angezeigt der aufklappt wenn man auf die Punkte der Übersicht klickt.

Es gibt 4 Views: eine Home eine About View und eine View für jede API die wir eingebunden haben. 
Eingebundene APIs sind https://github.com/15Dkatz/official_joke_apifür die Jokes View
und https://punkapi.com/documentation/v2 für die Bier View.

Durch die mounted() Methode wird initial der response der API dargestellt und durch den reload Button in der Jokes View 
wird eine neue API Abfrage generiert, dessen Ergebnis in der CardComp.vue dargestellt wird.
Die selbe Herangehensweise verwenden wir auch bei der Beer View, wobei der initiale response der API über die Biersorten 
als Listenelemente dargestellt werden. Beim Auswählen durch klicken wird der Name eingelesen und der API Anfrage mitgegeben 
sodass das Ergebnis in einer BeerCardComp angezeigt wird.


Beschreibung der notwendigen Schritte, um die Anwendung lokal zu starten

# Schritte zum installieren:

.zip herunterladen und entpacken

ins verzeichnis wechseln
npm install bootstrap
npm install axios
npm i
npm run serve 


### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
