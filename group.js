function attendance(input) {
    const words = ["minahal", "nagmahal", "nasaktan"];
    let result = `Absent: ${input}`;
  
    if (words.includes(input)) {
      return `Present: ${input}`;
    }
    return result;
  }
  
  console.log(attendance("Minahal"));
  