# Gegevensdefinitie en modelelementen

## Gegevensdefinitie

De gegevensdefinitie vormt het hart van de catalogus en geeft een beschrijving van alle gegevens van een informatiemodel.  
Eerst wordt de definitie van een domein gegeven inclusief de plaatjes van het zgn. *domeinmodel*, en vervolgens de definities van de *entiteiten* waaruit het domein is opgebouwd met de eigenschappen van die entiteiten - de *attributen* - en de relaties met andere entiteiten.  
De volgende aspecten van de gegevens worden vastgelegd:

- De Nederlandse naam van het gegeven.
- Of het gegeven van het type entiteit of het type attribuut is, met in het laatste geval van welke entiteit het een attribuut is.
- Eventueel de herkomst van het gegeven.
- De definitie van het gegeven.
- Eventueel de herkomst van de definitie.
- De kardinaliteit van een attribuut. De kardinaliteit geeft aan hoe vaak het attribuut voor kan of moet komen.
- De naam van het domein voor de waarden van het attribuut, met afhankelijk van het type domein nadere informatie over de waarden.

## Modelelementen

De modelelementen van een informatiemodel zijn de bouwstenen die samen de structuur en de functionaliteit van het model definiëren. Elk element speelt een specifieke rol in het beschrijven van hoe data wordt georganiseerd en beheerd binnen een systeem. Het model kent een aantal vaste elementen die bij ieder informatiemodel terugkomen. Een begrip van deze elementen vergroot de leesbaarheid van het informatiemodel en de catalogus.  

### Objecten

- **Object**  
  Voor het belangrijkste element zijn er vanuit verschillende perspectieven verschillende benamingen: object, informatieobject, objecttype (MIM), entiteit of klasse (UML). De concepten zijn in nuance verschillend, maar al deze concepten vertegenwoordigen een onderscheidend geheel van eigenschappen die gezamenlijk betekenis hebben. Een entiteit heeft altijd een naam en een definitie. In het model zijn de objecten te herkennen aan het begrip *Objecttype*.

- **Attribuut**  
  Met attributen worden de eigenschappen of kenmerken van een object vastgelegd. In het domeinmodel zijn de attributen te herkennen aan het begrip *Attribuutsoort*.

- **Gegevensgroepen**  
  Soms zijn een aantal attributen gegroepeerd in een groep, aangeduid als gegevensgroep. De attributen horen semantisch bij elkaar en worden als eenheid behandeld. Het blijven attributen van de entiteit, maar de inhoudelijke definiëring van de gegevensgroep staat elders. Gegevensgroepen kunnen bij meerdere entiteiten terugkomen.  
  Als voorbeeld: het is een modelleerkeuze om de *afmetingen* van een fysiek object als gegevensgroep te modelleren. *Afmeting* bevat de attributen lengte, breedte en hoogte.

### Relaties

Het model laat daarnaast ook zien hoe objecten aan elkaar gerelateerd zijn. Een relatie heeft altijd een richting en in de meeste gevallen loopt deze van bron naar doel. De meest voorkomende relatie in IMWA is de *generalisatie*. Daarnaast komt een enkele keer de *associatierelatie* voor.

![Relaties](./algemeen/Generalisatie en Associatie.jpg)  
*Voorbeeld van generalisatie- en associatierelatie.*

- **Generalisatierelatie**  
  Dit is een relatie waarbij een 'kind'-klasse (subklasse) is afgeleid van een 'ouder'-klasse (superklasse). Een generalisatierelatie geeft aan dat bepaalde eigenschappen van een object ook gelden voor de gerelateerde objecttypen, én dat deze qua betekenis, structuur en syntax gelijk zijn. Je kunt de relatie lezen als een 'is-een'-relatie.

- **Overerving**  
  Dat bepaalde eigenschappen van een object ook gelden voor het gerelateerde object wordt *overerving* genoemd. In het voorbeeld overerft *WaterstaatkundigeZonering* alle attributen van *IMWA-GeoObject*. Het onderscheid tussen de twee zit hem in de extra attributen bij *WaterstaatkundigeZonering*.

- **Abstract object**  
  Een abstract object (klasse) is een object dat niet direct geïnstantieerd kan worden; je vindt ze niet als zodanig terug in de echte wereld. Het dient als een sjabloon voor andere klassen. In de context van generalisatie en overerving wordt de superklasse vaak een abstracte klasse. In het domeinmodel hebben de abstracte objecten vaak een lange samengestelde naam die cursief wordt weergegeven.

- **Associatierelatie**  
  Een associatierelatie beschrijft een verbinding tussen twee onafhankelijke klassen die samenwerken op een bepaalde manier. Het is een *heeft-een*-relatie. Deze relatie is meer gericht op de interactie tussen objecten dan op hun hiërarchische relatie.  
  Bij de associatierelaties speelt *kardinaliteit* een rol. Kardinaliteit specificeert de aantalverhoudingen tussen twee entiteiten in een relatie. Kardinaliteit volgt de notatie `n..m`. Als er geen kardinaliteit wordt weergegeven, wordt verondersteld dat deze `1..1` is.

### Domeinen en datatypen

In de objecten staan de namen opgesomd van de attributen, de eigenschappen van het object, met daarachter het *datatype* of de naam van het bijbehorende *domein*. De kardinaliteit van het attribuut wordt vermeld. Bij attributen is de kardinaliteit alleen opgenomen wanneer die ongelijk is aan 1 (1 staat voor 'verplicht aanwezig').

#### Datatypen

Enkele datatypes zijn enkelvoudig:  
`number`, `integer`, `characterstring`, `date`, `year`.  
Dit zijn de "gedeclareerde primitieve datatypen" zoals in MIM1.1 geformuleerd. Sommige datatypes zijn complexer en meervoudig.

- **Measure**  
  Het datatype *Measure* bestaat uit twee delen: een getalswaarde (rationaal getal) en een eenheid. In de huidige versie van het informatiemodel is de getalswaarde niet verder gespecificeerd met de opbouw en het bereik. Ook is de eenheid nog niet opgenomen.

- **Geometrie**  
  Bij de attributen van het type *Geometrie* wordt gebruik gemaakt van de geometrie-typen zoals die zijn beschreven in OpenGIS Specificatie. In het conceptueel model komt *GM_Object* het vaakst voor. Een *GM_Object* kan verschillende specifieke vormen aannemen, zoals: punt, lijn, vlak of complexere vormen.

#### Domeinen

Een uitbreidbare waardelijst wordt gebruikt wanneer uitbreiding mogelijk moet zijn. Iedere waarde van de lijst heeft een specifieke betekenis (omschrijving). Eventueel worden andere aspecten van de waarde vastgelegd.

Bij een uitbreidbare waardelijst wordt de naam van de lijst gegeven. De inhoud van de lijst is in een apart hoofdstuk van de gegevensdefinitie opgenomen.
