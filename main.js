class lapiz{
     // color  //dato publico
     // dimencion
     // borrador
     // material //al ser publico no debe mencionarse
     #marca //dato privado
     constructor({
            color="#fff700", 
            dimencion = 19, 
            borrador=true, 
            material="Madera", 
            marca= "Mongo"
        }){
            this.color = color;
            this.dimencion = dimencion;
            this.borrador = borrador;
            this.material = material
            this.#marca = marca;
     }
     setMarca({marca}){
         this.#marca = marca;
         return this.getMarca();
     }
     getMarca(){
         return this.#marca;
     }

     getColor(){
        return this.color
     }
     getDimension(){
        return this.dimencion
     }
 }

 let obj = undefined;
 let color = document.querySelector(`[name="color"]`);
 let descripcion = document.querySelector(`[name="dimension"]`);
 let marca = document.querySelector(`[name="marca"]`);
 addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({});
    console.log(obj);
    color.value = obj.color;
    descripcion.value = obj.dimencion;
   // marca.value = obj.marca;

 })

 
 function showValue(newValue) {
    document.getElementById("rangeValue").innerHTML = newValue;
 }