import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpisodeResponse } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private http = inject(HttpClient);

  getEpisodes() {
    return this.http.get<EpisodeResponse>('https://rickandmortyapi.com/api/episode');
  }
}