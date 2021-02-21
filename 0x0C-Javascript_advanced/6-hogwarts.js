function studentHogwarts() {
	let privateScore = 0;
	let name = null;
  
	function changeScoreBy(points) {
	  privateScore += points;
	}
	this.setName = (newName) => {
	  name = newName;
	};
	this.rewardStudent = () => {
	  changeScoreBy(1);
	};
	this.penalizeStudent = () => {
	  changeScoreBy(-1);
	};
	this.getScore = () => {
	  return name + " : " + privateScore;
	};
  }
  
  let harry = new studentHogwarts();
  harry.setName("Harry");
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore());
  
  let draco = new studentHogwarts();
  draco.setName("Draco");
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore());