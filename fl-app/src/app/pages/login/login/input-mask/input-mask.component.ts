import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { BasicResource, Params } from '../../../../services/http.service';
import { NgForm } from '@angular/forms';
import { Link, LinkService } from '../../../../services/link.service';
import { HttpParams } from '@angular/common/http';

export interface InputField {
  label: string;
  type: string;
  required: boolean;
  parameter: string;

}

export interface InputMask extends BasicResource {
  inputFields: Array<InputField>;
}


@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss']
})
export class InputMaskComponent implements OnInit, OnChanges {

  @Input()
  mask: InputMask;

  @Output() submitClick: EventEmitter<Link> = new EventEmitter();

  private submitLink: Link;

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (!!this.mask) {
      this.submitLink = this.getLoginLink(this.mask);
    }
  }

  public submitLogin(inputForm: NgForm): void {
    let params: HttpParams = new HttpParams();

    for (const key of Object.keys(inputForm.controls)) {
      params = params.set(key, inputForm.controls[key].value);
    }

    this.submitLink.params = params;
    this.submitClick.emit(this.submitLink);

  }

  getInputFieldType(field: InputField): string {
    return field.type.toLowerCase();
  }

  getLoginLink(mask: InputMask): Link {
      return this.linkService.getLinkByReltype(mask._links, 'submit');
  }

}
