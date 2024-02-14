import { Component, OnInit } from '@angular/core';
import { recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrl: './recepies-list.component.css'
})
export class RecepiesListComponent implements OnInit {
  recepies: recepie[] = [];
  individualRecepie!: recepie;
  constructor(private recepieService: RecepieService,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.recepies = this.recepieService.getRecepie()
  }
  onNewRecepie() {
    //this would navigate us to the path containing new (mentioned in the routing module. relativeTo indicates the current route)
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
