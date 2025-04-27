function myFunction() {
    const sidebar=document.getElementById("side-bar");
    sidebar.classList.add("open");
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="block";

  }
  function myFunction2() {
   const sidebar = document.getElementById("side-bar");
    sidebar.classList.remove("open");
    document.getElementById("btn2").style.display="none";
    document.getElementById("btn1").style.display="block";
  }

