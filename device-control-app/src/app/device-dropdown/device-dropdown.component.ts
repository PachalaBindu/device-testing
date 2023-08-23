import { Component } from '@angular/core';
import { DeviceService } from './device-dropdown.service';

@Component({
  selector: 'device',
  templateUrl: './device-dropdown.component.html',
  styleUrls: ['./device-dropdown.component.scss']
})
export class DeviceDropdownComponent {
  isOpen: boolean = false;
  options: string[] = ['Nexus_9', 'Pixel_XL', 'Galaxy_A13', 'Samsung_Galaxy_S20_ultra', 'Samsung_fold'];

  constructor(private service: DeviceService) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    if (option) {
      this.service.openDevice(option).subscribe((response)=>{
        console.log(response);
      });
    }
  }
}
