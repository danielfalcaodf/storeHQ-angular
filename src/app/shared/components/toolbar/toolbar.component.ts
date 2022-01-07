import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, ChangeDetectionStrategy, HostBinding, ViewRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'sthq-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolbarComponent implements OnInit {
  public title = 'Loja de HQ Marvel';
  @HostBinding('class') className = '';


  toggleControl = new FormControl(false);

  constructor(private overlay: OverlayContainer) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        $('sthq-root').addClass(darkClassName);
      } else {
        $('sthq-root').removeClass(darkClassName)
      }
    });
  }

}
