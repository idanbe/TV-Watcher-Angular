import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class NavService {

  private _navItemSource = new BehaviorSubject<string>(null);

  navItem$ = this._navItemSource.asObservable();

  changeNav(query:string){
    this._navItemSource.next(query);
  }
}
