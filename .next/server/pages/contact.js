"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/contact.js
var contact_namespaceObject = {};
__webpack_require__.r(contact_namespaceObject);
__webpack_require__.d(contact_namespaceObject, {
  "default": () => (Contact),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(6088);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/contact.js






function Contact() {
    const { t } = (0,external_next_i18next_.useTranslation)("common");
    const { locale } = (0,router_.useRouter)();
    // SEO meta tags
    // Place near the top of returned JSX
    const seoHead = /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: locale === "ro" ? "Contact SEWCELS - Hai să discutăm" : "Contact SEWCELS - Let’s Connect"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: locale === "ro" ? "Contactează echipa SEWCELS pentru detalii despre proiectele tale, colaborări sau consultanță. \xceți răspundem rapid și eficient." : "Get in touch with SEWCELS for project details, collaboration or consulting. We’ll get back to you promptly and efficiently."
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:title",
                content: "SEWCELS - Contact"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:description",
                content: locale === "ro" ? "Scrie-ne pentru consultanță \xeen energie, fonduri nerambursabile și soluții sustenabile. Suntem aici să ajutăm!" : "Write us for energy consulting, grants and sustainable solutions. We’re here to help!"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image",
                content: "/og-image.jpg"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "robots",
                content: "index, follow"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "canonical",
                href: "https://sewcels.ro/contact"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "googlebot",
                content: "noindex"
            })
        ]
    });
    const [name, setName] = (0,external_react_.useState)("");
    const [company, setCompany] = (0,external_react_.useState)("");
    const [email, setEmail] = (0,external_react_.useState)("");
    const [interest, setInterest] = (0,external_react_.useState)("");
    const [message, setMessage] = (0,external_react_.useState)("");
    const [privacy, setPrivacy] = (0,external_react_.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!privacy) {
            alert("Trebuie să fiți de acord cu politica de confidențialitate.");
            return;
        }
        const interestText = e.target.interest.options[e.target.interest.selectedIndex].text;
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                company,
                phone: e.target.phone.value,
                interest: interestText,
                message
            })
        });
        const result = await res.json();
        alert(result.message);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            seoHead,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "/images/contact-banner.webp",
                                alt: "Contact banner",
                                fill: true,
                                className: "object-cover",
                                priority: true
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 bg-black opacity-40"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "relative z-10 text-4xl md:text-5xl text-white font-bold text-center",
                        children: locale === "ro" ? "Hai să discutăm!" : "Let’s Connect!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative min-h-screen p-8 flex items-center justify-center backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 -z-10",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/images/contact-illustration.webp",
                            alt: "Contact illustration",
                            fill: true,
                            className: "object-cover",
                            loading: "lazy"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-[linear-gradient(90deg,_rgba(24,130,128,0.9),_rgba(110,186,77,0.6))] p-[1.5px] rounded-[16px] transition-all duration-300 ease-in-out hover:shadow-md z-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-white max-w-6xl w-full flex overflow-hidden rounded-[13px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-1/2 p-10 flex flex-col justify-center items-center space-y-6 bg-transparent rounded-l-xl",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-4 text-sm text-gray-700 font-sans text-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-3xl font-bold text-blue-900",
                                                children: locale === "ro" ? "Suntem aici pentru orice \xeentrebare" : "We are here for any question"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-lg text-gray-700 whitespace-pre-line",
                                                children: locale === "ro" ? "Vrei să afli mai multe despre activitatea noastră și cum serviciile noastre pot deveni soluții eficiente pentru tine?\nLasă-ne un mesaj și promitem că \xeeți răspundem \xeen maximum 48 de ore – prietenos, clar și punctual." : "Want to learn more about our work and how our services can become efficient solutions for you?\nLeave us a message and we promise to get back to you within 48 hours – friendly, clear, and to the point."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "my-4 h-[2px] w-full bg-gradient-to-r from-[rgba(24,130,128,0.9)] to-[rgba(110,186,77,0.6)]"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-blue-900 font-semibold text-base",
                                                        children: locale === "ro" ? "Contact" : "Contact"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        children: [
                                                            "SEWCELS S.R.L.",
                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                            "Oradea, Str. Bicazului, Nr. 6, Bihor"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "tel:+40743634236",
                                                                className: "text-blue-700 hover:underline hover:text-blue-900 transition",
                                                                children: "Mob. +40743.634.236"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "mailto:office@sewcels.ro",
                                                                className: "text-blue-700 hover:underline hover:text-blue-900 transition",
                                                                children: "office@sewcels.ro"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-1/2 p-10 rounded-r-xl shadow-lg bg-white text-[rgb(34,38,37)] font-[DM Sans] text-[16px] leading-[27.2px] transition-all duration-300 ease overflow-hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: locale === "ro" ? "Nume complet" : "Full name"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        className: "w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 hover:border-green-500 hover:ring-1 hover:ring-green-400 transition",
                                                        type: "text",
                                                        name: "name",
                                                        required: true,
                                                        value: name,
                                                        onChange: (e)=>setName(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: locale === "ro" ? "Companie" : "Company"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        className: "w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 hover:border-green-500 hover:ring-1 hover:ring-green-400 transition",
                                                        type: "text",
                                                        name: "company",
                                                        required: true,
                                                        value: company,
                                                        onChange: (e)=>setCompany(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Email"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        className: "w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 hover:border-green-500 hover:ring-1 hover:ring-green-400 transition",
                                                        type: "email",
                                                        name: "email",
                                                        required: true,
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: locale === "ro" ? "Telefon" : "Phone number"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        className: "w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 hover:border-green-500 hover:ring-1 hover:ring-green-400 transition",
                                                        type: "tel",
                                                        name: "phone",
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: locale === "ro" ? "Obiect de interes" : "Area of interest"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                        className: "w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 hover:border-green-500 hover:ring-1 hover:ring-green-400 transition",
                                                        name: "interest",
                                                        required: true,
                                                        value: interest,
                                                        onChange: (e)=>setInterest(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "",
                                                                children: locale === "ro" ? "Selectează" : "Select"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "energie",
                                                                children: "Consultanță pentru Eficiență Energetică : Proiecte fotovoltaice"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "bess",
                                                                children: "Sisteme de stocare (BESS) și integrare hibridă"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "atr",
                                                                children: "Consultanță pentru obținere ATR"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "anre",
                                                                children: "Avize și licențiere ANRE"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "ppa",
                                                                children: "Proiecte PPA (Power Purchase Agreements)"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "fonduri",
                                                                children: "Fonduri Nerambursabile & Ajutoare de Stat"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "achizitii",
                                                                children: "Consultanță pentru Achiziții Publice & Licitații"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "investitori",
                                                                children: "Investitori & Intermediere Bancară"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: locale === "ro" ? "Mesaj" : "Message"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                        className: "w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 hover:border-green-500 hover:ring-1 hover:ring-green-400 transition",
                                                        name: "message",
                                                        rows: "5",
                                                        required: true,
                                                        value: message,
                                                        onChange: (e)=>setMessage(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-start space-x-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "checkbox",
                                                        name: "privacy",
                                                        required: true,
                                                        className: "mt-1",
                                                        checked: privacy,
                                                        onChange: (e)=>setPrivacy(e.target.checked)
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "text-sm text-gray-700",
                                                        children: [
                                                            locale === "ro" ? "Sunteți de acord cu " : "You agree to our ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "/politica-confidentialitate",
                                                                className: "text-blue-600 underline hover:text-blue-800",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: locale === "ro" ? "politica noastră de confidențialitate" : "privacy policy"
                                                            }),
                                                            "."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition",
                                                type: "submit",
                                                children: locale === "ro" ? "Trimite" : "Send"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
// import DOAR aici jos
async function getServerSideProps({ locale }) {
    const { serverSideTranslations } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5460, 23));
    return {
        props: {
            ...await serverSideTranslations(locale, [
                "common"
            ])
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcontact&preferredRegion=&absolutePagePath=private-next-pages%2Fcontact.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(contact_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(contact_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(contact_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/contact","pathname":"/contact","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: contact_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [914,636,675,947], () => (__webpack_exec__(5782)));
module.exports = __webpack_exports__;

})();