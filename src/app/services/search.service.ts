import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchKey$ = new BehaviorSubject('');

  constructor() { }

setSearchKey(key:string){
  this.searchKey$.next(key);
}

getSearchKey(){
 return  this.searchKey$;
}
}
