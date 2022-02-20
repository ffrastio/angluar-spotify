import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artist-image',
  templateUrl: './artist-image.component.html',
  styleUrls: ['./artist-image.component.scss']
})
export class ArtistImageComponent implements OnInit {

  @Input()
  imageSrc = '';

  @Input()
  artistName = '';

  @Output()
  click = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.click.emit();
  }
}
