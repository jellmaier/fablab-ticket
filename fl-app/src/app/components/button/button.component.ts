import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input()
  label: string;

  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

  clickEvent(): void {
    this.buttonClick.emit(true);
  }

}
