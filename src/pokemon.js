class Pokemon {
  constructor(name, images) {
    this.name = name
    this.frontImage = images["front"]
    this.backImage = images["back"]
  }

  render() {
    let html =
    `<div class="pokemon-container">
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
    <h1 class="center-text">${this.name}</h1>
    <div style="width:239px;margin:auto">
    <div style="width:96px;margin:auto">
    <img id="${this.name}-front" src="${this.frontImage}" style="display:block">
    <img id="${this.name}-back" src="${this.backImage}" style="display:none">
    </div>
    </div>
    <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
    </div>
    </div>`

    return html
  }
}
