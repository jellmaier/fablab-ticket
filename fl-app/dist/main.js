(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin/admin.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin/admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Admin Optionen</h4>   <!-- totoranslate -->\n\n<a href=\"{{appApiService.getBlogUrl()}}/wp-admin/edit.php?post_type=device&page=fablab_options\">   \n  <input type=\"submit\" value=\"Einstellungen\" style=\"margin-bottom:12px\">\n</a>\n<br>\n<caption>This is a Login Terminal: </caption>                      <!-- totoranslate --> \n<label class=\"switch\" (click)=\"toggleIsTerminal()\" [class.active]=\"toggleTerminal\" >\n  <div class=\"slider round\"></div>\n</label>\n<br>\n<caption>Ticket System Online: </caption>                       <!-- totoranslate -->\n<label class=\"switch\" (click)=\"toggleTicketSystemOnline()\" [class.active]=\"isToggleTicketSystemOnline\" >\n  <div class=\"slider round\"></div>\n</label>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/button/button.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/button/button.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"submit\"\n       (click)=\"clickEvent()\"\n       [value]=\"label\"/>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/device/device.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/device/device.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fl-device-element fl-device-element-content\"\n     [ngStyle]=\"{'border-style': '6px solid ' + device.color,\n                 'background-color': device.color}\"\n     (click)=\"deviceClicked()\">\n  <h2>{{device.name}}</h2>\n  <!--p>Verfügbare Geräte: <b><?= $number_devices ?></b></br>Wartende Personen: <b><?= $waiting['persons'] ?></b></p-->\n  <!--p id=\"waiting-time\">Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?></b></p-->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialog-mat/dialog-mat.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialog-mat/dialog-mat.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dialog workssss!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialog/dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialog/dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showDialog\" class=\"fl-overlay\">\n  <div class=\"device-ticket\">\n    <a class=\"close\"\n       (click)=\"closeOverlay()\">x</a>\n    <h2>{{ data?.Label }}</h2>\n    <div [innerHTML]=\"data?.DeviceInfo\"></div>\n    <div *ngFor=\"let link of data?._links\">\n      <app-button [label]=\"link.label\"\n                  (buttonClick)=\"buttonClicked($event, link)\"></app-button>\n    </div>\n  </div>\n  <div class=\"fl-overlay-background\"\n       (click)=\"closeOverlay()\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ticket/ticket.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ticket/ticket.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"fl-ticket-element {{ticket.status}}\"\n       [ngClass]=\"{'blink': ticket.available, 'highlight': ticket.changed }\"\n       [style.border-color]=\"ticket.color\">\n    <p class=\"ticket-content\">{{ ticket.post_date | date : \"EEEE, d. MMMM y, HH:mm\" }}<p>\n    <h2>{{ ticket.post_title }}</h2>\n    <p class=\"ticket-content\"> Gerät: <b>{{ ticket.device_title }}</b>\n      <span *ngIf=\"ticket.pin\"> | Geräte-Pin: <b>{{ ticket.pin }}</b></span></p>\n    <div class=\"status-icon\"></div>\n    <div *ngFor=\"let link of ticket._links\">\n      <app-button [label]=\"link.label\"\n                  (buttonClick)=\"buttonClicked($event, link)\"></app-button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login/input-mask/input-mask.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login/input-mask/input-mask.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #inputform=\"ngForm\" (ngSubmit)=\"submitLogin(inputform)\" novalidate>\n  <ng-container *ngFor=\"let inputField of mask?.inputFields ; let i = index\">\n    <input [name]=\"inputField.parameter\" [type]=\"getInputFieldType(inputField)\"\n           [id]=\"inputField.parameter\" ngModel [placeholder]=\"inputField.label\"\n           [focus]=\"i === 0\" [required]=\"inputField.required\" ><br>\n  </ng-container>\n  <app-button [label]=\"submitLink?.label\"></app-button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login/login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> {{ loginData?.login?.loginHeading }}</div>\n<div> {{ loginData?.login?.loginMessage }}</div>\n<app-input-mask [mask]=\"loginData?.login?.loginMask\"\n                (submitClick)=\"submitClicked($event)\">\n</app-input-mask>\n<div> {{ loginErrorMessage }}</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/nfclogin/nfc-login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/nfclogin/nfc-login.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input  style=\"margin-top:10px;\" (click)=\"showHideNfcOverlay()\" type=\"submit\"  value=\"{{nfcButtonLabel}}\"/>\n<!-- Overlay -->\n<div class=\"nfc-overlay\" *ngIf=\"showNfcOverlay\">\n  <div class=\"nfc-overlay-content\" *ngIf=\"showNfcOverlay\">\n    <a (click)=\"showHideNfcOverlay(false)\" class=\"close\">x</a>\n    <h2>Jetzt Karte auflegen</h2>     <!-- totranslate -->\n      <p>{{ nfcMessage }}</p>\n      <form #f=\"ngForm\" (keyup.enter)=\"submitCheckToken(f)\" class=\"nfc-token\" novalidate>\n        <input name=\"token\" autocomplete=\"off\" ngModel focus=\"{{showNfcOverlay}}\">\n      </form>\n      <img src=\"{{appApiService.getBlogUrl()}}/wp-content/plugins/fablab-ticket/plugins/nfc-login/tucard.jpg\"/> \n  </div>\n  <div class=\"nfc-overlay-background\" (click)=\"showHideNfcOverlay(false)\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/register/register.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"entry-title\">Register</h1>\n<app-nfclogin [autoHide]=\"nfcOverlayAutohide\" [nfcButtonLabel]=\"nfcButtonLabel\"\n              (onCardLoaded)=\"onCardLoaded($event)\"> ></app-nfclogin>\n<br>\n<form #registerform=\"ngForm\" (ngSubmit)=\"submitRegistration()\" class=\"box\">\n  <p>\n    <!--label for=\"loginInput\">Username:</label-->  \n    <input [(ngModel)]=\"user.username\" name=\"login\" type=\"text\" id=\"usernameInput\" \n    ngModel required  minlength=\"5\"\n    placeholder=\"Username\" focus=\"true\">\n  </p>  \n  <p> \n    <input [(ngModel)]=\"user.name\" name=\"name\" type=\"text\" id=\"nameInput\" ngModel placeholder=\"Vorname\" /><br>\n    <input [(ngModel)]=\"user.surename\" name=\"surename\" type=\"text\" id=\"surenameInput\" ngModel placeholder=\"Nachname\" />\n  </p>\n  <p >\n    <!--label for=\"emailInput\">Email:</label-->  \n    <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" id=\"emailInput\" ngModel placeholder=\"E-Mail\" email required>\n  </p>\n  <p>\n    <!--label for=\"passwordInput\">Password:</label-->\n    <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" id=\"passwordInput\" \n              ngModel required minlength=\"8\"  \n              placeholder=\"Password\" focus=\"{{focusPassword}}\">\n  </p>\n  <p class=\"checkbox-field\">\n    <label for=\"cardset\">NFC-Card:</label>\n    <input [(ngModel)]=\"cardset\" name=\"cardset\" type=\"checkbox\" id=\"cardset\" ngModel disabled>\n  </p>\n  <p>{{registerMessage}}</p>\n  <button type=\"submit\" [disabled]=\"registerform.form.invalid\">Registrieren</button>  \n</form> \n\n<p>\n  Du bist schon registriert? <a routerLink=\"/{{ appRoutes.loginOnTerminal}}\">Hier einloggen</a><br>\n  <a href=\"../password-reset/\">Passwort vergessen? </a>\n</p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/terminallogin/terminallogin.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/terminallogin/terminallogin.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"entry-title\">Login</h1>\n<br>\n<app-nfclogin [nfcMessage]=\"nfcLoginMessage\" [nfcButtonLabel]=\"nfcButtonLabel\"\n              (onCardLoaded)=\"onCardLoaded($event)\"> ></app-nfclogin>\n<br>\n<form #loginform=\"ngForm\" (ngSubmit)=\"submitLogin(loginform)\" novalidate>\n  <input name=\"login\" type=\"text\" id=\"loginInput\" ngModel placeholder=\"Username\" focus=\"true\"><br>\n  <input name=\"password\" type=\"password\" id=\"passwordInput\" ngModel placeholder=\"Password\"><br>\n  <p>{{ loginMessage }}</p>\n  <button type=\"submit\">Login</button>  \n</form>\n\n<br>\n<p>\n  Du hast noch keinen Account? <a routerLink=\"/register\">Registrieren</a><br>\n  <a href=\"../password-reset/\">Passwort vergessen? </a>\n</p>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profiles/devices/devices.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profiles/devices/devices.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{ devices?.message }}</p>\n<div *ngFor=\"let device of devices?.devices\">\n  <app-device [device]=\"device\"\n              (buttonClick)=\"buttonClick.emit($event)\"></app-device>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profiles/my-tickets/my-tickets.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profiles/my-tickets/my-tickets.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let ticket of tickets\">\n  <app-ticket [ticket]=\"ticket\"\n              (buttonClick)=\"buttonClick.emit($event)\"></app-ticket>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profiles/profiles.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profiles/profiles.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-devices [devices]=\"devices$ | async\"\n             (buttonClick)=\"buttonClickedAndShowDialog($event)\"></app-devices>\n\n<app-my-tickets [tickets]=\" tickets$ | async\"\n                (buttonClick)=\"buttonClickedAndShowDialog($event)\"></app-my-tickets>\n\n\n<app-dialog [data]=\"ticketOverlayData$| async\"\n            [showDialog]=\"showDialog\"\n            (buttonClick)=\"buttonClickedAndHideDialog($event)\"\n            (closeDialog)=\"closeDialog($event)\">\n</app-dialog>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/statistic/statistic.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/statistic/statistic.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Statistic</h1>  \n<div class=\"statistic-box box\">\n  <div class=\"box-header\">\n  \t<h3>Wochennutzung</h3>\n    <button (click)=\"checkLoadAndSetData(false)\">-</button>\n    <button (click)=\"checkLoadAndSetData(true)\">+</button>\n  </div>\n  <div class=\"box-content\">\n  \t <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n     <p>{{currentWeek}}</p>\n  </div>\n</div>\n<div class=\"statistic-box trend-box\">\n  <div class=\"box-header\">\n  \t<h3>Nutzungsverlauf</h3>\n  </div>\n  <div class=\"box-content\">\n  \t <nvd3 #linechart [options]=\"linechartoptions\" [data]=\"datatrend\"></nvd3>\n  </div>\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/admin/admin.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------------------------------------------------------ */\n/* Checkbox toggle */\n/* source: https://www.w3schools.com/howto/howto_css_switch.asp */\n/* ------------------------------------------------------------ */\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 19px;\n  margin-bottom: -4px;\n  margin-left: 2px;\n  margin-right: 10px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n  display: none;\n}\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\ninput:checked + .slider {\n  background-color: #AEDE1A;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #AEDE1A;\n}\ninput:checked + .slider:before {\n  -webkit-transform: translateX(15px);\n  transform: translateX(15px);\n}\n/* for Angular methodes */\n.active .slider {\n  background-color: #AEDE1A;\n}\n.active .slider:before {\n  -webkit-transform: translateX(15px);\n  transform: translateX(15px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 19px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvYWRtaW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFBO0FBQ0Esb0JBQUE7QUFDQSxpRUFBQTtBQUNBLGlFQUFBO0FBRUMsMkNBQUE7QUFDRDtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0EsK0JBQUE7QUFDQTtFQUFlLGFBQUE7QUNDZjtBRENBLGVBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0VGO0FEQ0E7RUFDRSx5QkFBQTtBQ0VGO0FEQ0E7RUFDRSwyQkFBQTtBQ0VGO0FEQ0E7RUFDRSxtQ0FBQTtFQUVBLDJCQUFBO0FDRUY7QURDQSx5QkFBQTtBQUVBO0VBQ0UseUJBQUE7QUNDRjtBREVBO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0NGO0FERUEsb0JBQUE7QUFDQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ2hlY2tib3ggdG9nZ2xlICovXG4vKiBzb3VyY2U6IGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fY3NzX3N3aXRjaC5hc3AgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cblxuLyogVGhlIHNsaWRlciAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEzcHg7XG4gIHdpZHRoOiAxM3B4O1xuICBsZWZ0OiAzcHg7XG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVERTFBO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICNBRURFMUE7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG59XG5cbi8qIGZvciBBbmd1bGFyIG1ldGhvZGVzICovXG5cbi5hY3RpdmUgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBRURFMUE7XG59XG5cbi5hY3RpdmUgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxOXB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIENoZWNrYm94IHRvZ2dsZSAqL1xuLyogc291cmNlOiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc19zd2l0Y2guYXNwICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgbGVmdDogM3B4O1xuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVERTFBO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICNBRURFMUE7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG59XG5cbi8qIGZvciBBbmd1bGFyIG1ldGhvZGVzICovXG4uYWN0aXZlIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVERTFBO1xufVxuXG4uYWN0aXZlIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-api.service */ "./src/app/services/app-api.service.ts");
/* harmony import */ var _services_terminal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/terminal.service */ "./src/app/services/terminal.service.ts");




var AdminComponent = /** @class */ (function () {
    // private toggle_subscription: Subscription;
    function AdminComponent(appApiService, terminalSercie) {
        this.appApiService = appApiService;
        this.terminalSercie = terminalSercie;
        this.toggleTerminal = false;
        this.isToggleTicketSystemOnline = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    AdminComponent.prototype.initData = function () {
        var _this = this;
        this.appApiService.isApiDataLoaded()
            .subscribe(function (isDataLoaded) {
            if (isDataLoaded === true) {
                _this.toggleTerminal = _this.appApiService.isTerminal();
                _this.isToggleTicketSystemOnline = _this.appApiService.isTicketSystemOnline();
            }
        });
    };
    /*
      private loadToggleSubscription():void {
        this.toggle_subscription = this.appApiService.getTerminalObservable()
        .subscribe((isTerminal) => {
          //console.log('toggle: ' + isTerminal);
          this.toggleTerminal = isTerminal;
          if(this.count >= 5) {
            //this.toggle_subscription.unsubscribe();
          }
          this.count ++;
        })
      }
    */
    AdminComponent.prototype.ngOnDestroy = function () {
        //this.toggle_subscription.unsubscribe();
    };
    AdminComponent.prototype.toggleIsTerminal = function () {
        //this.appApiService.toggleTerminal();
        this.toggleTerminal = !this.toggleTerminal;
        this.terminalSercie.makeTerminal(this.toggleTerminal);
        //console.log(this.toggleTerminal);
    };
    AdminComponent.prototype.toggleTicketSystemOnline = function () {
        var _this = this;
        this.isToggleTicketSystemOnline = !this.isToggleTicketSystemOnline;
        this.terminalSercie.setTicketSystemOnline(this.isToggleTicketSystemOnline).subscribe(function (data) {
            _this.isToggleTicketSystemOnline = data;
        });
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _services_app_api_service__WEBPACK_IMPORTED_MODULE_2__["AppApiService"] },
        { type: _services_terminal_service__WEBPACK_IMPORTED_MODULE_3__["TerminalService"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_api_service__WEBPACK_IMPORTED_MODULE_2__["AppApiService"],
            _services_terminal_service__WEBPACK_IMPORTED_MODULE_3__["TerminalService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/statistic/statistic.component */ "./src/app/pages/statistic/statistic.component.ts");
/* harmony import */ var _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _pages_login_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login/login.component */ "./src/app/pages/login/login/login.component.ts");
/* harmony import */ var _pages_login_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/register/register.component */ "./src/app/pages/login/register/register.component.ts");
/* harmony import */ var _pages_login_terminallogin_terminallogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/terminallogin/terminallogin.component */ "./src/app/pages/login/terminallogin/terminallogin.component.ts");
/* harmony import */ var _pages_login_nfclogin_nfc_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/nfclogin/nfc-login.component */ "./src/app/pages/login/nfclogin/nfc-login.component.ts");
/* harmony import */ var _services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/guards/login-guard.service */ "./src/app/services/guards/login-guard.service.ts");
/* harmony import */ var _app_routs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routs */ "./src/app/app-routs.ts");
/* harmony import */ var _pages_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/profiles/profiles.component */ "./src/app/pages/profiles/profiles.component.ts");












var routes = [
    { path: '', redirectTo: _app_routs__WEBPACK_IMPORTED_MODULE_10__["appRoutes"].login, pathMatch: 'full' },
    { path: _app_routs__WEBPACK_IMPORTED_MODULE_10__["appRoutes"].loginOnTerminal, canActivate: [_services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsNotLoggedInGuard"], _services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsTerminalGuard"]], component: _pages_login_terminallogin_terminallogin_component__WEBPACK_IMPORTED_MODULE_7__["TerminalLoginComponent"] },
    { path: _app_routs__WEBPACK_IMPORTED_MODULE_10__["appRoutes"].loginNfc, canActivate: [_services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsNotLoggedInGuard"], _services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsTerminalGuard"]], component: _pages_login_nfclogin_nfc_login_component__WEBPACK_IMPORTED_MODULE_8__["NfcLoginComponent"] },
    { path: _app_routs__WEBPACK_IMPORTED_MODULE_10__["appRoutes"].login, component: _pages_login_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: _app_routs__WEBPACK_IMPORTED_MODULE_10__["appRoutes"].register, canActivate: [_services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsNotLoggedInGuard"]], component: _pages_login_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'admin', canActivate: [_services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsAdminGuard"]], component: _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: _app_routs__WEBPACK_IMPORTED_MODULE_10__["appRoutes"].profiles, canActivate: [_services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsLoggedInGuard"]], component: _pages_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_11__["ProfilesComponent"], data: { redirect: true } },
    { path: _app_routs__WEBPACK_IMPORTED_MODULE_10__["appRoutes"].profilesWithId, canActivate: [_services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsLoggedInGuard"]], component: _pages_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_11__["ProfilesComponent"] },
    { path: _app_routs__WEBPACK_IMPORTED_MODULE_10__["appRoutes"].statistic, canActivate: [_services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["IsAdminGuard"]], component: _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_3__["StatisticComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routs.ts":
/*!******************************!*\
  !*** ./src/app/app-routs.ts ***!
  \******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
var appRoutes = {
    login: 'login',
    loginOnTerminal: 'terminallogin',
    loginNfc: 'loginnfc',
    register: 'register',
    startpage: 'startpage',
    statistic: 'statistic',
    profiles: 'profiles',
    profilesWithId: 'profiles/:id',
    profilesAndTickets: 'profiles/:id/tickets'
};


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28122em) scale(.75);transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28121em) scale(.75);transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.2812em) scale(.75);transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;-webkit-transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:-webkit-box;display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:-webkit-box;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;-webkit-transition:opacity .4s cubic-bezier(.25,.8,.25,1);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#3f51b5}@media (-ms-high-contrast:active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content._mat-animation-noopable,.ng-animate-disabled .mat-badge-content{-webkit-transition:none;transition:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#3f51b5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ff4081}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:solid 1px rgba(0,0,0,.12)}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox .mat-ripple-element{background-color:#000}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element{background:#3f51b5}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background:#ff4081}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element{background:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:-webkit-gradient(linear,left top, right top,color-stop(0, rgba(0,0,0,.42)),color-stop(33%, rgba(0,0,0,.42)),color-stop(0, transparent));background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:-webkit-gradient(linear,left top, right top,color-stop(0, rgba(0,0,0,.42)),color-stop(33%, rgba(0,0,0,.42)),color-stop(0, transparent));background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item{color:rgba(0,0,0,.87)}.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-action-list .mat-list-item:focus,.mat-action-list .mat-list-item:hover,.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ff4081}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ff4081}h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}h2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}nav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}nav a:visited, a:link {\n  color: #607D8B;\n}nav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}nav a.active {\n  color: #039be5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsZUFBZSxDQUFDLGNBQWMsQ0FBQyw4Q0FBOEMsQ0FBQyxvQ0FBb0MsYUFBYSxDQUFDLG9DQUFvQyxjQUFjLENBQUMseUNBQXlDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyxzQ0FBc0MscURBQXFELENBQUMsZUFBZSxDQUFDLDZDQUE2QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsNkNBQTZDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsd0RBQXdELENBQUMsZUFBZSxDQUFDLDJCQUEyQix1REFBdUQsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLHFEQUFxRCxDQUFDLHNDQUFzQyxxREFBcUQsQ0FBQyw0Q0FBNEMsZUFBZSxDQUFDLHdCQUF3QixxREFBcUQsQ0FBQyw4Q0FBOEMsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLDhDQUE4QyxxREFBcUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsOENBQThDLHFEQUFxRCxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyw4Q0FBOEMscURBQXFELENBQUMsZUFBZSxDQUFDLDRCQUE0QixxREFBcUQsQ0FBQyw0R0FBNEcsOENBQThDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsOENBQThDLENBQUMsVUFBVSw4Q0FBOEMsQ0FBQyxnQkFBZ0IsY0FBYyxDQUFDLGVBQWUsQ0FBQyxpQ0FBaUMsY0FBYyxDQUFDLHFDQUFxQyxjQUFjLENBQUMsY0FBYyw4Q0FBOEMsQ0FBQyx5Q0FBeUMsZ0JBQWdCLENBQUMsVUFBVSxjQUFjLENBQUMsZUFBZSxDQUFDLCtFQUErRSxjQUFjLENBQUMsV0FBVyw4Q0FBOEMsQ0FBQyxpQkFBaUIsY0FBYyxDQUFDLGVBQWUsQ0FBQywyQkFB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Q2QsYUFBYTtFQUNiLGNBQWM7QUFDaEIsQ0FDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCLENBQ0E7RUFDRSxjQUFjO0FBQ2hCLENBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCLENBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6OXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZToyNHB4fS5tYXQtaDEsLm1hdC1oZWFkbGluZSwubWF0LXR5cG9ncmFwaHkgaDF7Zm9udDo0MDAgMjRweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMiwubWF0LXRpdGxlLC5tYXQtdHlwb2dyYXBoeSBoMntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWgzLC5tYXQtc3ViaGVhZGluZy0yLC5tYXQtdHlwb2dyYXBoeSBoM3tmb250OjQwMCAxNnB4LzI4cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWg0LC5tYXQtc3ViaGVhZGluZy0xLC5tYXQtdHlwb2dyYXBoeSBoNHtmb250OjQwMCAxNXB4LzI0cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWg1LC5tYXQtdHlwb2dyYXBoeSBoNXtmb250OjQwMCAxMS42MnB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTJweH0ubWF0LWg2LC5tYXQtdHlwb2dyYXBoeSBoNntmb250OjQwMCA5LjM4cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtYm9keS0yLC5tYXQtYm9keS1zdHJvbmd7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJvZHksLm1hdC1ib2R5LTEsLm1hdC10eXBvZ3JhcGh5e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1ib2R5IHAsLm1hdC1ib2R5LTEgcCwubWF0LXR5cG9ncmFwaHkgcHttYXJnaW46MCAwIDEycHh9Lm1hdC1jYXB0aW9uLC5tYXQtc21hbGx7Zm9udDo0MDAgMTJweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWRpc3BsYXktNCwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTR7Zm9udDozMDAgMTEycHgvMTEycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0uMDVlbTttYXJnaW46MCAwIDU2cHh9Lm1hdC1kaXNwbGF5LTMsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ze2ZvbnQ6NDAwIDU2cHgvNTZweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LS4wMmVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMiwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTJ7Zm9udDo0MDAgNDVweC80OHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotLjAwNWVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMSwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTF7Zm9udDo0MDAgMzRweC80MHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDY0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1idXR0b24sLm1hdC1mYWIsLm1hdC1mbGF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtbWluaS1mYWIsLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWJ1dHRvbi10b2dnbGV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FyZHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjBweH0ubWF0LWNhcmQtY29udGVudCwubWF0LWNhcmQtc3VidGl0bGV7Zm9udC1zaXplOjE0cHh9Lm1hdC1jaGVja2JveHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbHtsaW5lLWhlaWdodDoyNHB4fS5tYXQtY2hpcHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24sLm1hdC1jaGlwIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29ue2ZvbnQtc2l6ZToxOHB4fS5tYXQtdGFibGV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtaGVhZGVyLWNlbGx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2FsZW5kYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FsZW5kYXItYm9keXtmb250LXNpemU6MTNweH0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9ue2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aHtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo0MDB9Lm1hdC1kaWFsb2ctdGl0bGV7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1mb3JtLWZpZWxke2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjEyNTtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29ue2ZvbnQtc2l6ZToxNTAlO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b257aGVpZ2h0OjEuNWVtO3dpZHRoOjEuNWVtfS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbntoZWlnaHQ6MS4xMjVlbTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNWVtIDA7Ym9yZGVyLXRvcDouODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7dG9wOi0uODQzNzVlbTtwYWRkaW5nLXRvcDouODQzNzVlbX0ubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye2ZvbnQtc2l6ZTo3NSU7bWFyZ2luLXRvcDouNjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS43OTE2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNDM3NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxMDFweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxMDJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM1JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjI4MTI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye21hcmdpbi10b3A6LjU0MTY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNjY2NjdlbSl9QG1lZGlhIHByaW50ey5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMmVtKSBzY2FsZSguNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSguNzUpfX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi4yNWVtIDAgLjc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4wOTM3NWVtO21hcmdpbi10b3A6LS41ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS41OTM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjU5Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjFlbSAwIDFlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjg0Mzc1ZW07bWFyZ2luLXRvcDotLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZ3JpZC10aWxlLWZvb3RlciwubWF0LWdyaWQtdGlsZS1oZWFkZXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZSwubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9aW5wdXQubWF0LWlucHV0LWVsZW1lbnR7bWFyZ2luLXRvcDotLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweH0ubWF0LXJhZGlvLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2VsZWN0LXRyaWdnZXJ7aGVpZ2h0OjEuMTI1ZW19Lm1hdC1zbGlkZS10b2dnbGUtY29udGVudHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zdGVwLWxhYmVse2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9ye2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Zm9udC1zaXplOjE0cHh9Lm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVke2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRhYi1ncm91cHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH0ubWF0LXRvb2x0aXAtaGFuZHNldHtmb250LXNpemU6MTRweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tYXQtbGlzdC1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTZweH0ubWF0LW9wdGdyb3VwLWxhYmVse2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zaW1wbGUtc25hY2tiYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntsaW5lLWhlaWdodDoxO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdHJlZXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1uZXN0ZWQtdHJlZS1ub2RlLC5tYXQtdHJlZS1ub2Rle2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTRweH0ubWF0LXJpcHBsZXtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWR7b3ZlcmZsb3c6dmlzaWJsZX0ubWF0LXJpcHBsZS1lbGVtZW50e3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5LHRyYW5zZm9ybSAwcyBjdWJpYy1iZXppZXIoMCwwLC4yLDEpO3RyYW5zZm9ybTpzY2FsZSgwKX1AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7Lm1hdC1yaXBwbGUtZWxlbWVudHtkaXNwbGF5Om5vbmV9fS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsLmNkay1vdmVybGF5LWNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eToxfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbi1uYW1lOmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0fS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKXthbmltYXRpb24tbmFtZTpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXple3Jlc2l6ZTpub25lfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmd7aGVpZ2h0OmF1dG8haW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzoycHggMCFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnR9Lm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLC5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtYWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6IzNmNTFiNX0ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZmY0MDgxfS5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZjQ0MzM2fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3h7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlcntjb2xvcjojZmFmYWZhfS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2NvbG9yOiNiMGIwYjB9Lm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmZjQwODF9Lm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojM2Y1MWI1fS5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2JhY2tncm91bmQ6I2IwYjBiMH0ubWF0LWVsZXZhdGlvbi16MHtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejF7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoye2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejR7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16NXtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxNHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo3e2JveC1zaGFkb3c6MCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16OHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejl7Ym94LXNoYWRvdzowIDVweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDlweCAxMnB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTZweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMHtib3gtc2hhZG93OjAgNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMXtib3gtc2hhZG93OjAgNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMntib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxM3tib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTNweCAxOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjRweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNHtib3gtc2hhZG93OjAgN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNXtib3gtc2hhZG93OjAgOHB4IDlweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTVweCAyMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMjhweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTd7Ym94LXNoYWRvdzowIDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE4e2JveC1zaGFkb3c6MCA5cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMThweCAyOHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzRweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOXtib3gtc2hhZG93OjAgOXB4IDEycHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDE5cHggMjlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM2cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMXtib3gtc2hhZG93OjAgMTBweCAxM3B4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMXB4IDMzcHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MHB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIye2JveC1zaGFkb3c6MCAxMHB4IDE0cHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIycHggMzVweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQycHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjN7Ym94LXNoYWRvdzowIDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyNHtib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1hcHAtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlcntkaXNwbGF5Om5vbmV9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpe2JhY2tncm91bmQ6I2ZmZn0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMzZjUxYjV9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9fS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtYmFkZ2V7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50e2Rpc3BsYXk6bm9uZX0ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNiOWI5Yjk7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtOnNjYWxlKC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUsLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50e3RyYW5zaXRpb246bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotOHB4fS5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2xpbmUtaGVpZ2h0OjIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTFweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2xpbmUtaGVpZ2h0OjI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojM2Y1MWI1fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e29wYWNpdHk6LjE7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtbWluaS1mYWIsLm1hdC1yYWlzZWQtYnV0dG9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC13YXJuLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1mYWIubWF0LWFjY2VudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWZhYi5tYXQtd2FybiwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25le2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JveC1zaGFkb3c6bm9uZX0ubWF0LWJ1dHRvbi10b2dnbGV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9W2Rpcj1ydGxdIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLXRvcDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2JkYmRiZH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JvcmRlcjpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhIWltcG9ydGFudH1AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OmJsYWNrLW9uLXdoaXRlKXsubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojMDAwIWltcG9ydGFudH19Lm1hdC1jaGVja2JveC1taXhlZG1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtY2hlY2tib3gtZGlzYWJsZWR7b3BhY2l0eTouNX19QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kOjAgMH19Lm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojM2Y1MWI1fS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojZmY0MDgxfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVke29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlcntiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC10YWJsZXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC10YWJsZSB0Ym9keSwubWF0LXRhYmxlIHRmb290LC5tYXQtdGFibGUgdGhlYWQsLm1hdC10YWJsZS1zdGlja3ksW21hdC1mb290ZXItcm93XSxbbWF0LWhlYWRlci1yb3ddLFttYXQtcm93XSxtYXQtZm9vdGVyLXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtcm93e2JhY2tncm91bmQ6aW5oZXJpdH1tYXQtZm9vdGVyLXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtcm93LHRkLm1hdC1jZWxsLHRkLm1hdC1mb290ZXItY2VsbCx0aC5tYXQtaGVhZGVyLWNlbGx7Ym9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1oZWFkZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FsZW5kYXItYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2h7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZle2NvbG9yOiMzZjUxYjV9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1kaWFsb2ctY29udGFpbmVye2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGl2aWRlcntib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWRpdmlkZXItdmVydGljYWx7Ym9yZGVyLXJpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWFjdGlvbi1yb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLmNkay1rZXlib2FyZC1mb2N1c2VkLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKS5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEgKGhvdmVyOm5vbmUpey5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle2NvbG9yOmluaGVyaXR9Lm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnR7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjQyKSAwLHJnYmEoMCwwLDAsLjQyKSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC40MikgMCxyZ2JhKDAsMCwwLC40MikgMzMlLHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjA2KX0ubWF0LWljb24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWljb24ubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtaWNvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIsLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6IzNmNTFiNX0ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbGlzdC1pdGVtLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsLm1hdC1saXN0LW9wdGlvbjpmb2N1cywubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW1lbnUtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtbWVudS1pdGVte2JhY2tncm91bmQ6MCAwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtcGFnaW5hdG9ye2JhY2tncm91bmQ6I2ZmZn0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNjNWNhZTl9Lm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjgwYWJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwubWF0LXNwaW5uZXIgY2lyY2xle3N0cm9rZTojM2Y1MWI1fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGV7c3Ryb2tlOiNmZjQwODF9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC13YXJuIGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xle3N0cm9rZTojZjQ0MzM2fS5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiMzZjUxYjV9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2ZmNDA4MX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc2VsZWN0LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LXNlbGVjdC1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRyYXdlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LXNsaWRlci1mb2N1cy1yaW5ne2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC4yKX0uY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwubWF0LXNsaWRlcjpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1kaXNhYmxlZDpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZSAubWF0LXNsaWRlci1mb2N1cy1yaW5ne2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMjYpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlcntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNyl9Lm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrc3tiYWNrZ3JvdW5kLWltYWdlOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6LW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC4wMDAxZGVnLHJnYmEoMCwwLDAsLjcpLHJnYmEoMCwwLDAsLjcpIDJweCx0cmFuc3BhcmVudCAwLHRyYW5zcGFyZW50KX0ubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrc3tiYWNrZ3JvdW5kLWltYWdlOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsLjcpLHJnYmEoMCwwLDAsLjcpIDJweCx0cmFuc3BhcmVudCAwLHRyYW5zcGFyZW50KX0ubWF0LXN0ZXAtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCwubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfUBtZWRpYSAoaG92ZXI6bm9uZSl7Lm1hdC1zdGVwLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOjAgMH19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5le2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtc29ydC1oZWFkZXItYXJyb3d7Y29sb3I6Izc1NzU3NX0ubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhcntib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMil9Lm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhcntib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLWJvdHRvbTpub25lfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWdyb3VwW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1de2JvcmRlci1ib3R0b206bm9uZTtib3JkZXItdG9wOm5vbmV9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTcsMjAyLDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTI4LDE3MSwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5NywyMDIsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwxMjgsMTcxLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3N7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3N7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRvb2xiYXJ7YmFja2dyb3VuZDojZjVmNWY1O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7YmFja2dyb3VuZDojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC1hY2NlbnR7YmFja2dyb3VuZDojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC13YXJue2JhY2tncm91bmQ6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3csLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjppbmhlcml0fS5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbHRpcHtiYWNrZ3JvdW5kOnJnYmEoOTcsOTcsOTcsLjkpfS5tYXQtdHJlZXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1uZXN0ZWQtdHJlZS1ub2RlLC5tYXQtdHJlZS1ub2Rle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNuYWNrLWJhci1jb250YWluZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyk7YmFja2dyb3VuZDojMzIzMjMyO2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntjb2xvcjojZmY0MDgxfSIsIkBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzc1wiO1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDIge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgY29sb3I6ICM2MDdEOEI7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <ng-progress [color]=\"'#028F76'\" [spinner]=\"false\"></ng-progress>\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http-client */ "./node_modules/@ngx-progressbar/http-client/esm5/ngx-progressbar-http-client.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_statistic_statistic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/statistic/statistic.service */ "./src/app/pages/statistic/statistic.service.ts");
/* harmony import */ var _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/statistic/statistic.component */ "./src/app/pages/statistic/statistic.component.ts");
/* harmony import */ var _pages_statistic_chart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/statistic/chart.service */ "./src/app/pages/statistic/chart.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_parser_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/parser.service */ "./src/app/services/parser.service.ts");
/* harmony import */ var _services_app_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/app-api.service */ "./src/app/services/app-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angular2_focus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-focus */ "./node_modules/angular2-focus/dist/angular2-focus.es5.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _pages_login_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/login/login/login.component */ "./src/app/pages/login/login/login.component.ts");
/* harmony import */ var _pages_login_terminallogin_terminallogin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/login/terminallogin/terminallogin.component */ "./src/app/pages/login/terminallogin/terminallogin.component.ts");
/* harmony import */ var _pages_login_nfclogin_nfc_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/login/nfclogin/nfc-login.component */ "./src/app/pages/login/nfclogin/nfc-login.component.ts");
/* harmony import */ var _pages_login_register_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/login/register/register.component */ "./src/app/pages/login/register/register.component.ts");
/* harmony import */ var _services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/guards/login-guard.service */ "./src/app/services/guards/login-guard.service.ts");
/* harmony import */ var _services_terminal_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/terminal.service */ "./src/app/services/terminal.service.ts");
/* harmony import */ var _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _pages_profiles_my_tickets_my_tickets_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/profiles/my-tickets/my-tickets.component */ "./src/app/pages/profiles/my-tickets/my-tickets.component.ts");
/* harmony import */ var _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/ticket/ticket.component */ "./src/app/components/ticket/ticket.component.ts");
/* harmony import */ var _pages_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/profiles/profiles.component */ "./src/app/pages/profiles/profiles.component.ts");
/* harmony import */ var _components_dialog_mat_dialog_mat_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dialog-mat/dialog-mat.component */ "./src/app/components/dialog-mat/dialog-mat.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _pages_profiles_devices_devices_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/profiles/devices/devices.component */ "./src/app/pages/profiles/devices/devices.component.ts");
/* harmony import */ var _components_device_device_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/device/device.component */ "./src/app/components/device/device.component.ts");
/* harmony import */ var _pages_login_login_input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/login/login/input-mask/input-mask.component */ "./src/app/pages/login/login/input-mask/input-mask.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _pages_profiles_store_reducers_ticket_reducer__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/profiles/store/reducers/ticket.reducer */ "./src/app/pages/profiles/store/reducers/ticket.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _pages_profiles_store_effects_ticket_effects__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/profiles/store/effects/ticket.effects */ "./src/app/pages/profiles/store/effects/ticket.effects.ts");
/* harmony import */ var _pages_profiles_store_effects_profile_effects__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/profiles/store/effects/profile.effects */ "./src/app/pages/profiles/store/effects/profile.effects.ts");
/* harmony import */ var _pages_profiles_store_effects_device_effects__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/profiles/store/effects/device.effects */ "./src/app/pages/profiles/store/effects/device.effects.ts");
/* harmony import */ var _pages_profiles_store_reducers_device_reducer__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/profiles/store/reducers/device.reducer */ "./src/app/pages/profiles/store/reducers/device.reducer.ts");
/* harmony import */ var _pages_profiles_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/profiles/store/reducers/profile.reducer */ "./src/app/pages/profiles/store/reducers/profile.reducer.ts");
/* harmony import */ var _angular_common_locales_de_AT__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/common/locales/de-AT */ "./node_modules/@angular/common/locales/de-AT.js");
/* harmony import */ var _angular_common_locales_de_AT__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de_AT__WEBPACK_IMPORTED_MODULE_48__);




















// d3 and nvd3 should be included somewhere





























Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_de_AT__WEBPACK_IMPORTED_MODULE_48___default.a, 'de-AT');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"].forRoot(),
                _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ng2_nvd3__WEBPACK_IMPORTED_MODULE_18__["NvD3Module"],
                _angular_material__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
                angular2_focus__WEBPACK_IMPORTED_MODULE_19__["FocusModule"].forRoot(),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_40__["StoreModule"].forRoot({
                    ticket: _pages_profiles_store_reducers_ticket_reducer__WEBPACK_IMPORTED_MODULE_41__["ticketReducer"],
                    device: _pages_profiles_store_reducers_device_reducer__WEBPACK_IMPORTED_MODULE_46__["deviceReducer"],
                    profile: _pages_profiles_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_47__["profileReducer"],
                }, {
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true,
                        strictStateSerializability: true,
                        strictActionSerializability: true,
                    }
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_42__["EffectsModule"].forRoot([
                    _pages_profiles_store_effects_ticket_effects__WEBPACK_IMPORTED_MODULE_43__["TicketEffects"],
                    _pages_profiles_store_effects_device_effects__WEBPACK_IMPORTED_MODULE_45__["DeviceEffects"],
                    _pages_profiles_store_effects_profile_effects__WEBPACK_IMPORTED_MODULE_44__["ProfileEffects"]
                ])
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_10__["StatisticComponent"],
                _pages_login_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _pages_login_nfclogin_nfc_login_component__WEBPACK_IMPORTED_MODULE_24__["NfcLoginComponent"],
                _pages_login_register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"],
                _pages_login_terminallogin_terminallogin_component__WEBPACK_IMPORTED_MODULE_23__["TerminalLoginComponent"],
                _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["AdminComponent"],
                _pages_profiles_my_tickets_my_tickets_component__WEBPACK_IMPORTED_MODULE_29__["MyTicketsComponent"],
                _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_30__["TicketComponent"],
                _pages_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_31__["ProfilesComponent"],
                _components_dialog_mat_dialog_mat_component__WEBPACK_IMPORTED_MODULE_32__["DialogMatComponent"],
                _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_35__["DialogComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_36__["ButtonComponent"],
                _pages_profiles_devices_devices_component__WEBPACK_IMPORTED_MODULE_37__["DevicesComponent"],
                _components_device_device_component__WEBPACK_IMPORTED_MODULE_38__["DeviceComponent"],
                _pages_login_login_input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_39__["InputMaskComponent"],
            ],
            providers: [
                _pages_statistic_statistic_service__WEBPACK_IMPORTED_MODULE_9__["StatisticService"],
                _pages_statistic_chart_service__WEBPACK_IMPORTED_MODULE_11__["ChartService"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["HttpInterceptorService"], multi: true },
                _services_app_api_service__WEBPACK_IMPORTED_MODULE_16__["AppApiService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"],
                _services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_26__["IsLoggedInGuard"],
                _services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_26__["IsNotLoggedInGuard"],
                _services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_26__["IsAdminGuard"],
                _services_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_26__["IsTerminalGuard"],
                _services_terminal_service__WEBPACK_IMPORTED_MODULE_27__["TerminalService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"],
                _services_parser_service__WEBPACK_IMPORTED_MODULE_15__["ParserService"],
                //{ provide: BrowserXhr, useClass: NgProgressBrowserXhr },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'de-AT' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=submit] {\n  margin: 10px 4px 0 0;\n  border: 1px solid #74a4a3;\n  background: none;\n  color: #74a4a3;\n  text-transform: none;\n  padding: 10px 16px;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  border-radius: 5px;\n  transition: all 0.2s ease;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  display: inline-block;\n  box-shadow: none;\n  text-shadow: none;\n}\n\ninput[type=submit]:enabled:hover {\n  background: #74a4a3;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: none;\n  text-shadow: none;\n}\n\ninput[type=submit][disabled] {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIG1hcmdpbjogMTBweCA0cHggMCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzRhNGEzO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzc0YTRhMztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF06ZW5hYmxlZDpob3ZlcntcbiAgYmFja2dyb3VuZDogIzc0YTRhMztcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjY7XG59XG4iLCJpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBtYXJnaW46IDEwcHggNHB4IDAgMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0YTRhMztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM3NGE0YTM7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmVuYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzRhNGEzO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.clickEvent = function () {
        this.buttonClick.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ButtonComponent.prototype, "buttonClick", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/button/button.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/device/device.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/device/device.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fl-device-element {\n  border: 6px solid #ddd;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  cursor: pointer;\n}\n\n.fl-device-element-content {\n  transition: background-color 0.3s ease;\n  -webkit-transition: background-color 0.3s ease;\n  -moz-transition: background-color 0.3s ease;\n  background-color: rgba(0, 0, 0, 0.15);\n  padding: 14px 18px;\n  color: #fff;\n}\n\n.fl-device-element-content:hover {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.fl-device-element-content h2 {\n  margin-top: 6px;\n  margin-bottom: 14px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.fl-device-element-content p {\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 5px;\n}\n\n.fl-device-element-content:hover p {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9kZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RldmljZS9kZXZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0Usa0NBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBRERBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsLWRldmljZS1lbGVtZW50IHtcbiAgYm9yZGVyOiA2cHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZsLWRldmljZS1lbGVtZW50LWNvbnRlbnR7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMTUpO1xuICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZsLWRldmljZS1lbGVtZW50LWNvbnRlbnQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG59XG4uZmwtZGV2aWNlLWVsZW1lbnQtY29udGVudCBoMntcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBjb2xvcjogcmdiYSgyNTYsMjU2LDI1NiwwLjkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLmZsLWRldmljZS1lbGVtZW50LWNvbnRlbnQgcHtcbiAgY29sb3I6IHJnYmEoMjU2LDI1NiwyNTYsMC43KTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmZsLWRldmljZS1lbGVtZW50LWNvbnRlbnQ6aG92ZXIgcHtcbiAgY29sb3I6IHJnYmEoMjU2LDI1NiwyNTYsMSk7XG59XG4iLCIuZmwtZGV2aWNlLWVsZW1lbnQge1xuICBib3JkZXI6IDZweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmwtZGV2aWNlLWVsZW1lbnQtY29udGVudCB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZmwtZGV2aWNlLWVsZW1lbnQtY29udGVudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5mbC1kZXZpY2UtZWxlbWVudC1jb250ZW50IGgyIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uZmwtZGV2aWNlLWVsZW1lbnQtY29udGVudCBwIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZmwtZGV2aWNlLWVsZW1lbnQtY29udGVudDpob3ZlciBwIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/device/device.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/device/device.component.ts ***!
  \*******************************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/link.service */ "./src/app/services/link.service.ts");



var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(linkService) {
        this.linkService = linkService;
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DeviceComponent.prototype.ngOnInit = function () {
    };
    DeviceComponent.prototype.deviceClicked = function () {
        this.buttonClick.emit(this.linkService.getLinkByReltype(this.device._links, 'new-ticket'));
    };
    DeviceComponent.ctorParameters = function () { return [
        { type: _services_link_service__WEBPACK_IMPORTED_MODULE_2__["LinkService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceComponent.prototype, "device", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DeviceComponent.prototype, "buttonClick", void 0);
    DeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! raw-loader!./device.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/device/device.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./device.component.scss */ "./src/app/components/device/device.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_link_service__WEBPACK_IMPORTED_MODULE_2__["LinkService"]])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/components/dialog-mat/dialog-mat.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/dialog-mat/dialog-mat.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nLW1hdC9kaWFsb2ctbWF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dialog-mat/dialog-mat.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dialog-mat/dialog-mat.component.ts ***!
  \***************************************************************/
/*! exports provided: DialogMatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMatComponent", function() { return DialogMatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogMatComponent = /** @class */ (function () {
    function DialogMatComponent(
    // public dialogRef: MatDialogRef<DialogMatComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    }
    DialogMatComponent.prototype.onNoClick = function () {
        // this.dialogRef.close();
    };
    DialogMatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-mat',
            template: __webpack_require__(/*! raw-loader!./dialog-mat.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialog-mat/dialog-mat.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./dialog-mat.component.scss */ "./src/app/components/dialog-mat/dialog-mat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogMatComponent);
    return DialogMatComponent;
}());



/***/ }),

/***/ "./src/app/components/dialog/dialog.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fl-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  top: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 10012;\n}\n\n.device-ticket .close {\n  float: right;\n  margin: -20px -14px;\n  text-align: right;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1;\n  opacity: 0.3;\n  text-decoration: none;\n}\n\n.device-ticket .close:hover {\n  cursor: pointer;\n  opacity: 0.5;\n}\n\n.fl-overlay-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  right: 0;\n  top: 0;\n  z-index: 10010;\n}\n\n.fl-overlay-layer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  top: 0;\n  z-index: 10011;\n}\n\n/* Device Ticket Overlay */\n\n.device-ticket {\n  width: 70%;\n  position: relative;\n  margin: 150px auto;\n  padding: 30px 30px 30px;\n  background-color: #fdfdfd;\n  border: 7px solid #ccc;\n  border-radius: 8px;\n  z-index: 10013;\n  /* 1px higher than the overlay layer */\n}\n\n@media all and (min-width: 800px) {\n  .device-ticket {\n    width: 650px;\n  }\n}\n\n@media all and (max-height: 800px) {\n  .device-ticket {\n    margin: 50px auto;\n  }\n}\n\n.device-ticket h2 {\n  margin-top: 6px;\n  margin-bottom: 14px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.device-ticket input[type=submit] {\n  border: 1px solid #aaa;\n  background: none;\n  color: #aaa;\n  text-transform: none;\n  padding: 6px 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  display: inline-block;\n  margin-right: 2px;\n  margin-bottom: 4px;\n  box-shadow: none;\n  text-shadow: none;\n}\n\n.device-ticket input[type=submit]:hover {\n  border: 1px solid #ccc;\n  background: #ccc;\n  color: #fff;\n  cursor: pointer;\n}\n\n.device-ticket select {\n  font-size: 14px;\n  height: 32px;\n  line-height: 1;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  border-right: 4px solid #ccc;\n  background: #f7f7f7;\n  color: #888;\n  display: inline-block;\n  padding: 6px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  margin: 14px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUEsMEJBQUE7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUFnQixzQ0FBQTtBQ0dsQjs7QURBQTtFQUNFO0lBQ0UsWUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLGlCQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiAxMDAxMjtcbn1cblxuLmRldmljZS10aWNrZXQgLmNsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IC0yMHB4IC0xNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG9wYWNpdHk6IDAuMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRldmljZS10aWNrZXQgLmNsb3NlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5mbC1vdmVybGF5LWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAxMDtcbn1cbi5mbC1vdmVybGF5LWxheWVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDExO1xufVxuXG4vKiBEZXZpY2UgVGlja2V0IE92ZXJsYXkgKi9cblxuLmRldmljZS10aWNrZXQge1xuICB3aWR0aDogNzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTUwcHggYXV0bztcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gIGJvcmRlcjogN3B4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogMTAwMTM7IC8qIDFweCBoaWdoZXIgdGhhbiB0aGUgb3ZlcmxheSBsYXllciAqL1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuZGV2aWNlLXRpY2tldCB7XG4gICAgd2lkdGg6IDY1MHB4O1xuICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAuZGV2aWNlLXRpY2tldCB7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIH1cbn1cblxuLmRldmljZS10aWNrZXQgaDIge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5kZXZpY2UtdGlja2V0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjYWFhO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kZXZpY2UtdGlja2V0IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXZpY2UtdGlja2V0IHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm9yZGVyLXJhZGl1czo0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweDtcbiAgYXBwZWFyYW5jZTpub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOm5vbmU7XG4gIG1hcmdpbjogMTRweCAwO1xufVxuIiwiLmZsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiAxMDAxMjtcbn1cblxuLmRldmljZS10aWNrZXQgLmNsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IC0yMHB4IC0xNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG9wYWNpdHk6IDAuMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZGV2aWNlLXRpY2tldCAuY2xvc2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmZsLW92ZXJsYXktYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDEwO1xufVxuXG4uZmwtb3ZlcmxheS1sYXllciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAxMTtcbn1cblxuLyogRGV2aWNlIFRpY2tldCBPdmVybGF5ICovXG4uZGV2aWNlLXRpY2tldCB7XG4gIHdpZHRoOiA3MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxNTBweCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgYm9yZGVyOiA3cHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAxMDAxMztcbiAgLyogMXB4IGhpZ2hlciB0aGFuIHRoZSBvdmVybGF5IGxheWVyICovXG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5kZXZpY2UtdGlja2V0IHtcbiAgICB3aWR0aDogNjUwcHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAuZGV2aWNlLXRpY2tldCB7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIH1cbn1cbi5kZXZpY2UtdGlja2V0IGgyIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uZGV2aWNlLXRpY2tldCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI2FhYTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uZGV2aWNlLXRpY2tldCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGV2aWNlLXRpY2tldCBzZWxlY3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgY29sb3I6ICM4ODg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAxNHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.showDialog = false;
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DialogComponent.prototype.closeOverlay = function () {
        this.closeDialog.emit(true);
    };
    DialogComponent.prototype.buttonClicked = function (clicked, link) {
        if (clicked) {
            this.buttonClick.emit(link);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DialogComponent.prototype, "showDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DialogComponent.prototype, "buttonClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DialogComponent.prototype, "closeDialog", void 0);
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialog/dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/components/dialog/dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket/ticket.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/ticket/ticket.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fl-ticket-element {\n  font-family: Helvetica, Arial, Sans-Serif;\n  position: relative;\n  background: #fff;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n  padding: 20px 24px;\n  margin: 18px 10px;\n  transition: all 0.2s ease;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  border-width: 0 0 0 5px;\n  border-style: solid;\n  border-color: #ccc;\n}\n.fl-ticket-element h2 {\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-size: 28px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  color: #74a4a3;\n}\n.fl-ticket-element p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.fl-ticket-element input[type=submit] {\n  margin: 10px 4px 0 0;\n  border: 1px solid #74a4a3;\n  background: none;\n  color: #74a4a3;\n  text-transform: none;\n  padding: 10px 16px;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  border-radius: 5px;\n  transition: all 0.2s ease;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  display: inline-block;\n  box-shadow: none;\n  text-shadow: none;\n}\n.fl-ticket-element input[type=submit]:enabled:hover {\n  background: #74a4a3;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: none;\n  text-shadow: none;\n}\n.fl-ticket-element input[type=submit][disabled] {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvY29tcG9uZW50cy90aWNrZXQvdGlja2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RpY2tldC90aWNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjtBREdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0U7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNISjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE9JO0VBQ0UsWUFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQvdGlja2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZmwtdGlja2V0LWVsZW1lbnQge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgU2Fucy1TZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBtYXJnaW46IDE4cHggMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgYm9yZGVyLXdpZHRoOiAwIDAgMCA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcblxuICBoMiB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGNvbG9yOiAjNzRhNGEzO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBtYXJnaW46IDEwcHggNHB4IDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzRhNGEzO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM3NGE0YTM7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcblxuXG4gICAgJjplbmFibGVkOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDogIzc0YTRhMztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG4gIH1cblxufVxuXG4iLCIuZmwtdGlja2V0LWVsZW1lbnQge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgU2Fucy1TZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBtYXJnaW46IDE4cHggMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJvcmRlci13aWR0aDogMCAwIDAgNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNjY2M7XG59XG4uZmwtdGlja2V0LWVsZW1lbnQgaDIge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogIzc0YTRhMztcbn1cbi5mbC10aWNrZXQtZWxlbWVudCBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5mbC10aWNrZXQtZWxlbWVudCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBtYXJnaW46IDEwcHggNHB4IDAgMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0YTRhMztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM3NGE0YTM7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbi5mbC10aWNrZXQtZWxlbWVudCBpbnB1dFt0eXBlPXN1Ym1pdF06ZW5hYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3NGE0YTM7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuLmZsLXRpY2tldC1lbGVtZW50IGlucHV0W3R5cGU9c3VibWl0XVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjY7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/ticket/ticket.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/ticket/ticket.component.ts ***!
  \*******************************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TicketComponent = /** @class */ (function () {
    function TicketComponent() {
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TicketComponent.prototype.ngOnInit = function () {
    };
    TicketComponent.prototype.buttonClicked = function (clicked, link) {
        if (clicked) {
            this.buttonClick.emit(link);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TicketComponent.prototype, "ticket", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TicketComponent.prototype, "buttonClick", void 0);
    TicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket',
            template: __webpack_require__(/*! raw-loader!./ticket.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ticket/ticket.component.html"),
            styles: [__webpack_require__(/*! ./ticket.component.scss */ "./src/app/components/ticket/ticket.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TicketComponent);
    return TicketComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login/input-mask/input-mask.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/login/login/input-mask/input-mask.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin-bottom: 2px;\n}\n\nlabel.checkbox {\n  padding: 5px 20px;\n  line-height: 1.7;\n}\n\nform {\n  margin-top: 20px;\n}\n\nform p {\n  margin-bottom: 10px;\n}\n\ninput[type=text],\ninput[type=email],\ninput[type=password] {\n  width: 300px;\n  height: 32px;\n  padding: 0 10px;\n  margin-bottom: 10px;\n  background-color: rgba(0, 0, 0, 0.03);\n  border: none;\n  display: inline;\n  color: #303030;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=password]:focus {\n  background-color: rgba(0, 0, 0, 0.05);\n  /*background-color: rgba(2,143,118,0.15);*/\n  outline: none;\n  box-shadow: none;\n}\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4vaW5wdXQtbWFzay9pbnB1dC1tYXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi9pbnB1dC1tYXNrL2lucHV0LW1hc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7OztFQUdFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUFnQix5Q0FBQTtFQUNkLFlBQUE7RUFBYyxZQUFBO0FDRWhCOztBREhBO0VBQWdCLHlDQUFBO0VBQ2QsWUFBQTtFQUFjLFlBQUE7QUNFaEI7O0FESEE7RUFBZ0IseUNBQUE7RUFDZCxZQUFBO0VBQWMsWUFBQTtBQ0VoQjs7QURIQTtFQUFnQix5Q0FBQTtFQUNkLFlBQUE7RUFBYyxZQUFBO0FDRWhCOztBREhBO0VBQWdCLHlDQUFBO0VBQ2QsWUFBQTtFQUFjLFlBQUE7QUNFaEI7O0FERUE7OztFQUdFLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQWdDLFVBQUE7QUNFbEM7O0FEQ0E7RUFDRSw4QkFBQTtFQUFnQyxRQUFBO0FDR2xDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4vaW5wdXQtbWFzay9pbnB1dC1tYXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxubGFiZWwuY2hlY2tib3gge1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmZvcm0gcCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjAzKTtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgb3BhY2l0eTogMC43OyAvKiBGaXJlZm94ICovXG59XG5cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDUpO1xuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwxNDMsMTE4LDAuMTUpOyovXG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuIiwibGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbmxhYmVsLmNoZWNrYm94IHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbmZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5mb3JtIHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIG9wYWNpdHk6IDAuNztcbiAgLyogRmlyZWZveCAqL1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLDE0MywxMTgsMC4xNSk7Ki9cbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xuICAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gIC8qIHJlZCAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login/input-mask/input-mask.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/login/login/input-mask/input-mask.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskComponent", function() { return InputMaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/link.service */ "./src/app/services/link.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var InputMaskComponent = /** @class */ (function () {
    function InputMaskComponent(linkService) {
        this.linkService = linkService;
        this.submitClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InputMaskComponent.prototype.ngOnInit = function () {
    };
    InputMaskComponent.prototype.ngOnChanges = function () {
        if (!!this.mask) {
            this.submitLink = this.getLoginLink(this.mask);
        }
    };
    InputMaskComponent.prototype.submitLogin = function (inputForm) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        for (var _i = 0, _a = Object.keys(inputForm.controls); _i < _a.length; _i++) {
            var key = _a[_i];
            params = params.set(key, inputForm.controls[key].value);
        }
        this.submitLink.params = params;
        this.submitClick.emit(this.submitLink);
    };
    InputMaskComponent.prototype.getInputFieldType = function (field) {
        return field.type.toLowerCase();
    };
    InputMaskComponent.prototype.getLoginLink = function (mask) {
        return this.linkService.getLinkByReltype(mask._links, 'submit');
    };
    InputMaskComponent.ctorParameters = function () { return [
        { type: _services_link_service__WEBPACK_IMPORTED_MODULE_2__["LinkService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMaskComponent.prototype, "mask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputMaskComponent.prototype, "submitClick", void 0);
    InputMaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-mask',
            template: __webpack_require__(/*! raw-loader!./input-mask.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login/input-mask/input-mask.component.html"),
            styles: [__webpack_require__(/*! ./input-mask.component.scss */ "./src/app/pages/login/login/input-mask/input-mask.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_link_service__WEBPACK_IMPORTED_MODULE_2__["LinkService"]])
    ], InputMaskComponent);
    return InputMaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login/login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/login/login/login.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/login/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app-api.service */ "./src/app/services/app-api.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/link.service */ "./src/app/services/link.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, router, route, linkService, appApiService) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.linkService = linkService;
        this.appApiService = appApiService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getCurrentResource()
            .subscribe(function (loginInfos) {
            _this.handleLoginLoadInfos(loginInfos);
        });
    };
    LoginComponent.prototype.handleLoginLoadInfos = function (loginInfos) {
        if (loginInfos.userInfos.is_user_logged_in) {
            this.setLoginAndRedirect(loginInfos);
        }
        else {
            this.loginData = loginInfos;
        }
    };
    // submit methods
    LoginComponent.prototype.submitClicked = function (link) {
        var _this = this;
        this.httpService.requestByLink(link).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (loginInfos) {
            if (_this.appApiService.isDevMode() && !loginInfos.loginFailed) {
                var dataLink = _this.linkService.getLinkByReltype(loginInfos._links, 'login-nonce');
                dataLink.params = link.params;
                return _this.httpService.requestByLink(dataLink);
            }
            else {
                _this.refresh();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(loginInfos);
            }
        })).subscribe(function (loginInfos) {
            _this.handleLoginInfos(loginInfos);
        });
    };
    LoginComponent.prototype.handleLoginInfos = function (loginInfos) {
        if (loginInfos.loginFailed) {
            this.loginErrorMessage = loginInfos.loginMessage;
        }
        else {
            this.setLoginAndRedirect(loginInfos);
        }
    };
    LoginComponent.prototype.setLoginAndRedirect = function (loginInfos) {
        this.appApiService.setDevUserLoggedIn(loginInfos.userInfos);
        this.router.navigate(['/' + this.linkService.getHrefByReltype(loginInfos._links, 'related')]);
    };
    LoginComponent.prototype.refresh = function () {
        window.location.reload();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"] },
        { type: _services_app_api_service__WEBPACK_IMPORTED_MODULE_2__["AppApiService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"],
            _services_app_api_service__WEBPACK_IMPORTED_MODULE_2__["AppApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/nfclogin/nfc-login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/login/nfclogin/nfc-login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------------------------------------------------------ */\n/* overlay style */\n/* ------------------------------------------------------------ */\n.nfc-token {\n  opacity: 0;\n  position: absolute;\n}\n.nfc-overlay p {\n  margin: 0;\n  margin-bottom: 6px;\n  color: #028F76;\n}\n.nfc-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 10012;\n}\n.nfc-overlay-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  right: 0;\n  z-index: 10010;\n}\n/* NFC Overlay */\n.nfc-overlay-content {\n  width: 70%;\n  position: relative;\n  margin: 150px auto;\n  padding: 30px 30px 30px;\n  background-color: #fdfdfd;\n  border: 7px solid #ccc;\n  border-radius: 8px;\n  z-index: 10013;\n  /* 1px higher than the overlay layer */\n}\n@media all and (min-width: 800px) {\n  .nfc-overlay-content {\n    width: 650px;\n  }\n}\n@media all and (max-height: 800px) {\n  .nfc-overlay-content {\n    margin: 50px auto;\n  }\n}\n.nfc-overlay-content .close {\n  margin: -20px -14px;\n  float: right;\n  text-align: right;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1;\n  opacity: 0.3;\n  text-decoration: none;\n}\n.nfc-overlay-content .close:hover {\n  cursor: pointer;\n  opacity: 0.5;\n}\n.nfc-overlay-content h2 {\n  margin-top: 6px;\n  margin-bottom: 14px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.nfc-overlay-content img {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvcGFnZXMvbG9naW4vbmZjbG9naW4vbmZjLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9uZmNsb2dpbi9uZmMtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsaUVBQUE7QUFDQSxrQkFBQTtBQUNBLGlFQUFBO0FBRUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FES0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FES0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUNGSjtBREtBLGdCQUFBO0FBRUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUFnQixzQ0FBQTtBQ0ZwQjtBREtBO0VBQ0k7SUFDSSxZQUFBO0VDRk47QUFDRjtBREtBO0VBQ0k7SUFDSSxpQkFBQTtFQ0hOO0FBQ0Y7QURNQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0pKO0FETUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0hKO0FETUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDSEo7QURNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9uZmNsb2dpbi9uZmMtbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogb3ZlcmxheSBzdHlsZSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5uZmMtdG9rZW4ge1xuICAgIG9wYWNpdHk6IDA7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5mYy1vdmVybGF5IHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgY29sb3I6ICMwMjhGNzY7XG59XG5cblxuLm5mYy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDEwMDEyO1xufVxuXG4ubmZjLW92ZXJsYXktYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTAwMTA7XG59XG5cbi8qIE5GQyBPdmVybGF5ICovXG5cbi5uZmMtb3ZlcmxheS1jb250ZW50IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDE1MHB4IGF1dG87IFxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gICAgYm9yZGVyOiA3cHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgei1pbmRleDogMTAwMTM7IC8qIDFweCBoaWdoZXIgdGhhbiB0aGUgb3ZlcmxheSBsYXllciAqL1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5uZmMtb3ZlcmxheS1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDY1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgLm5mYy1vdmVybGF5LWNvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICB9XG59XG5cbi5uZmMtb3ZlcmxheS1jb250ZW50IC5jbG9zZSB7XG4gICAgbWFyZ2luOiAtMjBweCAtMTRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICBcbn1cbi5uZmMtb3ZlcmxheS1jb250ZW50IC5jbG9zZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLm5mYy1vdmVybGF5LWNvbnRlbnQgaDIge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLm5mYy1vdmVybGF5LWNvbnRlbnQgaW1ne1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXI6IDA7XG59XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIG92ZXJsYXkgc3R5bGUgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLm5mYy10b2tlbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5mYy1vdmVybGF5IHAge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY29sb3I6ICMwMjhGNzY7XG59XG5cbi5uZmMtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiAxMDAxMjtcbn1cblxuLm5mYy1vdmVybGF5LWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMTA7XG59XG5cbi8qIE5GQyBPdmVybGF5ICovXG4ubmZjLW92ZXJsYXktY29udGVudCB7XG4gIHdpZHRoOiA3MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxNTBweCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgYm9yZGVyOiA3cHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAxMDAxMztcbiAgLyogMXB4IGhpZ2hlciB0aGFuIHRoZSBvdmVybGF5IGxheWVyICovXG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5uZmMtb3ZlcmxheS1jb250ZW50IHtcbiAgICB3aWR0aDogNjUwcHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAubmZjLW92ZXJsYXktY29udGVudCB7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIH1cbn1cbi5uZmMtb3ZlcmxheS1jb250ZW50IC5jbG9zZSB7XG4gIG1hcmdpbjogLTIwcHggLTE0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBvcGFjaXR5OiAwLjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5mYy1vdmVybGF5LWNvbnRlbnQgLmNsb3NlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5uZmMtb3ZlcmxheS1jb250ZW50IGgyIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4ubmZjLW92ZXJsYXktY29udGVudCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/nfclogin/nfc-login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/login/nfclogin/nfc-login.component.ts ***!
  \*************************************************************/
/*! exports provided: NfcLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcLoginComponent", function() { return NfcLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_parser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/parser.service */ "./src/app/services/parser.service.ts");
/* harmony import */ var _services_app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app-api.service */ "./src/app/services/app-api.service.ts");





var NfcLoginComponent = /** @class */ (function () {
    function NfcLoginComponent(httpService, appApiService, parserService) {
        this.httpService = httpService;
        this.appApiService = appApiService;
        this.parserService = parserService;
        this.autoHide = false;
        this.showNfcOverlay = false;
        this.onCardLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NfcLoginComponent.prototype.ngOnInit = function () {
    };
    NfcLoginComponent.prototype.showHideNfcOverlay = function (val) {
        if (val === void 0) { val = null; }
        if (val == null) {
            this.showNfcOverlay = !this.showNfcOverlay;
        }
        else {
            this.showNfcOverlay = val;
        }
    };
    NfcLoginComponent.prototype.submitCheckToken = function (nfcForm) {
        //console.log(nfcForm.controls['token'].value);
        var cardData = this.parserService.parseCardData(nfcForm.controls['token'].value);
        this.onCardLoaded.emit(cardData);
        if (this.autoHide) {
            this.showHideNfcOverlay(false);
        }
        nfcForm.reset();
    };
    NfcLoginComponent.ctorParameters = function () { return [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_app_api_service__WEBPACK_IMPORTED_MODULE_4__["AppApiService"] },
        { type: _services_parser_service__WEBPACK_IMPORTED_MODULE_3__["ParserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NfcLoginComponent.prototype, "nfcMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NfcLoginComponent.prototype, "autoHide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NfcLoginComponent.prototype, "nfcButtonLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NfcLoginComponent.prototype, "onCardLoaded", void 0);
    NfcLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nfclogin',
            template: __webpack_require__(/*! raw-loader!./nfc-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/nfclogin/nfc-login.component.html"),
            styles: [__webpack_require__(/*! ./nfc-login.component.scss */ "./src/app/pages/login/nfclogin/nfc-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_app_api_service__WEBPACK_IMPORTED_MODULE_4__["AppApiService"],
            _services_parser_service__WEBPACK_IMPORTED_MODULE_3__["ParserService"]])
    ], NfcLoginComponent);
    return NfcLoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/register/register.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/login/register/register.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--------------------\nForm\n---------------------*/\nlabel {\n  margin-bottom: 2px;\n}\nform {\n  margin-top: 20px;\n}\nform p {\n  margin-bottom: 10px;\n}\ninput[type=text],\ninput[type=email],\ninput[type=password] {\n  width: 300px;\n  height: 32px;\n  padding: 0 10px;\n  margin-bottom: 10px;\n  background-color: rgba(0, 0, 0, 0.03);\n  border: none;\n  display: inline;\n  color: #303030;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=password]:focus {\n  background-color: rgba(0, 0, 0, 0.05);\n  /*background-color: rgba(2,143,118,0.15);*/\n  outline: none;\n  box-shadow: none;\n}\n.checkbox-field label {\n  display: inline;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvcGFnZXMvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztzQkFBQTtBQUlBO0VBQ0Usa0JBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7QUNIRjtBRE1BO0VBQ0UsbUJBQUE7QUNIRjtBRE1BOzs7RUFHRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEY7QURNQztFQUFnQix5Q0FBQTtFQUNiLFlBQUE7RUFBYyxZQUFBO0FDRGxCO0FEQUM7RUFBZ0IseUNBQUE7RUFDYixZQUFBO0VBQWMsWUFBQTtBQ0RsQjtBREFDO0VBQWdCLHlDQUFBO0VBQ2IsWUFBQTtFQUFjLFlBQUE7QUNEbEI7QURBQztFQUFnQix5Q0FBQTtFQUNiLFlBQUE7RUFBYyxZQUFBO0FDRGxCO0FEQUM7RUFBZ0IseUNBQUE7RUFDYixZQUFBO0VBQWMsWUFBQTtBQ0RsQjtBREtBOzs7RUFHRSxxQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7QUNGRjtBREtBO0VBQ0UsOEJBQUE7RUFBZ0MsVUFBQTtBQ0RsQztBRElBO0VBQ0UsOEJBQUE7RUFBZ0MsUUFBQTtBQ0FsQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxuRm9ybVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbmZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5mb3JtIHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7IFxuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDMpO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICBvcGFjaXR5OiAwLjc7IC8qIEZpcmVmb3ggKi9cbn1cblxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLDE0MywxMTgsMC4xNSk7Ki9cbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNoZWNrYm94LWZpZWxkIGxhYmVse1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxuRm9ybVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuZm9ybSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBvcGFjaXR5OiAwLjc7XG4gIC8qIEZpcmVmb3ggKi9cbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwxNDMsMTE4LDAuMTUpOyovXG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jaGVja2JveC1maWVsZCBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xuICAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gIC8qIHJlZCAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/register/register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/login/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _app_routs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-routs */ "./src/app/app-routs.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(httpService) {
        this.httpService = httpService;
        this.cardset = false;
        this.appRoutes = _app_routs__WEBPACK_IMPORTED_MODULE_3__["appRoutes"];
        // ----------- for NfcLogin ---------------------------------
        this.nfcOverlayAutohide = true; // show / hide overlay
        this.nfcButtonLabel = 'Register with TU-Card'; // show / hide Label
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            name: '',
            surename: '',
            email: '',
            password: '',
            cardid: ''
        };
    };
    RegisterComponent.prototype.submitRegistration = function () {
        var _this = this;
        this.httpService.registerUser(this.user).subscribe(function (data) {
            //console.log(data);
            _this.refresh();
        }, function (err) {
            //console.log(err);
            _this.registerMessage = err.error.message;
        });
    };
    //public showHideNfcOverlay: Function;
    RegisterComponent.prototype.onCardLoaded = function (cardData) {
        if (this.user.username === '' && cardData.name != null && cardData.surename != null) {
            this.user.username = cardData.name.toLowerCase() + cardData.surename.toLowerCase();
        }
        if (this.user.name === '' && cardData.name != null) {
            this.user.name = cardData.name;
        }
        if (this.user.surename === '' && cardData.surename != null) {
            this.user.surename = cardData.surename;
        }
        if (this.user.email === '' && cardData.email != null) {
            this.user.email = cardData.email;
        }
        if (cardData.cardid != null) {
            this.user.cardid = cardData.cardid;
            this.cardset = true;
        }
        this.focusPassword = true;
    };
    RegisterComponent.prototype.refresh = function () {
        window.location.reload();
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/login/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/terminallogin/terminallogin.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/login/terminallogin/terminallogin.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--------------------\nForm\n---------------------*/\nlabel {\n  margin-bottom: 2px;\n}\nlabel.checkbox {\n  padding: 5px 20px;\n  line-height: 1.7;\n}\nform {\n  margin-top: 20px;\n}\nform p {\n  margin-bottom: 10px;\n}\ninput[type=text],\ninput[type=email],\ninput[type=password] {\n  width: 300px;\n  height: 32px;\n  padding: 0 10px;\n  margin-bottom: 10px;\n  background-color: rgba(0, 0, 0, 0.03);\n  border: none;\n  display: inline;\n  color: #303030;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 0.7;\n  /* Firefox */\n}\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=password]:focus {\n  background-color: rgba(0, 0, 0, 0.05);\n  /*background-color: rgba(2,143,118,0.15);*/\n  outline: none;\n  box-shadow: none;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvcGFnZXMvbG9naW4vdGVybWluYWxsb2dpbi90ZXJtaW5hbGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi90ZXJtaW5hbGxvZ2luL3Rlcm1pbmFsbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O3NCQUFBO0FBSUE7RUFDRSxrQkFBQTtBQ0hGO0FETUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0FDSEY7QURNQTtFQUNFLG1CQUFBO0FDSEY7QURNQTs7O0VBR0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hGO0FETUM7RUFBZ0IseUNBQUE7RUFDYixZQUFBO0VBQWMsWUFBQTtBQ0RsQjtBREFDO0VBQWdCLHlDQUFBO0VBQ2IsWUFBQTtFQUFjLFlBQUE7QUNEbEI7QURBQztFQUFnQix5Q0FBQTtFQUNiLFlBQUE7RUFBYyxZQUFBO0FDRGxCO0FEQUM7RUFBZ0IseUNBQUE7RUFDYixZQUFBO0VBQWMsWUFBQTtBQ0RsQjtBREFDO0VBQWdCLHlDQUFBO0VBQ2IsWUFBQTtFQUFjLFlBQUE7QUNEbEI7QURLQTs7O0VBR0UscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSw4QkFBQTtFQUFnQyxVQUFBO0FDRGxDO0FESUE7RUFDRSw4QkFBQTtFQUFnQyxRQUFBO0FDQWxDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vdGVybWluYWxsb2dpbi90ZXJtaW5hbGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxuRm9ybVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbmxhYmVsLmNoZWNrYm94IHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbmZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5mb3JtIHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7IFxuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDMpO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICBvcGFjaXR5OiAwLjc7IC8qIEZpcmVmb3ggKi9cbn1cblxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLDE0MywxMTgsMC4xNSk7Ki9cbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tXG5Gb3JtXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbmxhYmVsLmNoZWNrYm94IHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbmZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5mb3JtIHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIG9wYWNpdHk6IDAuNztcbiAgLyogRmlyZWZveCAqL1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLDE0MywxMTgsMC4xNSk7Ki9cbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xuICAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gIC8qIHJlZCAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/terminallogin/terminallogin.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/login/terminallogin/terminallogin.component.ts ***!
  \**********************************************************************/
/*! exports provided: TerminalLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalLoginComponent", function() { return TerminalLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app-api.service */ "./src/app/services/app-api.service.ts");
/* harmony import */ var _app_routs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app-routs */ "./src/app/app-routs.ts");






//let teststring:string = 'name:jakob, cardid:123456, nachname: hubert, email:jakob.ellmaier@gmx.at';
var TerminalLoginComponent = /** @class */ (function () {
    function TerminalLoginComponent(httpService, router, appApi) {
        this.httpService = httpService;
        this.router = router;
        this.appApi = appApi;
        // ----------- for NfcLogin ---------------------------------
        this.nfcLoginMessage = 'Achtung: Du musst die Karte zuerst zu deinem Account hinzufügen!'; // output to child
        this.nfcButtonLabel = 'Login with NFC-Card'; // show / hide Label
    }
    TerminalLoginComponent.prototype.ngOnInit = function () {
    };
    TerminalLoginComponent.prototype.submitLogin = function (loginForm) {
        var _this = this;
        var username = loginForm.controls['login'].value;
        var password = loginForm.controls['password'].value;
        this.httpService.checkLogin(username, password).subscribe(function (data) {
            if (_this.appApi.isDevMode()) {
                _this.httpService.getUserData(username, password).subscribe(function (data) {
                    _this.appApi.setDevUserLoggedIn(data);
                    _this.router.navigate(['/' + _app_routs__WEBPACK_IMPORTED_MODULE_5__["appRoutes"].profiles]);
                }, function (err) {
                    _this.loginMessage = err.error.message;
                });
            }
            else {
                _this.refresh();
            }
        }, function (err) {
            _this.loginMessage = err.error.message;
        });
    };
    TerminalLoginComponent.prototype.onCardLoaded = function (cardData) {
        var _this = this;
        console.log('input card' + cardData.cardid);
        console.log('input name' + cardData.name + ' ' + cardData.surename);
        this.httpService.checkLoginToken(cardData.cardid).subscribe(function (data) {
            _this.nfcLoginMessage = 'Karte gefunden!';
            _this.refresh();
        }, function (err) {
            console.log(err);
            _this.nfcLoginMessage = 'Karte nicht gefunden, bitte versuche es erneut!';
        });
    };
    TerminalLoginComponent.prototype.refresh = function () {
        window.location.reload();
    };
    TerminalLoginComponent.ctorParameters = function () { return [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_app_api_service__WEBPACK_IMPORTED_MODULE_4__["AppApiService"] }
    ]; };
    TerminalLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./terminallogin.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/terminallogin/terminallogin.component.html"),
            styles: [__webpack_require__(/*! ./terminallogin.component.scss */ "./src/app/pages/login/terminallogin/terminallogin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_app_api_service__WEBPACK_IMPORTED_MODULE_4__["AppApiService"]])
    ], TerminalLoginComponent);
    return TerminalLoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/profiles/devices/devices.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/profiles/devices/devices.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVzL2RldmljZXMvZGV2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profiles/devices/devices.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/profiles/devices/devices.component.ts ***!
  \*************************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevicesComponent = /** @class */ (function () {
    function DevicesComponent() {
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DevicesComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DevicesComponent.prototype, "devices", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DevicesComponent.prototype, "buttonClick", void 0);
    DevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__(/*! raw-loader!./devices.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profiles/devices/devices.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./devices.component.scss */ "./src/app/pages/profiles/devices/devices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/pages/profiles/my-tickets/my-tickets.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profiles/my-tickets/my-tickets.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVzL215LXRpY2tldHMvbXktdGlja2V0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profiles/my-tickets/my-tickets.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profiles/my-tickets/my-tickets.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTicketsComponent", function() { return MyTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyTicketsComponent = /** @class */ (function () {
    function MyTicketsComponent() {
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MyTicketsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MyTicketsComponent.prototype, "tickets", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MyTicketsComponent.prototype, "buttonClick", void 0);
    MyTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-tickets',
            template: __webpack_require__(/*! raw-loader!./my-tickets.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profiles/my-tickets/my-tickets.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./my-tickets.component.scss */ "./src/app/pages/profiles/my-tickets/my-tickets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyTicketsComponent);
    return MyTicketsComponent;
}());



/***/ }),

/***/ "./src/app/pages/profiles/profiles.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/profiles/profiles.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profiles/profiles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/profiles/profiles.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/link.service */ "./src/app/services/link.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_profile_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/profile.state */ "./src/app/pages/profiles/store/profile.state.ts");
/* harmony import */ var _store_actions_profile_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/actions/profile.actions */ "./src/app/pages/profiles/store/actions/profile.actions.ts");








var ProfilesComponent = /** @class */ (function () {
    function ProfilesComponent(httpService, router, route, linkService, store) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.linkService = linkService;
        this.store = store;
        this.showDialog = false;
        this.tickets$ = store.select(_store_profile_state__WEBPACK_IMPORTED_MODULE_6__["TICKET_STORE_PATH"]);
        this.devices$ = store.select(_store_profile_state__WEBPACK_IMPORTED_MODULE_6__["DEVICE_STORE_PATH"]);
    }
    ProfilesComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.data['redirect'] === true) {
            this.store.dispatch(new _store_actions_profile_actions__WEBPACK_IMPORTED_MODULE_7__["ProfileLoadRedirect"](null));
        }
        else {
            this.store.dispatch(new _store_actions_profile_actions__WEBPACK_IMPORTED_MODULE_7__["ProfileInit"](null));
        }
    };
    ProfilesComponent.prototype.buttonClickedAndShowDialog = function (link) {
        this.ticketOverlayData$ = this.httpService.requestByLink(link);
        this.showDialog = true;
    };
    ProfilesComponent.prototype.buttonClickedAndHideDialog = function (link) {
        this.httpService.requestByLink(link).subscribe();
        this.showDialog = false;
        this.store.dispatch(new _store_actions_profile_actions__WEBPACK_IMPORTED_MODULE_7__["ProfileInit"](null));
    };
    ProfilesComponent.prototype.closeDialog = function (closeDialog) {
        if (closeDialog) {
            this.showDialog = false;
        }
    };
    ProfilesComponent.ctorParameters = function () { return [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_link_service__WEBPACK_IMPORTED_MODULE_4__["LinkService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    ProfilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! raw-loader!./profiles.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profiles/profiles.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./profiles.component.scss */ "./src/app/pages/profiles/profiles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_link_service__WEBPACK_IMPORTED_MODULE_4__["LinkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], ProfilesComponent);
    return ProfilesComponent;
}());



/***/ }),

/***/ "./src/app/pages/profiles/store/actions/device.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/profiles/store/actions/device.actions.ts ***!
  \****************************************************************/
/*! exports provided: INIT_DEVICE, DEVICES_LOADED, InitDevice, DevicesLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_DEVICE", function() { return INIT_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICES_LOADED", function() { return DEVICES_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitDevice", function() { return InitDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesLoaded", function() { return DevicesLoaded; });
var INIT_DEVICE = '[DEVICE] Init';
var DEVICES_LOADED = '[DEVICE] Tickets loaded';
var InitDevice = /** @class */ (function () {
    function InitDevice(payload) {
        this.payload = payload;
        this.type = INIT_DEVICE;
    }
    InitDevice.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return InitDevice;
}());

var DevicesLoaded = /** @class */ (function () {
    function DevicesLoaded(payload) {
        this.payload = payload;
        this.type = DEVICES_LOADED;
    }
    DevicesLoaded.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return DevicesLoaded;
}());



/***/ }),

/***/ "./src/app/pages/profiles/store/actions/profile.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profiles/store/actions/profile.actions.ts ***!
  \*****************************************************************/
/*! exports provided: PROFILE_REDIRECT, PROFILE_INIT, PROFILE_LOADED, PROFILE_RELOAD, ProfileLoadRedirect, ProfileInit, ProfileLoaded, ProfileReload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_REDIRECT", function() { return PROFILE_REDIRECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_INIT", function() { return PROFILE_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_LOADED", function() { return PROFILE_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_RELOAD", function() { return PROFILE_RELOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLoadRedirect", function() { return ProfileLoadRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInit", function() { return ProfileInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLoaded", function() { return ProfileLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileReload", function() { return ProfileReload; });
var PROFILE_REDIRECT = '[PROFILE] load redirect';
var PROFILE_INIT = '[PROFILE] init';
var PROFILE_LOADED = '[PROFILE] Profile loaded';
var PROFILE_RELOAD = '[PROFILE] Profile reload';
var ProfileLoadRedirect = /** @class */ (function () {
    function ProfileLoadRedirect(payload) {
        this.payload = payload;
        this.type = PROFILE_REDIRECT;
    }
    ProfileLoadRedirect.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ProfileLoadRedirect;
}());

var ProfileInit = /** @class */ (function () {
    function ProfileInit(payload) {
        this.payload = payload;
        this.type = PROFILE_INIT;
    }
    ProfileInit.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ProfileInit;
}());

var ProfileLoaded = /** @class */ (function () {
    function ProfileLoaded(payload) {
        this.payload = payload;
        this.type = PROFILE_LOADED;
    }
    ProfileLoaded.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ProfileLoaded;
}());

var ProfileReload = /** @class */ (function () {
    function ProfileReload(payload) {
        this.payload = payload;
        this.type = PROFILE_RELOAD;
    }
    ProfileReload.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ProfileReload;
}());



/***/ }),

/***/ "./src/app/pages/profiles/store/actions/ticket.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/profiles/store/actions/ticket.actions.ts ***!
  \****************************************************************/
/*! exports provided: INIT_TICKET, TICKETS_LOADED, ADD_TICKET, REMOVE_TICKET, InitTicket, TicketsLoaded, AddTicket, RemoveTicket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_TICKET", function() { return INIT_TICKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICKETS_LOADED", function() { return TICKETS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TICKET", function() { return ADD_TICKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TICKET", function() { return REMOVE_TICKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitTicket", function() { return InitTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsLoaded", function() { return TicketsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTicket", function() { return AddTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTicket", function() { return RemoveTicket; });
var INIT_TICKET = '[TICKET] Init';
var TICKETS_LOADED = '[TICKET] Tickets loaded';
var ADD_TICKET = '[TICKET] Add';
var REMOVE_TICKET = '[TICKET] Remove';
var InitTicket = /** @class */ (function () {
    function InitTicket(payload) {
        this.payload = payload;
        this.type = INIT_TICKET;
    }
    InitTicket.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return InitTicket;
}());

var TicketsLoaded = /** @class */ (function () {
    function TicketsLoaded(payload) {
        this.payload = payload;
        this.type = TICKETS_LOADED;
    }
    TicketsLoaded.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return TicketsLoaded;
}());

var AddTicket = /** @class */ (function () {
    function AddTicket(payload) {
        this.payload = payload;
        this.type = ADD_TICKET;
    }
    AddTicket.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddTicket;
}());

var RemoveTicket = /** @class */ (function () {
    function RemoveTicket(payload) {
        this.payload = payload;
        this.type = REMOVE_TICKET;
    }
    RemoveTicket.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return RemoveTicket;
}());



/***/ }),

/***/ "./src/app/pages/profiles/store/effects/device.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/profiles/store/effects/device.effects.ts ***!
  \****************************************************************/
/*! exports provided: DeviceEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceEffects", function() { return DeviceEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_device_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/device.actions */ "./src/app/pages/profiles/store/actions/device.actions.ts");






var DeviceEffects = /** @class */ (function () {
    function DeviceEffects(deviceActions$, httpService) {
        var _this = this;
        this.deviceActions$ = deviceActions$;
        this.httpService = httpService;
        this.loadDevices$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () { return _this.deviceActions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_device_actions__WEBPACK_IMPORTED_MODULE_5__["INIT_DEVICE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) { return _this.httpService.requestByLink(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (deviceList) { return ({ type: _actions_device_actions__WEBPACK_IMPORTED_MODULE_5__["DEVICES_LOADED"], payload: deviceList }); })); })); });
    }
    DeviceEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    DeviceEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DeviceEffects);
    return DeviceEffects;
}());



/***/ }),

/***/ "./src/app/pages/profiles/store/effects/profile.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profiles/store/effects/profile.effects.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return ProfileEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/profile.actions */ "./src/app/pages/profiles/store/actions/profile.actions.ts");
/* harmony import */ var _actions_ticket_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/ticket.actions */ "./src/app/pages/profiles/store/actions/ticket.actions.ts");
/* harmony import */ var _actions_device_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/device.actions */ "./src/app/pages/profiles/store/actions/device.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/link.service */ "./src/app/services/link.service.ts");










var ProfileEffects = /** @class */ (function () {
    function ProfileEffects(actions$, httpService, linkService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.httpService = httpService;
        this.linkService = linkService;
        this.router = router;
        this.loadProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["PROFILE_REDIRECT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.httpService.getCurrentResource()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resource) {
                return _this.router.navigate(['/' + _this.linkService.getHrefByReltype(resource._links, 'related')]);
            })); }));
        }, { dispatch: false });
        this.initProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["PROFILE_INIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.httpService.getCurrentResource()
                .pipe(
            /* concatMapTo((response: BasicResource) => [
               new TicketActions.InitTicket(this.linkService.getLinkByReltype(response._links, 'tickets')),
               new DeviceActions.InitDevice(this.linkService.getLinkByReltype(response._links, 'devices'))
             ])*/
            // map((resource: BasicResource) =>
            // ({ type: DeviceActions.DEVICES_LOADED, payload: this.linkService.getHrefByReltype(resource._links, 'devices') })),
            // map((resource: BasicResource) =>
            //  ({ type: TicketActions.INIT_TICKET, payload: this.linkService.getLinkByReltype(resource._links, 'tickets') }))
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resource) {
                return ({ type: _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["PROFILE_LOADED"], payload: resource });
            })); }));
        });
        this.loadedProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["PROFILE_LOADED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
                return ({ type: (_actions_ticket_actions__WEBPACK_IMPORTED_MODULE_6__["INIT_TICKET"]), payload: _this.linkService.getLinkByReltype(action.payload._links, 'tickets') });
            }));
        });
        this.loaded2Profile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["PROFILE_LOADED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
                return ({ type: _actions_device_actions__WEBPACK_IMPORTED_MODULE_7__["INIT_DEVICE"], payload: _this.linkService.getLinkByReltype(action.payload._links, 'devices') });
            }));
        });
    }
    ProfileEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_link_service__WEBPACK_IMPORTED_MODULE_9__["LinkService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    ProfileEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_link_service__WEBPACK_IMPORTED_MODULE_9__["LinkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ProfileEffects);
    return ProfileEffects;
}());



/***/ }),

/***/ "./src/app/pages/profiles/store/effects/ticket.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/profiles/store/effects/ticket.effects.ts ***!
  \****************************************************************/
/*! exports provided: TicketEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketEffects", function() { return TicketEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_ticket_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/ticket.actions */ "./src/app/pages/profiles/store/actions/ticket.actions.ts");






var TicketEffects = /** @class */ (function () {
    function TicketEffects(ticketActions$, httpService) {
        var _this = this;
        this.ticketActions$ = ticketActions$;
        this.httpService = httpService;
        this.loadTickets$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () { return _this.ticketActions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_ticket_actions__WEBPACK_IMPORTED_MODULE_5__["INIT_TICKET"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) { return _this.httpService.requestByLink(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ticketList) { return ({ type: _actions_ticket_actions__WEBPACK_IMPORTED_MODULE_5__["TICKETS_LOADED"], payload: ticketList.tickets }); })); })); });
    }
    TicketEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    TicketEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TicketEffects);
    return TicketEffects;
}());



/***/ }),

/***/ "./src/app/pages/profiles/store/profile.state.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/profiles/store/profile.state.ts ***!
  \*******************************************************/
/*! exports provided: TICKET_STORE_PATH, DEVICE_STORE_PATH, PROFILE_STORE_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICKET_STORE_PATH", function() { return TICKET_STORE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE_STORE_PATH", function() { return DEVICE_STORE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_STORE_PATH", function() { return PROFILE_STORE_PATH; });
var TICKET_STORE_PATH = 'ticket';
var DEVICE_STORE_PATH = 'device';
var PROFILE_STORE_PATH = 'profile';


/***/ }),

/***/ "./src/app/pages/profiles/store/reducers/device.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profiles/store/reducers/device.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: deviceReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceReducer", function() { return deviceReducer; });
/* harmony import */ var _actions_device_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/device.actions */ "./src/app/pages/profiles/store/actions/device.actions.ts");

function deviceReducer(state, action) {
    switch (action.type) {
        case _actions_device_actions__WEBPACK_IMPORTED_MODULE_0__["INIT_DEVICE"]:
            return state;
        case _actions_device_actions__WEBPACK_IMPORTED_MODULE_0__["DEVICES_LOADED"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/pages/profiles/store/reducers/profile.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/profiles/store/reducers/profile.reducer.ts ***!
  \******************************************************************/
/*! exports provided: profileReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileReducer", function() { return profileReducer; });
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/profile.actions */ "./src/app/pages/profiles/store/actions/profile.actions.ts");

function profileReducer(state, action) {
    switch (action.type) {
        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__["PROFILE_REDIRECT"]:
            return null;
        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__["PROFILE_INIT"]:
            return state;
        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__["PROFILE_LOADED"]:
            return action.payload;
        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__["PROFILE_RELOAD"]:
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/pages/profiles/store/reducers/ticket.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profiles/store/reducers/ticket.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: ticketReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticketReducer", function() { return ticketReducer; });
/* harmony import */ var _actions_ticket_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ticket.actions */ "./src/app/pages/profiles/store/actions/ticket.actions.ts");

function ticketReducer(state, action) {
    switch (action.type) {
        case _actions_ticket_actions__WEBPACK_IMPORTED_MODULE_0__["INIT_TICKET"]:
            return state;
        case _actions_ticket_actions__WEBPACK_IMPORTED_MODULE_0__["TICKETS_LOADED"]:
            return action.payload;
        case _actions_ticket_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TICKET"]:
            return state.concat([action.payload]);
        case _actions_ticket_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TICKET"]:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/pages/statistic/chart.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/statistic/chart.service.ts ***!
  \**************************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartService = /** @class */ (function () {
    function ChartService() {
    }
    // from 
    // https://github.com/krispo/ng2-nvd3
    // http://krispo.github.io/ng2-nvd3/
    // http://krispo.github.io/angular-nvd3/#/pieChart
    ChartService.prototype.getOptions = function () {
        return {
            chart: {
                type: 'pieChart',
                height: 300,
                donut: true,
                x: function (d) { return d.name; },
                y: function (d) { return d.number; },
                color: function (d) { return d.color; },
                showLabels: false,
                labelsOutside: true,
                donutRatio: 0.65,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 0,
                        bottom: 10,
                        left: 0
                    },
                    rightAlign: false
                }
            }
        };
    };
    ;
    ChartService.prototype.getData = function () {
        return [{ "id": 29, "name": "3D Drucker", "color": "#AEDE1A", "number": 1, "duration": 1 },
            { "id": 28, "name": "CNC-Fr\u00e4se", "color": "#2B79DE", "number": 1, "duration": 1 },
            { "id": 27, "name": "Lasercutter", "color": "#F6831E", "number": 1, "duration": 1 },
            { "id": 31, "name": "Sandstrahlmaschine", "color": "#449ACD", "number": 1, "duration": 1 },
            { "id": 30, "name": "Vinylcutter", "color": "#860090", "number": 1, "duration": 1 }
        ];
    };
    ChartService.prototype.getlinechartoptions = function () {
        return {
            chart: {
                type: 'lineChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d) { return d.x; },
                y: function (d) { return d.y; },
                interpolate: "cardinal",
                useInteractiveGuideline: true,
                refreshDataOnly: true,
                deepWatchOptions: true,
                deepWatchData: true,
                dispatch: {
                    stateChange: function (e) { console.log("stateChange"); },
                    changeState: function (e) { console.log("changeState"); },
                    tooltipShow: function (e) { console.log("tooltipShow"); },
                    tooltipHide: function (e) { console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Woche'
                },
                yAxis: {
                    axisLabel: 'User',
                    axisLabelDistance: -10
                }
            },
            title: {
                enable: true,
                text: 'Title for Line Chart'
            }
        };
    };
    ;
    ChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartService);
    return ChartService;
}());



/***/ }),

/***/ "./src/app/pages/statistic/statistic.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/statistic/statistic.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statistic-box {\n  height: 100%;\n  border: 1px solid #eee;\n  box-shadow: 0 0 5px #eee;\n  background-color: #fff;\n  margin: 10px;\n  float: left;\n  position: relative;\n}\n\n.trend-box {\n  width: 800px;\n}\n\n.box {\n  width: 400px;\n}\n\n.box-header {\n  padding: 20px 20px 10px 20px;\n}\n\n.box-header h3 {\n  margin: 0;\n  border-bottom: solid 3px #028F76;\n  display: inline-block;\n}\n\n.box-content {\n  height: 100%;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtvYi9TaXRlcy9mYWJsYWIvd3AtY29udGVudC9wbHVnaW5zL2ZhYmxhYi10aWNrZXQvZmwtYXBwL3NyYy9hcHAvcGFnZXMvc3RhdGlzdGljL3N0YXRpc3RpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhdGlzdGljL3N0YXRpc3RpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGF0aXN0aWMvc3RhdGlzdGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRpc3RpYy1ib3h7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRyZW5kLWJveHtcbiAgICB3aWR0aDogODAwcHg7XG59XG5cbi5ib3h7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4uYm94LWhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcbn1cblxuLmJveC1oZWFkZXIgaDN7XG4gICAgbWFyZ2luOjA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICMwMjhGNzY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYm94LWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4iLCIuc3RhdGlzdGljLWJveCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50cmVuZC1ib3gge1xuICB3aWR0aDogODAwcHg7XG59XG5cbi5ib3gge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5ib3gtaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcbn1cblxuLmJveC1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjMDI4Rjc2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5ib3gtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/statistic/statistic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/statistic/statistic.component.ts ***!
  \********************************************************/
/*! exports provided: StatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticComponent", function() { return StatisticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _statistic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistic.service */ "./src/app/pages/statistic/statistic.service.ts");
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart.service */ "./src/app/pages/statistic/chart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var StatisticComponent = /** @class */ (function () {
    function StatisticComponent(statisticService, chartService, datePipe) {
        this.statisticService = statisticService;
        this.chartService = chartService;
        this.datePipe = datePipe;
        this.index = 0;
    }
    StatisticComponent.prototype.checkLoadAndSetData = function (increment) {
        var _this = this;
        if (increment) {
            this.index++;
        }
        else {
            this.index--;
        }
        if (this.datatrend[0].values.find(function (x) { return x.x === _this.index; })) {
            this.setData();
        }
        else {
            console.log('noentry');
            var weekNumber = -this.index;
            this.loadStatistic(this.getWeek(weekNumber), weekNumber, true);
            return;
        }
    };
    StatisticComponent.prototype.setData = function () {
        var _this = this;
        var data = [];
        console.log(this.datatrend);
        for (var _i = 0, _a = this.datatrend; _i < _a.length; _i++) {
            var entry = _a[_i];
            var dataentry = entry.values.find(function (x) { return x.x === _this.index; });
            data.push({
                name: entry.key,
                color: entry.color,
                number: dataentry.y
            });
            this.currentWeek = dataentry.label;
        }
        this.data = data;
    };
    StatisticComponent.prototype.getWeek = function (earlierWeeks) {
        var current = new Date(); // get current date
        var weekend = current.getDate() - current.getDay() - (earlierWeeks * 7); // day 0 is sunday
        var weekstart = weekend - 6; // end day is the first day + 6
        var monday = new Date(current.setDate(weekstart));
        current = new Date(); // reset current date
        var sunday = new Date(current.setDate(weekend));
        var week = {
            monday: monday,
            sunday: sunday
        };
        return week;
    };
    StatisticComponent.prototype.addStatisticData = function (data, week, offset) {
        var string = Number(this.datePipe.transform(week.monday, 'yyMMdd'));
        var _loop_1 = function (entry) {
            if (this_1.datatrend.find(function (x) { return x.key === entry.name; })) {
                // push data to existing entry
                this_1.datatrend.find(function (x) { return x.key === entry.name; }).values
                    .push({ x: -offset, y: entry.number, label: this_1.getWeekString(week) });
                this_1.datatrend.find(function (x) { return x.key === entry.name; }).values.sort(function (a, b) {
                    return d3.ascending(a.x, b.x);
                });
            }
            else {
                //create new entry
                this_1.datatrend.push({
                    key: entry.name,
                    values: [{ x: -offset, y: entry.number,
                            label: this_1.getWeekString(week)
                        }],
                    color: entry.color
                });
            }
        };
        var this_1 = this;
        // week.monday | date :'fullDate');
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var entry = data_1[_i];
            _loop_1(entry);
        }
        this.linechart.chart.update();
    };
    StatisticComponent.prototype.getWeekString = function (week) {
        return week.monday.toDateString() + ' - ' + week.sunday.toDateString();
    };
    StatisticComponent.prototype.loadStatistic = function (week, offset, setData) {
        var _this = this;
        if (setData === void 0) { setData = false; }
        this.statisticService.getStatisticOfWeek(week)
            .subscribe(function (data) {
            _this.data = data;
            _this.addStatisticData(data, week, offset);
            if (setData)
                _this.setData();
        });
    };
    StatisticComponent.prototype.ngOnInit = function () {
        this.datatrend = [];
        this.options = this.chartService.getOptions();
        this.data = this.chartService.getData();
        this.linechartoptions = this.chartService.getlinechartoptions();
        for (var i = 0; i < 12; i++) {
            this.loadStatistic(this.getWeek(i), i);
        }
    };
    StatisticComponent.ctorParameters = function () { return [
        { type: _statistic_service__WEBPACK_IMPORTED_MODULE_2__["StatisticService"] },
        { type: _chart_service__WEBPACK_IMPORTED_MODULE_3__["ChartService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('linechart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticComponent.prototype, "linechart", void 0);
    StatisticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistic',
            template: __webpack_require__(/*! raw-loader!./statistic.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/statistic/statistic.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/nvd3/build/nv.d3.css */ "./node_modules/nvd3/build/nv.d3.css"), __webpack_require__(/*! ./statistic.component.scss */ "./src/app/pages/statistic/statistic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_statistic_service__WEBPACK_IMPORTED_MODULE_2__["StatisticService"],
            _chart_service__WEBPACK_IMPORTED_MODULE_3__["ChartService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "./src/app/pages/statistic/statistic.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/statistic/statistic.service.ts ***!
  \******************************************************/
/*! exports provided: StatisticService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticService", function() { return StatisticService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/http.service */ "./src/app/services/http.service.ts");



var StatisticService = /** @class */ (function () {
    function StatisticService(httpService) {
        this.httpService = httpService;
        this.statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic'; // URL to web api
    }
    StatisticService.prototype.getStatisticOfWeek = function (week) {
        return this.httpService.getStatisticOf(this.getDateString(week.monday), this.getDateString(week.sunday));
    };
    StatisticService.prototype.getDateString = function (date) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    };
    StatisticService.ctorParameters = function () { return [
        { type: app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    StatisticService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], StatisticService);
    return StatisticService;
}());



/***/ }),

/***/ "./src/app/services/AppAPI.json":
/*!**************************************!*\
  !*** ./src/app/services/AppAPI.json ***!
  \**************************************/
/*! exports provided: blog_url, templates_url, api_url, sharing_url, rest_v2_url, nonce, is_user_logged_in, is_terminal, default */
/***/ (function(module) {

module.exports = {"blog_url":"http://localhost:8888/fablab","templates_url":"http://localhost:8888/fablab/wp-content/plugins/fablab-ticket/views/templates/","api_url":"http://localhost:8888/fablab/api/","sharing_url":"http://localhost:4200/fablab/wp-json/sharepl/v1/","rest_v2_url":"http://localhost:4200/fablab/wp-json/sharepl/v2/","nonce":"d59c4e0daa","is_user_logged_in":false,"is_terminal":true};

/***/ }),

/***/ "./src/app/services/AppAPIv2.json":
/*!****************************************!*\
  !*** ./src/app/services/AppAPIv2.json ***!
  \****************************************/
/*! exports provided: is_dev_mode, rest_v2_url, default */
/***/ (function(module) {

module.exports = {"is_dev_mode":true,"rest_v2_url":"http://localhost:4200/fablab/wp-json/sharepl/v2"};

/***/ }),

/***/ "./src/app/services/TerminalData.json":
/*!********************************************!*\
  !*** ./src/app/services/TerminalData.json ***!
  \********************************************/
/*! exports provided: is_terminal, ticket_terminals_only, auto_logout, ticket_system_online, default */
/***/ (function(module) {

module.exports = {"is_terminal":true,"ticket_terminals_only":true,"auto_logout":300,"ticket_system_online":true};

/***/ }),

/***/ "./src/app/services/UserData.json":
/*!****************************************!*\
  !*** ./src/app/services/UserData.json ***!
  \****************************************/
/*! exports provided: is_user_logged_in, is_admin, user_display_name, default */
/***/ (function(module) {

module.exports = {"is_user_logged_in":false,"is_admin":false,"user_display_name":""};

/***/ }),

/***/ "./src/app/services/app-api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/app-api.service.ts ***!
  \*********************************************/
/*! exports provided: AppApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppApiService", function() { return AppApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppApiService = /** @class */ (function () {
    function AppApiService() {
        this.appDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loadApiData();
    }
    AppApiService.prototype.loadApiData = function () {
        if (typeof AppAPIv2 === 'undefined') {
            this.appApiv2 = __webpack_require__(/*! ./AppAPIv2.json */ "./src/app/services/AppAPIv2.json");
        }
        else {
            this.appApiv2 = AppAPIv2;
        }
        // when AppAPI start in dev mode and load app data fom json
        if (this.appApiv2.is_dev_mode) {
            console.log('Runing in Dev-Mode');
            this.appApi = __webpack_require__(/*! ./AppAPI.json */ "./src/app/services/AppAPI.json");
            this.terminalData = __webpack_require__(/*! ./TerminalData.json */ "./src/app/services/TerminalData.json");
            this.userData = __webpack_require__(/*! ./UserData.json */ "./src/app/services/UserData.json");
            var userLoggedIn = localStorage.getItem('is-user-logged-in');
            if (userLoggedIn === 'true') {
                console.log('Load Data from LocalStorage');
                this.userData.is_user_logged_in = true;
                this.userData.is_admin = (localStorage.getItem('is-admin') === 'true');
                this.userData.nonce = localStorage.getItem('nonce');
                this.userData.user_display_name = localStorage.getItem('user-display-name');
            }
        }
        else {
            this.appApi = AppAPI;
            this.userData = UserDataLoc;
            this.terminalData = TerminalDataLoc;
        }
        this.appDataSubject.next(true);
    };
    //
    AppApiService.prototype.setDevUserLoggedIn = function (data) {
        this.userData = data;
        localStorage.setItem('nonce', data.nonce);
        localStorage.setItem('is-user-logged-in', String(data.is_user_logged_in));
        localStorage.setItem('is-admin', String(data.is_admin));
        localStorage.setItem('user-display-name', String(data.user_display_name));
    };
    AppApiService.prototype.setDevUserLoggedOut = function () {
        localStorage.removeItem('nonce');
        localStorage.removeItem('is-user-logged-in');
        localStorage.removeItem('is-admin');
        localStorage.removeItem('user-display-name');
    };
    // check if data loaded
    AppApiService.prototype.isApiDataLoaded = function () {
        return this.appDataSubject;
    };
    // getter Methods
    AppApiService.prototype.getBlogUrl = function () {
        return this.appApi.blog_url;
    };
    AppApiService.prototype.getPluginApiUrl = function () {
        return this.appApi.sharing_url;
    };
    AppApiService.prototype.getRestBaseUrl = function () {
        return this.appApi.rest_v2_url;
    };
    AppApiService.prototype.getNonce = function () {
        return this.userData.nonce;
    };
    AppApiService.prototype.isDevMode = function () {
        return this.appApiv2.is_dev_mode;
    };
    // -------   Terminal methods ----------
    AppApiService.prototype.isTerminal = function () {
        return this.terminalData.is_terminal;
    };
    AppApiService.prototype.isTicketSystemOnline = function () {
        return this.terminalData.ticket_system_online;
    };
    // -------   User methods ----------
    AppApiService.prototype.isUserLoggedIn = function () {
        return this.userData.is_user_logged_in;
    };
    AppApiService.prototype.isAdmin = function () {
        return this.userData.is_admin;
    };
    AppApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppApiService);
    return AppApiService;
}());



/***/ }),

/***/ "./src/app/services/guards/login-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/guards/login-guard.service.ts ***!
  \********************************************************/
/*! exports provided: IsLoggedInGuard, IsNotLoggedInGuard, IsAdminGuard, IsTerminalGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoggedInGuard", function() { return IsLoggedInGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotLoggedInGuard", function() { return IsNotLoggedInGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdminGuard", function() { return IsAdminGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTerminalGuard", function() { return IsTerminalGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-api.service */ "./src/app/services/app-api.service.ts");
/* harmony import */ var _terminal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terminal.service */ "./src/app/services/terminal.service.ts");
/* harmony import */ var _app_routs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-routs */ "./src/app/app-routs.ts");






var IsLoggedInGuard = /** @class */ (function () {
    function IsLoggedInGuard(appApiService, router) {
        this.appApiService = appApiService;
        this.router = router;
    }
    IsLoggedInGuard.prototype.canActivate = function () {
        console.log('IsLoggedInGuard#canActivate called');
        if (this.appApiService.isUserLoggedIn() === true) {
            return true;
        }
        else {
            this.router.navigate(['/' + _app_routs__WEBPACK_IMPORTED_MODULE_5__["appRoutes"].login]);
            return false;
        }
    };
    IsLoggedInGuard.ctorParameters = function () { return [
        { type: _app_api_service__WEBPACK_IMPORTED_MODULE_3__["AppApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    IsLoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_api_service__WEBPACK_IMPORTED_MODULE_3__["AppApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsLoggedInGuard);
    return IsLoggedInGuard;
}());

var IsNotLoggedInGuard = /** @class */ (function () {
    function IsNotLoggedInGuard(appApiService, router) {
        this.appApiService = appApiService;
        this.router = router;
    }
    IsNotLoggedInGuard.prototype.canActivate = function () {
        console.log('IsNotLoggedInGuard#canActivate called');
        if (this.appApiService.isUserLoggedIn() === true) {
            this.router.navigate(['/' + _app_routs__WEBPACK_IMPORTED_MODULE_5__["appRoutes"].profiles]);
            return false;
        }
        else {
            return true;
        }
    };
    IsNotLoggedInGuard.ctorParameters = function () { return [
        { type: _app_api_service__WEBPACK_IMPORTED_MODULE_3__["AppApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    IsNotLoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_api_service__WEBPACK_IMPORTED_MODULE_3__["AppApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsNotLoggedInGuard);
    return IsNotLoggedInGuard;
}());

var IsAdminGuard = /** @class */ (function () {
    function IsAdminGuard(appApiService) {
        this.appApiService = appApiService;
    }
    IsAdminGuard.prototype.canActivate = function () {
        console.log('IsAdminGuard#canActivate called');
        return this.appApiService.isAdmin() === true;
    };
    IsAdminGuard.ctorParameters = function () { return [
        { type: _app_api_service__WEBPACK_IMPORTED_MODULE_3__["AppApiService"] }
    ]; };
    IsAdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_api_service__WEBPACK_IMPORTED_MODULE_3__["AppApiService"]])
    ], IsAdminGuard);
    return IsAdminGuard;
}());

var IsTerminalGuard = /** @class */ (function () {
    function IsTerminalGuard(appApiService, terminalService, router) {
        this.appApiService = appApiService;
        this.terminalService = terminalService;
        this.router = router;
    }
    IsTerminalGuard.prototype.canActivate = function () {
        console.log('IsTerminalGuard#canActivate called');
        /*
            if(!this.terminalService.hasTerminalToken()) {
              this.router.navigate(['/login']);
              return false;
            }
        */
        if (this.appApiService.isTerminal()) {
            return true;
        }
        this.router.navigate(['/' + _app_routs__WEBPACK_IMPORTED_MODULE_5__["appRoutes"].login]);
        return false;
        // check twice if the cookie is set
        /*
            if (this.appApiService.isAppConnectLoaded()) {
              return this.appApiService.isTerminal();
            }
        
            return this.terminalService.checkTerminalToken().map(data => data.is_terminal);
        */
        // Navigate to the login page with extras
        //this.router.navigate(['/login']);
        //return false;
    };
    IsTerminalGuard.ctorParameters = function () { return [
        { type: _app_api_service__WEBPACK_IMPORTED_MODULE_3__["AppApiService"] },
        { type: _terminal_service__WEBPACK_IMPORTED_MODULE_4__["TerminalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    IsTerminalGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_api_service__WEBPACK_IMPORTED_MODULE_3__["AppApiService"],
            _terminal_service__WEBPACK_IMPORTED_MODULE_4__["TerminalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsTerminalGuard);
    return IsTerminalGuard;
}());



/***/ }),

/***/ "./src/app/services/http-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-api.service */ "./src/app/services/app-api.service.ts");



var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(appApiService) {
        this.appApiService = appApiService;
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        // Clone the request to add the new header.
        var authReq = req.clone({ setHeaders: this.httpAuthHeader() });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    };
    HttpInterceptorService.prototype.httpAuthHeader = function () {
        if (this.appApiService.isUserLoggedIn()) {
            return { 'X-WP-Nonce': this.appApiService.getNonce() };
        }
    };
    HttpInterceptorService.ctorParameters = function () { return [
        { type: _app_api_service__WEBPACK_IMPORTED_MODULE_2__["AppApiService"] }
    ]; };
    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_api_service__WEBPACK_IMPORTED_MODULE_2__["AppApiService"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-api.service */ "./src/app/services/app-api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var HttpService = /** @class */ (function () {
    function HttpService(http, router, appApiService, cookieService) {
        this.http = http;
        this.router = router;
        this.appApiService = appApiService;
        this.cookieService = cookieService;
    }
    //--------  ticket system online  -----------------------
    /*  public checkTicketSystemOnline(): Observable<any> {
    
        let url = this.appApiService.getPluginApiUrl() + 'check_user_login';
    
        return this.http.get<any>(url, {
            params: { username: 'login'}
          });
    
      }
    */
    HttpService.prototype.setTicketSystemOnline = function (online) {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'ticket_system_online';
        var param = online ? 'online' : 'offline';
        return this.http.post(url, {
            params: { set_online: param }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(_this.handleHttpError(err)); }));
    };
    //--------  terminal_token  -----------------------
    /*  public checkTerminalToken(terminal_token: string): Observable<any> {
        let url = this.appApiService.getPluginApiUrl() + 'check_terminal_token';
        return this.http.get<any>(url, {
            params: { token: terminal_token }
          })
              .catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));
      } */
    HttpService.prototype.getTerminalToken = function () {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'get_terminal_token';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(_this.handleHttpError(err)); }));
    };
    // --- HATEOAS Methods ------------------------
    HttpService.prototype.getResourceByHref = function (href) {
        var _this = this;
        var url = this.appApiService.getRestBaseUrl() + href;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(_this.handleHttpError(err)); }));
    };
    HttpService.prototype.requestByLink = function (link) {
        var _this = this;
        var url = this.appApiService.getRestBaseUrl() + link.href;
        var options;
        if (!!link.params) {
            if (link.type === 'GET') {
                options = { params: link.params };
            }
            else {
                options = { body: link.params };
            }
        }
        return this.http.request(link.type, url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(_this.handleHttpError(err)); }));
    };
    HttpService.prototype.getCurrentResource = function () {
        var _this = this;
        var url = this.appApiService.getRestBaseUrl() + this.router.url.substr(1); // delete / from router url
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(_this.handleHttpError(err)); }));
    };
    // -------  Register Methods  ------------------------
    HttpService.prototype.registerUser = function (registerData) {
        var url = this.appApiService.getPluginApiUrl() + 'register_user_on_terminal';
        var terminalToken = this.cookieService.get('terminal_token'); // should be in terminal service
        return this.http.post(url, {
            params: { username: registerData.username,
                name: registerData.name,
                surename: registerData.surename,
                email: registerData.email,
                password: registerData.password,
                cardid: registerData.cardid,
                terminaltoken: terminalToken
            }
        });
    };
    // -------  Login Methods  ------------------------
    HttpService.prototype.checkLogin = function (login, password) {
        var url = this.appApiService.getPluginApiUrl() + 'check_user_login';
        return this.http.post(url, {
            params: { username: login, password: password }
        }); //.catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));
    };
    HttpService.prototype.getUserData = function (login, password) {
        var url = this.appApiService.getPluginApiUrl() + 'get_user_login_data';
        return this.http.get(url, {
            params: { username: login, password: password }
        }); //.catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));
    };
    HttpService.prototype.checkLoginToken = function (submitcode) {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'check_nfc_token';
        return this.http.get(url, {
            params: { token: submitcode }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(_this.handleHttpError(err)); }));
    };
    // -------  get Statistic Data  ------------------------
    HttpService.prototype.getStatisticOf = function (start, end) {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'statistic';
        //let statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic';
        return this.http.get(url, {
            params: {
                start_date: start,
                end_date: end
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(_this.handleHttpError(err)); }));
    };
    // -------  handleErrors  ------------------------
    HttpService.prototype.handleHttpError = function (err) {
        console.log(err);
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
        }
        if (err.status === 403) {
            this.appApiService.setDevUserLoggedOut();
            this.refresh();
        }
    };
    HttpService.prototype.refresh = function () {
        window.location.reload();
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _app_api_service__WEBPACK_IMPORTED_MODULE_5__["AppApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _app_api_service__WEBPACK_IMPORTED_MODULE_5__["AppApiService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/link.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/link.service.ts ***!
  \******************************************/
/*! exports provided: LinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkService", function() { return LinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinkService = /** @class */ (function () {
    function LinkService() {
    }
    LinkService.prototype.getHrefByReltype = function (links, reltype) {
        return links.find(function (link) { return link.rel === reltype; }).href;
    };
    LinkService.prototype.getLinkByReltype = function (links, reltype) {
        return links.find(function (link) { return link.rel === reltype; });
    };
    LinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinkService);
    return LinkService;
}());



/***/ }),

/***/ "./src/app/services/parser.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/parser.service.ts ***!
  \********************************************/
/*! exports provided: ParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserService", function() { return ParserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParserService = /** @class */ (function () {
    function ParserService() {
        this.card_data_config = {
            cardid: 'cardid',
            name: 'name',
            surename: 'nachname',
            email: 'email',
            elementseperator: ',',
            itemseperator: ':'
        };
    }
    ParserService.prototype.parseCardData = function (input) {
        var result = {};
        if (input.includes(this.card_data_config.itemseperator)) {
            this.stringToInterface(result, input);
        }
        else {
            result.cardid = input;
        }
        return result;
    };
    ParserService.prototype.mapCardData = function (result, key, value) {
        key = key.trim();
        value = value.trim();
        if (key == this.card_data_config.cardid) {
            result.cardid = value;
        }
        else if (key == this.card_data_config.name) {
            result.name = value;
        }
        else if (key == this.card_data_config.surename) {
            result.surename = value;
        }
        else if (key == this.card_data_config.email) {
            result.email = value;
        }
    };
    ParserService.prototype.stringToInterface = function (result, input) {
        var _this = this;
        input.split(this.card_data_config.elementseperator).forEach(function (elemet) {
            var elemet_array = elemet.split(_this.card_data_config.itemseperator);
            //console.log('key: ' + elemet_array[0] + ', value: ' + elemet_array[1]);
            _this.mapCardData(result, elemet_array[0], elemet_array[1]);
            //result[elemet_array[0]] = elemet_array[1];
            //result_array.set(elemet_array[0], elemet_array[1]);
        });
    };
    ParserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParserService);
    return ParserService;
}());



/***/ }),

/***/ "./src/app/services/terminal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/terminal.service.ts ***!
  \**********************************************/
/*! exports provided: TerminalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalService", function() { return TerminalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




var TerminalService = /** @class */ (function () {
    function TerminalService(httpService, cookieService) {
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.cookieName = 'terminal_token';
        this.cookieDays = 180;
        this.cookiePath = '/';
    }
    TerminalService.prototype.makeTerminal = function (make) {
        if (make === true) {
            this.setTerminalToken();
        }
        else {
            this.deleteTerminalToken();
        }
    };
    TerminalService.prototype.setTerminalToken = function () {
        var _this = this;
        this.httpService.getTerminalToken().subscribe(function (data) {
            _this.cookieService.set(_this.cookieName, data, _this.cookieDays, _this.cookiePath);
        });
    };
    TerminalService.prototype.deleteTerminalToken = function () {
        this.cookieService.delete(this.cookieName, this.cookiePath);
    };
    TerminalService.prototype.hasTerminalToken = function () {
        return this.cookieService.check(this.cookieName);
    };
    // ------------ Ticket System Online --------
    TerminalService.prototype.setTicketSystemOnline = function (online) {
        return this.httpService.setTicketSystemOnline(online);
    };
    TerminalService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
    ]; };
    TerminalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], TerminalService);
    return TerminalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jakob/Sites/fablab/wp-content/plugins/fablab-ticket/fl-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map