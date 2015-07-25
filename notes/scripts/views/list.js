define([], function () {

    function onInit(e) {
        var notes = [
            { title: 'Заголовок 1', note: 'Заметка номер 1' },
            { title: 'Заголовок 2', note: 'Заметка номер 2' },
            { title: 'Заголовок 3', note: 'Заметка номер 3' }
        ];

        //TODO: Переделать DataSource так, чтобы он использовал localStorage для хранения
        //TODO: заметок
        e.view.element.find('#notes-list').kendoMobileListView({
            dataSource: kendo.data.DataSource.create({data: notes}),
            template: "${title}"
        });
    }
    
    return {
        onInit: onInit
    };
});