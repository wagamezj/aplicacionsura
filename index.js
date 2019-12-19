var firebaseConfig = {
    apiKey: "AIzaSyDaqrMlUt7LbbvV0mtjlKQMwT-ReCwO990",
    authDomain: "cuadros-de-turno.firebaseapp.com",
    databaseURL: "https://cuadros-de-turno.firebaseio.com",
    projectId: "cuadros-de-turno",
    storageBucket: "cuadros-de-turno.appspot.com",
    messagingSenderId: "559860788951",
    appId: "1:559860788951:web:10df0a4a3de1f9d0270a92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var d = new Date();
  var t = d.getTime();
  var counter = t;
  document.getElementById("form").addEventListener("submit",(e)=>{
    var task = document.getElementById("task").value;
    var descripcion = document.getElementById("descripcion").value;
    e.preventDefault();
    createtask(task,descripcion);
    FormData.reset();
  });


  function createtask(taskname,descripcion){
      console.log(counter);
      counter+=1;
      console.log(counter);
      var task={
          task: taskname,
          id:counter,
          descripcion:descripcion
      }
      let db= firebase.databaseURL().ref("task/"+counter);
      db.set(task);

  }