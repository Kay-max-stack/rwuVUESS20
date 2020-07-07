

URL zu Ihrer Anwendung in der Cloud


Auflistung der verwendeten fremden Codebestandteile (nur falls vorhanden, siehe unten)
Es wurden Templates aus Bootstrap 4 verwendet. Die Templates dienten nur als Grundlage und wurden für unsere Zwecke angepasst.
Zu finden:
In der About.vue View: 	https://getbootstrap.com/docs/4.0/components/popovers/
in der Home.vue View:	https://getbootstrap.com/docs/4.0/components/jumbotron/
etc.

Kurze Beschreibung und Begründung der Architektur Ihres Codes

Die Seite ist eine Single Page Application. Die Views bilden die Parent Component. 
Die einzelnen Components sind die Child-Components, die verwendet werden um die Daten in der View richtig darzustellen.
Dabei haben wir darauf geachtet, dass jede Component auch modular aufgebaut ist und wiederverwendbar ist.


Beschreibung der notwendigen Schritte, um die Anwendung lokal zu starten


# Webprojekt Abgabe
Project setup
```
npm install bootstrap
npm i

ins Verzeichnis wechseln und dann 
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
