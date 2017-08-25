import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/settings';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  
  constructor(
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private settingsService : SettingsService
    ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }
  
  onSubmit(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show("Settings Saved", {cssClass: "alert-success", timeout: 4000}); 
    this.router.navigate(['/settings']);
  }

}
