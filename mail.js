const firebaseConfig = {
    apiKey: "AIzaSyBbm--jfIKkgipxCUphZ0Ek_wLaf3she1U",
    authDomain: "vihaan-259b3.firebaseapp.com",
    databaseURL: "https://vihaan-259b3-default-rtdb.firebaseio.com",
    projectId: "vihaan-259b3",
    storageBucket: "vihaan-259b3.appspot.com",
    messagingSenderId: "324283223416",
    appId: "1:324283223416:web:2d3b57ef47d7efb507cc8d",
    measurementId: "G-27B7TDVZW1"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.getAnalytics(app);

  var contactForm = firebase.database().ref("vihaanLogin");

  document.getElementById("RegistrationFrom").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.prevetDefault();
    var name = getElementVal("RegiName");
    var emailId = getElementVal("RegiEmailAddres");
    var pswd = getElementVal("RegiConfirmPassword");
    var wantMail = getElementVal("wantMail");

    saveMessages(name, emailId, pswd, wantMail);

    document.querySelector(".alert").style.display = "block";
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    },3000);

    document.getElementById("RegistrationFrom").reset();
  };

  const saveMessages = (name, emailId, pswd, wantMail) => {
    var newContactForm = contactForm.push();
    newContactForm.set({
        name : name,
        emailId : emailId,
        pswd : pswd,
        wantMail : wantMail
    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }