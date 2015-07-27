define([], function () {

    function onInit(e) {
        
        var notes = JSON.parse(localStorage.getItem("notes"));
        if (notes == undefined) {

            var initNotes = [
               { id: 0, title: 'Заголовок 1', note: 'Заметка номер 1' },
               { id: 1, title: 'Заголовок 2', note: 'Заметка номер 2' },
               { id: 2, title: 'Заголовок 3', note: 'Заметка номер 3' }
            ];

            var nextId = 3;
            notes = initNotes;
            localStorage.setItem("nextId", nextId);
            localStorage.setItem("notes", JSON.stringify(initNotes,null,2));
        }
        
        e.view.element.find('#notes-list').kendoMobileListView({
            dataSource: kendo.data.DataSource.create({data: notes}),
            template: "${title}",
            removeNote: function(e) {
                this.notes.remove(e.data);
                this.notes.sync();
            }
        });
        
      }
    return {
        onInit: onInit
    };
});