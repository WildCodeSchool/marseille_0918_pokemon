


class Pokemon {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      // this.type1 = data.types[0].type.name;
      // this.type2 = data.types[1].type.name;
      this.weight = data.weight;
      this.ability1 = data.abilities[0].ability.name;
      this.ability2 = data.abilities[1].ability.name;
    }
  }
  
  export default Pokemon;