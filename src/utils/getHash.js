const getHash = () => 
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
  // /# 1 / es lo que se obtiene con location.has
  // (1) es para eliminar solo el primer elemento del inicio de loation.hash (#1), osea el #
  // split para quitar los "/"
  // [1] porque lo resultalte sería [" ", "1", " "] y solo queremos el 1

export default getHash;