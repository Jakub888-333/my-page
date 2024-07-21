import React from "react"
import "./css/cv.css"
import { CvSection } from "../components"
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import CVdoc from "../static/docs/paperCV.pdf"
import { saveAs } from "file-saver" 


const CV = () => {
  
  const osobneUdajeContent = [
    "Ing. Jakub Neuburger",
    "Adresa: Tomášikova 11, 96001 Zvolen",
    "Tel.: +421 908 051 251",
    "E-mail: jakub.neuburger@gmail.com",
    "Dátum narodenia: 21.02.1986"
  ];

  const pracSkusContent = [
    <strong>TEAMLEADER NA ODDELENÍ SPRÁVA ÚVEROV</strong>,
    "08/2017 – súčasnosť, Slovenská sporiteľňa, a.s., pracovisko Banská Bystrica",
    <br />,
    "•	zodpovednosť za zamestnancov v tíme: kvalita práce, organizácia práce, efektivita, kontrola, plánovanie,",
    "•	odborný garant v danej agende na nových procesoch, rôznorodejších ako na predchádzajúcom oddelení,",
    "•	práca s reportami, využívanie nových zručností ako používať rôzne reporty na porovnávanie a získavanie dát pre ďalšie využitie,",
    "•	čiastočne spracovanie procesov vo zverenej agende,",
    "•	práca v rôznych ďalších systémoch banky,",
    "•	intenzívna práca na automatizácii a robotizácii manuálnych procesov s reálnymi výsledkami a dopadmi na šetrení nákladov firme, aktívna práca, vlastné nápady až po realizáciu,",
    "•	zaškoľovanie zamestnancov,",
    "•	garant na oddelení za digitálne zručnosti a zručnosti s prácou v aplikáciach Office365.",
    <br />,
    <br />,
    <strong>VEDÚCI ODDELENIA TVORBA ZMLUVNEJ DOKUMENTÁCIE</strong>,
    "08/2014 – 07/2017, Slovenská sporiteľňa, a.s., pracovisko Banská Bystrica",
    <br />,
    "•	manažérske činnosti: prijímanie zamestnancov, plánovanie, organizácia, koordinácia, kontrola,",
    "•	zodpovednosť za vedenie zamestnancov, za odmeňovanie,",
    "•	aktívna práca na optimalizácii procesov, ktorým výsledkom bolo zrýchľovanie práce, menší priestor na chyby, zefektívňovanie procesov,",
    "•	práca s reportami,",
    "•	práca v rôznych opäť ďalších systémoch banky.",
    <br />,
    <br />,
    <strong>TEAMLEADER NA ODDELENÍ TVORBA ZMLUVNEJ DOKUMENTÁCIE</strong>,
    "07/2011 – 07/2014, Slovenská sporiteľňa, a.s., pracovisko Banská Bystrica",
    <br />,
    "•	zodpovednosť za zamestnancov v tíme: kvalita práce, organizácia práce, efektivita,",
    "•	odborná garant v danej agende,",
    "•	práca s reportami,",
    "•	príprava dokumentov podľa požiadavky,",
    "•	príprav zmluvnej dokumentácie, ako napr. úverová zmluva, záložná zmluva a iné,",
    "•	práca v rôznych ďalších systémoch banky.",
    <br />,
    <br />,
    <strong>BACK OFFICE PRACOVNÍK</strong>,
    "01/2011 – 06/2011, Slovenská sporiteľňa, a.s., pracovisko Banská Bystrica",
    <br />,
    "•	príprava dokumentov podľa požiadavky,",
    "•	príprav zmluvnej dokumentácie, ako napr. úverová zmluva, záložná zmluva a iné,",
    "•	práca v rôznych systémoch banky.",
  ];

  const vzdelanieContent = [
    <strong>Slovenská poľnohospodárska univerzita v Nitre</strong>,
    "Regionálny rozvoj / 2008 – 2010 /Ing.",
    "Európske rozvojové programy 2005 – 2008 /Bc.",
    <br />,
    <strong>Obchodná akadémia, Lučenec</strong>,
    "2001 – 2005",
    <br />,
    <strong>Základná škola, Veľký Krtíš</strong>
  ];

  const kurzCertContent = [
    <strong>Certifikát six sigma</strong>,
    "Metóda na neustále zlepšovanie, zefektívňovanie procesov.",
    <strong>Rôzne kurzy</strong>,
    "Desiatky školení absolvovaných počas práce v banke zameraných na soft skills, optimalizáciu",
    "a zefektívňovanie procesov. Posledné dva roky absolvovanie rôznych kurzov na platforme",
    "seduo.sk/cz- kurzy zamerané na soft skills, prácu z domu, zlepšovanie angličtiny, digitálne zručnosti."
  ];

  const znalostiContent = [
    "Office 365 – expert" ,
    "HTML, CSS – pokročilý ",
    "Java script – mierne pokročilý ",
    "React – mierne pokročilý ",
    "JQuery, PHP, SQL, WordPress– začiatočník "
  ];

  const jazykContent = [
    "Anglický jazyk – pokročilý",
    "Nemecký jazyk – štátna skúška (C1) "
  ];

  const zaujmyKonickyContent = [
    "Športujem, hlavne posilňovňa, sqwash, korčule, beh a každý iný šport mám takisto rád. Mám rád",
    "turistiku. Rád sa zdržiavam v kuchyni, pri varení aj pri jedení. Som domáci kutil, rád si",
    "vyrábam a prerábam okolo domu, v dome. A v prvom rade sa venujem samozrejme svojej rodine."
];

  const vodickyContent = [
    <strong>B</strong>
  ];

  const handleDownloadClick = () => {
    saveAs(CVdoc, "CV");
  }

  return (
    <div id="cvPage">
        
        <div id="cvBoxes">
          <CvSection 
            className="cvBox"
            title="Osobné údaje"
            content={osobneUdajeContent}
          />

          <CvSection 
            className="cvBox"
            title="Pracovné skúsenosti"
            content={pracSkusContent}
          />

          <CvSection 
            className="cvBox"
            title="Vzdelanie"
            content={vzdelanieContent}
          />

          <CvSection 
            className="cvBox"
            title="Kurz alebo certifikát"
            content={kurzCertContent}
          />

          <CvSection 
            className="cvBox"
            title="Znalosti"
            content={znalostiContent}
          />

          <CvSection 
            className="cvBox"
            title="Jazyk"
            content={jazykContent}
          />

          <CvSection 
            className="cvBox"
            title="Záujmy a koníčky"
            content={zaujmyKonickyContent}
          />

          <CvSection 
            className="cvBox"
            title="Vodičský preukaz"
            content={vodickyContent}
          />
          
        </div>
        <div id="buttonContainer">
          <Button 
            id="buttonDownloadCV" 
            variant="outlined" 
            startIcon={<DownloadIcon />}
            onClick={handleDownloadClick}
          >
            Stiahni
          </Button>
        </div>
    </div>
  ) 
}

export default CV