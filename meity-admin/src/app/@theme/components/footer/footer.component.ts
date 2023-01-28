import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b>Key point Technology</b> 2023
    </span>
    <div class="socials">
    
      <a href="https://www.facebook.com/keypoint.technologies/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://mobile.twitter.com/keypointtech" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://in.linkedin.com/company/keypoint-technologies" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
