import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from './breaking-bad.service';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  characters: Character[];
  isLoading = false;
  searchTerm: string;
  constructor(private service: BreakingBadService) {}
  ngOnInit() {
    this.service.fetchItems().subscribe((characters) => {
      this.characters = characters;
      this.isLoading = false;
    });
  }

  onInput(term: string) {
    this.searchTerm = term;
    this.characters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
