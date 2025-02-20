# 1. Inleiding
De **Aquo-standaard** (Aquo) is de Nederlandse standaard voor het uitwisselen van gegevens binnen de **watersector**. Informatie speelt een belangrijke rol in het functioneren van waterbeheer. Overheidsinstanties zoals Rijkswaterstaat, waterschappen en provincies werken steeds meer samen en wisselen informatie uit.  

Om verwarring te voorkomen, is het belangrijk dat iedereen **dezelfde betekenis** geeft aan gegevens en termen. Daarnaast zijn **duidelijke afspraken** nodig over hoe gegevens worden beschreven en uitgewisseld.  

Met de Aquo-standaard kunnen organisaties op een **uniforme en efficiënte manier** gegevens uitwisselen. Dit zorgt ervoor dat informatie goed wordt gestructureerd en beheerd, zodat deze **actueel, correct en consistent** blijft. Hierdoor draagt de standaard bij aan **de kwaliteit van het waterbeheer** en helpt het om **tijd en kosten** te besparen.

Aquo is voor **overheidsorganisaties** een **verplichte open standaard**. Deze standaard is ontwikkeld en wordt beheerd door het **Informatiehuis Water**. Dit samenwerkingsprogramma van **Rijkswaterstaat, waterschappen en provincies** helpt waterbeheerders en beleidsmakers bij het uitwisselen van waterinformatie.

De Aquo bestaat uit drie samenhangende onderdelen: een woordenboek (of thesaurus), informatiemodel en domeintabellen. 

## 1.1 Informatiemodellen

Een **informatiemodel** legt vast welke relaties er bestaan tussen gegevens die te maken hebben met **waterbeheer**. Dit helpt om data een **eenduidige betekenis** te geven. Een catalogus, zoals deze, bevat gebundelde informatie over een informatiemodel.

Een **informatiemodel** helpt bij:
- Het vastleggen van relaties tussen waterbeheerdata.
- Het bepalen welke gegevens en relaties in een database moeten staan om de data volgens de standaard te kunnen uitwisselen.
- Het meervoudig gebruiken van **eenmalig ingewonnen data**.
- Het ontwikkelen van **import- en exportbestanden** of interfaces voor gegevensuitwisseling.

Een **catalogus** beschrijft:
- De gegevens die worden uitgewisseld.
- De definitie van deze gegevens.
- De onderlinge relaties tussen de gegevens.
- Een conceptueel informatiemodel (CIM)

Binnen de Aquo hanteren we een **gelaagde opbouw** van modellen:

1. **Conceptueel informatiemodel**  
   Een conceptueel informatiemodel beschrijft op een duidelijke manier welke informatie in een bepaald domein belangrijk is en hoe deze met elkaar samenhangt. Het model legt vast wat er wordt geregistreerd en uitgewisseld, zonder rekening te houden met de techniek. Dit helpt domeinexperts en ICT-specialisten om elkaar beter te begrijpen. De beschrijvingen zijn precies en concreet, zodat de werkelijkheid zo goed mogelijk wordt weergegeven.
2. **Logisch model**  
   Dit is een selectie van het conceptuele model, gericht op een specifiek werkveld of uitwisseldoel.
3. **Fysiek model**  
   Dit model wordt gebruikt voor de technische implementatie, zodat gegevens automatisch kunnen worden uitgewisseld tussen computersystemen.

Het informatiemodel Water (IMWA) beschrijft alle relevante objecten, de onderlinge relaties en attributen van de Aquo-standaard. Omdat IMWA een omvangrijk model is, is het voor de overzichtelijkheid onderverdeeld in een paar onderdelen.
![De context van IMWA](./algemeen/BedrijfsobjectenModel.jpg)
*Totaalplaat van IMWA in samenhang*

- **Basis** (grijs) 
- **Kunstwerken** (rood) 
- **Watersysteem** (blauw) 
- **Waterveiligheid** (groen) 
- **Waterketen** (oker) 
- **Monitoring** (paars) 
- **Normen** (geel)

## 1.2 IMWA Basis

IMWA Basis bevat een aantal gedeelde en gemeenschappelijke objecten uit de andere onderdelen van de IMWA. Daarnaast wordt in **IMWA basis** de relatie gelegd met objecten uit andere, bovenliggende standaarden, m.n. de NEN3610:2022.

## 1.3 MIM-conformiteit

De **Aquo-informatiemodellen** zijn opgezet volgens het **MIM (Metamodel Informatie Modellering)**, een landelijke standaard voor het maken van informatiemodellen. MIM zorgt ervoor dat informatiemodellen **uniform** worden opgebouwd, zodat ze in verschillende domeinen en bestuurslagen bruikbaar zijn.

Voor meer informatie over MIM:  
[Metamodel Informatie Modellering (geostandaarden.nl)](https://www.geostandaarden.nl)

De **Aquo-informatiemodellen** zijn gemodelleerd met behulp van **UML (Unified Modeling Language)** in het programma **Enterprise Architect**.





