let team = [
	{
	  name: 'Лучник',
	  type: 'Bowman',
	  health: 50,
	  level: 1,
	  attack: 40,
	  defence: 10
	},
	{
	  name: 'Маг',
	  type: 'Magician',
	  health: 50,
	  level: 1,
	  attack: 40,
	  defence: 10
	},
	{
	  name: 'Воин',
	  type: 'Warrior',
	  health: 50,
	  level: 1,
	  attack: 40,
	  defence: 10
	},
];


function* iter(team) {
	for(let i = 0; i < team.length; i++) {
		yield team[i]; 
	}
}

for (let char of iter(team)) {
	console.log(char);
}