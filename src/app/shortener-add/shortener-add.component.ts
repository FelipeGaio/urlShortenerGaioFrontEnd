import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-shortener-add',
  templateUrl: './shortener-add.component.html',
  styleUrls: ['./shortener-add.component.css']
})

export class ShortenerAddComponent implements OnInit {

  shortenerForm: FormGroup;
  url:string='';
  urlShortener:string='';
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.shortenerForm = this.formBuilder.group({
      'url' : ['https://gist.github.com/marc-ed-raffalli/1cbb8638b2b7c959bf9f701e3fd0ccb1', Validators.required],
      'urlShortener' : [null]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addShortener(form)
      .subscribe(response => {
          let url = response['url'];
          this.urlShortener = url;
          this.shortenerForm.controls['url'].setValue(url);
          console.log(this.shortenerForm.value)
          this.isLoadingResults = false;
        }, (error) => {
          console.log(error);
          this.isLoadingResults = false;
        });
  }

}
