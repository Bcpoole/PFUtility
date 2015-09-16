import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class characterCreation {
  constructor(appState) {
    this.appState = appState;

		this.generateScores();

		let defaultBudget = 15;
		this.remainingBudget= defaultBudget;
		this.setTotalBudget(defaultBudget); //Do standard by default
  }

  createCharacter() {

  	if (this.characterName == null || this.characterName.trim().length == 0) {
  		alert("Must input a name");
  		return;
  	}

  	this.characterName = this.characterName.trim();

  	this.generateCharacter();
  }
  
  generateCharacter() {
  	var characterName = this.characterName;
		let reader = new FileReader();

		let client = new XMLHttpRequest();
    client.open('GET', '/characterTemplate.json');
		client.send();
    client.onreadystatechange = function() {
    	if (client.readyState == 4) {
				let character = JSON.parse(client.response);
				character.name = characterName;
				let element = document.createElement('a');
				element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(character)));
				element.setAttribute('download', characterName + ".json");

				element.style.display = 'none';
				document.body.appendChild(element);

				element.click();

				document.body.removeChild(element);
			}
    }
	}

	generateScores() {
		this.scores = [];
		let scoreNames = ['Strength', 'Dexterity', 'Constitution,', 'Intelligence', 'Wisdom', 'Charisma'];

		for (let name of scoreNames) {
			this.scores.push(
				{
					name: name,
					points: 10,
					mod: 0,
					cost: 0
				}
			)
		}
	}

	setTotalBudget(totalBudget) {
		this.totalBudget = totalBudget;

		this.updateBudget();
	}

	determineMod(points) {
		return Math.floor((points - 10) / 2);
	}

	determineCost(points) {
		let values = [-4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17];
		return values[points-10+3];
	}

	updateScores() {
		for (let score of this.scores) {
			score.mod = this.determineMod(score.points);
			score.cost = this.determineCost(score.points);
		}

		this.updateBudget();
	}

	updateBudget() {
		this.remainingBudget = this.totalBudget;
		for (let score of this.scores) {
			this.remainingBudget -= score.cost;
		}
	}
}
