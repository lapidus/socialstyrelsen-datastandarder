# Socialstyrelsen – harmoniserad data

I detta repo harmoniserar vi Socialstyrelsens data. Vi använder en gemensam och versionshanterad ontologi för att göra statistik jämförbar.

## Dataset

I mappen `dataset` landar färdiga DDF-paket. Detta är paket som är standardiserade och kan innehålla både datapunkter, entititer och koncept. 

## Datastandard / DDF

Alla dataset ska uppfylla DDF-formatet (i CSV-format). Därifrån kan data konverteras till andra format t.ex. SDMX, Px-filer etc.

## Filstruktur / organisation

- Mappen `dataset` innehåller färdiga, validerade DDF-paket
- Mappen `ontology` innehåller överenskomna entitier/kodlistor som används av Socialstyrelsen.
- Mappen `maker` innehåller reproducerbar kod som skapar färdiga DDF-paket.
