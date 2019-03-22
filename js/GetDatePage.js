/*
* @Author: Administrator
* @Date:   2019-02-22 15:43:19
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-22 15:43:27
*/
(function ($, window, undefined) {
    $('#chkAll label').bind('click', function () {
        $('#ipc_all').trigger('click');
    });
    $('#ipc_all').bind('click', function () {
        $('[name = ipc_item]').prop('checked', this.checked);
    });
    $.extend({
        func: function (options) {
            var option = {
                page: 1,
                url: '',
                searchParam: {},
                tplContentID: '',
                tplBodyID: '',
                pageDivID: ''
            };
            this.option = $.extend(options || {});
            this.option.searchParam.pageindex = this.option.page;
            $.post(
                this.option.url
                , this.option.searchParam
                , function (data) {
                    $('#' + options.tplContentID).empty().append($('#' + options.tplBodyID).tmpl(data.rows));
                    $('[name = ipc_item]').bind('click', function () {
                        $('#ipc_all').prop('checked', $('[name = ipc_item]').length === $('[name = ipc_item]').filter(':checked').length);
                    });
                    $('#' + options.pageDivID).bootstrapPaginator({
                        currentPage: options.page,
                        totalPages: data.pageCount == 0 ? 1 : data.pageCount,
                        size: 'normal',
                        alignment: 'center',
                        itemTexts: function (type, page, current) {
                            switch (type) {
                                case 'first':
                                    return "首页";
                                case 'prev':
                                    return "上一页";
                                case 'next':
                                    return "下一页";
                                case 'last':
                                    return "末页";
                                case 'page':
                                    return page;
                            }
                        },
                        onPageClicked: function (e, originalEvent, type, page) {
                            options.page = page;
                            $.func(options);
                        }
                    });
                },
                'json'
            );
        }
    });
})(jQuery, window, undefined);