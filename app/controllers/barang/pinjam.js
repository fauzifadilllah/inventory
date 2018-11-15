import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    barangService : service(),
    init(){
        this._super(...arguments)
        this.set('barang', {});
    },
    actions : {
    pinjam(barang){
        this.get('barangService').pinjam(barang)
        this.set('barang', {})
        console.log()
    },
}
});

