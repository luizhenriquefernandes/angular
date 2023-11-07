import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo = "../assets/logo.png";
  imgProfile: string = "../assets/pikachu.png";
  links: string[] = ["Home", "Pokedex","Video Game", "card Games", "Eventos"];
  pokemons: Pokemon[] = [
    new Pokemon(1,'Pickachu',['Elétrico'],'Esse é o Pikachu','https://www.bing.com/images/search?q=pikachu.png&FORM=IQFRBA&id=7877838BB14D11195E27699B54E5768FBDA1388D')
    new Pokemon(2,'Bubasaur',['Grama'],'Esse é o Bubasaur','https://www.bing.com/images/search?view=detailV2&ccid=4w%2bm2GQ8&id=275595BF73D1B28303507EF3D66AB726BCA0A891&thid=OIP.4w-m2GQ8GlCSspm2C7qTlAHaHa&mediaurl=https%3a%2f%2fexternal-preview.redd.it%2fqvkIfEpcZahP1Lcu4eZzfqhhACaHjLHloe_cTTCm1es.jpg%3fauto%3dwebp%26s%3db8e42af529efdbfa09846b3cd8ec4c0e159951aa&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e30fa6d8643c1a5092b299b60bba9394%3frik%3dkaigvCa3atbzfg%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1200&q=Bulbasaur+Pok%c3%a9dex&simid=607995888822983474&FORM=IRPRST&ck=A09078925FE7DAA539C2F358E1CD8738&selectedIndex=0&ajaxhist=0&ajaxserp=0)
  ];
}

