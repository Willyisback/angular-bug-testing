import {Component} from '@angular/core';

export interface DemoItem {
  id: string;
  title: string;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  demo: DemoItem[] = [
    {
      id: '1',
      title: 'TEST1',
      type: '1'
    }, {
      id: '2',
      title: 'TEST2',
      type: '2'
    }, {
      id: '3',
      title: 'TEST3',
      type: '3'
    }
  ];

}
