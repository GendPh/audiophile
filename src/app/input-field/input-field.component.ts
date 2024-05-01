import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../Service/client.service';
import { Client } from '../../Model/client.model';
import e from 'express';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  @Input("GetLabel") label: string;
  @Input("GetPlaceholder") placeholder: string;
  @Input("GetType") type: string = "text";
  @Input("GetRegexType") regexType: string;
  regex: any;

  private regexPatterns = {
    name: /^[a-zA-Z\s´`^~]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9]{9}$/,
    address: /^[a-zA-Z0-9\s,.]+$/,
    zip: /^[0-9]{5}$/,
    city: /^[a-zA-Z\s´`^~\-]+$/,
    country: /^[a-zA-Z\s´`^~]+$/,
    eMoneyNumber: /^[0-9]{9}$/,
    eMoneyPin: /^[0-9]{4}$/,
  };

  inputValue: string = "";
  inputInvalid: boolean = false;

  constructor(private clientService: ClientService) {
  }


  OnBlurVerifyInput() {
    this.inputValue = this.inputValue.trim();
    if (this.inputValue.length > 0) {
      this.regex = this.regexPatterns[this.regexType];
      this.inputInvalid = !this.regex.test(this.inputValue);
      if (!this.inputInvalid) {
        this.clientService.ConstructClient(this.regexType, this.inputValue);
      }
    }
  }
}
