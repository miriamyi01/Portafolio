let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ff8c94;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff8c94; font-family: Prompt, sans-serif;"> Estudiante de Ingeniería en Computación en la Facultad de Ingeniería de la UNAM.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
