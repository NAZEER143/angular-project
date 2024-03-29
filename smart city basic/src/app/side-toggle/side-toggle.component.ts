import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-side-toggle',
  templateUrl: './side-toggle.component.html',
  styleUrls: ['./side-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SideToggleComponent),
      multi: true
    }
  ]
})
export class SideToggleComponent implements ControlValueAccessor {

  @Input() checkedLabelText!: string;
  @Input() uncheckedLabelText!: string;
  isChecked = true;
  isDisabled = false;
  isTouched = false;
  onChange!: (isChecked: boolean) => void;
  onTouch! : () => void;

  writeValue(checked: boolean): void {
    this.isChecked = checked;
  }

  registerOnChange(onChange: (isChecked: boolean) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  toggle(): void {
    if (!this.isDisabled) {
      this.isChecked = !this.isChecked;
      this.onChange(this.isChecked);

      if (!this.isTouched) {
        this.isTouched = true;
        this.onTouch();
      }
    }
  }
} 