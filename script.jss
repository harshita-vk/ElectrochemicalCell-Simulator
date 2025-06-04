const standardPotentials = {
    "Zn": -0.76,
    "Cu": 0.34,
    "Fe": -0.44,
    "Ag": 0.80,
    "Pb": -0.13,
    "Ni": -0.23,
  };
  
  function showGalvanic() {
    document.getElementById("galvanicForm").classList.remove("hidden");
    document.getElementById("concentrationForm").classList.add("hidden");
    document.getElementById("result").innerText = "";
  }
  
  function showConcentration() {
    document.getElementById("concentrationForm").classList.remove("hidden");
    document.getElementById("galvanicForm").classList.add("hidden");
    document.getElementById("result").innerText = "";
  }
  
  function calculateEMF() {
    const galvanicVisible = !document.getElementById("galvanicForm").classList.contains("hidden");
  
    if (galvanicVisible) {
      const anode = document.getElementById("anode").value;
      const cathode = document.getElementById("cathode").value;
      const anConc = parseFloat(document.getElementById("anodeConcentration").value);
      const catConc = parseFloat(document.getElementById("cathodeConcentration").value);
  
      if (isNaN(anConc) || isNaN(catConc) || anConc <= 0 || catConc <= 0) {
        document.getElementById("result").innerText = "Please enter valid concentrations.";
        return;
      }
  
      const E_anode = standardPotentials[anode];
      const E_cathode = standardPotentials[cathode];
      const Q = anConc / catConc;
      const emf = (E_cathode - E_anode) - (0.059 * Math.log10(Q));
      document.getElementById("result").innerText = `E°cell = ${emf.toFixed(3)} V`;
    } else {
      const electrode = document.getElementById("electrode").value;
      const lowConc = parseFloat(document.getElementById("lowConc").value);
      const highConc = parseFloat(document.getElementById("highConc").value);
  
      if (isNaN(lowConc) || isNaN(highConc) || lowConc <= 0 || highConc <= 0) {
        document.getElementById("result").innerText = "Please enter valid concentrations.";
        return;
      }
  
      const Q = lowConc / highConc;
      const emf = -(0.059 * Math.log10(Q));
      document.getElementById("result").innerText = `E°cell = ${emf.toFixed(3)} V`;
    }
  }
  
