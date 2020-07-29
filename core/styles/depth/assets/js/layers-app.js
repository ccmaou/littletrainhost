/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var virtualInput = exports.virtualInput = function () {
        function virtualInput(container) {
            _classCallCheck(this, virtualInput);
    
            this.container = container;
            this.virtualInputs = this.container.find('[data-virtual-input]');
            this.checkboxInputs = this.virtualInputs.find('input');
            this.bindEvents();
        }
    
        _createClass(virtualInput, [{
            key: 'bindEvents',
            value: function bindEvents() {
                var _this = this;
    
                this.checkboxInputs.on('ifChecked', function (event) {
                    _this.addClass(event);
                });
    
                this.checkboxInputs.on('ifUnchecked', function (event) {
                    _this.removeClass(event);
                });
    
                this.virtualInputs.on('click', function (event) {
                    _this.check(event);
                });
            }
        }, {
            key: 'removeClass',
            value: function removeClass(event) {
    
                var input = $(event.currentTarget);
                var virtualInput = input.closest('[data-virtual-input]');
                this.hideCollapse(virtualInput);
                virtualInput.removeClass('checked');
    
                if (input.attr('type') == 'checkbox') {
                    return;
                }
                // remove class from container
                if (virtualInput.data('virtual-input-none') == undefined) {
                    if (this.container.hasClass('is-selected')) {
                        this.container.removeClass('is-selected');
                    }
                }
            }
        }, {
            key: 'addClass',
            value: function addClass(event) {
    
                var input = $(event.currentTarget);
                var virtualInput = input.closest('[data-virtual-input]');
                this.showCollapse(virtualInput);
    
                virtualInput.addClass('checked');
    
                if (input.attr('type') == 'checkbox') {
                    return;
                }
                // add Class to container
                if (virtualInput.data('virtual-input-none') == undefined) {
                    if (!this.container.hasClass('is-selected')) {
                        this.container.addClass('is-selected');
                    }
                }
            }
        }, {
            key: 'showCollapse',
            value: function showCollapse(virtualInput) {
                virtualInput.find('[data-input-collapse]').collapse('show');
            }
        }, {
            key: 'hideCollapse',
            value: function hideCollapse(virtualInput) {
                virtualInput.find('[data-input-collapse]').collapse('hide');
            }
        }, {
            key: 'check',
            value: function check(event) {
                var item = $(event.currentTarget);
    
                if (!item.hasClass('disabled')) {
                    item.find('input').iCheck('check');
                }
            }
        }, {
            key: 'unCheck',
            value: function unCheck(event) {}
        }]);
    
        return virtualInput;
    }();
    
    ;
    
    var numberInput = exports.numberInput = function () {
        function numberInput(container) {
            _classCallCheck(this, numberInput);
    
            this.container = $(container);
    
            this.input = this.container.find('input');
            this.incBtn = this.container.find("[data-input-number-inc]");
            this.decBtn = this.container.find("[data-input-number-dec]");
            this.updateBtn = this.container.find("[data-input-number-update]");
            this.minValue = this.input.attr('min');
            this.maxValue = this.input.attr('max');
            this.inputValue = this.input.val();
            this.price = this.container.find("[data-input-number-price]");
            this.bindEvents();
        }
    
        _createClass(numberInput, [{
            key: 'bindEvents',
            value: function bindEvents() {
                var _this2 = this;
    
                this.incBtn.on('click', function () {
                    _this2.increment();
                });
                this.decBtn.on('click', function () {
                    _this2.decrement();
                });
                this.input.on('change', function (event) {
                    _this2.inputValue = event.target.value;
                });
            }
        }, {
            key: 'handleInputChange',
            value: function handleInputChange() {}
        }, {
            key: 'increment',
            value: function increment() {
                this.inputValue++;
    
                if (this.inputValue >= this.maxValue) {
                    this.inputValue = this.maxValue;
                }
    
                this.updateInput();
            }
        }, {
            key: 'decrement',
            value: function decrement() {
                this.inputValue--;
    
                if (this.inputValue <= this.minValue) {
                    this.inputValue = this.minValue;
                }
    
                this.updateInput();
            }
        }, {
            key: 'updateInput',
            value: function updateInput() {
                this.updateBtn.removeClass('hidden');
                this.price.addClass('hidden');
                this.input.val(this.inputValue).parent().addClass('is-active');
            }
        }]);
    
        return numberInput;
    }();
    
    ;
    
    /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var _forms = __webpack_require__(0);
    
    //Check all
    
    // iCheck All selection :)
    $(function () {
        var checkAll = $('#selectAll');
        var checkboxes = $('.domids').not(':disabled');
    
        checkAll.on('ifChecked ifUnchecked', function (e) {
            if (e.type == 'ifChecked') {
                checkboxes.iCheck('check');
            } else {
                checkboxes.iCheck('uncheck');
            }
        });
    
        checkboxes.on('ifChanged', function (e) {
            if (checkboxes.filter(':checked').length > 0) {
                $('#domainSelectedCounter').addClass('badge--primary');
                $('.bottom-action-sticky').css('opacity', '1');
                $('body').addClass('is-actions');
            } else {
                $('#domainSelectedCounter').removeClass('badge--primary');
                $('.bottom-action-sticky').css('opacity', '0');
                $('body').removeClass('is-actions');
            }
            $('#domainSelectedCounter').text(checkboxes.filter(':checked').length);
            if (checkboxes.filter(':checked').length == checkboxes.length) {
                checkAll.prop('checked', 'checked');
            } else {
                checkAll.removeProp('checked');
            }
            checkAll.iCheck('update');
        });
    });
    
    $(document).ready(function () {
        // navbar toggle
        $('#header .navbar-toggle').on('click', function () {
            $('body').toggleClass('menu-open');
        });
        $(document).on('click', '.menu-open .app-main', function () {
            $('body').removeClass('menu-open');
        });
    
        $(window).on('resize', function () {
            $('body').removeClass('menu-open');
        });
    
        // tiles slider under 767px
        if ($('.tiles').length) {
            var mySwiper = new Swiper('.tiles.swiper-container', {
                speed: 400,
                init: false,
                slidesPerView: 'auto',
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
    
            enquire.register("screen and (max-width:767px)", {
                match: function match() {
                    mySwiper.init();
                },
                unmatch: function unmatch() {
                    mySwiper.destroy(false);
                }
            });
        }
    
        // datatables
        if ($('.dataTable').length) {
            //add collapse button to each row
            // $('.dataTable tbody tr').each(function(){
            //     var td = $(this).find('td:first');
            //     $('<button type="button" class="btn-table-collapse"></button>').appendTo(td);
            // });
    
            //prevent standard collapse click
            $(document).on('click', '.dataTable tbody tr td', function (e) {
                var i = e.target.tagName.toLowerCase(),
                    r = e.target.parentNode.tagName.toLowerCase();
                if (e.target.className != "btn-table-collapse" && e.target.className != "cell-action" && e.target.className != "cell-checkbox" && "button" != i && "a" != i && "button" != r && "a" != r && "input" != i && "input" != r) {
    
                    if ($(this).closest('tr').data('url') != undefined) {
                        document.location.href = $(this).closest('tr').data('url');
                    }
                }
            });
    
            $('.dataTable thead tr th .btn-table-collapse').on('click', function () {
                if ($(this).hasClass('expanded')) {
                    $(this).removeClass('expanded');
                    $(this).closest('.dataTable').find('tr.parent td .btn-table-collapse').trigger('click');
                } else {
                    $(this).addClass('expanded');
                    $(this).closest('.dataTable').find('tr:not(.parent) td .btn-table-collapse').trigger('click');
                }
            });
    
            $('.dataTable input').on('ifChecked', function (event) {
                $(this).closest('tr').addClass('active');
            });
            $('.dataTable input').on('ifUnchecked', function (event) {
                $(this).closest('tr').removeClass('active');
            });
        }
    
        // icheck
        $('body').find('input:not(.icheck-input):not(.switch__checkbox)').iCheck({
            checkboxClass: 'checkbox-styled',
            radioClass: 'radio-styled',
            increaseArea: '40%'
        });
    
        //add credit box
        $(document).on('click', '#add-credits-buttons .btn', function () {
            var price = $(this).data('price');
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            $(this).parent().siblings('.input-group').find('#amount').val(price);
        });
        $(document).on('keyup', '#amount', function () {
            var val = $(this).val();
            $('#add-credits-buttons').find('.active').removeClass('active');
            $('#add-credits-buttons').find('[data-price="' + val + '"]').addClass('active');
        });
    
        // sticky sidebar
        if ($('#sticky-sidebar').length) {
            $('#sticky-sidebar').stickySidebar({
                topSpacing: 32,
                bottomSpacing: 32
            });
        }
    
        //attachements
        $(document).on('click', '.add-extra-attachement', function () {
            $("#fileUploadsContainer").append('<div class="file-input form-control"><input type="file" name="attachments[]"><span class="file-input-button btn btn-default">Select File</span><span class="file-input-text text-light">No file selected</span><button data-toggle="tooltip" title="Remove" class="btn btn-icon file-input-remove"><i class="ls ls-trash"></i></button></div>');
            $('[data-toggle="tooltip"]').tooltip();
        });
    
        $(document).on('change', '.file-input input[type=file]', function () {
            var string = $(this).val();
            var result = string.substring(string.lastIndexOf("\\") + 1);
            if (result == "") {
                $(this).parent().find('.file-input-text').text('No file selected').addClass('text-light');
            } else {
                $(this).parent().find('.file-input-text').text(result).removeClass('text-light');
            }
        });
    
        $(document).on('click', '.file-input-remove', function () {
            $(this).closest('.file-input').remove();
        });
    
        $('.custom-select').selectize({
            copyClassesToDropdown: false
        });
    
        var filter = $('.custom-multiselect').selectize({
            copyClassesToDropdown: false,
            plugins: ['remove_button'],
            render: {
                item: function item(data, escape) {
                    return '<div>' + escape(data.text) + '</div>';
                }
            },
            onItemAdd: function onItemAdd(value, $item) {
                var data = this.options[value];
                var value = data.value;
                $('.message.no-tlds').hide();
                $('.tld-pricing').show();
                $('.tld-pricing .tld-row').each(function () {
                    var row = $(this);
                    var str1 = $(this).data('category');
                    var str2 = value;
    
                    if (str1.indexOf(str2) != -1) {
                        $(this).show();
                    }
                });
            },
            onDelete: function onDelete(value, $item) {
                var data = this.options[value];
                var value = data.value;
                var selectize = filter[0].selectize;
                var selected_objects = $.map(selectize.items, function (value) {
                    if (value != data.value) {
                        return selectize.options[value];
                    }
                });
                var totalLen = selected_objects.length;
                $('.tld-pricing .tld-row').hide();
                $.each(selected_objects, function (key, value) {
                    $('.tld-row[data-category*="' + value.value + '"]').show();
                });
    
                if (totalLen == 0) {
                    $('.tld-pricing').hide();
                    $('.message.no-tlds').show();
                } else {
                    $('.message.no-tlds').hide();
                    $('.tld-pricing').show();
                }
            }
        });
        if ($('.tld-filters').length) {
            var selectize = filter[0].selectize;
            var selected_objects = $.map(selectize.items, function (value) {
                return selectize.options[value];
            });
            $('.message.no-tlds').hide();
            $('.tld-pricing .tld-row').hide();
            $.each(selected_objects, function (key, value) {
                $('.tld-row[data-category*="' + value.value + '"]').show();
            });
        }
    
        // Promo Slider
    
        var promoSlider = {
            init: function init() {
                if (!$("[data-promo-slider]").length) {
                    return;
                }
                this.cacheDOM();
                this.bindEvents();
                this.initSlider();
            },
            cacheDOM: function cacheDOM() {
                this.slider = $("[data-promo-slider]");
                this.wrapper = this.slider.find(".promo-slider-wrapper");
                this.pagination = $("[data-promo-slider-pagination]");
                this.closeButton = $("[data-promo-slide-close]");
                this.paginationItem = this.pagination.children();
            },
            bindEvents: function bindEvents() {
                this.paginationItem.on('click', this.handlePaginationClick.bind(this));
                this.closeButton.on('click', this.hideSlider.bind(this));
                $(window).on('resize', this.onResize.bind(this));
                this.slider.on({
                    mouseenter: this.stopAutoplay.bind(this),
                    mouseleave: this.startAutoplay.bind(this)
                });
            },
            initSlider: function initSlider() {
                var that = this;
                this.sliderInstance = new Swiper(this.slider[0], {
                    speed: 400,
                    spaceBetween: 100,
                    slidesPerView: 1,
                    effect: false,
                    resistance: true,
                    simulateTouch: false,
                    resistanceRatio: 0,
                    virtualTranslate: true,
                    slideClass: 'promo-slider-slide',
                    wrapperClass: 'promo-slider-wrapper',
                    autoplay: {
                        delay: 5000,
                        waitForTransition: false
                    },
                    on: {
                        init: function init() {
                            that.showSlide(0, this);
                            that.updateHeight(0, this);
                        },
                        slideChange: function slideChange() {
                            that.updateHeight(this.activeIndex, this);
                        },
                        autoplay: function autoplay() {
                            that.updateHeight(this.activeIndex, this);
                            if (this.activeIndex == 0) {
                                that.hideSlide(this.slides.length - 1, this);
                            } else {
                                that.hideSlide(this.activeIndex - 1, this);
                            }
                            that.showSlide(this.activeIndex, this);
                            that.updatePagination();
                        }
                    }
                });
            },
            handlePaginationClick: function handlePaginationClick(event) {
                var item = $(event.currentTarget);
                var itemIndex = $(item).index();
                this.pagination.find('.active').removeClass('active');
                item.addClass('active');
    
                this.slideTo(itemIndex);
            },
            updatePagination: function updatePagination() {
                this.pagination.find('.active').removeClass('active');
                this.paginationItem.eq(this.sliderInstance.activeIndex).addClass('active');
            },
            slideTo: function slideTo(index) {
                this.hideSlide(null, this.sliderInstance);
                this.sliderInstance.slideTo(index);
                this.showSlide(index, this.sliderInstance);
            },
            hideSlide: function hideSlide(index, instance) {
                if (index != undefined) {
                    this.wrapper.find('.promo-slider-hide-animation').removeClass('promo-slider-hide-animation');
                    $(instance.slides[index]).addClass('promo-slider-hide-animation');
                } else {
                    this.wrapper.find('.promo-slider-hide-animation').removeClass('promo-slider-hide-animation');
                    $(instance.slides[instance.activeIndex]).addClass('promo-slider-hide-animation');
                }
            },
            showSlide: function showSlide(index, instance) {
                if (index) {
                    this.wrapper.find('.promo-slider-show-animation').removeClass('promo-slider-show-animation');
                    $(instance.slides[index]).addClass('promo-slider-show-animation');
                } else {
                    this.wrapper.find('.promo-slider-show-animation').removeClass('promo-slider-show-animation');
                    $(instance.slides[index]).addClass('promo-slider-show-animation');
                }
            },
            hideSlider: function hideSlider() {
                this.slider.addClass('hidden');
            },
            updateHeight: function updateHeight(index, sliderInstance) {
                var innerHeight = $(sliderInstance.slides[index]).innerHeight();
    
                this.wrapper.css('height', innerHeight);
            },
            stopAutoplay: function stopAutoplay() {
                this.sliderInstance.autoplay.stop();
            },
            startAutoplay: function startAutoplay() {
                this.sliderInstance.autoplay.start();
            },
            onResize: function onResize() {
                var that = this;
                setTimeout(function () {
                    that.updateHeight(that.sliderInstance.activeIndex, that.sliderInstance);
                }, 200);
            }
        };
        promoSlider.init();
    
        $('[data-inputs-container]').each(function () {
            new _forms.virtualInput($(this));
        });
    
        $('[data-input-number]').each(function () {
            new _forms.numberInput($(this));
        });
    
        $('.search-group').on('click', function () {
            $(this).find('.form-control').focus();
        });
    
        function toggleOverlay() {
            $('.order-summary-mob .summary-container >.content').slideToggle();
            $('.overlay').fadeToggle('fast');
        }
    
        var activeStyle = $('.theme-switcher').data('active-style');
        var activeLayout = $('.theme-switcher').data('active-layout');
        var url = $('[data-set-theme]').data('original-url');
    
        function toggleThemeSwitcher() {
            $('body').toggleClass('theme-switcher-open');
            resetThemeSwitcher();
        }
    
        function resetThemeSwitcher() {
            $('[data-set-theme]').attr('href', url);
            $('.theme-switcher').find('.active').removeClass('active');
            $('.theme-switcher').find('[data-style="' + activeStyle + '"]').addClass('active');
            $('.theme-switcher').find('[data-layout="' + activeLayout + '"]').addClass('active');
        }
    
        $(document).on('click', '.order-summary-mob .summary-container .btn-rounded', function (e) {
            e.preventDefault();
            toggleOverlay();
        });
    
        $('.overlay').on('click', function (e) {
            toggleOverlay();
            if ($('body').hasClass('theme-switcher-open')) {
                toggleThemeSwitcher();
            }
        });
    
        $('.theme-switcher-button').on('click', function () {
            toggleThemeSwitcher();
            toggleOverlay();
        });
    
        $('.theme-switcher-box').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.row').find('.active').removeClass('active');
            $(this).addClass('active');
    
            var newStyle = $(this).data('style');
            var newLayout = $(this).data('layout');
    
            if (newStyle == undefined) {
                var setStyle = activeStyle;
            } else {
                var setStyle = newStyle;
            }
            if (newLayout == undefined) {
                var setLayout = activeLayout;
            } else {
                var setLayout = newLayout;
            }
    
            var findsign = url.indexOf("?");
            if (findsign != -1) {
                var newUrl = url + '&rsstyle=' + setStyle + '&rslayout=' + setLayout;
            } else {
                var newUrl = url + '?rsstyle=' + setStyle + '&rslayout=' + setLayout;
            }
            $('[data-set-theme]').attr('href', newUrl);
        });
    
        $('[data-style-reset]').on('click', function () {
            toggleThemeSwitcher();
            toggleOverlay();
        });
    
        $(window).on('resize', function () {
            $('.order-summary-mob .summary-container >.content').slideUp();
            $('.overlay').fadeOut('fast');
            $('body').removeClass('theme-switcher-open');
            resetThemeSwitcher();
        });
    
        // $('.selected-flag').focusin(function(){
        //     $(this).siblings('.country-list').removeClass('hide');
        // });
        // $('.selected-flag').focusout(function(){
        //     $(this).siblings('.country-list').addClass('hide');
        // });
        $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });
    });
    
    /***/ })
    /******/ ]);