import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    selected : null,
    selectedkat : null,
    peminjamanService : service(),
    init(){
        this._super(...arguments)
        this.set('barang', {});
    },
    actions : {
        // misalnya(){
        //     $("#wew").keyup(function(){
        //         $("#wew2").val($(this).val());
        //     })
        // }
        // ambil(){
        //     $('#ambil').click(function(){
        //         $('#nama').val('#naro');
        //     })
        // }
        ambil(){
            $('#coba1').keyup(function(){
                $('#coba2').val($(this).val());
            });
        }
   
  
}
});
