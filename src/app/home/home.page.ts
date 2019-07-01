import { Component, ViewChild  } from '@angular/core';
import { UserService } from '../user.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users = [];
  page = 1; 
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private user: UserService) {
    this.loadUser();
    
  }
  loadUser(x?)
  {
    console.log("pkslkdnfknsld");
      this.user.getUser(this.page).subscribe(e => {
        this.users = this.users.concat(e["results"]);
        if (x) {
          x.target.complete()
        }
      })
    
   
  }

  loadMore(inf) 
  {
    console.log('loading more');
    
    this.page++;
    this.loadUser(inf);
  }
}
