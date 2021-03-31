import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Color } from '../models/Color';
import { AddColorServiceService } from '../services/add-color-service.service';
import { AddZoneServiceService } from '../services/add-zone-service.service';

@Component({
  selector: 'app-update-zone',
  templateUrl: './update-zone.component.html',
  styleUrls: ['./update-zone.component.scss']
})
export class UpdateZoneComponent implements OnInit {

  updateForm: FormGroup;
  colors: Color[] = [];
  map = new Map();
  color: Color = new Color();

  constructor(
    private fb: FormBuilder,
    private colorService: AddColorServiceService,
    private zoneService: AddZoneServiceService
  ) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      'zoneId': ['', [Validators.required]],
      'zonePop': ['', [Validators.required]],
      'zoneColor': ['', [Validators.required]]
    });

    this.colorService.getAllColors().subscribe(
      data =>
      {
        this.colors = data;
      }
    )
  }

  onSubmit()
  {
    this.color = this.updateForm.controls['zoneColor'].value;
    this.map.set('zoneId', this.updateForm.controls['zoneId'].value);
    this.map.set('zonePop', this.updateForm.controls['zonePop'].value);
    this.map.set('colorName', this.color.colorName);

    this.zoneService.updateZone(this.map).subscribe(
      data =>
      {
        console.log(data);
        if(data == 1)
        {
          alert("Successfully updated zone!!");
          this.updateForm.reset();
        }
        else if(data == -1)
        {
          alert("Error! Zone ID not found.");
          this.updateForm.reset();
        }
      },
      error => 
      {
        alert("Error! Zone ID not found.");
        this.updateForm.reset();
      }
    )
  }

}
