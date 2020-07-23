import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  constructor() {}
  searchTerm: string;
  ngOnInit(): void {}

  onInput(input: string) {
    this.onChange.emit(input)
  }
}
