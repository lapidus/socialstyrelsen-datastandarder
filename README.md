# Socialstyrelsen – harmoniserad data

I detta repo harmoniserar vi Socialstyrelsens data. Vi använder en gemensam och versionshanterad ontologi för att göra statistik jämförbar.

## Dataset

I mappen `dataset` landar färdiga DDF-paket. Detta är paket som är standardiserade och kan innehålla både datapunkter, entititer och koncept. 

## Datastandard / DDF

Alla dataset ska uppfylla DDF-formatet (i CSV-format). Därifrån kan data konverteras till andra format t.ex. SDMX, Px-filer etc.

Dokumentation om DDF finns här:

https://open-numbers.github.io/ddf.html

https://docs.google.com/document/d/1aynARjsrSgOKsO1dEqboTqANRD1O9u7J_xmxy8m5jW8/edit

## Validering

Validering av DDF-data kan göras med antingen Python eller NodeJS:
https://open-numbers.github.io/ddftools.html


## Filstruktur / organisation

- Mappen `dataset` innehåller färdiga, validerade DDF-paket
- Mappen `ontology` innehåller överenskomna entitier/kodlistor som används av Socialstyrelsen.
- Mappen `maker` innehåller reproducerbar kod som skapar färdiga DDF-paket.
