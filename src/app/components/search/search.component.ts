import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  newestSearch = [
    'Top Indonesia', 'Top Global', 'Pop', 'Jazz'
  ]

  itemSearch = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchItem(search: string){
    this.itemSearch = search;
  }

  result(){
    console.log('Search... ', this.itemSearch)
  }
}
