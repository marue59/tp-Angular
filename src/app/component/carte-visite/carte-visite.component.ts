import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.scss']
})

export class CarteVisiteComponent implements OnInit {

  hidden: boolean = true;

  users: any[] = [
      {
      id: 1,
      name: "Defretin",
      username: "Marie",
      email: "marie.defretin@marie.fr",
      phone : "06.19.33.19.93",
      website : "marieDefretin.fr",
      company : {
        name : "IB - Cegos",
      }
    },
      {
      id: 2,
      name: "Defretin",
      username: "Sarah",
      email: "marie.defretin@marie.fr",
      phone : "06.19.33.19.93",
      website : "marieDefretin.fr",
      company : {
        name : "IB - Cegos",
      }
    },
      {
      id: 3,
      name: "Defretin",
      username: "Clara",
      email: "marie.defretin@marie.fr",
      phone : "06.19.33.19.93",
      website : "marieDefretin.fr",
      company : {
        name : "IB - Cegos",
      }},
      {
        id: 4,
        name: "Defretin",
        username: "Nathalia",
        email: "marie.defretin@marie.fr",
        phone : "06.19.33.19.93",
        website : "marieDefretin.fr",
        company : {
          name : "IB - Cegos",
        }},
        {
          id: 5,
          name: "Defretin",
          username: "Juan",
          email: "marie.defretin@marie.fr",
          phone : "06.19.33.19.93",
          website : "marieDefretin.fr",
          company : {
            name : "IB - Cegos",
          }},
          {
            id: 6,
            name: "Defretin",
            username: "Philippe",
            email: "marie.defretin@marie.fr",
            phone : "06.19.33.19.93",
            website : "marieDefretin.fr",
            company : {
              name : "IB - Cegos",
            }}
    ]

    constructor() { }

    ngOnInit(): void {
    }
    
    toggle() {
      this.hidden = !this.hidden
    }
  }
