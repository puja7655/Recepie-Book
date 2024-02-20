import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  collapsed = true
  constructor(private dataStorageService: DataStorageService) { }
  ngOnInit(): void {

  }
  onSaveData() {
    this.dataStorageService.storeRecepie();
  }

  onFetchData(){
    this.dataStorageService.fetchRecepie();
  }
}
