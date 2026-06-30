function getUserFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Amit", role: "developer" });
    }, 2000);
  });
}

async function showUser() {
  console.log("Fetching user from database...");

  const user = await getUserFromDB();

  console.log("User loaded:");
  console.log(user);
}

showUser();