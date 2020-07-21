import { Component, OnInit } from "@angular/core";

import { StarWarsService } from "../star-wars.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"],
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = "all";
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {}

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    // reach out to service to fetch the right characters

    //swService.getCharacters(this.chosenList);
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
    //  this.characters = this.swService.getCharacters(this.chosenList);
  }
}
