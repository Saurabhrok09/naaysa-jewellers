import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var UIkit: any;
import { HostListener } from '@angular/core';
@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  path: string = window.location.pathname;
  windowWidth: number = window.innerWidth;
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('searchButton') searchButton: ElementRef;
  @ViewChild('searchBox') searchBox: ElementRef;
  @ViewChild('offcanvasContainer') offcanvasContainer: ElementRef;
  @ViewChild('offcanvas') offcanvas: ElementRef;
  searchVisible:boolean = false;

  topBarItems:TopBarItem[] = [
    {
      banner:'assets/topBarImages/rings/banner.png',
      title:'Rings',
      styles:[
        {image:'assets/topBarImages/rings/1.png',title:'Engagement',link:'all-product'},
        {image:'assets/topBarImages/rings/2.png',title:'Wedding',link:'all-product'},
        {image:'assets/topBarImages/rings/3.png',title:'Anniversary',link:'all-product'},
        {image:'assets/topBarImages/rings/4.png',title:'Bridal',link:'all-product'},
        {image:'assets/topBarImages/rings/5.png',title:'Fashion',link:'all-product'},
        {image:'assets/topBarImages/rings/6.png',title:'Eternity',link:'all-product'},
        {image:'assets/topBarImages/rings/7.png',title:'Stackable',link:'all-product'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'all-product'},
      ],
      shopBy:[
        {title:'For Mens',link:'all-product'},
        {title:'For Womens',link:'all-product'},
        {title:'Under 10K',link:'all-product'},
        {title:'10K to 20K',link:'all-product'},
        {title:'20K to 30K',link:'all-product'},
        {title:'30K to 45K',link:'all-product'},
        {title:'Above 45K',link:'all-product'},
        {title:'Show All',link:'all-product'},
      ]
    },
    {
      banner:'assets/topBarImages/earings/earings.jpg',
      title:'Earings',
      styles:[
        {image:'assets/topBarImages/earings/ear (1).png',title:'Engagement',link:'all-product'},
        {image:'assets/topBarImages/earings/ear (2).png',title:'Wedding',link:'all-product'},
        {image:'assets/topBarImages/earings/ear (3).png',title:'Anniversary',link:'all-product'},
        {image:'assets/topBarImages/earings/ear (4).png',title:'Bridal',link:'all-product'},
        {image:'assets/topBarImages/earings/ear (5).png',title:'Fashion',link:'all-product'},
        {image:'assets/topBarImages/earings/ear (6).png',title:'Eternity',link:'all-product'},
        {image:'assets/topBarImages/earings/ear (7).png',title:'Stackable',link:'all-product'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'all-product'},
      ],
      shopBy:[
        {title:'For Mens',link:'all-product'},
        {title:'For Womens',link:'all-product'},
        {title:'Under 10K',link:'all-product'},
        {title:'10K to 20K',link:'all-product'},
        {title:'20K to 30K',link:'all-product'},
        {title:'30K to 45K',link:'all-product'},
        {title:'Above 45K',link:'all-product'},
        {title:'Show All',link:'all-product'},
      ]
    },
    {
      banner:'assets/topBarImages/pendant/pendants.jpg',
      title:'Pendants',
      styles:[
        {image:'assets/topBarImages/pendant/1.png',title:'Engagement',link:'all-product'},
        {image:'assets/topBarImages/pendant/2.png',title:'Wedding',link:'all-product'},
        {image:'assets/topBarImages/pendant/3.png',title:'Anniversary',link:'all-product'},
        {image:'assets/topBarImages/pendant/4.png',title:'Bridal',link:'all-product'},
        {image:'assets/topBarImages/pendant/5.png',title:'Fashion',link:'all-product'},
        {image:'assets/topBarImages/pendant/6.png',title:'Eternity',link:'all-product'},
        {image:'assets/topBarImages/pendant/7.png',title:'Stackable',link:'all-product'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'all-product'},
      ],
      shopBy:[
        {title:'For Mens',link:'all-product'},
        {title:'For Womens',link:'all-product'},
        {title:'Under 10K',link:'all-product'},
        {title:'10K to 20K',link:'all-product'},
        {title:'20K to 30K',link:'all-product'},
        {title:'30K to 45K',link:'all-product'},
        {title:'Above 45K',link:'all-product'},
        {title:'Show All',link:'all-product'},
      ]
    },
    {
      banner:'assets/topBarImages/necklace/Necklace.jpg',
      title:'Necklace',
      styles:[
        {image:'assets/topBarImages/necklace/1.png',title:'Engagement',link:'all-product'},
        {image:'assets/topBarImages/necklace/2.png',title:'Wedding',link:'all-product'},
        {image:'assets/topBarImages/necklace/3.png',title:'Anniversary',link:'all-product'},
        {image:'assets/topBarImages/necklace/4.png',title:'Bridal',link:'all-product'},
        {image:'assets/topBarImages/necklace/5.png',title:'Fashion',link:'all-product'},
        {image:'assets/topBarImages/necklace/6.png',title:'Eternity',link:'all-product'},
        {image:'assets/topBarImages/necklace/7.png',title:'Stackable',link:'all-product'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'all-product'},
      ],
      shopBy:[
        {title:'For Mens',link:'all-product'},
        {title:'For Womens',link:'all-product'},
        {title:'Under 10K',link:'all-product'},
        {title:'10K to 20K',link:'all-product'},
        {title:'20K to 30K',link:'all-product'},
        {title:'30K to 45K',link:'all-product'},
        {title:'Above 45K',link:'all-product'},
        {title:'Show All',link:'all-product'},
      ]
    },
    {
      banner:'assets/topBarImages/chain/chain.jpg',
      title:'Chains',
      styles:[
        {image:'assets/topBarImages/chain/1.png',title:'Engagement',link:'all-product'},
        {image:'assets/topBarImages/chain/2.png',title:'Wedding',link:'all-product'},
        {image:'assets/topBarImages/chain/3.png',title:'Anniversary',link:'all-product'},
        {image:'assets/topBarImages/chain/4.png',title:'Bridal',link:'all-product'},
        {image:'assets/topBarImages/chain/5.png',title:'Fashion',link:'all-product'},
        {image:'assets/topBarImages/chain/6.png',title:'Eternity',link:'all-product'},
        {image:'assets/topBarImages/chain/7.png',title:'Stackable',link:'all-product'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'all-product'},
      ],
      shopBy:[
        {title:'For Mens',link:'all-product'},
        {title:'For Womens',link:'all-product'},
        {title:'Under 10K',link:'all-product'},
        {title:'10K to 20K',link:'all-product'},
        {title:'20K to 30K',link:'all-product'},
        {title:'30K to 45K',link:'all-product'},
        {title:'Above 45K',link:'all-product'},
        {title:'Show All',link:'all-product'},
      ]
    },
    {
      banner:'assets/topBarImages/bracelet/Bracelet.jpg',
      title:'Bracelet',
      styles:[
        {image:'assets/topBarImages/bracelet/1.png',title:'Engagement',link:'all-product'},
        {image:'assets/topBarImages/bracelet/2.png',title:'Wedding',link:'all-product'},
        {image:'assets/topBarImages/bracelet/3.png',title:'Anniversary',link:'all-product'},
        {image:'assets/topBarImages/bracelet/4.png',title:'Bridal',link:'all-product'},
        {image:'assets/topBarImages/bracelet/5.png',title:'Fashion',link:'all-product'},
        {image:'assets/topBarImages/bracelet/6.png',title:'Eternity',link:'all-product'},
        {image:'assets/topBarImages/bracelet/7.png',title:'Stackable',link:'all-product'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'all-product'},
      ],
      shopBy:[
        {title:'For Mens',link:'all-product'},
        {title:'For Womens',link:'all-product'},
        {title:'Under 10K',link:'all-product'},
        {title:'10K to 20K',link:'all-product'},
        {title:'20K to 30K',link:'all-product'},
        {title:'30K to 45K',link:'all-product'},
        {title:'Above 45K',link:'all-product'},
        {title:'Show All',link:'all-product'},
      ]
    },
    {
      banner:'assets/topBarImages/nose/nose pin.jpg',
      title:'Nose Pin',
      styles:[
        {image:'assets/topBarImages/nose/1.png',title:'Engagement',link:'all-product'},
        {image:'assets/topBarImages/nose/2.png',title:'Wedding',link:'all-product'},
        {image:'assets/topBarImages/nose/3.png',title:'Anniversary',link:'all-product'},
        {image:'assets/topBarImages/nose/4.png',title:'Bridal',link:'all-product'},
        {image:'assets/topBarImages/nose/5.png',title:'Fashion',link:'all-product'},
        {image:'assets/topBarImages/nose/6.png',title:'Eternity',link:'all-product'},
        {image:'assets/topBarImages/nose/7.png',title:'Stackable',link:'all-product'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'all-product'},
      ],
      shopBy:[
        {title:'For Mens',link:'all-product'},
        {title:'For Womens',link:'all-product'},
        {title:'Under 10K',link:'all-product'},
        {title:'10K to 20K',link:'all-product'},
        {title:'20K to 30K',link:'all-product'},
        {title:'30K to 45K',link:'all-product'},
        {title:'Above 45K',link:'all-product'},
        {title:'Show All',link:'all-product'},
      ]
    },
    {
      banner:'assets/topBarImages/bangels/Bangles.jpg',
      title:'Bangels',
      styles:[
        {image:'assets/topBarImages/bangels/1.png',title:'Engagement',link:'all-product'},
        {image:'assets/topBarImages/bangels/2.png',title:'Wedding',link:'all-product'},
        {image:'assets/topBarImages/bangels/3.png',title:'Anniversary',link:'all-product'},
        {image:'assets/topBarImages/bangels/4.png',title:'Bridal',link:'all-product'},
        {image:'assets/topBarImages/bangels/5.png',title:'Fashion',link:'all-product'},
        {image:'assets/topBarImages/bangels/6.png',title:'Eternity',link:'all-product'},
        {image:'assets/topBarImages/bangels/7.png',title:'Stackable',link:'all-product'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'all-product'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'all-product'},
      ],
      shopBy:[
        {title:'For Mens',link:'all-product'},
        {title:'For Womens',link:'all-product'},
        {title:'Under 10K',link:'all-product'},
        {title:'10K to 20K',link:'all-product'},
        {title:'20K to 30K',link:'all-product'},
        {title:'30K to 45K',link:'all-product'},
        {title:'Above 45K',link:'all-product'},
        {title:'Show All',link:'all-product'},
      ]
    },
  ]
  constructor() {}

  ngOnInit(): void {}

  showSearch() {
    this.nav.nativeElement.setAttribute('closed', '');
    this.nav.nativeElement.addEventListener(
      'animationend',
      () => {
        this.nav.nativeElement.style.display = 'none';
        this.nav.nativeElement.removeAttribute('shown');
        this.searchBox.nativeElement.style.display = 'flex';
        this.searchBox.nativeElement.setAttribute('shown', '');
        this.searchBox.nativeElement.removeAttribute('closed');
      },
      {
        once: true,
      }
    );

    this.searchButton.nativeElement.setAttribute('closed', '');
    this.searchButton.nativeElement.addEventListener(
      'animationend',
      () => {
        this.searchButton.nativeElement.style.display = 'none';
        this.searchButton.nativeElement.removeAttribute('shown');
      },
      {
        once: true,
      }
    );
  }
  showMenu(){

}  

hideSearch() {
    this.searchBox.nativeElement.setAttribute('closed', '');
    this.searchBox.nativeElement.addEventListener(
      'animationend',
      () => {
        this.searchBox.nativeElement.style.display = 'none';
        this.searchBox.nativeElement.removeAttribute('shown');

        this.nav.nativeElement.style.display = 'flex';
        this.nav.nativeElement.setAttribute('shown', '');
        this.nav.nativeElement.removeAttribute('closed');
      },
      {
        once: true,
      }
    );

    this.searchButton.nativeElement.style.display = 'block';
    this.searchButton.nativeElement.setAttribute('shown', '');
    this.searchButton.nativeElement.removeAttribute('closed');
  }

  showOffcanvas() {
    this.offcanvasContainer.nativeElement.style.display = 'block';
    this.offcanvasContainer.nativeElement.removeAttribute('closed', '');
    this.offcanvasContainer.nativeElement.setAttribute('shown', '');

    this.offcanvas.nativeElement.style.display = 'block';
    this.offcanvas.nativeElement.removeAttribute('closed');
    this.offcanvas.nativeElement.setAttribute('shown', '');
  }

  hideOffcanvas(event: Event) {
    if ((event.target as HTMLElement)['id'] == 'offcanvas-container') {
    }

    this.offcanvasContainer.nativeElement.removeAttribute('shown');
    this.offcanvasContainer.nativeElement.setAttribute('closed', '');
    this.offcanvasContainer.nativeElement.addEventListener(
      'animationend',
      () => {
        this.offcanvasContainer.nativeElement.style.display = 'none';
      },
      {
        once: true,
      }
    );

    this.offcanvas.nativeElement.removeAttribute('shown');
    this.offcanvas.nativeElement.setAttribute('closed', '');
    this.offcanvas.nativeElement.addEventListener(
      'animationend',
      () => {
        this.offcanvas.nativeElement.style.display = 'none';
      },
      {
        once: true,
      }
    );
  }
}

type TopBarItem = {
  title:string,
  banner:string,
  styles:{image:string,title:string,link:string}[],
  byMetals:{image:string,title:string,link:string}[],
  shopBy:{title:string,link:string}[]
}