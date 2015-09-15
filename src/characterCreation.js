import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class characterCreation {
  constructor(appState) {
    this.appState = appState;
  }

  createCharacter() {
  	let character = this.generateCharacter();

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(character)));
    element.setAttribute('download', this.characterName + ".json");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  
  generateCharacter() {
   return {
		"name": this.characterName,
		"characteristics": {
			"race": "",
			"gender": "",
			"alignment": "",
			"size": "",
			"hair": "",
			"eyes": "",
			"skin": "",
			"height": "",
			"weight": 0,
			"age": 0,
			"deity": "",
			"homeland": "",
			"description": ""
		},
		"abilityScores": {
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 0
		},
		"stats": {
			"offense": {
				"bab": "",
				"cmb": 0
			},
			"defense": {
				"currentHP": 0,
				"maxHP": 0,
				"ac": 0,
				"touchAC": 0,
				"cmd": 0,
				"willSave": 0,
				"fortSave": 0,
				"reflexSave": 0,
				"spellResistance": 0
			}
		},
		"traits": {
			"racial": [
			],
			"selected": [
			],
			"drawbacks": [
			]
	
		},
		"feats": {
			"selected": [
			],
			"flaws": [
			]
		},
		"speed": {
			"land": 0,
			"swim": 0,
			"fly": 0,
			"burrow": 0
		},
		"languages": [
		],
	"skills": [
			{
				"name": "Acrobatics",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Appraise",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name":"Bluff",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Climb",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Craft",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Diplomacy",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Disable Device",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Disguise",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Escape Artist",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Fly",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Handle Animal",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Heal",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Intimidate",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Arcana",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Dungeoneering",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Engineering",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Geography",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge History",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Local",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Nature",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Nobility",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Planes",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Knowledge Religion",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Linguistics",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Perception",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Perform",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Profession",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Ride",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Sense Motive",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Sleight of Hand",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Spellcraft",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Stealth",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Survival",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Swim",
				"ranks": 0,
				"classSkill": false
			},
			{
				"name": "Use Magic Device",
				"ranks": 0,
				"classSkill": false
			}
		],
		"weapons": [
			{
				"name": "",
				"damage": "",
				"crit": "",
				"weight": 0,
				"value": 0,
				"isMasterwork": false,
				"weaponBonus": "",
				"material": {
					"name": "",
					"hpIn": 0,
					"hardness": 0,
					"description": ""
				},
				"enchantments": [
				]
			}
		],
		"armor": {
			"name": "",
			"ac": 0,
			"maxDexBonus": 0,
			"armorCheckPenalty": -0,
			"arcaneSpellFailureChance": 0,
			"speed": "",
			"weight": 0,
			"value": 0,
			"isMasterwork": false,
			"armorBonus": "",
			"material": {
				"name": "",
				"hpIn": 0,
				"hardness": 0,
				"description": ""
			},
			"enchantments": [
				{
					"name": "",
					"description": "",
					"aura": ""
				}
			]
		},
		"wondrousItems": [
			{
				"slot": "Belt",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Body",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Chest",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Eyes",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Feet",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Hand",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Head",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Headband",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Neck",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Shoulders",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			},
			{
				"slot": "Wrists",
				"name": "",
				"value": 0,
				"aura": "",
				"weight": 0,
				"description": ""
			}
		],
		"rings": [
		],
		"inventory": [
		],
		"classes": [
		]
	};
  } //end generateCharacter()
}
