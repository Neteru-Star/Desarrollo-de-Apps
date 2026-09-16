import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonList, IonItem, IonLabel, IonToggle } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { moon, shapesOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonList, IonItem, IonLabel, IonToggle, RouterModule],
})
export class HomePage implements OnInit {
  isDarkMode = false;

  constructor() {
    addIcons({ moon, shapesOutline });
  }

  ngOnInit() {
    // Check system preference on load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = prefersDark.matches;
    this.applyTheme(this.isDarkMode);
  }

  toggleDarkMode(event: any) {
    this.isDarkMode = event.detail.checked;
    this.applyTheme(this.isDarkMode);
  }

  private applyTheme(isDark: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
}
