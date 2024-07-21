import React, {} from 'react'
import "./css/mojePrace.css"
import { MojePraceSection } from '../components'
import salonMonika from "../static/images/mojePrace/salonMonika.png"
import zamestPortal from "../static/images/mojePrace/zamestPortal.png"
import dashboard from "../static/images/mojePrace/dashboard.png"
import oMne from "../static/images/mojePrace/oMne.png"
import pismenaACisla from "../static/images/mojePrace/pismenaACicsla.png"


const MojePrace = () => {
  
  return (
    <div id="mojePracePage">

      <MojePraceSection 
        mojePraceSectionName="Salón Monika"
        image={salonMonika}   
        description="
          Toto je môj prvý web. Vytvoril som ho v programe Notepad++.
          "   
        link="https://www.google.sk"
        detailDescription="
          Zadanie bolo vytvoriť pre moju manželku web pre jej katernícky salón (cvičný). Použil som html, css a
          javyscript. Využil som aj boostrap. Keď bol web hotový, urobil som ho responzívny. Je to jednochší web
          ktotý má len jednu stránku/page. 
          "
      />

      <MojePraceSection 
        mojePraceSectionName="Fiermný portál"
        image={zamestPortal}   
        description="
          Toto je môj druhý web. Vytvoril som ho v programe Notepad++. Je zložitejší a komplexnejší ako salón
          Monika.
          "   
        link="https://www.google.sk"
        detailDescription="
          Zadanie som si zadefinoval tak, že vytvorím portál určený pre zemestnancov určitej firmy, t.j. firemný 
          web, kde si zametnanci nájdu aktuálne a všetky potrebné informácie o firme. Išlo o realitnú kanceláriu.
          Využil som html, css, bootstrap, javascript. V tomto projekte som už viac pracoval z javascriptom.
          Využil som aj viacero treto-stranových knižníc. Web má viacero stránok. 
          "
      />

      <MojePraceSection 
        mojePraceSectionName="Dashboard"
        image={dashboard}   
        description="
          Mmou vytvorený web v poradí číslo tri, zároveň prv web ktorý som vytvoril v React.
          "   
        link="https://www.google.sk"
        detailDescription="
          Zadanie, ktoré som si zadefinoval znelo takto: vytvoriť dashboard pre jedného človeka, napr predajcu, 
          niečo čo by sa približovalo webovej aplikácii. Budem to teda volať aplikácia. V  aplikácii má predajca
          možnosť zapisovať svoje predaje, do tabuľky, vidieť ich vývoj v grafe a základné nastavenia na tabuľku.
          Využíval som knižnicu https://mui.com/. Spomeniem, že som sa naučil používať flexbox, takže 
          urobiť web responzívny bolo jednoduchšie. 
          "
      />

      <MojePraceSection 
        mojePraceSectionName="Osobný web"
        image={oMne}   
        description="
          Ako posledný, štvrtý, som vytvoril tento web, ktorý tiež spomeniem. Vystvoril som ho tiež v
          React.
          "   
        link="https://www.google.sk"
        detailDescription="
          Cieľom bolo prezentovať seba a mnou vytvorené weby. Pri tom webe som už trochu viac pracoval sám
          v React, no samozrejme som si pomáhal google-om a chatom GPT. Vytváral som komponenty tak, napr. pre page
          Moje práce, stačí pridať komponent, v ktorom prepíšem názov, popois, bližší popis a obrázok a je 
          hotová ďalšia sekcia- ďalší web.
          "
      />

      <MojePraceSection 
        mojePraceSectionName="Prvá hra s písmenami a číslami"
        image={pismenaACisla}   
        description="
          Piaty web, vytvorený v React. 
          "   
        link="https://www.google.sk"
        detailDescription="
          Vymyslel som veľmi jednoduchú hru pre predškolákov, ktorí sa môžu učiť prvé písmenká a čísla pomocou
          tohto webu, resp. webovej aplikácie. Vytvorená je v React, kde som tiež vytváral komponenty, využíval  
          knižnicu https://mui.com/, flexboxy, nastavoval podmienky cez stavy useState, kódy som robil aj pomocou 
          chatuGPT. Web je tiež responzívny, aj pre mobily.
          "
      />

    </div>
  )
}

export default MojePrace