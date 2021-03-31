import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Color } from '../models/Color';
import { Zone } from '../models/Zone';
import { AddColorServiceService } from '../services/add-color-service.service';
import { AddZoneServiceService } from '../services/add-zone-service.service';

@Component({
  selector: 'app-delete-zone',
  templateUrl: './delete-zone.component.html',
  styleUrls: ['./delete-zone.component.scss']
})
export class DeleteZoneComponent implements OnInit {

  getForm: FormGroup;
  zone: Zone = new Zone();
  isValid: boolean = false;
  color: Color = new Color();

  constructor(
    private fb: FormBuilder,
    private zoneService: AddZoneServiceService
  ) { }

  ngOnInit(): void {
    this.getForm = this.fb.group({
      'zoneId': ['', [Validators.required]]
    });
  }

  onSubmit()
  {
    this.zoneService.getZone(this.getForm.controls['zoneId'].value).subscribe(
      data =>
      {
        this.zone = data;
        this.zone.zonePop = data.population;
        this.isValid = true;
      },
      error =>
      {
        alert("Error! Zone ID not found.");
        this.isValid = false;
        this.getForm.reset();
      }
    )
  }

  onDelete()
  {
    this.zoneService.deleteZone(this.getForm.controls['zoneId'].value).subscribe(
      data => 
      {
        if(data == 1)
        {
          alert("Successfully deleted!");
          this.isValid = false;
          this.getForm.reset();
        }
        else{
          alert("Error! Failed to delete.");
          this.isValid = false;
          this.getForm.reset();
        }
      }
    )
  }

}
