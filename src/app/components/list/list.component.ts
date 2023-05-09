import { Component, OnInit, OnDestroy } from '@angular/core';
import { concat, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements  OnInit, OnDestroy  {
  
  isFavorito = false;

  toggleFavorito() {
    this.isFavorito = !this.isFavorito;
  }

  subscriptions: Subscription[] = [];

  constructor(private ApiService: ApiService) { }

  get pokemons(): any[] {
    return this.ApiService.pokemons;
  }

    set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    if (!this.pokemons.length) {
      this.loadMore();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }

  loadMore(): void {
    this.carregar = true;
    this.subscription = this.ApiService.getNext().subscribe(response => {
      this.ApiService.next = response.next;
      const details = response.results.map((i: any) => this.ApiService.get(i.name));
      this.subscription = concat(...details).subscribe((response: any) => {
        this.ApiService.pokemons.push(response);
      });
    }, //error => console.log('Um erro ocorreu', error), () => this.carregar = false);
  //}

    //getType(pokemon: any): string {
    //return this.ApiService.getType(pokemon);
  //}

}

