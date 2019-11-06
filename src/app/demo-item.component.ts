import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DemoItem} from './app.component';

@Component({
  selector: 'app-demo-item',
  template: `
      <div>{{item?.title}}</div>
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DemoItemComponent),
      multi: true
    }
  ]
})
export class DemoItemComponent implements OnInit, ControlValueAccessor {

  onChange;
  onTouched;

  item: DemoItem = null;

  constructor() {
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(item: DemoItem): void {
    this.item = item ? item : null;
  }

}
