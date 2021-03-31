import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Color } from '../models/Color';
import { Zone } from '../models/Zone';
import { AddColorServiceService } from '../services/add-color-service.service';
import { AddZoneServiceService } from '../services/add-zone-service.service';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.scss']
})
export class AddZoneComponent implements OnInit {
  
  zoneForm: FormGroup;
  colors: Color[] = [];
  zone: Zone = new Zone();
  color : Color = new Color();
  map = new Map();

  constructor(
    private fb: FormBuilder,
    private colorService: AddColorServiceService,
    private zoneService: AddZoneServiceService
  ) { }

  ngOnInit(): void {
    this.zoneForm = this.fb.group({
      'zoneName': ['', [Validators.required]],
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
    this.color = this.zoneForm.controls['zoneColor'].value;
    this.map.set('zoneName', this.zoneForm.controls['zoneName'].value);
    this.map.set('zonePop', this.zoneForm.controls['zonePop'].value);
    this.map.set('colorName', this.color.colorName);

    this.zoneService.addZone(this.map).subscribe(
      data =>
      {
        alert("Successfully added zone! Zone ID : " + data); 
        this.zoneForm.reset();
      },
      error => 
      {
        alert("Error in adding zone. Try again.");
        this.zoneForm.reset();
      }
    )
  }
}
