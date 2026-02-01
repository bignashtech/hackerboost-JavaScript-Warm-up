function welcomeUser(name = "Guest", isMember) {
  // If user is a member
  if (isMember === true) {
    // Includes the default Guest case automatically
    console.log(`Welcome back, VIP ${name}!`);
  } else {
    // Not a member
    console.log(`Hello and welcome, ${name}!`);
  }
}

// Function call for at least four different ways:

welcomeUser("Nash", true); // Welcome back, VIP Nash!

welcomeUser("Nash", false); // Hello and welcome, Nash!

welcomeUser(undefined, true); // Welcome back, VIP Guest!
welcomeUser(); // Hello and welcome, Guest!
