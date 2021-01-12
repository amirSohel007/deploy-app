import { Component } from '@angular/core';
import { InstagramService } from './instagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'deploy-app';
  instgramUserData: any;
  constructor(public instagrmService: InstagramService) {}

  searchUser(userId) {
    this.instagrmService.getInstagramUser(userId).subscribe((data: any) => {
      this.instgramUserData =
        data?.graphql?.user?.edge_owner_to_timeline_media?.edges;
    });
  }
}
