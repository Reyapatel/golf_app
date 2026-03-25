console.log("Script running...");
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
console.log("JS LOADED SUCCESSFULLY");

const supabase = createClient(
    'https://bhoyykpqqxbclwpjjmjh.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJob3l5a3BxcXhiY2x3cGpqbWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzOTIxOTAsImV4cCI6MjA4OTk2ODE5MH0.g3Mbsxt8Kud0QGl5CPfi3lOoz1_He0A6v1E1r3BMunU');

window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Signup successful");
  }
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Login successful");
    
    setTimeout(() => {
        window.location.href = "dashboard.html";
}, 500);
  }
};
