////////********** */ Инициализация плагина Select2 ------------->

$(document).ready(function () {
    $(function () {
        $('.select2').select2();

        $(".select2-placeholder-multiple").select2(
            {
                placeholder: "Select State"
            });
        $(".js-hide-search").select2(
            {
                minimumResultsForSearch: 1 / 0
            });
        $(".js-max-length").select2(
            {
                maximumSelectionLength: 2,
                placeholder: "Select maximum 2 items"
            });
        $(".select2-placeholder").select2(
            {
                placeholder: "Select a state",
                allowClear: true
            });
        $(".js-select2-icons").select2(
            {
                minimumResultsForSearch: 1 / 0,
                templateResult: icon,
                templateSelection: icon,
                escapeMarkup: function (elm) {
                    return elm
                }
            });

        function icon(elm) {
            elm.element;
            return elm.id ? "<i class='" + $(elm.element).data("icon") + " mr-2'></i>" + elm.text : elm.text
        }
    });
});