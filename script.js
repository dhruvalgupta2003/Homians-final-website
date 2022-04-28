document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 20, 4000);
    counter("count2", 0, 200, 8000);
    
   });
   const inputs = document.querySelectorAll(".input");

   function focusFunc() {
     let parent = this.parentNode;
     parent.classList.add("focus");
   }
   
   function blurFunc() {
     let parent = this.parentNode;
     if (this.value == "") {
       parent.classList.remove("focus");
     }
   }
   
   inputs.forEach((input) => {
     input.addEventListener("focus", focusFunc);
     input.addEventListener("blur", blurFunc);
   });
   
