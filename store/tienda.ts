import { defineStore } from 'pinia'
export const useTienda = defineStore({
  id: 'tienda',
  state: () => ({
    botonModalInicio:true,
    infoParteDos:'',
    socket:'',
    modalFaltaInfomacion:false,
    modalNoRegistradoRunt: false,
    modalSoatVigente: false,
    parteDos:false,
  }),
  getters: {

  },
  actions: {
    setBotonModalInicio(value:boolean){
      this.botonModalInicio = value
    },
    setInfoParteDos(value:any){
      this.infoParteDos = value
    },
    setSocket(value:string){
      this.socket = value
    },
    setModalNoRegistradoRunt(value:boolean){
      this.modalNoRegistradoRunt = value
    },
    setModalSoatVigente(value:boolean){
      this.modalSoatVigente = value
    },
    setParteDos(value:boolean){
      this.parteDos = value
    },
    setModalFaltaInfomacion(value:boolean){
      this.modalFaltaInfomacion = value
    },
  }
})