// const loginbtn = document.getElementById('loginbtn');
// const PlayerIdInput = document.getElementById('playerId');
// const serverIdInput = document.getAnimations('ServerId');
// const massageDiv = document.getElementById('massage');

// loginbtn. addEventListener('click', ()=> {

//     const playerId = PlayerIdInput.Value.trim();
//     const ServerId = serverIdInput.Value.trim();
//     if (!playerId || !ServerId) {
//         massageDiv.style.color = 'red';

//         massageDiv.textContent = 'please enter both player id and server id.';
//         return;
//     }
//     massageDiv.style.color = '#22c55e';
//     massageDiv,textContent = 'Login successfull! welcome player $ {playerId} (Server ${serverId})';
// })
    //   const playerID = document.getElementById("playerID").value.trim();
    //   const serverID = document.getElementById("serverID").value.trim();
    //   const result = document.getElementById("result");

    //   if (!playerID || !serverID) {
    //     result.style.color = "red";
    //     result.innerText = "Please enter both Player ID and Server ID.";
    //     return;
    //   }

    //   // Example connection logic
    //   result.style.color = "lightgreen";
    //   result.innerText = `Connected! 👑 Welcome MLBB ID ${playerID} (Server ${serverID})`;
     function connectPlayer() {
    const playerID = document.getElementById("playerID").value.trim();
    const serverID = document.getElementById("serverID").value.trim();

    if (!playerID || !serverID) {
      alert("Please enter both Player ID and Server ID.");
      return;
    }

    // Send the player info to chat.html
    window.location.href = `chat.html?playerID=${playerID}&serverID=${serverID}`;
  }