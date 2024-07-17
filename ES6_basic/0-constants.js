export function taskFirst() {
    const TASK = 'I prefer const when I can.';
    return TASK;
  }

  export function getLast() {
    return ' is okay';
  }

  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
    return combination;
  }
