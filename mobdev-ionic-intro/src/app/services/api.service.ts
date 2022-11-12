import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get('https://swapi.dev/api/films');
  }

  getFilm(id){
    return this.http.get(`https://swapi.dev/api/films/${id}`);
  }

  getPeople(){
    return this.http.get('https://swapi.dev/api/people');
  }

  getPerson(id) {
    return this.http.get(`https://swapi.dev/api/people/${id}`);
  }

  getPlanets(){
    return this.http.get('https://swapi.dev/api/planets');
  }

  getPlanet(id){
    return this.http.get(`https://swapi.dev/api/planets/${id}`);
  }

  getCharacters(){
    return this.http.get('https://www.breakingbadapi.com/api/characters');
  }

  getCharacter(id){
    return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
  }

  getEpisodes(){
    return this.http.get('https://www.breakingbadapi.com/api/episodes');
  }
  getEpisode(id){
    return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
  }
  getDeaths(){
    return this.http.get('https://www.breakingbadapi.com/api/deaths-count');
  }
  getDeath(id){
    return this.http.get(`https://www.breakingbadapi.com/api/deaths-count/${id}`);
  }

}
