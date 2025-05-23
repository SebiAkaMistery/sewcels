"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 1720:
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
    const { name, email, company, interest, message } = req.body;
    if (!name || !email || !company || !interest || !message) {
        return res.status(400).json({
            message: "Toate c\xe2mpurile sunt obligatorii."
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
            to: "contact@sewcels.ro",
            subject: `Cerere nouă de la ${name} (${company})`,
            html: `
        <h2>Formular Contact</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Companie:</strong> ${company}</p>
        <p><strong>Interes:</strong> ${interest}</p>
        <p><strong>Mesaj:</strong><br />${message}</p>
      `
        });
        res.status(200).json({
            message: "Mesajul a fost trimis cu succes!"
        });
    } catch (error) {
        console.error("Eroare la trimiterea emailului:", error);
        res.status(500).json({
            message: "A apărut o eroare la trimiterea mesajului. \xcencercați din nou."
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
var __webpack_exports__ = (__webpack_exec__(1720));
module.exports = __webpack_exports__;

})();