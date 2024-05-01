import { Component, OnDestroy } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CategoryComponent } from '../category/category.component';
import { AudioGearTextComponent } from '../audio-gear-text/audio-gear-text.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavBarComponent, CategoryComponent, AudioGearTextComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {

  private routeSubscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnDestroy() {
    // Unsubscribe from the route change events to prevent memory leaks
    this.routeSubscription = this.router.events.subscribe(event => {
      // Check if the event is a NavigationEnd event
      if (event instanceof NavigationEnd) {
        // Reload the page
        window.location.reload();
      }
    });
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
