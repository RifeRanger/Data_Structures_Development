function solution(picture) {
  let star = '*';
  let length = picture[0].length + 2;
  console.log(length);
  
  let starString = star.repeat(length); 
  
  
  for (let i = 0; i < picture.length; i++) {
      picture[i] = '*' + picture[i] + '*';
  }
  picture.splice(0, 0, starString);
  picture.push(starString);
  return picture;
}