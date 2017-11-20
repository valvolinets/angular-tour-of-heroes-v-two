import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// hero: Hero = {
//   id: 1,
//   name: "Batman"
// };
selectedHero: Hero;
heroes = HEROES;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
