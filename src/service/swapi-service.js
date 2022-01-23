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


  // Planets
  getAllPlanets = async () => {
    const response = await fetch(this._apiBase + '/planets');
    const planets = await response.json();
    return planets.results.map(this._transformPlanet)
  };

  getPlanet = async (id) => {
    const response = await this.getResource('/planets/' + id);
    return this._transformPlanet(response);
  }

  _transformPlanet = (planet) => {
    const id = this._extractId(planet);
    return {
      id,
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      gravity: planet.gravity,
      orbitalPeriod: planet.orbital_period,
      terrain: planet.terrain,
      
      image: `${this._imageBase}/planets/${id}.jpg`,
    };
  }


  // People
  getAllPeople = async () => {
    const response = await this.getResource('/people/');
    const people = await response;
    return people.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const response = await this.getResource(`/people/${id}`);
    return this._transformPerson(response);
  };

  _transformPerson = (person) => {
    const id = this._extractId(person);
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      mass: person.mass,
      height: person.height,

      image: `${this._imageBase}/characters/${id}.jpg`,
    };
  }


  // Starships
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  _transformStarship = (starship) => {
    const id = this._extractId(starship);
    return {
      id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
      image: `${this._imageBase}/starships/${id}.jpg`
    }
  };

}