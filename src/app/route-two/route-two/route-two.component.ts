import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {

  products:{ Name: string; id: number; price: number; }[] = [
    {
      "Name": "Coriander",
      "id": 40,
      "price": 7076
    },
    {
      "Name": "Ovolo",
      "id": 35,
      "price": 3277
    },
    {
      "Name": "Blanet",
      "id": 14,
      "price": 1797
    },
    {
      "Name": "Bugsall",
      "id": 28,
      "price": 7362
    },
    {
      "Name": "Ontagene",
      "id": 40,
      "price": 9790
    },
    {
      "Name": "Dreamia",
      "id": 4,
      "price": 5285
    },
    {
      "Name": "Portaline",
      "id": 25,
      "price": 7576
    },
    {
      "Name": "Lyria",
      "id": 20,
      "price": 4211
    },
    {
      "Name": "Entropix",
      "id": 17,
      "price": 3910
    },
    {
      "Name": "Twiggery",
      "id": 2,
      "price": 6006
    },
    {
      "Name": "Protodyne",
      "id": 3,
      "price": 3342
    },
    {
      "Name": "Navir",
      "id": 3,
      "price": 8035
    },
    {
      "Name": "Zolavo",
      "id": 26,
      "price": 7427
    },
    {
      "Name": "Medalert",
      "id": 19,
      "price": 2364
    },
    {
      "Name": "Aeora",
      "id": 12,
      "price": 1591
    },
    {
      "Name": "Greeker",
      "id": 10,
      "price": 9982
    },
    {
      "Name": "Zytrek",
      "id": 23,
      "price": 9303
    },
    {
      "Name": "Grainspot",
      "id": 21,
      "price": 1257
    },
    {
      "Name": "Updat",
      "id": 40,
      "price": 4229
    },
    {
      "Name": "Fanfare",
      "id": 37,
      "price": 5458
    },
    {
      "Name": "Futurity",
      "id": 41,
      "price": 6689
    },
    {
      "Name": "Koffee",
      "id": 16,
      "price": 4193
    },
    {
      "Name": "Sulfax",
      "id": 23,
      "price": 5565
    },
    {
      "Name": "Senmao",
      "id": 29,
      "price": 8904
    },
    {
      "Name": "Velos",
      "id": 13,
      "price": 9240
    },
    {
      "Name": "Darwinium",
      "id": 6,
      "price": 1771
    },
    {
      "Name": "Canopoly",
      "id": 34,
      "price": 8580
    },
    {
      "Name": "Tubesys",
      "id": 4,
      "price": 1741
    },
    {
      "Name": "Combot",
      "id": 40,
      "price": 8105
    },
    {
      "Name": "Xinware",
      "id": 5,
      "price": 2704
    },
    {
      "Name": "Aquacine",
      "id": 16,
      "price": 7892
    },
    {
      "Name": "Isopop",
      "id": 23,
      "price": 6269
    },
    {
      "Name": "Genekom",
      "id": 32,
      "price": 6658
    },
    {
      "Name": "Vicon",
      "id": 9,
      "price": 6338
    },
    {
      "Name": "Nspire",
      "id": 28,
      "price": 9314
    },
    {
      "Name": "Vortexaco",
      "id": 17,
      "price": 5491
    },
    {
      "Name": "Daisu",
      "id": 28,
      "price": 6271
    },
    {
      "Name": "Signity",
      "id": 38,
      "price": 5378
    },
    {
      "Name": "Sequitur",
      "id": 26,
      "price": 3376
    },
    {
      "Name": "Firewax",
      "id": 26,
      "price": 1866
    }
  ];
  oProducts!: { Name: string; id: number; price: number; }[];
  constructor() { }
  widthVal="25";
  ngOnInit(): void {
    this.oProducts = [...this.products];
  }

  changeLayout(type:string='grid',customWidth?:number) {
    if(customWidth) {
      this.widthVal = customWidth.toString();
    } else {
      this.widthVal = type === 'list'? '100': '25';
    }
  }

  sortBy(val:string):void {
    if(val==='2by2') {
      this.changeLayout('',50);
    } else {
      if(val==='PLH') {
        this.products.sort((a, b) => a.price - b.price);
      } else if(val==='PHL'){
        this.products.sort((a, b) => b.price - a.price );
      } else {
        this.products = [...this.oProducts];
      }
    }

  }
}
