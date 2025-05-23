"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fabout_preferredRegion_absolutePagePath_private_next_pages_2Fabout_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fabout_preferredRegion_absolutePagePath_private_next_pages_2Fabout_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/about.js
var about_namespaceObject = {};
__webpack_require__.r(about_namespaceObject);
__webpack_require__.d(about_namespaceObject, {
  "default": () => (About),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/footer.js




function Footer() {
    const { locale } = useRouter();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    return /*#__PURE__*/ _jsxs("footer", {
        className: "relative bg-[#142828] text-gray-300 py-10 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "absolute inset-0 bg-white/10 pointer-events-none"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex flex-col items-start text-left",
                        children: [
                            /*#__PURE__*/ _jsx("a", {
                                href: "/",
                                children: /*#__PURE__*/ _jsx(Image, {
                                    src: "/favicon-white.png",
                                    alt: "Sewcels Icon",
                                    width: 120,
                                    height: 120,
                                    className: "mb-4"
                                })
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                className: "text-gray-200 italic text-sm",
                                children: locale === "ro" ? "Your business partner" : "Your business partner"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("h4", {
                                className: "text-white font-semibold mb-3",
                                children: locale === "ro" ? "Meniu scurt" : "Quick Menu"
                            }),
                            /*#__PURE__*/ _jsxs("ul", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "/about",
                                            className: "hover:text-green-400 transition",
                                            children: locale === "ro" ? "Despre Noi" : "About Us"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "/services",
                                            className: "hover:text-green-400 transition",
                                            children: locale === "ro" ? "Servicii" : "Services"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "/granturi-green",
                                            className: "hover:text-green-400 transition",
                                            children: locale === "ro" ? "Oportunități de Finanțare" : "Funding Opportunities"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "/contact",
                                            className: "hover:text-green-400 transition",
                                            children: locale === "ro" ? "Contact" : "Contact"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "/politica-confidentialitate",
                                            className: "hover:text-green-400 transition",
                                            children: locale === "ro" ? "Politica de Confidențialitate" : "Privacy Policy"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("h4", {
                                className: "text-white font-semibold mb-3",
                                children: locale === "ro" ? "Contact" : "Contact"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "mb-1",
                                children: locale === "ro" ? "SEWCELS S.R.L." : "SEWCELS Ltd."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "mb-1",
                                children: "Oradea, Bihor"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "mb-1",
                                children: "CUI: RO4042319"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "mb-1",
                                children: /*#__PURE__*/ _jsx("a", {
                                    href: "mailto:office@sewcels.ro",
                                    className: "hover:text-green-400 transition",
                                    children: "office@sewcels.ro"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("h4", {
                                className: "text-white font-semibold mb-3",
                                children: locale === "ro" ? "Newsletter" : "Newsletter"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "mb-3",
                                children: locale === "ro" ? "Abonează-te la newsletter și te ținem la curent cu noutățile despre noi." : "Subscribe to our newsletter and stay updated with our latest news."
                            }),
                            /*#__PURE__*/ _jsxs("form", {
                                className: "flex flex-col space-y-2",
                                onSubmit: async (e)=>{
                                    e.preventDefault();
                                    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                                        alert(locale === "ro" ? "Introduceți un email valid." : "Please enter a valid email.");
                                        return;
                                    }
                                    try {
                                        const response = await fetch("/api/newsletter", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                email
                                            })
                                        });
                                        if (response.ok) {
                                            setSubmitted(true);
                                            setEmail("");
                                        } else {
                                            alert(locale === "ro" ? "A apărut o eroare la trimitere." : "An error occurred while submitting.");
                                        }
                                    } catch (error) {
                                        console.error("Newsletter error:", error);
                                        alert(locale === "ro" ? "Eroare de rețea." : "Network error.");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ _jsx("input", {
                                        type: "email",
                                        placeholder: "Email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        className: "px-3 py-2 rounded bg-white text-black placeholder-gray-500 text-sm"
                                    }),
                                    /*#__PURE__*/ _jsx("button", {
                                        type: "submit",
                                        className: "bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition",
                                        children: locale === "ro" ? "Abonează-te" : "Subscribe"
                                    }),
                                    submitted && /*#__PURE__*/ _jsx("p", {
                                        className: "text-green-400 text-sm",
                                        children: locale === "ro" ? "Mulțumim pentru abonare!" : "Thank you for subscribing!"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "text-center text-xs text-gray-500 mt-10",
                children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " SEWCELS S.R.L. – ",
                    locale === "ro" ? "Toate drepturile rezervate." : "All rights reserved."
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/about.js








function About() {
    const { locale } = (0,router_.useRouter)();
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-white text-gray-800 py-12 px-6 md:px-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: locale === "ro" ? "Despre SEWCELS - Expertiză \xeen energie și consultanță" : "About SEWCELS - Expertise in Energy and Consulting"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: locale === "ro" ? "Află cine suntem și cum oferim soluții strategice pentru tranziția verde și digitală. SEWCELS – partenerul tău \xeen proiecte sustenabile." : "Discover who we are and how we deliver strategic solutions for the green and digital transition. SEWCELS – your partner in sustainable projects."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: "SEWCELS - Despre noi"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: locale === "ro" ? "Consultanță, energie regenerabilă, fonduri nerambursabile, achiziții publice și mai mult – află valorile care ne ghidează." : "Consulting, renewable energy, funding, procurement and more – discover the values that guide us."
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
                        href: `https://sewcels.ro${locale === "en" ? "/en/about" : "/ro/about"}`
                    }),
                     false && /*#__PURE__*/ 0
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative mb-4 h-[380px] rounded-xl overflow-hidden shadow-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: "/images/about/about-top.webp",
                        alt: locale === "ro" ? "Consultanță și energie sustenabilă" : "Consulting and sustainable energy",
                        layout: "fill",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                        priority: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute inset-0 backdrop-blur-[1.5px] px-8 py-8 flex flex-col justify-start items-start h-full",
                        style: {
                            backgroundImage: "linear-gradient(90deg, rgba(24,130,128,0.9) 0%, rgba(24,130,128,0.9) 40%, rgba(110,186,77,0.6) 60%, rgba(255,255,255,0) 100%)"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow w-full",
                                children: locale === "ro" ? "SEWCELS - Consultanță strategică pentru o economie sustenabilă" : "SEWCELS - Strategic Consulting for a Sustainable Economy"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-white w-full max-w-full sm:max-w-[90%] lg:max-w-[60%] xl:max-w-[45%]",
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-sm md:text-base leading-relaxed text-justify drop-shadow break-words",
                                    children: locale === "ro" ? "Suntem o companie de consultanță fondată din dorința de a aduce claritate, eficiență și rezultate concrete \xeen domenii esențiale pentru tranziția verde și digitală a economiei. Ne adresăm at\xe2t sectorului public, c\xe2t și investitorilor privați care doresc să construiască proiecte durabile și bine finanțate. Oferim servicii integrate pentru energie regenerabilă, fonduri nerambursabile, achiziții publice și intermediere financiară. Echipa noastră combină expertiza practică cu \xeențelegerea profundă a cadrului instituțional și a cerințelor legislative, acțion\xe2nd ca un partener de \xeencredere \xeen toate etapele proiectelor." : "We are a consultancy firm founded out of the desire to bring clarity, efficiency and concrete results in key sectors for the green and digital economic transition. We serve both public institutions and private investors seeking to develop sustainable, well-financed projects. We provide integrated services in renewable energy, non-reimbursable funds, public procurement and financial intermediation. Our team combines hands-on experience with deep institutional and legislative knowledge, acting as a trusted partner throughout all project phases."
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "bg-white py-16 px-6 mb-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-5xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                            className: "text-3xl md:text-4xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3",
                            children: [
                                "\uD83D\uDCAC ",
                                locale === "ro" ? "Hai să discutăm despre proiectul tău!" : "Let’s talk about your project!"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-md md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-gray-800 text-justify",
                            children: locale === "ro" ? "Ai o idee, o inițiativă sau un proiect \xeen fază incipientă? Echipa noastră te poate ghida de la concept la implementare, cu soluții strategice și surse de finanțare potrivite. Hai să vedem \xeempreună ce putem construi." : "Do you have an idea, an initiative or a project in early stages? Our team can guide you from concept to implementation, with strategic solutions and the right funding sources. Let’s discover together what we can build."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    onClick: ()=>setShowModal(true),
                                    role: "button",
                                    className: "cursor-pointer group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition duration-300 ease-out rounded-full shadow-md bg-[linear-gradient(90deg,_rgb(24,130,128)_0%,_rgb(110,186,77)_100%)] hover:scale-[1.03] hover:shadow-[0_0_14px_rgba(110,186,77,0.4)] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "btn-icon transform transition-transform duration-300 translate-x-0 group-hover:-translate-x-3 group-hover:opacity-100 opacity-0 absolute left-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5 text-white",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 5l7 7-7 7"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "btn-txt transition-all duration-300 mx-2",
                                            "data-text": locale === "ro" ? "Solicită o discuție" : "Request a Call",
                                            children: locale === "ro" ? "Solicită o discuție" : "Request a Call"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/services",
                                    passHref: true,
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        className: "group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition duration-300 ease-out rounded-full shadow-md bg-[linear-gradient(90deg,_rgb(24,130,128)_0%,_rgb(110,186,77)_100%)] hover:scale-[1.03] hover:shadow-[0_0_14px_rgba(110,186,77,0.4)] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "btn-icon transform transition-transform duration-300 translate-x-0 group-hover:-translate-x-3 group-hover:opacity-100 opacity-0 absolute left-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5 text-white",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M9 5l7 7-7 7"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "btn-txt transition-all duration-300 mx-2",
                                                "data-text": locale === "ro" ? "Descoperă serviciile" : "Discover Services",
                                                children: locale === "ro" ? "Descoperă serviciile" : "Discover Services"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mb-4 py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-6xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-3xl font-bold text-blue-900 mb-12",
                            children: locale === "ro" ? "Valorile Noastre" : "Our Core Values"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid md:grid-cols-3 gap-8 text-left",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "p-6 rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-row gap-4 items-start border border-gray-100 group hover:border-green-600",
                                    style: {
                                        backgroundImage: "linear-gradient(90deg, rgba(24,130,128,0.3) 0%, rgba(24,130,128,0.3) 40%, rgba(110,186,77,0.2) 100%)"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-green-600 text-4xl mt-1 transition-transform duration-300 ease-in-out group-hover:scale-110",
                                            children: "⚡"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-xl font-semibold text-blue-800 mb-2",
                                                    children: locale === "ro" ? "Evaluare Energetică" : "Energy Assessment"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-700 text-sm text-justify leading-[1.6] font-['DM Sans',sans-serif]",
                                                    children: locale === "ro" ? "Identificarea oportunităților de eficientizare energetică printr-o analiză detaliată a consumului și propunerea de soluții personalizate." : "Identifying energy efficiency opportunities through detailed consumption analysis and proposing tailored solutions."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "p-6 rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-row gap-4 items-start border border-gray-100 group hover:border-green-600",
                                    style: {
                                        backgroundImage: "linear-gradient(90deg, rgba(24,130,128,0.3) 0%, rgba(24,130,128,0.3) 40%, rgba(110,186,77,0.2) 100%)"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-4xl mt-1",
                                            children: "\uD83C\uDF31"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-xl font-semibold text-blue-800 mb-2",
                                                    children: locale === "ro" ? "Impact sustenabil & societal" : "Sustainable & Societal Impact"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-700 text-sm text-justify",
                                                    children: locale === "ro" ? "Ne implicăm \xeen inițiative care aduc valoare reală: proiecte verzi, digitalizare, investiții cu efect pozitiv asupra comunităților și mediului." : "We are engaged in meaningful initiatives: green projects, digitalization, and investments with positive impact on communities and the environment."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "p-6 rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-row gap-4 items-start border border-gray-100 group hover:border-green-600",
                                    style: {
                                        backgroundImage: "linear-gradient(90deg, rgba(24,130,128,0.3) 0%, rgba(24,130,128,0.3) 40%, rgba(110,186,77,0.2) 100%)"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-4xl mt-1",
                                            children: "\uD83D\uDCC8"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-xl font-semibold text-blue-800 mb-2",
                                                    children: locale === "ro" ? "Profesionalism și excelență" : "Professionalism & Excellence"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-700 text-sm text-justify",
                                                    children: locale === "ro" ? "Aplicăm cele mai bune practici, livrăm la standarde ridicate și construim soluții durabile pentru fiecare partener." : "We apply best practices, deliver at high standards, and build lasting solutions for every partner."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "mb-4 py-16 px-6 rounded-xl shadow-inner relative overflow-hidden bg-blue-900",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 z-0",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/images/about/about-illustration.webp",
                            alt: locale === "ro" ? "Fundal SEWCELS" : "SEWCELS background",
                            layout: "fill",
                            objectFit: "cover",
                            className: "opacity-90"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 bg-blue-900/30 z-10"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-6xl mx-auto text-center relative z-20 p-6 rounded-lg text-white",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-3xl mx-auto shadow-sm mb-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-2xl font-bold text-blue-900 mb-4",
                                        children: locale === "ro" ? "Domenii de Expertiză" : "Fields of Expertise"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-gray-900 text-justify text-sm leading-relaxed",
                                        children: locale === "ro" ? "Activăm \xeen domenii strategice ce susțin tranziția către o economie verde, digitală și sustenabilă. Combinăm expertiza tehnică, juridică și financiară pentru a genera rezultate măsurabile." : "We operate in strategic sectors that support the transition to a green, digital and sustainable economy. We combine technical, legal and financial expertise to deliver measurable outcomes."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid md:grid-cols-3 gap-8 text-left text-gray-800",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-2xl",
                                                        children: "☀️"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-semibold text-blue-800 text-lg",
                                                        children: locale === "ro" ? "Energie regenerabilă" : "Renewable Energy"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-sm text-justify leading-relaxed text-gray-700",
                                                children: locale === "ro" ? "Proiecte solare, BESS, avize tehnice, dimensionare, execuție, monitorizare." : "Solar projects, BESS, permitting, sizing, implementation, monitoring."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-2xl",
                                                        children: "\uD83D\uDCB0"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-semibold text-blue-800 text-lg",
                                                        children: locale === "ro" ? "Finanțări nerambursabile" : "Non-reimbursable Funding"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-sm text-justify leading-relaxed text-gray-700",
                                                children: locale === "ro" ? "PNRR, Electric-Up, Fondul de Modernizare, Start-Up Nation, granturi IMM." : "PNRR, Electric-Up, Modernization Fund, Start-Up Nation, SME grants."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-2xl",
                                                        children: "\uD83D\uDCC4"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-semibold text-blue-800 text-lg",
                                                        children: locale === "ro" ? "Achiziții publice" : "Public Procurement"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-sm text-justify leading-relaxed text-gray-700",
                                                children: locale === "ro" ? "Consultanță pentru licitații, documentații SEAP/SICAP, studii de fezabilitate." : "Tender consulting, SEAP/SICAP documentation, feasibility studies."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-2xl",
                                                        children: "\uD83C\uDFED"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-semibold text-blue-800 text-lg",
                                                        children: locale === "ro" ? "Industrie și digitalizare" : "Industry & Digitalization"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-sm text-justify leading-relaxed text-gray-700",
                                                children: locale === "ro" ? "Proiecte tehnologice și automatizări \xeen producție și servicii." : "Technology and automation projects in production and services."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-2xl",
                                                        children: "\uD83E\uDD1D"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-semibold text-blue-800 text-lg",
                                                        children: locale === "ro" ? "Parteneriate & Investiții" : "Partnerships & Investment"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-sm text-justify leading-relaxed text-gray-700",
                                                children: locale === "ro" ? "Business Angels, intermediere bancară, fonduri de investiții, PPA." : "Business Angels, banking intermediation, investment funds, PPAs."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-2xl",
                                                        children: "\uD83C\uDFDB️"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-semibold text-blue-800 text-lg",
                                                        children: locale === "ro" ? "Consultanță instituțională" : "Institutional Consulting"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-sm text-justify leading-relaxed text-gray-700",
                                                children: locale === "ro" ? "Sprijin pentru UAT, școli, spitale, companii municipale \xeen accesarea de fonduri și implementare." : "Support for local governments, schools, hospitals, and utilities in funding and implementation."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            showModal && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "absolute top-3 right-3 text-gray-500 hover:text-gray-800",
                            onClick: ()=>setShowModal(false),
                            children: "✕"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "text-xl font-bold mb-4 text-blue-900",
                            children: locale === "ro" ? "Formular de Contact" : "Contact Form"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            className: "flex flex-col gap-4",
                            onSubmit: async (e)=>{
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const data = Object.fromEntries(formData.entries());
                                try {
                                    // Map selected interest to label text
                                    const interestLabels = {
                                        efficiency: "Consultanță pentru Eficiență Energetică",
                                        pv: "Proiecte fotovoltaice",
                                        bess: "Sisteme de stocare (BESS) și integrare hibridă",
                                        atr: "Consultanță pentru obținere ATR",
                                        anre: "Avize și licențiere ANRE",
                                        ppa: "Proiecte PPA (Power Purchase Agreements)",
                                        funding: "Fonduri Nerambursabile & Ajutoare de Stat",
                                        procurement: "Consultanță pentru Achiziții Publice & Licitații",
                                        investors: "Investitori & Intermediere Bancară"
                                    };
                                    data.interest = interestLabels[data.interest] || data.interest;
                                    const response = await fetch("/api/contact", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(data)
                                    });
                                    if (response.ok) {
                                        alert(locale === "ro" ? "Mesaj trimis cu succes!" : "Message sent successfully!");
                                        e.target.reset();
                                        setShowModal(false);
                                    } else {
                                        alert(locale === "ro" ? "A apărut o eroare. \xcencearcă din nou." : "An error occurred. Please try again.");
                                    }
                                } catch (error) {
                                    console.error(error);
                                    alert(locale === "ro" ? "A apărut o eroare." : "Something went wrong.");
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    name: "name",
                                    placeholder: locale === "ro" ? "Nume complet" : "Full name",
                                    className: "border border-gray-300 px-4 py-2 rounded",
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    name: "company",
                                    placeholder: locale === "ro" ? "Compania" : "Company",
                                    className: "border border-gray-300 px-4 py-2 rounded",
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Email",
                                    className: "border border-gray-300 px-4 py-2 rounded",
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    name: "phone",
                                    placeholder: locale === "ro" ? "Număr de telefon" : "Phone number",
                                    className: "border border-gray-300 px-4 py-2 rounded",
                                    required: true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                    name: "interest",
                                    className: "border border-gray-300 px-4 py-2 rounded bg-white text-gray-700",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "",
                                            children: locale === "ro" ? "Selectează obiectul interesului" : "Select area of interest"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "efficiency",
                                            children: locale === "ro" ? "Consultanță pentru Eficiență Energetică" : "Energy Efficiency Consulting"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "pv",
                                            children: locale === "ro" ? "Proiecte fotovoltaice" : "Photovoltaic Projects"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "bess",
                                            children: locale === "ro" ? "Sisteme de stocare (BESS) și integrare hibridă" : "BESS & Hybrid Integration"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "atr",
                                            children: locale === "ro" ? "Consultanță pentru obținere ATR" : "Grid Access Permit (ATR) Consulting"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "anre",
                                            children: locale === "ro" ? "Avize și licențiere ANRE" : "ANRE Licensing & Approvals"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "ppa",
                                            children: locale === "ro" ? "Proiecte PPA (Power Purchase Agreements)" : "PPA (Power Purchase Agreements) Projects"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "funding",
                                            children: locale === "ro" ? "Fonduri Nerambursabile & Ajutoare de Stat" : "Grants & State Aid"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "procurement",
                                            children: locale === "ro" ? "Consultanță pentru Achiziții Publice & Licitații" : "Public Procurement & Tender Consulting"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: "investors",
                                            children: locale === "ro" ? "Investitori & Intermediere Bancară" : "Investors & Banking Intermediation"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                    name: "message",
                                    rows: "4",
                                    placeholder: locale === "ro" ? "Mesajul tău..." : "Your message...",
                                    className: "border border-gray-300 px-4 py-2 rounded",
                                    required: true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                    className: "text-sm text-gray-700 flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "checkbox",
                                            required: true,
                                            className: "mt-1",
                                            name: "privacy"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: locale === "ro" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    "Sunteți de acord cu",
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "/politica-confidentialitate",
                                                        className: "underline text-blue-700 hover:text-blue-900 ml-1",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: "politica noastră de confidențialitate"
                                                    }),
                                                    "."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    "You agree with our",
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "/politica-confidentialitate",
                                                        className: "underline text-blue-700 hover:text-blue-900 ml-1",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: "privacy policy"
                                                    }),
                                                    "."
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "submit",
                                    className: "bg-blue-900 text-white font-semibold px-4 py-2 rounded hover:bg-blue-800",
                                    children: locale === "ro" ? "Trimite" : "Send"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps({ locale }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fabout&preferredRegion=&absolutePagePath=private-next-pages%2Fabout.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fabout_preferredRegion_absolutePagePath_private_next_pages_2Fabout_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(about_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fabout_preferredRegion_absolutePagePath_private_next_pages_2Fabout_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(about_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(about_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/about","pathname":"/about","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: about_namespaceObject,
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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [914,636,675,664,947], () => (__webpack_exec__(208)));
module.exports = __webpack_exports__;

})();