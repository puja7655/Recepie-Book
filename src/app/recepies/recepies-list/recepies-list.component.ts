import { Component, OnDestroy, OnInit } from '@angular/core';
import { recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrl: './recepies-list.component.css'
})
export class RecepiesListComponent implements OnInit, OnDestroy {
  recepies: recepie[] = [];
  individualRecepie!: recepie;
  subscription!: Subscription
  constructor(private recepieService: RecepieService,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.subscription = this.recepieService.recepieChanged
      .subscribe((recepie: recepie[]) => {
        this.recepies = recepie
      })
    this.recepies = this.recepieService.getRecepie()
  }
  onNewRecepie() {
    //this would navigate us to the path containing new (mentioned in the routing module. relativeTo indicates the current route)
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
