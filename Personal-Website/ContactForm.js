// function sendMail(){
//  var params = {
//  name: document.getElementById("name").value,
//  email: document.getElementById("email").value,
//  message: document.getElementById("message").value,

//  };

//  const serviceID = "service_nepcajf";
//  const templateID = "template_xrgfq5h";
 
//  emailjs
//  .send(serviceID,templateID,params)
 
//  .then(
//      res => {
//          document.getElementById("name").value =" ";
//          document.getElementById("email").value =" ";
//          document.getElementById("message").value =" ";
//          console.log(res);
//          alert("Your message sent successfully");
 
//      }
//  )
//  .catch((err) => console.log(err));
// }

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_o7snwt7";
    const templateID = "template_4fek3to";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
