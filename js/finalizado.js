function reiniciarJuego() {
    clearInterval(intervaloTiempo); //Detiene el cronómetro
  
    //Limpiar el LocalStorage
    localStorage.removeItem(alias);
  
    //Restablece valores
    alias = '';
    score = 0;
    tiempo = 0;
    musica = false;
  
    //pantalla de inicio del juego
    mostrarPantalla('inicio');
  
    // Reinicia la entrada del alias
    document.getElementById('aliasInput').value = '';
  }