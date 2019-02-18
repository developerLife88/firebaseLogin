  $('#outBTN').on('click', function(){
       console.log("btn is clicked");
      function logout(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("index.html"); //signin page
        },function(){})
    
       }
      logout();
    });
  

/*----------------checking the status one land to the app--------------------*/ 
 function checkAUTH(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("can stay on this page");
        } else {
          // No user is signed in.
          console.log("can not stay on this page redirect");
          window.location.assign("index.html");   //signin page
        }
      });
}

/*-------------------------------------------*/

    
checkAUTH();
