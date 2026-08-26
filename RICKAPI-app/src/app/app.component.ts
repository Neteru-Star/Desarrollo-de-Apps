import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private rmService = inject(RickAndMortyService);
  
  // La magia de las Signals funciona igual aquí
  episodesData = toSignal(this.rmService.getEpisodes());
}