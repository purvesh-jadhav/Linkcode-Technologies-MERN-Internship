function bookTicket(seatsAvailable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seatsAvailable) {
        resolve("Ticket booked successfully!");
      } else {
        reject(" Sorry, no seats available.");
      }
    }, 2000); 
  });
}

bookTicket(true)
  .then((message) => {
    console.log(message);

  })
 .catch((error)=>{
    console.log(error);
    
 })