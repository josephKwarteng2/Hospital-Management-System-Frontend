import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownComponent } from '@components/dropdown/dropdown.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SearchComponent } from '@components/search/search.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';
import { ServicesListComponent } from '../../components/services-list/services-list.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    SideNavComponent,
    NavBarComponent,
    DropdownComponent,
    SearchComponent,
    ServicesListComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  public handleOptionSelected(option: string) {
    console.log(option);
  }
}
