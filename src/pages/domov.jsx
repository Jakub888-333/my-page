import React, {} from 'react'
import "./css/domov.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import oMne from "../static/images/domov/oMne.jpg"
import coUzViem from "../static/images/domov/coUzViem.jpg"
import ciel from "../static/images/domov/ciel.jpg"

const Domov = () => {
  return (
    <div id="domovPage">
        
          <Card sx={{ maxWidth: 345 }} className="domovPageCard">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={oMne}
                alt="o mne"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  O mne
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Volám sa Jakub. Pracujem v banke na pozícii tímlíder, je to back-officová práca, s rôznymi systémami.
                  Pracujem tu na rôznach pozíciách, od ukončenia vysokej školy. Som kreatívny a mám rád nové veci,
                  nové výzvy, chcem sa v živote ešte niekam posúvať. Preto som sa rozhodol, že sa skúsim naučiť
                  programovať, popri práci. Mám rodinu, dve deti a manželku, športujem, koníčky, takže časovo
                  je to náročnejšie ale keď človek chce, dá sa dosiadhnuť takmer všetko. Aktuálne som vo fáze, že 
                  by som chcel už niečo reálne skúsiť urobiť, programovať. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }} className="domovPageCard">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coUzViem}
                alt="čo už viem"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Čo už viem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Učím sa programovať už 3 roky, znie to ako dlhý čas, no vhľadom k tomu, že mám prácu, rodinu a koníčky,
                  venujem sa programovaniu, resp. učeniu sa, denne nie až tak veľa času ako by som chcel. Začal
                  som sa učiť cez stránku akonaweb.sk, ktorá už dnes neexistuje (dnes sú vidá na youtube). Učil som
                  sa programovať v programe notepad++, začal som samorezjem html a css, neskôr bootstrap čo ma 
                  veľmi bavilo. Neskôr to bol javascript, čo už je zložitejšie. Prešiel som si aj kurzami na jQuery,
                  PHP, SQL, React a wordpress. Po prejdení týchto kurzov som nevedel čo ďalej, vedel som len to že sa mi
                  to mieša a že sa potreujem rozhodnúť zdokonaliť sa a pokračovať len v jednom jazyku/programe. 
                  Rozhodol som sa pre React, ktorý bol spočiatku, a vlatne aj stále, pre mňa veľmi zložitý, ale
                  povedal som si že sa ho naučím, aj ak si jeden kurz bude musieť prejsť 10x. Pri React využívam
                  knižnicu mui.com. Aktuálne som v stave, že som urobil dve webstránky cez notepad++ a dve webstránky cez React. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }} className="domovPageCard">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ciel}
                alt="cieľ"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aký mám cieľ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Po tom ako som vytvoril štyri vlastné webstránky, by som chcel vyskúšať nejaké zadanie od 
                  niekoho iného. Skôr by som sa chcel zamerať nato aby som skúsil programovať popri práci.
                  Neskôr nemám nič pevne naplánované, záleží všetko od toho či bude spokojný, či ma to bude 
                  baviť a či bude so mnou spokojná druhá strana. Samozrejme ani na teraz nie je nič vylúčené,
                  všetko závisí od dohody. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

    </div>
  )
}

export default Domov