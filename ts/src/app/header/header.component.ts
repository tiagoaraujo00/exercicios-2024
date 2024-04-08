import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  headerData = {
    title: 'Anais do Simpósio Latino Americano de Ciências de Alimentos',
    description:
      'Anais do 13° Simpósio Latino Americano de Ciências de Alimentos',
    issin: '1234-5678',
  };
  profileData = {
    email: 'alguem12@galoascience.com',
    image: 'assets/profile-image.png',
  };
}
