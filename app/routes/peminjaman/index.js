import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    peminjamanService : service(),
    store : service(),
    model(params){
        return RSVP.hash({
            barang : this.get('peminjamanService').lihatBarang().then(res => res),
            departemen : this.get('store').findAll('departemen').then(res => res),
            kategori : this.get('store').findAll('kategori').then(res => res),
        })
    },
    setupController(controller,model){
        controller.set('barangs', model.barang)
        controller.set('departemens', model.departemen)
        controller.set('kategoris',model.kategori)
    }
});
