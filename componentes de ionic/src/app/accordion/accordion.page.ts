import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonAccordionGroup, IonAccordion, IonItem, IonLabel]
})
export class AccordionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
