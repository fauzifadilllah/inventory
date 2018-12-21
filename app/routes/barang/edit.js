import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    // model(){
    //     return this.get('store').findAll('kategori')
    // }
    // barangService : service(),
    // store : service(),
    model(params){
        //di dalam get = nama service kemudian.method 
        // this.get('karyawanService').lihatKaryawan().then(res => res)
        
        // console.log(this.model.barang)
     
    return RSVP.hash({
        
        departemen : this.get('store').findAll('departemen').then(res => res),
        kategori : this.get('store').findAll('kategori').then(res => res),
        barang        :  this.get('store').findRecord('barang', params.barang_id).then(res => res)
       
        

    })
    
    },
    setupController(controller,model){
        // console.log(model)
        
        controller.set('model', model.barang)
        controller.set('departemens', model.departemen)
        controller.set('kategoris', model.kategori)
    }
    
});
