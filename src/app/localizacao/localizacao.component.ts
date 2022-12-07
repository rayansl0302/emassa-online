import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.less'],
})
export class LocalizacaoComponent implements OnInit {
  lat: number = 0;
  long: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.getCurrentLocation();
  }
  getCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=> { 
          this.lat = position.coords.latitude; 
          this.long = position.coords.longitude;
        });
    }
    else{
      alert("GeoLocation is not supported by this browser.");
    }
  }
}
