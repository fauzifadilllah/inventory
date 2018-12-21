import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    peminjamanService : service(),
    store : service(),
    // model(params){
    //     return RSVP.hash({
        
    //         departemen : this.get('store').findAll('departemen').then(res => res),
    //         kategori   : this.get('store').findAll('kategori').then(res => res),
    //         barang     :  this.get('store').findRecord('barang', params.barang_id).then(res => res)
           
            
    
    //     })
        
    //     },
    //     setupController(controller,model){
    //         // console.log(model)
            
    //         controller.set('model', model.barang)
    //         controller.set('departemens', model.departemen)
    //         controller.set('kategoris', model.kategori)
    //     }
    model(params){
        return RSVP.hash({
            barang : this.get('store').findRecord('barang', params.barang_id).then(res => res),
            karyawan : this.get('store').findAll('karyawan').then(res => res),
        })
    },
    setupController(controller,model){
        controller.set('model', model.barang)
        controller.set('karyawans', model.karyawan)
    }
        
});
