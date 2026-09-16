import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonActionSheet } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonActionSheet]
})
export class ActionSheetPage implements OnInit {
  public actionSheetButtons = [
    { text: 'Delete', role: 'destructive', data: { action: 'delete' } },
    { text: 'Share', data: { action: 'share' } },
    { text: 'Cancel', role: 'cancel', data: { action: 'cancel' } },
  ];

  constructor() { }

  ngOnInit() {
  }

}
