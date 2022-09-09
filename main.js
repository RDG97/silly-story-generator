                    //  COMPLETE VAR AND FUNCTION

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

                    // RAW TEXT STRINGS

const storyText = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

                    // EVENT LISTENER AND FUNCTION

                                // Stretch goal, let user add variables!

const varSubmit = document.querySelector('.varSubmit');

const personA = document.querySelector('.personAdd');

const placeA = document.querySelector('.placeAdd');

const fateA = document.querySelector('.fateAdd');

function addVars() {
  const newLength = insertX.push(personA.value);
  const newLength2 = insertY.push(placeA.value);
  const newLength3 = insertZ.push(fateA.value);
}


varSubmit.addEventListener('click', addVars);
                                // end stretch goal

function result() {

    let newStory = storyText;

const xItem = randomValueFromArray(insertX);

const yItem = randomValueFromArray(insertY);

const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(':insertX:',xItem);
newStory = newStory.replaceAll(':insertY:',yItem);
newStory = newStory.replaceAll(':insertZ:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.071428)} stone`;
    const temperature =  `${Math.round((94-32) * .5556)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
