import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'app-sidenav',
templateUrl: './sidenav.component.html',
styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
@Input() sideNavStatus: boolean = false;
list=[
    {
     number:'1',
     name:'home',
     icon:'fa-solid fa-house',
     link:'',
    },

    {
     number:'2',
     name:'Analytics',
     icon:'fa-solid fa-chart-line',
     link:'analytics',
    },
    {
     number:'3',
     name:'Product',
     icon:'fa-solid fa-box',
     link:'product'
    },
    {
     number:'4',
     name:'Order',
     icon:'fa-solid fa-cart-shopping',
     link:'order'
    },
    {
     number:'5',
     name:'Settings',
     icon:'fa-solid fa-gear',
     link:'setting'
    },
    {
     number:'6',
     name:'About',
     icon:'fa-solid fa-circle-info',
     link:'about',
    },
    {
     number:'7',
     name:'Contact',
     icon:'fa-solid fa-phone',
     link:'contact'
    },

]
constructor() { }

ngOnInit(): void {
}

}
