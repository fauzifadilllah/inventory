import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    barangService : service(),
    actions : {
          selecteddep: function(selected) {
            console.log(selected)
            this.set('model.nama_departemen', selected)
            
            console.log(this.get('selecteddep'))
        },
        selectedkat: function(selected) {
            console.log(selected)
        
            this.set('model.nama_kategori',selected)
            console.log(this.get('selectedkat'))
        },
        // updateBarang(){
        //     this.transitionToRoute('barang.index')
            
        // },
        // cancel(){
        //     this.transitionToRoute('barang.index');
        // },
        updateBarang(item){
            // this.get('karyawanService').updateBarang(item),
            this.get('barangService').updateBarang(item),
            this.transitionToRoute('barang.index')
        },
        cancel(){
            this.transitionToRoute('barang.index');
        }
    }
});
