import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

const ON_STATE_CLASS = 'button-is-on';
const OFF_STATE_CLASS = 'button-is-off';
const TURNING_OFF_STATE_CLASS = 'button-is-turning-off';
const TURNING_ON_STATE_CLASS = 'button-is-turning-on';
const ERROR_STATE_CLASS = 'button-error';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleButtonComponent implements OnChanges {
  @Input() selected: boolean;
  @Input() deviceInSync: boolean;
  @Output() onSelectedChange = new EventEmitter<boolean>();

  public switchingOn: boolean;
  public switchingOff: boolean;
  private newButtonState: boolean;

  public buttonStateClass: string;

  private hasError: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // const { selected } = changes;
    // if (selected) {
    //   this.switchingOff = false;
    //   this.switchingOn = false;
    // }
    const { deviceInSync } = changes;
    if (deviceInSync) {
      if (deviceInSync.firstChange && !deviceInSync.currentValue) {
        this.hasError = true;
      } else {
        this.hasError = false;
      }
    }
    this.newButtonState = this.selected;
    this.updateButtonStateClass();
  }

  public toggleSelected(): void {
    this.newButtonState = !this.selected;
    this.onSelectedChange.emit(this.newButtonState);
  }

  private updateButtonStateClass(): void {
    if (this.selected) {
      if (this.deviceInSync) {
        this.buttonStateClass = ON_STATE_CLASS;
      } else {
        this.buttonStateClass = TURNING_ON_STATE_CLASS;
      }
    } else {
      if (this.deviceInSync) {
        this.buttonStateClass = OFF_STATE_CLASS;
      } else {
        this.buttonStateClass = TURNING_OFF_STATE_CLASS;
      }
    }

    if (this.hasError) {
      this.buttonStateClass = ERROR_STATE_CLASS;
    }
  }
}
