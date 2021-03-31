import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Color } from '../models/Color';
import { AddColorServiceService } from '../services/add-color-service.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.scss']
})
export class AddColorComponent implements OnInit {

  colorForm: FormGroup;
  color: Color = new Color();

  constructor(
    private fb: FormBuilder,
    private service: AddColorServiceService
    ) { }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      'colorName': ['', [Validators.required]],
      'meaning': ['', [Validators.required]]
    });
  }

  onSubmit()
  {
    this.color.colorName = this.colorForm.controls['colorName'].value
    this.color.meaning = this.colorForm.controls['meaning'].value

    console.log(this.color);

    this.service.addColor(this.color).subscribe(
      data => 
      {
        console.log(data);
        alert("Color added successfully.");
        this.colorForm.reset();
      },
      errors => 
      {
        alert("Error! Duplicate color.");
        this.colorForm.reset();
      }
    )
  }

}
