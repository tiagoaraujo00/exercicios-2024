import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  title: string = 'slaca 2019';

  menuItems = [
    { label: 'Apresentação', value: 'apresentation' },
    { label: 'Comitês', value: 'committees' },
    { label: 'Autores', value: 'authors' },
    { label: 'Eixos temáticos', value: 'thematic_axes' },
    { label: 'Trabalhos', value: 'works' },
    { label: 'Contato', value: 'contact' },
  ];
  selectedItem = 'works';

  constructor() {}

  ngOnInit(): void {}

  onSelecteItem(item: string) {
    this.selectedItem = item;
  }
}
