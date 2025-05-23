"use strict";
(() => {
var exports = {};
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 3517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed"
        });
    }
    const { email } = req.body;
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return res.status(400).json({
            message: "Email invalid"
        });
    }
    try {
        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
            host: "mail.your-server.de",
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
        await transporter.sendMail({
            from: `"SEWCELS Contact" <${process.env.SMTP_USER}>`,
            to: "office@sewcels.ro",
            subject: "Abonare nouă la newsletter",
            text: `O nouă adresă de email s-a abonat: ${email}`,
            html: `<p>O nouă adresă de email s-a abonat la newsletter:</p><p><strong>${email}</strong></p>`
        });
        return res.status(200).json({
            message: "Newsletter trimis cu succes"
        });
    } catch (error) {
        console.error("Newsletter error:", error);
        return res.status(500).json({
            message: "Eroare trimitere email"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3517));
module.exports = __webpack_exports__;

})();