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
     getBorrador(){
        return this.borrador;
     }
     getMaterial(){
        return this.material;
     }

    obtener(){
      obj.color = color.value;
      obj.dimencion = parseInt(dimension.value);
      marca.forEach((elem) => {
          if (elem.checked) {
            obj.setMarca({ marca: elem.value });
          }
      });
      borrador.forEach((elem) => {
          if (elem.checked) {
            obj.borrador = Boolean(elem.value);
            console.log(borrador);
          }
      });
  
      material.forEach((elem) => {
        if (elem.checked) {
          obj.material = elem.value;
        }
    });  
    }
 }

 let myFormData = document.querySelector("#myFormData");
 let myTablitaData = document.querySelector("#myTablitaData") 

 let obj = undefined;
 let color = document.querySelector(`[name="color"]`);
 let dimension = document.querySelector(`[name="dimension"]`);
 let marca = document.querySelectorAll(`[name="marca"]`);
 let borrador = document.querySelectorAll(`[name="borrador"]`);
 let material = document.querySelectorAll(`[name="material"]`);

 addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({});
    console.log(obj);
    color.value = obj.color;
    dimension.value = obj.dimencion;
    marca.forEach((radio) => {
        if (radio.value === obj.getMarca()) {
          radio.checked = true;
        }
    })
    borrador.forEach((radio) => {
        if (radio.value === obj.getBorrador().toString()) {
          radio.checked = true;
        }
    })
    material.forEach((radio) => {
        if (radio.value === obj.getMaterial()) {
          radio.checked = true;
        }
    })
 })

 myFormData.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
 
    obj.obtener();

    myTablitaData.classList.remove("div_hide");

    let myTbodyData = document.querySelector("#myTbodyData");
    
    myTbodyData.insertAdjacentHTML("beforeend", `
    <tr id="atributos">
      <td style="color:${obj.color}">${obj.color}</td>
      <td>${obj.dimencion} cm</td>
      <td>${obj.getMarca()}</td>
      <td>${obj.borrador ? "Tiene" : "No Tiene"}</td>
      <td>${obj.material}</td>

    </tr>
    `)
   
    console.log(data);
    console.log(obj);
   
 })


 function showValue(newValue) {
    document.getElementById("rangeValue").innerHTML = newValue;
 }



