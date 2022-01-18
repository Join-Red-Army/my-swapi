export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  async getResource(url) {
    const response = await fetch(this._apiBase + url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return await response.json();
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }


  getAllPlanets = async () => {
    const response = await fetch(this._apiBase + '/planets');
    const planets = await response.json();
    console.log(planets.results.map(this._transformPlanet))
    return planets.results.map(this._transformPlanet)
      //.slice(0, 10);
  };

  getPlanet = async (id) => {
    const response = await this.getResource('/planets/' + id);
    return this._transformPlanet(response);
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      gravity: planet.gravity,
      orbitalPeriod: planet.orbital_period,
      terrain: planet.terrain
    };
  }


  getAllPeople = async () => {
    const response = await this.getResource('/people');
    const people = await response.json();
    return people.results.map(this._transformPeople);
  }

  getPerson = async (id) => {
    const response = await this.getResource(`/people/${id}/`);
    return this._transformPerson(response);
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      mass: person.mass,
      height: person.height
    };
  }

}