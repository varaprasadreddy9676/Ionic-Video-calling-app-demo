import { Component } from '@angular/core';
declare var jitsiplugin: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  join() {

    jitsiplugin.join('https://meet.jit.si/' + '9533322607', false, function (data) {

        if (data === 'CONFERENCE_WILL_LEAVE') {
          jitsiplugin.destroy(
            function (data) {
              alert('CONFERENCE_WILL_LEAVE ');
              // call finished
            },
            function (err) {
              console.log(err);
            }
          );
        }
      },
      function (err) {
        console.log(err);
      }
    );
  }

}
