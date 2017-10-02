import {NgModule, Component, Inject, PLATFORM_ID} from '@angular/core'
import {RouterModule} from '@angular/router'
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'lazy-view',
  template: `<h3>i'm lazy</h3><div id="jquery-text">jQuery is not working</div>`
})
export class LazyView {
  constructor( @Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      let $ = require('jquery');
      $('#jquery-text').text('jQuery works!');
    }
  }
}

@NgModule({
  declarations: [LazyView],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyView, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}
