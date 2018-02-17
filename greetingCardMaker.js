// This program will construct an object that can create different greeting cards

const CardMaker = {
    makeFrontMessage: function(string) {
      return `<h2>${string}</h2>`
    }
  }
  
  //Refactor this to link this object to cardMaker
  const BirthdayCard = Object.create();