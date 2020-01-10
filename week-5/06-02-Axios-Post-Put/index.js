document.getElementById("post-wall-e").onclick = function () {
    // Create an object with data to submit
    const characterInfo = {
      name: 'WALL-E',
      occupation: 'Waste Allocation Robot',
      weapon: 'Head laser'
    };
    // Make a POST request
    axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
      .then(response => {
        console.log('post successfull and the response is: ', response);
        const character = response.data;
        showCharacter(character);
      })
      .catch(error => {
        console.log('Oh No! Error is: ', error);
      })
  }
  
  function showCharacter(character){
    const characterHtml = `
    <li> id: ${character.id} </li>
    <li> name:${character.name}  </li>
    <li> occupation: ${character.occupation} </li>
    <li> weapon: ${character.weapon} </li>    
     `;
  document.getElementById("showCharacter").innerHTML = characterHtml;
  }

  document.getElementById("add-form").onsubmit = function (event) {
    event.preventDefault();
    const characterInfo = {
      name: document.getElementById("addName").value,
      occupation: document.getElementById("addOccupation").value,
      weapon: document.getElementById("addWeapon").value
    };
    axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
      .then(response => {
        const character = response.data;
        showCharacter(character);
       // Clear the form after submitting:
        document.getElementById("character-form").reset();
      })
      .catch(error => {
        console.log("Error is: ", error);
      })
  }

  document.getElementById("getButton").onclick = function (event) {
    const theId = document.getElementById("theCharId").value;
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
      .then(response => {
        console.log('Response from the API is: ', response.data);
        document.getElementById("updateName").value = response.data.name;
        document.getElementById("updateOccupation").value = response.data.occupation;
        document.getElementById("updateWeapon").value = response.data.weapon;
        document.getElementById("errorMessage").innerHTML ="";
      })
      .catch(error => {
        console.log("The error is: ", error);
        if (error.response.status === 404) {
          document.getElementById("errorMessage").innerHTML =  `There's no character with id: ${theId}. Try some other ID.`
        }
      });
  }

  document.getElementById("update-form").onsubmit = function (event) {
    event.preventDefault();
    const theId = document.getElementById("theCharId").value;
    const updatedcharacterInfo = {
      name: document.getElementById("updateName").value,
      occupation: document.getElementById("updateOccupation").value,
      weapon: document.getElementById("updateWeapon").value
    };
  
    axios.patch(`https://ih-crud-api.herokuapp.com/characters/${theId}`, updatedcharacterInfo)
      .then(response => {
        console.log('update successful: ', response);
        const character = response.data;
        showCharacter(character);
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  