(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Web Portfolio Project\web-portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "1TqD":
/*!************************************!*\
  !*** ./src/app/chatbot.service.ts ***!
  \************************************/
/*! exports provided: ChatbotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotService", function() { return ChatbotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



class ChatbotService {
    constructor() { }
    sendMessage(message) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: message,
            max_tokens: 60
        }, {
            headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json'
            }
        });
    }
}
ChatbotService.ɵfac = function ChatbotService_Factory(t) { return new (t || ChatbotService)(); };
ChatbotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatbotService, factory: ChatbotService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-page/about-page.component */ "HioS");
/* harmony import */ var _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../experience-page/experience-page.component */ "9wIh");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills/skills.component */ "fGbd");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects-page/projects-page.component */ "nDjA");
/* harmony import */ var _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blogs-page/blogs-page.component */ "jJNC");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chatbot/chatbot.component */ "npXH");











class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, consts: [["id", "landing-page"], ["id", "about-page"], ["id", "experience-page"], ["id", "skills-page"], ["id", "projects-page"], ["id", "blogs-page"], ["id", "footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-landing-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-about-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-experience-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-projects-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-blogs-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-chatbot");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"], _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_4__["ExperiencePageComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsPageComponent"], _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_7__["BlogsPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_9__["ChatbotComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9wIh":
/*!**************************************************************!*\
  !*** ./src/app/experience-page/experience-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ExperiencePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePageComponent", function() { return ExperiencePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExperiencePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperiencePageComponent.ɵfac = function ExperiencePageComponent_Factory(t) { return new (t || ExperiencePageComponent)(); };
ExperiencePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperiencePageComponent, selectors: [["app-experience-page"]], decls: 62, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css")], [1, "experience-page"], [1, "experience-content"], [1, "experience-image"], [1, "job"], [1, "job-info"], [1, "year"], ["href", "https://www.talinolabs.com/", 1, "job-link"], ["src", "./assets/talino.png", "alt", "talino", 1, "job-icon"], [1, "job-details"], [1, "role"], [1, "company"], [1, "description"], ["href", "https://medprojects.com/", 1, "job-link"], ["src", "./assets/medprojects.png", "alt", "medprojects", 1, "job-icon"], ["href", "https://www.sulzer.com/en/", 1, "job-link"], ["src", "./assets/sulzer.png", "alt", "medprojects", 1, "job-icon"], ["href", "https://www.globiq.nl/over-ons", 1, "job-link"], ["src", "./assets/globiq.png", "alt", "globiq", 1, "job-icon"]], template: function ExperiencePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Experience & Responsibilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "FULL STACK ENGINEER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TALINO VENTURE LABS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Works on Talino\u2019s product/projects from the initial planning stage until its final launch. Stay updated and knowledgeable about current industry trends and emerging technologies to meet user needs. Communicates and consults with team members and stakeholders to deliver high-quality products.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FULL STACK DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "MEDPROJECTS INC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Responsible for designing, developing, and maintaining web applications for the healthcare industry. Utilize expertise in Angular, PHP, Laravel, and SQL to create scalable and high-performance solutions. Collaborate with a skilled team of developers, designers, and project managers to improve patient care and meet client needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ETL CONSULTANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SULZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Spearheaded an entire project from start to finish, taking charge of every aspect from gathering requirements to deploying the final product. Notably, I achieved completion ahead of schedule, demonstrating my efficient project management skills. One of my key responsibilities was developing and enhancing data solutions to ensure seamless data delivery. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "SOFTWARE DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "GLOBIQ BV PHILS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Software Developer at GlobiQ BV Philippines Inc. Experienced in handling front-end and back-end tasks, data integration projects, and designing prototypes. Proficient in Oracle Application Express, Talend, SQL, Java, JavaScript, and Angular. Strong understanding of business logic and enterprise systems. Primary responsibilities include UI/UX design, data integration, and maintaining databases for website functionality.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');\r\n\r\n.experience-page[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  height: 115vh;\r\n  background-color: #f6f6f6;\r\n  padding: 5% 5% 0% 5%;\r\n}\r\n\r\n.experience-content[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  min-width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5% 5%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.experience-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 600;\r\n  font-size: 3em;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.experience-image[_ngcontent-%COMP%] {\r\n  width: 55%;\r\n  min-width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  margin-top: 5%;\r\n}\r\n\r\n.job[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin-bottom: 5%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\r\n    margin-right: 3.4em;\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-icon[_ngcontent-%COMP%] {\r\n  max-width: 36px;\r\n  height: auto;\r\n  margin-right: 0px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   h1.role[_ngcontent-%COMP%] {\r\n  font-size: 1.2em;\r\n  font-weight: 600;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   h2.company[_ngcontent-%COMP%] {\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n}\r\n\r\n.job[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n  font-weight: 300;\r\n  text-align: justify;\r\n  line-height: 1.6;\r\n  padding: 0 10%;\r\n  margin-left: 60px;\r\n}\r\n\r\n.job-details[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%]:focus {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    outline: none;\r\n  }\r\n\r\n.job-icon[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n.job-icon[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n  }\r\n\r\n\r\n\r\n@media only screen and (max-width: 1300px) {\r\n    .experience-page[_ngcontent-%COMP%] {\r\n      height: 140vh;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 1025px) {\r\n  .experience-page[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    padding: 10% ;\r\n    height: 160vh;\r\n    text-align: center;\r\n\r\n  }\r\n\r\n  .experience-content[_ngcontent-%COMP%], .experience-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 2%;\r\n  }\r\n\r\n  .experience-image[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .job[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 970px) {\r\n  .experience-page[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    padding: 10% ;\r\n    height: 170vh;\r\n    text-align: center;\r\n\r\n  }\r\n\r\n  .experience-content[_ngcontent-%COMP%], .experience-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 2%;\r\n  }\r\n\r\n  .experience-image[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .job[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .experience-page[_ngcontent-%COMP%] {\r\n    height: 135vh;\r\n  }\r\n\r\n  .experience-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin-bottom: 0.8em;\r\n  }\r\n\r\n  .job[_ngcontent-%COMP%] {\r\n    margin-bottom: 4%;\r\n  }\r\n\r\n  .job-info[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\r\n    font-size: 1.1em;\r\n    margin-right: 2em;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  .job-info[_ngcontent-%COMP%]   .job-icon[_ngcontent-%COMP%] {\r\n    max-width: 30px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   h1.role[_ngcontent-%COMP%], .job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   h2.company[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n  }\r\n\r\n  .job[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\r\n    font-size: 0.9em;\r\n    padding: 0 5%;\r\n    margin-left: 40px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 710px) {\r\n  .experience-page[_ngcontent-%COMP%] {\r\n    height: 145vh;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 580px) {\r\n  .experience-page[_ngcontent-%COMP%] {\r\n    height: 155vh;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 490px) {\r\n  .experience-page[_ngcontent-%COMP%] {\r\n    height: 175vh;\r\n  }\r\n\r\n  .experience-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 1.8em;\r\n    text-align: center;\r\n  }\r\n\r\n  .job-info[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .job-info[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .job-info[_ngcontent-%COMP%]   .job-icon[_ngcontent-%COMP%] {\r\n    max-width: 28px;\r\n    margin-bottom: 15px;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   h1.role[_ngcontent-%COMP%], .job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   h2.company[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .job[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\r\n    font-size: 0.8em;\r\n    padding: 0 3%;\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 405px) {\r\n  .experience-page[_ngcontent-%COMP%] {\r\n    height: 190vh;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtGQUErRjs7QUFFL0Y7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGFBQWE7RUFDZjs7QUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7RUFDRjs7QUFFRjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFHQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmV4cGVyaWVuY2UtcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDExNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgcGFkZGluZzogNSUgNSUgMCUgNSU7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWNvbnRlbnQge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogNSUgNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtY29udGVudCBoMSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uZXhwZXJpZW5jZS1pbWFnZSB7XHJcbiAgd2lkdGg6IDU1JTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uam9iIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmpvYi1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qb2ItaW5mbyAueWVhciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNGVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmpvYi1pbmZvIC5qb2ItaWNvbiB7XHJcbiAgbWF4LXdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uam9iLWluZm8gLmpvYi1kZXRhaWxzIGgxLnJvbGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmpvYi1pbmZvIC5qb2ItZGV0YWlscyBoMi5jb21wYW55IHtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5qb2IgcC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgcGFkZGluZzogMCAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi5qb2ItZGV0YWlsc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uam9iLWluZm8gLmpvYi1saW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuam9iLWluZm8gLmpvYi1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuam9iLWluZm8gLmpvYi1saW5rOmZvY3VzIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmpvYi1pY29uIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5qb2ItaWNvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG5cclxuICAvKiBNZWRpYSBRdWVyaWVzICovXHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuZXhwZXJpZW5jZS1wYWdlIHtcclxuICAgICAgaGVpZ2h0OiAxNDB2aDtcclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCkge1xyXG4gIC5leHBlcmllbmNlLXBhZ2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwJSA7XHJcbiAgICBoZWlnaHQ6IDE2MHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB9XHJcblxyXG4gIC5leHBlcmllbmNlLWNvbnRlbnQsIC5leHBlcmllbmNlLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG5cclxuICAuZXhwZXJpZW5jZS1pbWFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuam9iIHAuZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xyXG4gIC5leHBlcmllbmNlLXBhZ2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwJSA7XHJcbiAgICBoZWlnaHQ6IDE3MHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB9XHJcblxyXG4gIC5leHBlcmllbmNlLWNvbnRlbnQsIC5leHBlcmllbmNlLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG5cclxuICAuZXhwZXJpZW5jZS1pbWFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuam9iIHAuZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmV4cGVyaWVuY2UtcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDEzNXZoO1xyXG4gIH1cclxuXHJcbiAgLmV4cGVyaWVuY2UtY29udGVudCBoMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xyXG4gIH1cclxuXHJcbiAgLmpvYiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICB9XHJcblxyXG4gIC5qb2ItaW5mbyAueWVhciB7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmpvYi1pbmZvIC5qb2ItaWNvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmpvYi1pbmZvIC5qb2ItZGV0YWlscyBoMS5yb2xlLCAuam9iLWluZm8gLmpvYi1kZXRhaWxzIGgyLmNvbXBhbnkge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuICAuam9iIHAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHBhZGRpbmc6IDAgNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcclxuICAuZXhwZXJpZW5jZS1wYWdlIHtcclxuICAgIGhlaWdodDogMTQ1dmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmV4cGVyaWVuY2UtcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDE1NXZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTBweCkge1xyXG4gIC5leHBlcmllbmNlLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxNzV2aDtcclxuICB9XHJcblxyXG4gIC5leHBlcmllbmNlLWNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5qb2ItaW5mbyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuam9iLWluZm8gLnllYXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmpvYi1pbmZvIC5qb2ItaWNvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmpvYi1pbmZvIC5qb2ItZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5qb2ItaW5mbyAuam9iLWRldGFpbHMgaDEucm9sZSwgLmpvYi1pbmZvIC5qb2ItZGV0YWlscyBoMi5jb21wYW55IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5qb2IgcC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcGFkZGluZzogMCAzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDVweCkge1xyXG4gIC5leHBlcmllbmNlLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxOTB2aDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperiencePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-page',
                templateUrl: './experience-page.component.html',
                styleUrls: ['./experience-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HioS":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 8, vars: 0, consts: [[1, "about-page"], [1, "about-content"], [1, "about-image"], ["src", "assets/man.jpg", "alt", "Image description"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I am a seasoned Full Stack Engineer with two years of experience in the development industry. I help businesses scale their product and service by creating and maintaining software applications for web and mobile devices. I love applying my experience in software development to help tech companies grow their businesses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\r\n\r\n.about-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: #343434;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 0 5%; \r\n    margin-left: 90px;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: 'Inter-SemiBold';\r\n    font-weight: bold;\r\n    font-size: 3.5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: 'Inter-Regular';\r\n    font-size: 1.5em;\r\n    line-height: 1.6;\r\n}\r\n\r\n.about-image[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0 10%; \r\n}\r\n\r\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80%; \r\n    height: auto;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 950px) {\r\n    .about-page[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        height: auto;\r\n        padding: 80px;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%], .about-image[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%] {\r\n        padding-bottom: 20px;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 2.5em;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 1.2em;\r\n    }\r\n    \r\n    .about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 90%;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n    .about-page[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        height: auto;\r\n        padding: 80px 30px;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%], .about-image[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%] {\r\n        padding-bottom: 20px;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 2em;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n    \r\n    .about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n    \r\n    .about-content[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7O0FBRXZGO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYSxFQUFFLGlDQUFpQztJQUNoRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWMsRUFBRSxrQ0FBa0M7QUFDdEQ7O0FBRUE7SUFDSSxjQUFjLEVBQUUsdURBQXVEO0lBQ3ZFLFlBQVk7QUFDaEI7O0FBRUEscUNBQXFDOztBQUVyQztJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoiYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmFib3V0LXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNSU7IC8qIEFkZCBzb21lIHBhZGRpbmcgdG8gdGhlIHRleHQgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXItU2VtaUJvbGQnO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlci1SZWd1bGFyJztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uYWJvdXQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDEwJTsgLyogQWRkIHNvbWUgcGFkZGluZyB0byB0aGUgaW1hZ2UgKi9cclxufVxyXG5cclxuLmFib3V0LWltYWdlIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTsgLyogQWRqdXN0IHRoaXMgdmFsdWUgdG8gY29udHJvbCB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2UgKi9cclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyBmb3IgUmVzcG9uc2l2ZW5lc3MgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgLmFib3V0LXBhZ2Uge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDgwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hYm91dC1jb250ZW50LCAuYWJvdXQtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWJvdXQtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hYm91dC1jb250ZW50IGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWJvdXQtY29udGVudCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWJvdXQtaW1hZ2UgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFib3V0LWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAgIC5hYm91dC1wYWdlIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA4MHB4IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hYm91dC1jb250ZW50LCAuYWJvdXQtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWJvdXQtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hYm91dC1jb250ZW50IGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFib3V0LWNvbnRlbnQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hYm91dC1pbWFnZSBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFib3V0LWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");



class AppComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.isContentLoaded = false;
        this.title = 'darrel-mendoza';
    }
    ngOnInit() {
        // setTimeout(() => {
        this.isContentLoaded = true;
        // }, 4500);
        // setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingbar'), 'transition', 'left 3s');
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingbar'), 'left', '0');
        // }, 1500);
        // setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingBox'), 'opacity', '1');
        // }, 500);
        // setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.splashScreen'), 'top', '-100%');
        // }, 4500);
        // setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingCircle'), 'opacity', '0');
        // }, 4500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["body[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBtYXJnaW46IDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-page/about-page.component */ "HioS");
/* harmony import */ var _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./github-graph/github-graph.component */ "c8y/");
/* harmony import */ var _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading-screen/loading-screen.component */ "fEtJ");
/* harmony import */ var _chatbot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chatbot.service */ "1TqD");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "npXH");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "nDjA");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./experience-page/experience-page.component */ "9wIh");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blogs-page/blogs-page.component */ "jJNC");











 // Make sure the path is correct








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_chatbot_service__WEBPACK_IMPORTED_MODULE_10__["ChatbotService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
        _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"],
        _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_8__["GithubGraphComponent"],
        _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__["LoadingScreenComponent"],
        _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_11__["ChatbotComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsPageComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_16__["ExperiencePageComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_17__["SkillsComponent"],
        _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_18__["BlogsPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
                    _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"],
                    _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_8__["GithubGraphComponent"],
                    _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__["LoadingScreenComponent"],
                    _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_11__["ChatbotComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsPageComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_16__["ExperiencePageComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_17__["SkillsComponent"],
                    _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_18__["BlogsPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [_chatbot_service__WEBPACK_IMPORTED_MODULE_10__["ChatbotService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c8y/":
/*!********************************************************!*\
  !*** ./src/app/github-graph/github-graph.component.ts ***!
  \********************************************************/
/*! exports provided: GithubGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubGraphComponent", function() { return GithubGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var github_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! github-calendar */ "Au0k");
/* harmony import */ var github_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(github_calendar__WEBPACK_IMPORTED_MODULE_1__);



class GithubGraphComponent {
    constructor() { }
    ngAfterViewInit() {
        github_calendar__WEBPACK_IMPORTED_MODULE_1___default()("#calendar", "DarrelMendoza", {
            responsive: true,
            tooltips: true,
            global_stats: false,
            cache: 1,
            summary_text: "contributions in the last year",
            last_year: 365,
            colors: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
        });
    }
    ngOnInit() {
    }
}
GithubGraphComponent.ɵfac = function GithubGraphComponent_Factory(t) { return new (t || GithubGraphComponent)(); };
GithubGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GithubGraphComponent, selectors: [["app-github-graph"]], decls: 18, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css")], [1, "contribution-page"], [1, "h1container"], [2, "font-size", "48px"], [1, "calendar", "graph"], ["href", "https://github.com/DarrelMendoza", 2, "text-decoration", "none", "color", "#fff"], ["id", "calendar"], [1, "description"], [2, "font-weight", "bold", "font-family", "DM Sans"], [2, "color", "#343434", "font-weight", "bold", "font-style", "italic"], ["href", "https://github.com/DarrelMendoza", "target", "_blank"]], template: function GithubGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daily Contributions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "REALTIME GITHUB CONTRIBUTION CALENDAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Created using Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "and GitHub API Call.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View Github Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');\r\n\r\n.contribution-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    height: 85vh;\r\n    text-align: center;\r\n    padding: 0% 1%;\r\n    background-color: #343434;\r\n}\r\n\r\n.h1container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    min-width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    text-align: left;\r\n    padding-left: 12%;\r\n  }\r\n\r\n.contribution-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: DM Sans;\r\n    font-weight: bold;\r\n    font-size: 3.5em;\r\n}\r\n\r\n.graph[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    width: 78%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    align-self: flex-end;\r\n    text-align: left;\r\n    margin-bottom: 7%;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 10px;\r\n    margin-left: 10em;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtGQUErRjs7QUFFL0Y7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVGO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7R0FNRyIsImZpbGUiOiJnaXRodWItZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmNvbnRyaWJ1dGlvbi1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCUgMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG59XHJcblxyXG4uaDFjb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgfVxyXG5cclxuLmNvbnRyaWJ1dGlvbi1wYWdlIGgxIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IERNIFNhbnM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbn1cclxuXHJcbi5ncmFwaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogNzglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ncmFwaCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHAgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4vKiAjY2FsZW5kYXIge1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgYXJpYWw7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgbWluLWhlaWdodDogMjQzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-github-graph',
                templateUrl: './github-graph.component.html',
                styleUrls: ['./github-graph.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fEtJ":
/*!************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.ts ***!
  \************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingScreenComponent {
    constructor() {
        this.showSplash = true;
        this.loadingBarLeft = '-100%';
        this.loadingCircleOpacity = 1;
    }
    ngOnInit() {
        // setTimeout(() => {
        //   this.loadingBarLeft = '0';
        //   this.loadingCircleOpacity = 0;
        // }, 1500);
        // setTimeout(() => {
        //   this.showSplash = false;
        //   document.body.classList.add('visibleSplash');
        // }, 4500);
    }
}
LoadingScreenComponent.ɵfac = function LoadingScreenComponent_Factory(t) { return new (t || LoadingScreenComponent)(); };
LoadingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingScreenComponent, selectors: [["app-loading-screen"]], decls: 10, vars: 0, consts: [[1, "splashBody"], [1, "splashScreen"], [1, "loadingContainer"], [1, "loadingBox"], ["src", "https://vignette.wikia.nocookie.net/borderlands/images/4/42/Vault_logo.png/revision/latest?cb=20100114181536", 1, "splashLogo"], [1, "loadingBarContainer"], [1, "loadingbar"], [1, "loadingCircle"], [1, "circleOuter"], [1, "circleLoader"]], template: function LoadingScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".splashScreen[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n \theight: 100vh;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbackground: #fff;\r\n\tborder-bottom: 5px solid #333;\r\n\toverflow: hidden;\r\n}\r\n.loadingContainer[_ngcontent-%COMP%] {\r\n\twidth: 400px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n}\r\n.loadingBox[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\topacity: 0;\r\n}\r\n.splashLogo[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n\tmargin: 0 0 50px;\r\n}\r\n.loadingBarContainer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: #eee;\r\n    height: 10px;\r\n    display: block;\r\n    margin: 50px 0 0;\r\n    overflow: hidden;\r\n}\r\n.loadingbar[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight:10px;\r\n\tbackground: #000;\r\n\tposition: absolute;\r\n\tleft: -100%;\r\n}\r\n.loadingCircle[_ngcontent-%COMP%] {\r\n\twidth: 75px;\r\n\theight: 75px;\r\n\tmargin: 30px auto 0;\r\n\tbackground: #fff;\r\n\tdisplay: block;\r\n\tborder-radius: 50%;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n.circleOuter[_ngcontent-%COMP%] {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tbackground: #fff;\r\n\tborder-radius: 50%;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tz-index: 2;\r\n}\r\n.circleLoader[_ngcontent-%COMP%] {\r\n\twidth: 75px;\r\n\theight: 75px;\r\n\tbackground: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(125,185,232,0) 100%);\r\n\tposition: absolute;\r\n\tright: 50%;\r\n\tbottom: 50%;\r\n\ttransform-origin: bottom right;\r\n\tz-index: 1;\r\n\tanimation: rotateLoader 1.5s linear infinite;\r\n}\r\n@keyframes rotateLoader {\r\n    from {transform: rotate(0deg);}\r\n    to {transform: rotate(360deg);}\r\n}\r\n.splashBehind[_ngcontent-%COMP%] {\r\n\tbackground: red;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n}\r\n.splashBehindTwo[_ngcontent-%COMP%] {\r\n\tbackground: #fff;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsV0FBVztFQUNWLGFBQWE7Q0FDZCxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxnQkFBZ0I7Q0FDaEIsNkJBQTZCO0NBQzdCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7Q0FDUixnQ0FBZ0M7Q0FDaEMsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlGQUFpRjtDQUNqRixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsVUFBVTtDQUNWLDRDQUE0QztBQUM3QztBQUNBO0lBQ0ksTUFBTSx1QkFBdUIsQ0FBQztJQUM5QixJQUFJLHlCQUF5QixDQUFDO0FBQ2xDO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxhQUFhO0FBQ2QiLCJmaWxlIjoibG9hZGluZy1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3BsYXNoU2NyZWVuIHtcclxuXHR3aWR0aDogMTAwJTtcclxuIFx0aGVpZ2h0OiAxMDB2aDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzMzMztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sb2FkaW5nQ29udGFpbmVyIHtcclxuXHR3aWR0aDogNDAwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubG9hZGluZ0JveCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuLnNwbGFzaExvZ28ge1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0bWFyZ2luOiAwIDAgNTBweDtcclxufVxyXG4ubG9hZGluZ0JhckNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNTBweCAwIDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sb2FkaW5nYmFyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6MTBweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAtMTAwJTtcclxufVxyXG4ubG9hZGluZ0NpcmNsZSB7XHJcblx0d2lkdGg6IDc1cHg7XHJcblx0aGVpZ2h0OiA3NXB4O1xyXG5cdG1hcmdpbjogMzBweCBhdXRvIDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNpcmNsZU91dGVyIHtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0b3A6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcbi5jaXJjbGVMb2FkZXIge1xyXG5cdHdpZHRoOiA3NXB4O1xyXG5cdGhlaWdodDogNzVweDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDEpIDAlLHJnYmEoMTI1LDE4NSwyMzIsMCkgMTAwJSk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiA1MCU7XHJcblx0Ym90dG9tOiA1MCU7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG5cdHotaW5kZXg6IDE7XHJcblx0YW5pbWF0aW9uOiByb3RhdGVMb2FkZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGVMb2FkZXIge1xyXG4gICAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxyXG4gICAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxyXG59XHJcblxyXG4uc3BsYXNoQmVoaW5kIHtcclxuXHRiYWNrZ3JvdW5kOiByZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uc3BsYXNoQmVoaW5kVHdvIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-screen',
                templateUrl: './loading-screen.component.html',
                styleUrls: ['./loading-screen.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 254, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css")], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "skills-page"], [1, "skills-content"], [2, "font-size", "13px"], [1, "h1container"], [2, "font-size", "48px"], [1, "icon-set", 2, "padding-right", "10px"], [1, "logos"], [1, "logo-details"], [1, "role"], [1, "social-icons"], [1, "box"], [1, "image"], [1, "social-icon", "social-icon--html"], ["src", "assets/icons/html.png", "alt", "Icon", 1, "icon"], [1, "tooltip"], [1, "title"], [1, "social-icon", "social-icon--css"], ["src", "assets/icons/css.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--javascript"], ["src", "assets/icons/javascript.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--react"], ["src", "assets/icons/react.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--angular"], ["src", "assets/icons/angular.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--ionic"], ["src", "assets/icons/ionic.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--jasper"], ["src", "assets/icons/jasper.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--bootstrap"], ["src", "assets/icons/bootstrap.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--reactnative"], ["src", "assets/icons/reactnative.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--tailwind"], ["src", "assets/icons/tailwind.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--sass"], ["src", "assets/icons/sass.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--less"], ["src", "assets/icons/less.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--jquery"], ["src", "assets/icons/jquery.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--chartjs"], ["src", "assets/icons/chartjs.png", "alt", "Icon", 1, "icon"], [1, "skills-content2"], [1, "social-icon", "social-icon--typescript"], ["src", "assets/icons/typescript.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--php"], ["src", "assets/icons/php.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--laravel"], ["src", "assets/icons/laravel.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--java"], ["src", "assets/icons/java.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--aws"], ["src", "assets/icons/aws.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--mysql"], ["src", "assets/icons/mysql.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--postgresql"], ["src", "assets/icons/postgresql.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--nodejs"], ["src", "assets/icons/nodejs.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--plsql"], ["src", "assets/icons/plsql.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--talend"], ["src", "assets/icons/talend.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--oracleapex"], ["src", "assets/icons/oracleapex.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--vagrant"], ["src", "assets/icons/vagrant.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--phpmyadmin"], ["src", "assets/icons/phpmyadmin.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--sqlite"], ["src", "assets/icons/sqlite.png", "alt", "Icon", 1, "icon"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TECHNOLOGIES USED FOR DEVELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Skills & Proficiencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "FRONT END DEVELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "JAVASCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "REACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "REACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "IONIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "IONIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "JASPER REPORTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "JASPER REPORTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "BOOTSTRAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "BOOTSTRAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "REACT NATIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "REACT NATIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "TAILWIND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "TAILWIND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "LESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "LESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "JQUERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "JQUERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "CHARTJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "CHARTJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "BACK END DEVELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "TYPESCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "TYPESCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "LARAVEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "LARAVEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "MYSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "MYSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "POSTGRESQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "POSTGRESQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "NODE JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "NODE JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "PL/SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "PL/SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "TALEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "TALEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "ORACLE APEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "ORACLE APEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "VAGRANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "VAGRANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "PHPMYADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "PHPMYADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "SQLITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "SQLITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap\");\n.box[_ngcontent-%COMP%] {\n  flex: 1 1 15%;\n  text-align: center;\n  transition: all 0.3s ease-in;\n}\n.box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out 0.1s;\n}\n.box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 75px;\n  object-fit: contain;\n}\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: center;\n  font-weight: 470;\n  color: black;\n  transition: all 0.3s ease-in-out;\n  font-size: 12px;\n}\n.box[_ngcontent-%COMP%]:hover {\n  transform: scale(0.8);\n}\n.box[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  transform: scale(1.5) translateY(-20px);\n}\n.box[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: bouncing 0.5s 0.3s;\n}\n.box[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-weight: 700;\n  color: white;\n  font-size: 1px;\n}\n@keyframes bouncing {\n  from, to {\n    transform: scale(1, 1);\n  }\n  25% {\n    transform: scale(0.9, 1.1);\n  }\n  50% {\n    transform: scale(1.1, 0.9);\n  }\n  75% {\n    transform: scale(0.95, 1.05);\n  }\n}\n.skills-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: #f6f6f6;\n  padding: 5% 5%;\n  height: 110vh;\n}\n.skills-content[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 5%;\n}\n.h1container[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  margin-bottom: 10%;\n}\n.skills-content2[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  box-sizing: border-box;\n  margin-top: 225px;\n  padding: 5%;\n}\n.icon-set[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 3%;\n  box-sizing: border-box;\n}\n.logos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.logos[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  margin-right: 3.4em;\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-bottom: 40px;\n}\n.logos[_ngcontent-%COMP%]   .job-icon[_ngcontent-%COMP%] {\n  max-width: 36px;\n  height: auto;\n  margin-right: 0px;\n  margin-bottom: 25px;\n}\n.logos[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   h1.role[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 620;\n  margin-bottom: 8%;\n}\n.logos[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   h2.company[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  font-weight: 300;\n}\n.icon-set[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 300;\n  text-align: justify;\n  line-height: 1.6;\n  padding: 0 10%;\n  margin-left: 60px;\n}\n.logo-details[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.logos[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.logos[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.logos[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: inherit;\n  outline: none;\n}\n.job-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.job-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.social-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 0 0.5rem;\n  border-radius: 50%;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 2.5rem;\n  text-decoration: none;\n  transition: all 0.15s ease;\n  \n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.social-icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transform: translate(-50%, -150%);\n}\n.social-icon[_ngcontent-%COMP%]:active {\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) inset;\n}\n.social-icon--bootstrap[_ngcontent-%COMP%] {\n  background: #553d7c;\n  color: #fff;\n}\n.social-icon--bootstrap[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #553d7c;\n  color: currentColor;\n}\n.social-icon--bootstrap[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #553d7c;\n}\n.social-icon--javascript[_ngcontent-%COMP%] {\n  background: #e4d04b;\n  color: #fff;\n}\n.social-icon--javascript[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #e4d04b;\n  color: currentColor;\n}\n.social-icon--javascript[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #e4d04b;\n}\n.social-icon--html[_ngcontent-%COMP%] {\n  background: #f15931;\n  color: #fff;\n}\n.social-icon--html[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #f15931;\n  color: currentColor;\n}\n.social-icon--html[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #f15931;\n}\n.social-icon--css[_ngcontent-%COMP%] {\n  background: #254de3;\n  color: #fff;\n}\n.social-icon--css[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #254de3;\n  color: currentColor;\n}\n.social-icon--css[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #254de3;\n}\n.social-icon--react[_ngcontent-%COMP%] {\n  background: #43c3ec;\n  color: #fff;\n}\n.social-icon--react[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #43c3ec;\n  color: currentColor;\n}\n.social-icon--react[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #43c3ec;\n}\n.social-icon--reactnative[_ngcontent-%COMP%] {\n  background: #43c3ec;\n  color: #fff;\n}\n.social-icon--reactnative[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #43c3ec;\n  color: currentColor;\n}\n.social-icon--reactnative[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #43c3ec;\n}\n.social-icon--angular[_ngcontent-%COMP%] {\n  background: #e23237;\n  color: #fff;\n}\n.social-icon--angular[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #e23237;\n  color: currentColor;\n}\n.social-icon--angular[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #e23237;\n}\n.social-icon--ionic[_ngcontent-%COMP%] {\n  background: #3880ff;\n  color: #fff;\n}\n.social-icon--ionic[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #3880ff;\n  color: currentColor;\n}\n.social-icon--ionic[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #3880ff;\n}\n.social-icon--jasper[_ngcontent-%COMP%] {\n  background: #005f9e;\n  color: #fff;\n}\n.social-icon--jasper[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #005f9e;\n  color: currentColor;\n}\n.social-icon--jasper[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #005f9e;\n}\n.social-icon--tailwind[_ngcontent-%COMP%] {\n  background: #01b7d6;\n  color: #fff;\n}\n.social-icon--tailwind[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #01b7d6;\n  color: currentColor;\n}\n.social-icon--tailwind[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #01b7d6;\n}\n.social-icon--sass[_ngcontent-%COMP%] {\n  background: #cf649a;\n  color: #fff;\n}\n.social-icon--sass[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #cf649a;\n  color: currentColor;\n}\n.social-icon--sass[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #cf649a;\n}\n.social-icon--less[_ngcontent-%COMP%] {\n  background: #172b4a;\n  color: #fff;\n}\n.social-icon--less[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #172b4a;\n  color: currentColor;\n}\n.social-icon--less[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #172b4a;\n}\n.social-icon--jquery[_ngcontent-%COMP%] {\n  background: #0868ac;\n  color: #fff;\n}\n.social-icon--jquery[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #0868ac;\n  color: currentColor;\n}\n.social-icon--jquery[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #0868ac;\n}\n.social-icon--chartjs[_ngcontent-%COMP%] {\n  background: #f27175;\n  color: #fff;\n}\n.social-icon--chartjs[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #f27175;\n  color: currentColor;\n}\n.social-icon--chartjs[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #f27175;\n}\n.social-icon--typescript[_ngcontent-%COMP%] {\n  background: #2d79c7;\n  color: #fff;\n}\n.social-icon--typescript[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #2d79c7;\n  color: currentColor;\n}\n.social-icon--typescript[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #2d79c7;\n}\n.social-icon--php[_ngcontent-%COMP%] {\n  background: #4b568c;\n  color: #fff;\n}\n.social-icon--php[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #4b568c;\n  color: currentColor;\n}\n.social-icon--php[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #4b568c;\n}\n.social-icon--laravel[_ngcontent-%COMP%] {\n  background: #f22b1e;\n  color: #fff;\n}\n.social-icon--laravel[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #f22b1e;\n  color: currentColor;\n}\n.social-icon--laravel[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #f22b1e;\n}\n.social-icon--aws[_ngcontent-%COMP%] {\n  background: #f29100;\n  color: #fff;\n}\n.social-icon--aws[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #f29100;\n  color: currentColor;\n}\n.social-icon--aws[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #f29100;\n}\n.social-icon--mysql[_ngcontent-%COMP%] {\n  background: #005c85;\n  color: #fff;\n}\n.social-icon--mysql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #005c85;\n  color: currentColor;\n}\n.social-icon--mysql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #005c85;\n}\n.social-icon--phpmyadmin[_ngcontent-%COMP%] {\n  background: #e76c00;\n  color: #fff;\n}\n.social-icon--phpmyadmin[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #e76c00;\n  color: currentColor;\n}\n.social-icon--phpmyadmin[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #e76c00;\n}\n.social-icon--postgresql[_ngcontent-%COMP%] {\n  background: #30628a;\n  color: #fff;\n}\n.social-icon--postgresql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #30628a;\n  color: currentColor;\n}\n.social-icon--postgresql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #30628a;\n}\n.social-icon--java[_ngcontent-%COMP%] {\n  background: #3a75b0;\n  color: #fff;\n}\n.social-icon--java[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #3a75b0;\n  color: currentColor;\n}\n.social-icon--java[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #3a75b0;\n}\n.social-icon--sqlite[_ngcontent-%COMP%] {\n  background: #2f92ce;\n  color: #fff;\n}\n.social-icon--sqlite[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #2f92ce;\n  color: currentColor;\n}\n.social-icon--sqlite[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #2f92ce;\n}\n.social-icon--plsql[_ngcontent-%COMP%] {\n  background: #820b48;\n  color: #fff;\n}\n.social-icon--plsql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #820b48;\n  color: currentColor;\n}\n.social-icon--plsql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #820b48;\n}\n.social-icon--talend[_ngcontent-%COMP%] {\n  background: #183e66;\n  color: #fff;\n}\n.social-icon--talend[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #183e66;\n  color: currentColor;\n}\n.social-icon--talend[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #183e66;\n}\n.social-icon--oracleapex[_ngcontent-%COMP%] {\n  background: #bd4231;\n  color: #fff;\n}\n.social-icon--oracleapex[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #bd4231;\n  color: currentColor;\n}\n.social-icon--oracleapex[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #bd4231;\n}\n.social-icon--nodejs[_ngcontent-%COMP%] {\n  background: #92b54c;\n  color: #fff;\n}\n.social-icon--nodejs[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #92b54c;\n  color: currentColor;\n}\n.social-icon--nodejs[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #92b54c;\n}\n.social-icon--vagrant[_ngcontent-%COMP%] {\n  background: #1178f2;\n  color: #fff;\n}\n.social-icon--vagrant[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #1178f2;\n  color: currentColor;\n}\n.social-icon--vagrant[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #1178f2;\n}\n.social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  padding: 0.8rem 1rem;\n  border-radius: 40px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  opacity: 0;\n  pointer-events: none;\n  text-transform: uppercase;\n  transform: translate(-50%, -100%);\n  transition: all 0.3s ease;\n  z-index: 1;\n}\n.tooltip[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  bottom: 1px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  content: \"\";\n  border: solid;\n  border-width: 10px 10px 0 10px;\n  border-color: transparent;\n  transform: translate(-50%, 100%);\n}\n.icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n@media (max-width: 1975px) {\n  .skills-content2[_ngcontent-%COMP%] {\n    padding-top: 79px;\n  }\n}\n@media (max-width: 1750px) {\n  .skills-content2[_ngcontent-%COMP%] {\n    padding-top: 71px;\n  }\n}\n@media (max-width: 1675px) {\n  .skills-content2[_ngcontent-%COMP%] {\n    padding-top: 70px;\n  }\n}\n@media (max-width: 1650px) {\n  .social-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n@media (max-width: 1580px) {\n  .skills-content2[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n\n  .skills-page[_ngcontent-%COMP%] {\n    height: 110vh;\n  }\n}\n@media (max-width: 1420px) {\n  .skills-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 0px;\n  }\n\n  .skills-content2[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 0px;\n    padding-top: 0px;\n  }\n\n  .social-icon[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n\n  .skills-page[_ngcontent-%COMP%] {\n    display: block;\n    height: 150vh;\n  }\n\n  .icon-set[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 3%;\n    box-sizing: border-box;\n  }\n\n  .logos[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media (max-width: 1100px) {\n  .skills-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 0px;\n  }\n\n  .skills-content2[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 0px;\n    padding-top: 0px;\n  }\n\n  .social-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n\n  .skills-page[_ngcontent-%COMP%] {\n    display: block;\n    height: 130vh;\n  }\n}\n@media (max-width: 585px) {\n  .skills-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .skills-content2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .social-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n\n  .skills-page[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .logos[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media (max-width: 585px) {\n  .skills-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .skills-content2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .social-icon[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n\n  .skills-page[_ngcontent-%COMP%] {\n    display: block;\n    height: 80vh;\n  }\n\n  .logos[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1px;\n  }\n}\n@media (max-width: 405px) {\n  .social-icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 15px;\n    height: 15px;\n  }\n}\n@media (max-width: 390px) {\n  .social-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n  }\n}\n@media (max-width: 350px) {\n  .social-icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwrRkFBQTtBQUNBLGdMQUFBO0FBT1I7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUxGO0FBT0U7RUFDRSxxQ0FBQTtBQUxKO0FBT0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQVNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBUEo7QUFVRTtFQUVFLHFCQUFBO0FBVEo7QUFXSTtFQUNFLHVDQUFBO0FBVE47QUFXTTtFQUNFLDZCQUFBO0FBVFI7QUFhSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVhOO0FBZ0NBO0VBRUU7SUFFRSxzQkFBQTtFQS9CRjtFQWtDQTtJQUNFLDBCQUFBO0VBaENGO0VBbUNBO0lBQ0UsMEJBQUE7RUFqQ0Y7RUFvQ0E7SUFDRSw0QkFBQTtFQWxDRjtBQUNGO0FBcUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFuQ0Y7QUFzQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFuQ0Y7QUFzQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBbkNGO0FBc0NBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBbkNGO0FBc0NBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQW5DRjtB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L0dBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFrSEY7O0VBaEhBO0lBQ0UsY0FBQTtJQUNBLGFBQUE7RUFtSEY7QUFDRjtBQWhIQTtFQUNFO0lBQ0UsV0FBQTtFQWtIRjs7RUFoSEE7SUFDRSxXQUFBO0VBbUhGOztFQWpIQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBb0hGOztFQWxIQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBcUhGOztFQW5IQTtJQUNFLGNBQUE7RUFzSEY7O0VBcEhBO0lBQ0Usa0JBQUE7RUF1SEY7QUFDRjtBQXBIQTtFQUNFO0lBQ0UsV0FBQTtFQXNIRjs7RUFwSEE7SUFDRSxXQUFBO0VBdUhGOztFQXJIQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBd0hGOztFQXRIQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBeUhGOztFQXZIQTtJQUNFLGNBQUE7SUFDQSxZQUFBO0VBMEhGOztFQXhIQTtJQUNFLGtCQUFBO0VBMkhGOztFQXpIQTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VBNEhGO0FBQ0Y7QUF6SEE7RUFFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBMEhGOztFQXhIQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBMkhGO0FBQ0Y7QUF4SEE7RUFFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBeUhGOztFQXZIQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBMEhGO0FBQ0Y7QUF2SEE7RUFFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBd0hGOztFQXRIQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBeUhGO0FBQ0YiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZmYW1pbHk9TnVuaXRvOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMDsxMDAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuJG1haW4tY29sb3I6ICMwMDI3MzM7XHJcbiRkYXJrLWNvbG9yOiAjMDAxOTI1O1xyXG4kbGlnaHQtY29sb3I6ICM4N0E0QjY7XHJcbiRtZWRpdW0tbGlnaHQtY29sb3I6ICMwMTM3NDc7XHJcblxyXG4uYm94IHtcclxuICBmbGV4OiAxIDEgMTUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMC4xcztcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQ3MDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMjBweCAyMHB4IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBhbmltYXRpb246IGJvdW5jaW5nIDAuNXMgLjNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDFweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEBtZWRpYShtYXgtd2lkdGg6MTEwMHB4KSB7XHJcbiAgLy8gICBmbGV4OiAxIDAgMjUlO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gQG1lZGlhKG1heC13aWR0aDo2MzBweCkge1xyXG4gIC8vICAgZmxleDogMSAwIDM1JTtcclxuICAvLyAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gIC8vICAgLmltYWdlIHtcclxuXHJcbiAgLy8gICAgIGltZyB7XHJcbiAgLy8gICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jaW5nIHtcclxuXHJcbiAgZnJvbSxcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAxLjEpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAwLjkpO1xyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSwgMS4wNSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGxzLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBwYWRkaW5nOiA1JSA1JTtcclxuICBoZWlnaHQ6IDExMHZoO1xyXG59XHJcblxyXG4uc2tpbGxzLWNvbnRlbnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmgxY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uc2tpbGxzLWNvbnRlbnQyIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXRvcDogMjI1cHg7XHJcbiAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5pY29uLXNldCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5sb2dvcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nb3MgLnllYXIge1xyXG4gIG1hcmdpbi1yaWdodDogMy40ZW07XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ubG9nb3MgLmpvYi1pY29uIHtcclxuICBtYXgtd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5sb2dvcyAubG9nby1kZXRhaWxzIGgxLnJvbGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYyMDtcclxuICBtYXJnaW4tYm90dG9tOiA4JTtcclxufVxyXG5cclxuLmxvZ29zIC5sb2dvLWRldGFpbHMgaDIuY29tcGFueSB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uaWNvbi1zZXQgcC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgcGFkZGluZzogMCAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWRldGFpbHMge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubG9nb3MgLmpvYi1saW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5sb2dvcyAuam9iLWxpbms6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmxvZ29zIC5qb2ItbGluazpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5qb2ItaWNvbiB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmpvYi1pY29uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi8qIFNvY2lhbCBJY29uIE1peGluICovXHJcbkBtaXhpbiBzb2NpYWwtaWNvbigkY29sb3IpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIC50b29sdGlwIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFNvY2lhbCBJY29ucyAqL1xyXG4uc29jaWFsLWljb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc29jaWFsLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC50b29sdGlwIHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpIGluc2V0O1xyXG4gIH1cclxuXHJcbiAgLyogQ29sb3IgVmFyaWFibGVzICovXHJcbiAgJGNvbG9yLWJvb3RzdHJhcDogIzU1M2Q3YztcclxuICAkY29sb3ItamF2YXNjcmlwdDogI2U0ZDA0YjtcclxuICAkY29sb3ItaHRtbDogI2YxNTkzMTtcclxuICAkY29sb3ItY3NzOiAjMjU0ZGUzO1xyXG4gICRjb2xvci1yZWFjdDogIzQzYzNlYztcclxuICAkY29sb3ItcmVhY3RuYXRpdmU6ICM0M2MzZWM7XHJcbiAgJGNvbG9yLWFuZ3VsYXI6ICNlMjMyMzc7XHJcbiAgJGNvbG9yLWlvbmljOiAjMzg4MGZmO1xyXG4gICRjb2xvci1qYXNwZXI6ICMwMDVmOWU7XHJcbiAgJGNvbG9yLXRhaWx3aW5kOiAjMDFiN2Q2O1xyXG4gICRjb2xvci1zYXNzOiAjY2Y2NDlhO1xyXG4gICRjb2xvci1sZXNzOiAjMTcyYjRhO1xyXG4gICRjb2xvci1qcXVlcnk6ICMwODY4YWM7XHJcbiAgJGNvbG9yLWNoYXJ0anM6ICNmMjcxNzU7XHJcbiAgJGNvbG9yLXR5cGVzY3JpcHQ6ICMyZDc5Yzc7XHJcbiAgJGNvbG9yLXBocDogIzRiNTY4YztcclxuICAkY29sb3ItbGFyYXZlbDogI2YyMmIxZTtcclxuICAkY29sb3ItYXdzOiAjZjI5MTAwO1xyXG4gICRjb2xvci1teXNxbDogIzAwNWM4NTtcclxuICAkY29sb3ItcGhwbXlhZG1pbjogI2U3NmMwMDtcclxuICAkY29sb3ItcG9zdGdyZXNxbDogIzMwNjI4YTtcclxuICAkY29sb3ItamF2YTogIzNhNzViMDtcclxuICAkY29sb3Itc3FsaXRlOiAjMmY5MmNlO1xyXG4gICRjb2xvci1wbHNxbDogIzgyMGI0ODtcclxuICAkY29sb3ItdGFsZW5kOiAjMTgzZTY2O1xyXG4gICRjb2xvci1vcmFjbGVhcGV4OiAjYmQ0MjMxO1xyXG4gICRjb2xvci1ub2RlanM6ICM5MmI1NGM7XHJcbiAgJGNvbG9yLXZhZ3JhbnQ6ICMxMTc4ZjI7XHJcblxyXG4gICYtLWJvb3RzdHJhcCB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItYm9vdHN0cmFwKTtcclxuICB9XHJcblxyXG4gICYtLWphdmFzY3JpcHQge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWphdmFzY3JpcHQpO1xyXG4gIH1cclxuXHJcbiAgJi0taHRtbCB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItaHRtbCk7XHJcbiAgfVxyXG5cclxuICAmLS1jc3Mge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWNzcyk7XHJcbiAgfVxyXG5cclxuICAmLS1yZWFjdCB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItcmVhY3QpO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVhY3RuYXRpdmUge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLXJlYWN0bmF0aXZlKTtcclxuICB9XHJcblxyXG4gICYtLWFuZ3VsYXIge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWFuZ3VsYXIpO1xyXG4gIH1cclxuXHJcbiAgJi0taW9uaWMge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWlvbmljKTtcclxuICB9XHJcblxyXG4gICYtLWphc3BlciB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItamFzcGVyKTtcclxuICB9XHJcblxyXG4gICYtLXRhaWx3aW5kIHtcclxuICAgIEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci10YWlsd2luZCk7XHJcbiAgfVxyXG5cclxuICAmLS1zYXNzIHtcclxuICAgIEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1zYXNzKTtcclxuICB9XHJcblxyXG4gICYtLWxlc3Mge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWxlc3MpO1xyXG4gIH1cclxuXHJcbiAgJi0tanF1ZXJ5IHtcclxuICAgIEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1qcXVlcnkpO1xyXG4gIH1cclxuXHJcbiAgJi0tY2hhcnRqcyB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItY2hhcnRqcyk7XHJcbiAgfVxyXG5cclxuICAmLS10eXBlc2NyaXB0IHtcclxuICAgIEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci10eXBlc2NyaXB0KTtcclxuICB9XHJcblxyXG4gICYtLXBocCB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItcGhwKTtcclxuICB9XHJcblxyXG4gICYtLWxhcmF2ZWwge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWxhcmF2ZWwpO1xyXG4gIH1cclxuXHJcbiAgJi0tYXdzIHtcclxuICAgIEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1hd3MpO1xyXG4gIH1cclxuXHJcbiAgJi0tbXlzcWwge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLW15c3FsKTtcclxuICB9XHJcblxyXG4gICYtLXBocG15YWRtaW4ge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLXBocG15YWRtaW4pO1xyXG4gIH1cclxuXHJcbiAgJi0tcG9zdGdyZXNxbCB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItcG9zdGdyZXNxbCk7XHJcbiAgfVxyXG5cclxuICAmLS1qYXZhIHtcclxuICAgIEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1qYXZhKTtcclxuICB9XHJcblxyXG4gICYtLXNxbGl0ZSB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3Itc3FsaXRlKTtcclxuICB9XHJcblxyXG4gICYtLXBsc3FsIHtcclxuICAgIEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1wbHNxbCk7XHJcbiAgfVxyXG5cclxuICAmLS10YWxlbmQge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLXRhbGVuZCk7XHJcbiAgfVxyXG5cclxuICAmLS1vcmFjbGVhcGV4IHtcclxuICAgIEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1vcmFjbGVhcGV4KTtcclxuICB9XHJcblxyXG4gICYtLW5vZGVqcyB7XHJcbiAgICBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3Itbm9kZWpzKTtcclxuICB9XHJcblxyXG4gICYtLXZhZ3JhbnQge1xyXG4gICAgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLXZhZ3JhbnQpO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDFweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFRvb2x0aXBzICovXHJcbi50b29sdGlwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMCAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE5NzVweCkge1xyXG4gIC5za2lsbHMtY29udGVudDJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNzlweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNzUwcHgpIHtcclxuICAuc2tpbGxzLWNvbnRlbnQye1xyXG4gICAgcGFkZGluZy10b3A6IDcxcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTY3NXB4KSB7XHJcbiAgLnNraWxscy1jb250ZW50MntcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE2NTBweCkge1xyXG4gIC5zb2NpYWwtaWNvbiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLmljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTU4MHB4KSB7XHJcbiAgLnNraWxscy1jb250ZW50MntcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuc2tpbGxzLXBhZ2V7XHJcbiAgICBoZWlnaHQ6IDExMHZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MjBweCkge1xyXG4gIC5za2lsbHMtY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLnNraWxscy1jb250ZW50MntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICB9XHJcbiAgLnNvY2lhbC1pY29uIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLnNraWxscy1wYWdle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE1MHZoO1xyXG4gIH1cclxuICAuaWNvbi1zZXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG5cclxuLmxvZ29ze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuc2tpbGxzLWNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtY29udGVudDJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLmljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtcGFnZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMzB2aDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODVweCkge1xyXG4gIC5za2lsbHMtY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2tpbGxzLWNvbnRlbnQye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLmljb24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtcGFnZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubG9nb3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTg1cHgpIHtcclxuICAuc2tpbGxzLWNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnNraWxscy1jb250ZW50MntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc29jaWFsLWljb24ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIC5pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuc2tpbGxzLXBhZ2V7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogODB2aDtcclxuICB9XHJcbiAgLmxvZ29ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYm94IC50aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwNXB4KSB7XHJcblxyXG4gIC5zb2NpYWwtaWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgLmljb24ge1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcclxuXHJcbiAgLnNvY2lhbC1pY29uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG5cclxuICAuc29jaWFsLWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5pY29uIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbi8vICAgLmJveCB7XHJcbi8vICAgICBmbGV4OiAxIDAgMzUlO1xyXG4vLyAgICAgcGFkZGluZzogMTVweDtcclxuLy8gICB9XHJcbi8vIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, "about-page"], [1, "about-image"], ["src", "assets/man.jpg", "alt", "Image description"], [1, "about-content"], [2, "margin-bottom", "130px"], [2, "font-size", "34px", "margin-bottom", "10px"], [2, "font-weight", "bold"], [2, "font-weight", "bold", "font-size", "20px", "margin-top", "120px"], [2, "margin-top", "0px"], ["href", "https://github.com/DarrelMendoza", "target", "_blank"], ["src", "assets/github.png", "alt", "GitHub", 2, "width", "40px", "height", "40px", "margin-right", "10px"], ["href", "https://www.linkedin.com/in/darrelmendoza/", "target", "_blank"], ["src", "assets/linkedin.png", "alt", "LinkedIn", 2, "width", "43px", "height", "43px", "margin-right", "10px"], ["href", "https://www.facebook.com/darrel.mendoza.12/", "target", "_blank"], ["src", "assets/facebook.png", "alt", "Facebook", 2, "width", "55px", "height", "55px", "margin-right", "10px"], ["href", "https://www.instagram.com/darpaaax/", "target", "_blank"], ["src", "assets/instagram.png", "alt", "Instagram", 2, "width", "39px", "height", "39px", "margin-right", "10px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reach out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Darrel Mendoza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "darrelmendoza85@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CONNECT WITH ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\r\n\r\n.about-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: #000;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 0 0%; \r\n}\r\n\r\n.about-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: 'Inter-Bold';\r\n    font-size: 3.5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1.5em;\r\n    line-height: 1.6;\r\n}\r\n\r\n.about-image[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0 5%; \r\n}\r\n\r\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 85%; \r\n    height: auto;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .about-content[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        width: 100%;\r\n    }\r\n    .about-image[_ngcontent-%COMP%] {\r\n        display: none; \r\n    }\r\n}\r\n\r\n@media (max-width: 560px) {\r\n    .about-content[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        width: 100%;\r\n    }\r\n    .about-image[_ngcontent-%COMP%] {\r\n        display: none; \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1Rjs7QUFFdkY7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhLEVBQUUsaUNBQWlDO0FBQ3BEOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWEsRUFBRSxrQ0FBa0M7QUFDckQ7O0FBRUE7SUFDSSxjQUFjLEVBQUUsdURBQXVEO0lBQ3ZFLFlBQVk7QUFDaEI7O0FBRUEsb0NBQW9DOztBQUNwQztJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYSxFQUFFLG1CQUFtQjtJQUN0QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhLEVBQUUsbUJBQW1CO0lBQ3RDO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uYWJvdXQtcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5hYm91dC1jb250ZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAwJTsgLyogQWRkIHNvbWUgcGFkZGluZyB0byB0aGUgdGV4dCAqL1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXItQm9sZCc7XHJcbiAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5hYm91dC1pbWFnZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNSU7IC8qIEFkZCBzb21lIHBhZGRpbmcgdG8gdGhlIGltYWdlICovXHJcbn1cclxuXHJcbi5hYm91dC1pbWFnZSBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA4NSU7IC8qIEFkanVzdCB0aGlzIHZhbHVlIHRvIGNvbnRyb2wgdGhlIHNpemUgb2YgdGhlIGltYWdlICovXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5IGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYWJvdXQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmFib3V0LWltYWdlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIHRoZSBpbWFnZSAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcclxuICAgIC5hYm91dC1jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIGltYWdlICovXHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jJNC":
/*!****************************************************!*\
  !*** ./src/app/blogs-page/blogs-page.component.ts ***!
  \****************************************************/
/*! exports provided: BlogsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsPageComponent", function() { return BlogsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BlogsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogsPageComponent.ɵfac = function BlogsPageComponent_Factory(t) { return new (t || BlogsPageComponent)(); };
BlogsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogsPageComponent, selectors: [["app-blogs-page"]], decls: 46, vars: 0, consts: [[1, "contribution-page"], [2, "font-size", "3.5em", "text-align", "center", "padding", "100px", "color", "#343434"], [1, "row"], [1, "col-4"], [1, "component-card"], [1, "component-card_image"], [1, "component-card_image-inside"], ["src", "assets/pexels-olia-danilevich-4974915.jpg", "alt", "", "title", ""], [1, "blog-detail"], ["href", "#", 1, "btn", "btn-read-more"], ["src", "assets/pexels-shvets-production-7176305.jpg", "alt", "", "title", ""], ["src", "assets/pexels-andrea-piacquadio-3761504.jpg", "alt", "", "title", ""]], template: function BlogsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Blog Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Experience as a Self-Taught Developer: Unlocking the Path to Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "December 4, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "In the rapidly evolving technology landscape, I found my calling as a self-taught developer. Facing initial skepticism due to my lack of formal education, I utilized online resources to master programming languages like Python, JavaScript, and HTML/CSS. This journey involved embracing challenges as opportunities, cultivating a problem-solving mindset, and fostering resilience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Embracing Authenticity: Overcoming the Burden of Others' Opinions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "December 4, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "In a society where judgments and expectations can often dictate our actions, this article explores how adopting a mindset of indifference to others' opinions can lead to a more fulfilling and authentic life. Growing up, we're conditioned to seek validation, allowing the views of family, friends, and strangers to dictate our self-worth. This dependence on external approval, however, can trap us in a cycle of comparison and self-doubt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The Road to Success: Embracing Sacrifice for a Brighter Future");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "December 4, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "In this article, the road to success is dissected, particularly focusing on the inherent role of sacrifice. I learned that success doesn't simply fall into our laps; it's the product of commitment, effort, and often, difficult choices. Remarkable achievements aren't reached without surrendering some comforts along the way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contribution-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 105vh;\n  text-align: center;\n  padding: 6% 10%;\n  background-color: #f6f6f6;\n}\n\n.component-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .component-card[_ngcontent-%COMP%]:focus   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.component-card_image[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 0;\n  overflow: hidden;\n  padding-bottom: 56.2%;\n  position: relative;\n}\n\n.component-card_image-inside[_ngcontent-%COMP%] {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.component-card_image-inside[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-size: cover;\n  height: auto !important;\n  transform: scale(1);\n  transition: all 0.25s ease-in-out;\n  width: 100%;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%] {\n  background: #fff;\n  margin: 0 20px;\n  padding: 20px;\n  position: relative;\n  top: -80px;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #737373;\n  font-size: 14px;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 0.25rem;\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 0.375rem 0.75rem;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  text-decoration: none;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  transform: scale(1.05);\n  \n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   .btn-read-more[_ngcontent-%COMP%] {\n  background: #343434;\n  border-radius: 0;\n  border: 2px solid #343434;\n  outline: none;\n  text-transform: uppercase;\n  color: #fff;\n  transition: background-color 0.5s ease, transform 0.5s ease;\n  \n}\n\n\n\n@media (max-width: 1480px) {\n  .contribution-page[_ngcontent-%COMP%] {\n    height: 125vh;\n  }\n}\n\n@media (max-width: 1300px) {\n  .contribution-page[_ngcontent-%COMP%] {\n    height: 140vh;\n  }\n}\n\n@media (max-width: 1100px) {\n  .col-4[_ngcontent-%COMP%] {\n    flex: 0 0 calc(50% - 1rem);\n  }\n\n  .contribution-page[_ngcontent-%COMP%] {\n    height: 200vh;\n  }\n}\n\n@media (max-width: 920px) {\n  .col-4[_ngcontent-%COMP%] {\n    flex: 0 0 calc(100% - 1rem);\n  }\n\n  .contribution-page[_ngcontent-%COMP%] {\n    height: 300vh;\n  }\n}\n\n@media (max-width: 450px) {\n  .contribution-page[_ngcontent-%COMP%] {\n    font-size: 15px;\n    height: 400vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2dzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBS007RUFBTSxxQkFBQTtBQURaOztBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRk47O0FBSU07RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFGUjs7QUFJUTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQUZWOztBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUxOOztBQU9NO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQUxSOztBQVFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFOUjs7QUFTTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQVBSOztBQVVNO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBUlI7O0FBV1E7RUFHRSxxQkFBQTtFQUdBLHNCQUFBO0VBQXdCLHNDQUFBO0FBWmxDOztBQWdCTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUE2RCxVQUFBO0FBYnJFOztBQWtCRSxrQkFBQTs7QUFDRjtFQUNFO0lBQ0UsYUFBQTtFQWZGO0FBQ0Y7O0FBa0JBO0VBQ0U7SUFDRSxhQUFBO0VBaEJGO0FBQ0Y7O0FBb0JBO0VBQ0U7SUFDRSwwQkFBQTtFQWxCRjs7RUFvQkE7SUFDRSxhQUFBO0VBakJGO0FBQ0Y7O0FBb0JBO0VBQ0U7SUFDRSwyQkFBQTtFQWxCRjs7RUFvQkE7SUFDRSxhQUFBO0VBakJGO0FBQ0Y7O0FBb0JBO0VBRUU7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQW5CRjtBQUNGIiwiZmlsZSI6ImJsb2dzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJpYnV0aW9uLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGhlaWdodDogMTA1dmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYlIDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcblxyXG4uY29tcG9uZW50LWNhcmQge1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cclxuICAgIH1cclxuICBcclxuICAgICZfaW1hZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgICAmLWluc2lkZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgLmJsb2ctZGV0YWlsIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtODBweDtcclxuICAgIFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzczNzM3MztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgLy8gY29sb3I6ICMzNDM0MzQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjMzQzNDM0O1xyXG4gICAgICAgICAgLy8gdHJhbnNmb3JtOiAyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogQnV0dG9uIHNsaWdodGx5IGVubGFyZ2VzIG9uIGhvdmVyICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5idG4tcmVhZC1tb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM0MzQzNDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjVzIGVhc2U7IC8qIEFkZGVkICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogTWVkaWEgUXVlcmllcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ4MHB4KSB7XHJcbiAgLmNvbnRyaWJ1dGlvbi1wYWdlIHtcclxuICAgIGhlaWdodDogMTI1dmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgLmNvbnRyaWJ1dGlvbi1wYWdlIHtcclxuICAgIGhlaWdodDogMTQwdmg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5jb2wtNCB7XHJcbiAgICBmbGV4OiAwIDAgY2FsYyg1MCUgLSAxcmVtKTtcclxuICB9XHJcbiAgLmNvbnRyaWJ1dGlvbi1wYWdlIHtcclxuICAgIGhlaWdodDogMjAwdmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcclxuICAuY29sLTQge1xyXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAtIDFyZW0pO1xyXG4gIH1cclxuICAuY29udHJpYnV0aW9uLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAzMDB2aDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG5cclxuICAuY29udHJpYnV0aW9uLXBhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA0MDB2aDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blogs-page',
                templateUrl: './blogs-page.component.html',
                styleUrls: ['./blogs-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "show-nav": a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class NavbarComponent {
    constructor(router) {
        this.router = router;
        // Existing code
        this.isNavVisible = false;
        this.isBurgerVisible = false;
        this.activeLink = '/landing-page';
        this.previousActiveLink = '/landing-page';
    }
    ngOnInit() {
        // Existing code
        this.onScroll();
        this.checkScreenSize();
    }
    toggleSideNav() {
        this.isNavVisible = !this.isNavVisible;
        // if (this.isNavVisible) {
        //   document.body.style.overflowY = 'hidden'; // Prevent body scroll when nav is open
        // } else {
        //   document.body.style.overflowY = 'auto'; // Allow body scroll when nav is closed
        // }
    }
    onResize(event) {
        this.checkScreenSize();
    }
    checkScreenSize() {
        this.isBurgerVisible = window.innerWidth < 1121; // Example width
    }
    isLinkActive(link) {
        return this.activeLink === link;
    }
    toLandingPage() {
        document.getElementById("landing-page").scrollIntoView({ behavior: "smooth" });
    }
    toAboutPage() {
        document.getElementById("about-page").scrollIntoView({ behavior: "smooth" });
    }
    toExperiencePage() {
        document.getElementById("experience-page").scrollIntoView({ behavior: "smooth" });
    }
    toSkillsPage() {
        document.getElementById("skills-page").scrollIntoView({ behavior: "smooth" });
    }
    toProjectsPage() {
        document.getElementById("projects-page").scrollIntoView({ behavior: "smooth" });
    }
    toBlogsPage() {
        document.getElementById("blogs-page").scrollIntoView({ behavior: "smooth" });
    }
    toContactsPage() {
        document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    }
    onScroll() {
        const sections = [
            { id: 'landing-page', link: '/landing-page' },
            { id: 'about-page', link: '/about-page' },
            { id: 'experience-page', link: '/experience-page' },
            { id: 'skills-page', link: '/skills-page' },
            { id: 'projects-page', link: '/projects-page' },
            { id: 'blogs-page', link: '/blogs-page' },
            { id: 'footer', link: '/contacts-page' }
        ];
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element && scrollPosition >= element.offsetTop - 100) {
                this.previousActiveLink = this.activeLink;
                this.activeLink = section.link;
            }
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 26, vars: 25, consts: [[1, "menubar"], [1, "logo"], ["src", "assets/all-white-logo-dm.png", "width", "60", "alt", "logo"], ["class", "burger", 3, "click", 4, "ngIf"], [1, "navigation", 3, "ngClass"], [3, "ngClass", "click"], ["routerLink", "/landing-page"], ["routerLink", "/about-page"], ["routerLink", "/experience-page"], ["routerLink", "/skills-page"], ["routerLink", "/projects-page"], ["routerLink", "/blogs-page"], ["routerLink", "/contacts-page"], [1, "burger", 3, "click"], [1, "fas", "fa-bars"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_5_listener() { return ctx.toLandingPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_8_listener() { return ctx.toAboutPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_11_listener() { return ctx.toExperiencePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_14_listener() { return ctx.toSkillsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_17_listener() { return ctx.toProjectsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_20_listener() { return ctx.toBlogsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_23_listener() { return ctx.toContactsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBurgerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isNavVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.isLinkActive("/landing-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.isLinkActive("/about-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.isLinkActive("/experience-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.isLinkActive("/skills-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.isLinkActive("/projects-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.isLinkActive("/blogs-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.isLinkActive("/contacts-page")));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".menubar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #343434;\n  color: #fff;\n  padding: 10px;\n  z-index: 1000;\n  \n}\n.menubar.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\ndl[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-left: 10px;\n}\n.navigation[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  font-family: \"Inter-Regular\";\n  font-size: 15px;\n  cursor: pointer;\n  margin-right: 60px;\n  transition: transform 0.3s ease-in-out;\n  \n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n.navigation[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  \n  background: rgba(255, 255, 255, 0.1);\n}\n.navigation[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 1px solid white;\n  width: 100%;\n  position: relative;\n}\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 120%;\n  height: 1px;\n  background-color: #fff;\n}\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  transition: transform 0.1s ease-in-out;\n  display: inline-block;\n}\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 50%;\n  transform: translateX(-50%) translateY(5px) scaleX(0);\n  transform-origin: center center;\n  width: 100%;\n  height: 1px;\n  background-color: #fff;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.8px);\n}\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 50%;\n  transform: translateX(-50%) translateY(5px) scaleX(0);\n  transform-origin: center center;\n  width: 100%;\n  height: 1px;\n  background-color: #fff;\n  opacity: 0;\n  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;\n  \n}\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active.active-transition[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0) scaleX(1);\n  transition-delay: 0.1s;\n}\n.burger[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n  display: none;\n  font-size: 1.5rem;\n  color: white;\n  background-color: transparent;\n}\n.burger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.burger.rotate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.navigation.show-nav[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n@media only screen and (max-width: 1120px) {\n  .burger[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    display: none;\n    flex-direction: column;\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    background-color: #343434;\n  }\n\n  .navigation.show-nav[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 0px;\n  }\n\n  .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQWUsaURBQUE7QUFFakI7QUFERTtFQUNFLHlDQUFBO0FBR0o7QUFDQTs7O0VBSUUsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQXlDLHFCQUFBO0VBQ3pDLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7QUFFRjtBQURFO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtBQUdKO0FBQ0E7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxREFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQUVGO0FBQ0E7RUFDRSw2QkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFEQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGdFQUFBO0VBQWtFLGlDQUFBO0FBR3BFO0FBQUE7RUFDRSxVQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtBQUdGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFJQSxZQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUpFO0VBQ0UsK0JBQUE7QUFNSjtBQUFBO0VBQ0Usd0JBQUE7QUFHRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0FBR0Y7QUFBQTtFQUNFO0lBQ0UsY0FBQTtFQUdGOztFQURBO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLHlCQUFBO0VBSUY7O0VBRkE7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQUtGOztFQUhBO0lBQ0UsWUFBQTtFQU1GO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgbmF2YmFyIHN0YXlzIG9uIHRvcCBvZiBvdGhlciBlbGVtZW50cyAqL1xyXG4gICYuc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxufVxyXG5cclxuZGwsXHJcbm9sLFxyXG5cclxuLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlci1SZWd1bGFyJztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogNjBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDsgIC8qIFNtb290aCBhbmltYXRpb24gKi9cclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIGxpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgJi5hY3RpdmUgYSB7XHJcbiAgICAvKiBVcGRhdGUgdGhpcyBsaW5lICovXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBsaS5hY3RpdmUgYSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIGxpIGEuYWN0aXZlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMXB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDEyMCU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gbGkgYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIGxpIGE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTFweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoNXB4KSBzY2FsZVgoMCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIGxpIGE6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC44cHgpO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBsaSBhLmFjdGl2ZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMXB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSg1cHgpIHNjYWxlWCgwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCwgb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0OyAvKiBVcGRhdGUgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzICovXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIGxpIGEuYWN0aXZlLmFjdGl2ZS10cmFuc2l0aW9uOmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApIHNjYWxlWCgxKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG59XHJcblxyXG4uYnVyZ2VyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgaSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIH1cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idXJnZXIucm90YXRlIGkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24uc2hvdy1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLy8gQWRkIGJveCBzaGFkb3dcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcclxuICAuYnVyZ2VyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubmF2aWdhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0aW9uLnNob3ctbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0aW9uIGxpIHtcclxuICAgIHBhZGRpbmc6IDFlbTsgLy8gUGFkZGluZyB0byBtYWtlIHRvdWNoIHRhcmdldHMgbGFyZ2VyXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LandingPageComponent {
    constructor() { }
    handleClick() {
        window.open('https://drive.google.com/file/d/1n_RRiIEMFShczzlEV4g6tAZ1lcUaDK9d/view', '_blank');
        this.downloadFile('https://drive.google.com/uc?export=download&id=1n_RRiIEMFShczzlEV4g6tAZ1lcUaDK9d');
    }
    downloadFile(url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 11, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "landing-page"], [1, "landing-image"], ["src", "assets/pexels-andrea-piacquadio-3844533.jpg", "alt", "Image description"], [1, "landing-content"], ["type", "button"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Darrel Mendoza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full Stack Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".landing-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: #f6f6f6;\r\n}\r\n\r\n.landing-image[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    background-color: #d6cdcb;\r\n}\r\n\r\n.landing-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #343434;\r\n    font-family: 'Inter-SemiBold';\r\n    font-weight: Bold;\r\n    font-size: 3.5em;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    color: #343434;\r\n    font-family: 'Inter-Light';\r\n    font-size: 2.5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-family: 'Inter-Bold';\r\n    font-size: 1em;\r\n    padding: 1em 5em;\r\n    border: none;\r\n    background-color: #343434;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: background-color 0.5s ease, transform 0.5s ease; \r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    \r\n    transform: scale(1.05); \r\n}\r\n\r\n\r\n\r\n@media (max-width: 1024px) {\r\n  .landing-content[_ngcontent-%COMP%] {\r\n      width: 50%;\r\n  }\r\n}\r\n\r\n@media (max-width: 875px) {\r\n  .landing-page[_ngcontent-%COMP%] {\r\n      flex-direction: column;\r\n      height: auto;\r\n  }\r\n\r\n  .landing-content[_ngcontent-%COMP%], .landing-image[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n  }\r\n\r\n  .landing-content[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n  }\r\n\r\n  .landing-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      font-size: 2.5em;\r\n  }\r\n\r\n  .landing-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      font-size: 1.5em;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .landing-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      font-size: 2em;\r\n  }\r\n\r\n  .landing-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      font-size: 1.2em;\r\n  }\r\n\r\n  .landing-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      font-size: 0.9em;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen \r\nand (min-device-width: 320px) \r\nand (max-device-width: 428px) \r\nand (-webkit-min-device-pixel-ratio: 2) {\r\n\r\n  .landing-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      font-size: 1.8em;\r\n  }\r\n\r\n  .landing-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      font-size: 1.1em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkRBQTJELEVBQUUsVUFBVTtBQUMzRTs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxzQkFBc0IsRUFBRSxzQ0FBc0M7QUFDbEU7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFO01BQ0ksVUFBVTtFQUNkO0FBQ0Y7O0FBR0E7RUFDRTtNQUNJLHNCQUFzQjtNQUN0QixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksV0FBVztFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7TUFDSSxjQUFjO0VBQ2xCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCO0FBQ0Y7O0FBRUEsK0NBQStDOztBQUMvQzs7Ozs7RUFLRTtNQUNJLGdCQUFnQjtFQUNwQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQjtBQUNGIiwiZmlsZSI6ImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sYW5kaW5nLXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcblxyXG4ubGFuZGluZy1pbWFnZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2Y2RjYjtcclxufVxyXG5cclxuLmxhbmRpbmctaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGFuZGluZy1jb250ZW50IGgxIHtcclxuICAgIGNvbG9yOiAjMzQzNDM0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlci1TZW1pQm9sZCc7XHJcbiAgICBmb250LXdlaWdodDogQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWNvbnRlbnQgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyLUxpZ2h0JztcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5sYW5kaW5nLWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlci1Cb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogMWVtIDVlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC41cyBlYXNlOyAvKiBBZGRlZCAqL1xyXG59XHJcblxyXG4ubGFuZGluZy1jb250ZW50IGJ1dHRvbjpob3ZlciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmOyBEYXJrZXIgc2hhZGUgb2YgZ3JleSBvbiBob3ZlciAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogQnV0dG9uIHNsaWdodGx5IGVubGFyZ2VzIG9uIGhvdmVyICovXHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJpZXMgZm9yIFJlc3BvbnNpdmVuZXNzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubGFuZGluZy1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODc1cHgpIHtcclxuICAubGFuZGluZy1wYWdlIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxhbmRpbmctY29udGVudCwgLmxhbmRpbmctaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5sYW5kaW5nLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gIC5sYW5kaW5nLWNvbnRlbnQgaDEge1xyXG4gICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmxhbmRpbmctY29udGVudCBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubGFuZGluZy1jb250ZW50IGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuICAubGFuZGluZy1jb250ZW50IGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICB9XHJcblxyXG4gIC5sYW5kaW5nLWNvbnRlbnQgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNwZWNpZmljIHN0eWxpbmcgZm9yIGlQaG9uZSAxMyBhbmQgc2ltaWxhciAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbmFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIFxyXG5hbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQyOHB4KSBcclxuYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcclxuXHJcbiAgLmxhbmRpbmctY29udGVudCBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgfVxyXG5cclxuICAubGFuZGluZy1jb250ZW50IGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nDjA":
/*!**********************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "active": a0 }; };
function ProjectsPageComponent_li_57_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_li_57_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeImage(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r2 === ctx_r0.selectedImageIndex));
} }
class ProjectsPageComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.currentProjectIndex = -1;
        this.currentImage = '';
        this.modalOpen = false;
        this.selectedImageIndex = 0;
        this.projectImages = [
            ['./assets/projects/medtechpro-image1.png', './assets/projects/medtechpro-image2.png', './assets/projects/medtechpro-image3.png'],
            ['./assets/projects/badbeat-image1.png', './assets/projects/badbeat-image2.png', './assets/projects/badbeat-image3.png'],
            ['./assets/projects/storefront-image1.png', './assets/projects/storefront-image2.png', './assets/projects/storefront-image3.png']
        ];
        this.projectNames = [
            'MedTech Pro',
            'BadBeat E-Commerce Website',
            'Storefront 2-Way Marketplace'
        ];
        this.projectIndustries = [
            'Healthcare',
            'Fashion',
            'Online Marketplace'
        ];
        this.projectDescriptions = [
            "Introducing MedTech Pro, the revolutionary hospital management app designed to streamline and enhance the efficiency of healthcare institutions. MedTech Pro is a comprehensive and intuitive solution that combines cutting-edge technology with advanced features to empower hospitals in providing top-notch patient care while optimizing operational workflows.<br><br>With MedTech Pro, hospitals can seamlessly manage various aspects of their operations, from patient admissions and appointments to billing and inventory management. The app's user-friendly interface ensures that healthcare professionals can navigate through its features effortlessly, saving time and reducing administrative burden.<br><br>MedTech Pro revolutionizes hospital management, enabling healthcare institutions to deliver exceptional patient care while optimizing operations. By leveraging the power of technology, hospitals can enhance efficiency, reduce costs, and ultimately improve patient outcomes. Experience the future of healthcare management with MedTech Pro.",
            "BadBeat is an all-in-one digital marketplace featuring a diverse range of products from the latest electronics to fashionable clothing, from unique homeware to your favorite books, and much more. We understand that in the busy rhythm of life, convenience and speed matter the most, which is why we offer an easy-to-navigate interface, detailed product information, and a fast, reliable delivery service.<br><br>At BadBeat, we believe in the power of community. Our interactive features allow customers and sellers to connect, share experiences, and build relationships, all while making or facilitating secure, seamless transactions.<br><br>We prioritize your security, ensuring all transactions are protected with top-of-the-line encryption technologies. We are committed to providing you with a safe and secure platform to do business, because at BadBeat, the beat of trust never stops.",
            "Discover a unique and dynamic platform with the Storefront 2-Way Marketplace! Our digital hub bridges the gap between buyers and sellers, providing a vibrant space for commerce in the modern world.<br><br>As a seller, you have the power to showcase your products to a wide, interested audience. Use our advanced tools and features to set up your virtual storefront, track inventory, and manage orders with ease. Whether you're selling handmade crafts, vintage clothes, digital assets, or other unique items, our platform gives you the space and support to grow your business.<br><br>As a buyer, explore a diverse marketplace where you can find exactly what you're looking for. From unique collectibles to everyday essentials, our storefronts offer a wide range of products to suit your needs. Use the intelligent search and filter system to narrow down your options, read detailed product descriptions, and browse through customer reviews for informed purchasing decisions."
        ];
    }
    ngOnInit() {
        this.renderer.listen('window', 'click', (event) => {
            this.onClickOutsideModal(event);
        });
        // Reset selected image index when the modal is closed
        const modal = document.getElementById('myModal');
        modal.addEventListener('transitionend', () => {
            if (!this.modalOpen) {
                this.selectedImageIndex = 0;
            }
        });
    }
    openModal(index) {
        this.currentProjectIndex = index;
        this.currentImage = this.projectImages[index][0];
        const modal = document.getElementById('myModal');
        modal.style.display = 'block';
        this.modalOpen = true;
    }
    closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
        this.modalOpen = false;
    }
    changeImage(index) {
        this.selectedImageIndex = index;
        this.currentImage = this.projectImages[this.currentProjectIndex][index];
    }
    onClickOutsideModal(event) {
        // Check if the modal is open
        if (this.modalOpen) {
            // Get the modal element
            const modal = document.getElementById('myModal');
            // Check if the click was outside the modal
            if (event.target == modal) {
                // Close the modal
                this.closeModal();
            }
        }
    }
}
ProjectsPageComponent.ɵfac = function ProjectsPageComponent_Factory(t) { return new (t || ProjectsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ProjectsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsPageComponent, selectors: [["app-projects-page"]], decls: 67, vars: 5, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css")], [1, "sample-projects-container"], [1, "header"], [1, "container"], [1, "card", 3, "click"], [1, "face", "face1", 2, "background-color", "#3ebaad !important"], [1, "content"], ["src", "./assets/medtechpro-white.png", "alt", "Image 1"], [1, "face", "face2"], [1, "btn", 2, "background-color", "#3ebaad", "color", "#fff", 3, "click"], [1, "face", "face1", 2, "background-color", "#0687ff !important"], ["src", "./assets/badbeat-white.png", "alt", "Image 1"], [1, "btn", 2, "background-color", "#0687ff", "color", "#fff", 3, "click"], [1, "face", "face1", 2, "background-color", "#5a5a5a !important"], ["src", "./assets/storefront-white.png", "alt", "Image 1"], [1, "btn", 2, "background-color", "#5a5a5a", "color", "#fff", 3, "click"], ["id", "myModal", "tabindex", "-1", 1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], [1, "grid", "product"], [1, "column-xs-12", "column-md-7"], [1, "product-gallery"], [1, "product-image"], [1, "active", 3, "src"], [1, "image-list"], ["class", "image-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "column-xs-12", "column-md-5"], [2, "font-size", "20px"], [1, "description"], [3, "innerHTML"], [1, "add-to-cart"], [1, "image-item", 3, "click"], [3, "src", "ngClass"]], template: function ProjectsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recent Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_5_listener() { return ctx.openModal(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MEDTECHPRO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hospital Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The Ultimate Hospital Management App designed to revolutionize healthcare administration. Made using Angular, PHP, Laravel, SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_17_listener() { return ctx.openModal(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_19_listener() { return ctx.openModal(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BADBEAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " E-Commerce Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The number one destination for all things trendy and fashionable! Made using PHP, HTML, CSS, Javascript, SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_31_listener() { return ctx.openModal(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_33_listener() { return ctx.openModal(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "STOREFRONT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2-Way Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Online platform that revolutionizes the way buyers and sellers interact in the digital marketplace. Created using Angular, PHP, Laravel, SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_45_listener() { return ctx.openModal(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_49_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProjectsPageComponent_li_57_Template, 2, 4, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View Repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectImages[ctx.currentProjectIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectNames[ctx.currentProjectIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Revolutionizing ", ctx.projectIndustries[ctx.currentProjectIndex], ", One System at a Time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.projectDescriptions[ctx.currentProjectIndex], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".sample-projects-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 70vh;\n  text-align: center;\n  background-color: #343434;\n  padding-top: 26%;\n  padding-bottom: 26%;\n}\n.header[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"DM Sans\", sans-serif;\n  font-weight: bold;\n  font-size: 3.5em;\n  margin-bottom: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  --bs-card-bg: #343434;\n  border: none;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 80px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  height: 200px;\n  transition: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%] {\n  position: relative;\n  background: #343434;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  transform: translateY(100px);\n  height: 280px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%] {\n  background: #343434;\n  transform: translateY(0);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  font-size: 1.4em;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  box-sizing: border-box;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n  transform: translateY(-100px);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face2[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  \n  width: 200px;\n  border: 1px solid #e2dfdf;\n  color: #000;\n  font-size: 15px;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: capitalize;\n  text-align: center;\n  \n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: all 1s;\n  padding: 10px;\n  margin-top: 15px;\n}\n.btn[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 30%;\n  width: 100%;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  transform: translateX(-100%) rotate(45deg);\n  transition: all 0.9s;\n}\n.btn[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(100%) rotate(45deg);\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #dbd5d5;\n  transform: scale(1.1);\n}\n.modal[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.close[_ngcontent-%COMP%] {\n  color: #aaa;\n  text-align: right;\n  font-size: 28px;\n  font-weight: bold;\n  margin-right: 15px;\n}\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n.grid.product[_ngcontent-%COMP%] {\n  padding: 0 0 1.5rem 0;\n  border-bottom: 0.0625rem solid #e3dddd;\n}\n.grid.product[_ngcontent-%COMP%]   [class*=column-][_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.column-xs-12[_ngcontent-%COMP%], .column-md-7[_ngcontent-%COMP%], .column-md-5[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.product-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.product-image[_ngcontent-%COMP%] {\n  display: block;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  object-fit: cover;\n  margin: 0px;\n  padding: 10px;\n}\n.image-list[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.image-list[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%] {\n  margin: 10px;\n  flex-basis: 100%;\n  cursor: pointer;\n}\n.image-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  object-fit: cover;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: normal;\n  margin: 1.75rem 0 1rem 0;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2.125rem;\n  margin: 0;\n}\n.description[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid #e3dddd;\n  margin: 2rem 0;\n  padding: 1rem 0 0 0;\n}\n.add-to-cart[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  background: #3e3e3f;\n  color: #fff;\n  border: none;\n  border-radius: 0;\n  padding: 1.25rem 2rem;\n  font-size: 1rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n}\n.add-to-cart[_ngcontent-%COMP%]:hover {\n  background-color: #4a4a4b;\n}\n\n@media screen and (min-width: 48em) {\n  .column-xs-12[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .column-md-7[_ngcontent-%COMP%] {\n    width: 50.33333%;\n  }\n\n  .column-md-5[_ngcontent-%COMP%] {\n    width: 41.66667%;\n  }\n\n  .grid.product[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .product-gallery[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n.image-list[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\n  border: 2px solid #4a4a4b;\n}\n\n@media only screen and (max-width: 1350px) {\n  .sample-projects-container[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  .sample-projects-container[_ngcontent-%COMP%] {\n    height: 250vh;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n\n  .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n\n  .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .sample-projects-container[_ngcontent-%COMP%] {\n    padding-top: 10%;\n    padding-bottom: 10%;\n    height: 195vh;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    font-size: 1.8em;\n  }\n\n  .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    width: 120px;\n    font-size: 10px;\n  }\n\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtBQUNKO0FBRUE7RUFDSSx3QkFBQTtBQUNKO0FBRUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKO0FBRUE7Ozs7Ozs7Ozs7Ozs7R0FBQTtBQWdCQTtF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ZW50IjpbIi8qIENvbXBvbmVudCBzdHlsZXMgKi9cclxuLnNhbXBsZS1wcm9qZWN0cy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG4gICAgcGFkZGluZy10b3A6IDI2JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNiU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJETSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZHtcclxuICAgIC0tYnMtY2FyZC1iZzogIzM0MzQzNDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmZhY2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCAuZmFjZS5mYWNlMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICMzNDM0MzQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkOmhvdmVyIC5mYWNlLmZhY2Uxe1xyXG4gICAgYmFja2dyb3VuZDogIzM0MzQzNDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCAuZmFjZS5mYWNlMSAuY29udGVudHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQ6aG92ZXIgLmZhY2UuZmFjZTEgLmNvbnRlbnR7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkIC5mYWNlLmZhY2UxIC5jb250ZW50IGltZ3tcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmZhY2UuZmFjZTEgLmNvbnRlbnQgaDN7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCAuZmFjZS5mYWNlMntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZDpob3ZlciAuZmFjZS5mYWNlMntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCAuZmFjZS5mYWNlMiAuY29udGVudCBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyogLmNvbnRhaW5lciAuY2FyZCAuZmFjZS5mYWNlMiAuY29udGVudCBhe1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgIGRpc3BsYXk6ICBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCAuZmFjZS5mYWNlMiAuY29udGVudCBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59ICovXHJcblxyXG5cclxuLmJ0biB7XHJcbiAgLyogaGVpZ2h0OiA1MHB4OyAqL1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJkZmRmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogbGluZS1oZWlnaHQ6IDc1cHg7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5idG46YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC45cztcclxufVxyXG5cclxuLmJ0bjpob3ZlcjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkNWQ1O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuXHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uZ3JpZC5wcm9kdWN0IHtcclxuICAgW2NsYXNzKj1cImNvbHVtbi1cIl0ge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgcGFkZGluZzogMCAwIDEuNXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCAjZTNkZGRkO1xyXG59XHJcblxyXG4uY29sdW1uLXhzLTEyLCAuY29sdW1uLW1kLTcsIC5jb2x1bW4tbWQtNSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnByb2R1Y3QtZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uaW1hZ2UtbGlzdCAuaW1hZ2UtaXRlbSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtbGlzdCBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmgxLCBoMiB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBtYXJnaW46IDEuNzVyZW0gMCAxcmVtIDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMi4xMjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGJvcmRlci10b3A6IDAuMDYyNXJlbSBzb2xpZCAjZTNkZGRkO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIHBhZGRpbmc6IDFyZW0gMCAwIDA7XHJcbn1cclxuXHJcbi5hZGQtdG8tY2FydCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjM2UzZTNmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW0gMnJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYWRkLXRvLWNhcnQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGI7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcclxuICAuY29sdW1uLXhzLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbi1tZC03IHtcclxuICAgIHdpZHRoOiA1MC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uLW1kLTUge1xyXG4gICAgd2lkdGg6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5ncmlkLnByb2R1Y3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWdhbGxlcnkge1xyXG4gICAgb3JkZXI6IC0xO1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlLWxpc3QgaW1nLmFjdGl2ZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzRhNGE0YjtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBMYXlvdXQgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIHtcclxuICAuc2FtcGxlLXByb2plY3RzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc2FtcGxlLXByb2plY3RzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDI1MHZoO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuY2FyZCAuZmFjZS5mYWNlMSAuY29udGVudCBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG4gIC5jb250YWluZXIgLmNhcmQgLmZhY2UuZmFjZTIgLmNvbnRlbnQgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5zYW1wbGUtcHJvamVjdHMtY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICAgICAgaGVpZ2h0OiAxOTV2aDtcclxuICB9XHJcbiAgLmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gIH1cclxuICAuY29udGFpbmVyIC5jYXJkIC5mYWNlLmZhY2UxIC5jb250ZW50IGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-page',
                templateUrl: './projects-page.component.html',
                styleUrls: ['./projects-page.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "npXH":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["chatList"];
function ChatbotComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mode_comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatbotComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatbotComponent {
    constructor() {
        this.showChatBox = false;
        this.messages = [];
        this.botTyping = false;
    }
    // Your existing Angular code goes here
    ngOnInit() {
        this.addMessage("Hi there. How can I help you today?", "bot");
        // Show the chat bubble 10 seconds after the page loads
        setTimeout(() => {
            document.getElementById('chatBubble').style.opacity = '1';
            // Make the button bounce while the chat bubble is displayed
            document.getElementById('chatbotButton').style.animation = 'bounce 1s infinite';
            // Hide the chat bubble and stop the button from bouncing after the bubble's been displayed for 10 seconds
            setTimeout(() => {
                document.getElementById('chatBubble').style.opacity = '0';
                document.getElementById('chatbotButton').style.animation = 'none';
            }, 10000); // 10000 milliseconds = 10 seconds
        }, 1000); // 1000 milliseconds = 1 second
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            const lastMessageElement = this.chatList.nativeElement.lastElementChild;
            if (lastMessageElement) {
                lastMessageElement.scrollIntoView({ behavior: "smooth" });
            }
        }
        catch (err) { }
    }
    toggleChatBox() {
        this.showChatBox = !this.showChatBox;
        document.getElementById('chatBubble').style.opacity = '0';
        document.getElementById('chatbotButton').style.animation = 'none';
    }
    addMessage(text, sender) {
        this.messages.push({ text, sender });
    }
    sendUserMessage(textarea) {
        const text = textarea.value.trim();
        if (text !== '') {
            this.addMessage(text, 'user');
            textarea.value = '';
            // Make the bot seem like it's typing.
            this.botTyping = true;
            setTimeout(() => {
                // After a delay, stop the typing animation and send the bot's message.
                this.botTyping = false;
                this.addMessage(this.generateResponse(text), 'bot');
            }, 1000); // 2000 milliseconds = 2 seconds
        }
    }
    generateResponse(userInput) {
        // This is a very simple implementation of a response.
        // You might want to replace it with a call to a more sophisticated method (e.g., OpenAI's GPT-3 model).
        return `You said: "${userInput}"`;
    }
}
ChatbotComponent.ɵfac = function ChatbotComponent_Factory(t) { return new (t || ChatbotComponent)(); };
ChatbotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatbotComponent, selectors: [["app-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatList = _t.first);
    } }, decls: 18, vars: 4, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0")], ["id", "chatBubble", 1, "chatBubble"], ["id", "chatbotButton", 1, "chatbot__button", 3, "click"], ["class", "material-symbols-outlined", 4, "ngIf"], [1, "chatbot", 2, "z-index", "9999"], [1, "chatbot__header"], [1, "chatbox__title"], [1, "material-symbols-outlined", 3, "click"], [1, "chatbot__input-box"], ["id", "send-btn", 1, "material-symbols-outlined"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.chatbase.co/chatbot-iframe/HBgxEs-Hf9mCeggwaTUnb"), "width", "100%", "frameborder", "1", 2, "height", "100%", "min-height", "550px"], [1, "material-symbols-outlined"]], template: function ChatbotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Got a question? Ask me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_5_listener() { return ctx.toggleChatBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatbotComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatbotComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Chat Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatbotComponent_Template_span_click_12_listener() { return ctx.toggleChatBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showChatBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showChatBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("chatbot-active", ctx.showChatBox);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.chatbot__button[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 35px;\r\n  right: 40px;\r\n  width: 65px;\r\n  height: 65px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #181717;\r\n  color: #f3f7f8;\r\n  border: none;\r\n  border-radius: 50%;\r\n  outline: none;\r\n  cursor: pointer;\r\n  z-index: 9999;\r\n}\r\n\r\n\r\n\r\n.chatBubble[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 80px;\r\n  right: 135px;\r\n  padding: 20px 45px 20px 45px;\r\n  background-color: #f3f7f8;\r\n  border-radius: 10px;\r\n  z-index: 9999;\r\n  transition: opacity 0.2s ease-in-out;\r\n  opacity: 0;\r\n  border: 1px solid #000000;\r\n  \r\n  \r\n  \r\n}\r\n\r\n.chatBubble[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 12px;\r\n  right: -9px;\r\n  width: 16px;\r\n  height: 16px;\r\n  background-color: #f3f7f8;\r\n  border-radius: 0px;\r\n  transform: rotate(-45deg);\r\n  border-bottom: 1px solid #000000;\r\n  border-right: 1px solid #000000;\r\n}\r\n\r\n.chatBubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #181717;\r\n  font-size: 15px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  \r\n  font-family: 'Inter-Bold';\r\n}\r\n\r\n\r\n\r\n@keyframes bounce {\r\n  0%, 20%, 50%, 80%, 100% {\r\n    transform: translateY(0);\r\n  }\r\n  40% {\r\n    transform: translateY(-20px);\r\n  }\r\n  60% {\r\n    transform: translateY(-10px);\r\n  }\r\n}\r\n\r\n.chatbot__button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n}\r\n\r\n\r\n\r\n.chatbot[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 120px;\r\n  right: 40px;\r\n  width: 450px;\r\n  background-color: #f3f7f8;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1) 0 32px 64px -48px rgba(0, 0, 0, 0.5);\r\n  transition: transform 0.3s ease;\r\n  overflow: hidden;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: opacity 0.3s ease;\r\n  border: 1px solid #292828;\r\n}\r\n\r\n.show-chatbot[_ngcontent-%COMP%]   .chatbot[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  transform: scale(1);\r\n}\r\n\r\n.chatbot__header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #181717;\r\n  text-align: center;\r\n  padding: 16px 0;\r\n  font-family: 'Inter-SemiBold';\r\n  color: white;\r\n}\r\n\r\n.chatbot__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  color: white;\r\n  transform: translateY(-50%);\r\n  cursor: pointer;\r\n}\r\n\r\n.chatbox__title[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  color: #f3f7f8;\r\n}\r\n\r\n.chatbot__box[_ngcontent-%COMP%] {\r\n  height: 510px;\r\n  overflow-y: auto;\r\n  padding: 30px 20px 100px;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.chatbot__chat[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.chatbot__chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  max-width: 75%;\r\n  font-size: 0.95rem;\r\n  white-space: pre-wrap;\r\n  color: #fff;\r\n  background-color: #181717;\r\n  border-radius: 10px 10px 0 10px;\r\n  padding: 9px 16px;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.chatbot__chat[_ngcontent-%COMP%]   p.error[_ngcontent-%COMP%] {\r\n  color: #721c24;\r\n  background: #f8d7da;\r\n}\r\n\r\n.chatbot-active[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.incoming[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #202020;\r\n  background: #bdc3c7;\r\n  border-radius: 10px 10px 10px 0;\r\n}\r\n\r\n.incoming[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: 32px;\r\n  line-height: 32px;\r\n  color: #f3f7f8;\r\n  background-color: #5f5d5d;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  align-self: flex-end;\r\n  margin: 0 10px 7px 0;\r\n}\r\n\r\n.outgoing[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  margin: 20px 0;\r\n}\r\n\r\n.incoming[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n\r\n.chatbot__input-box[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n  background: #fff;\r\n  padding: 5px 20px;\r\n}\r\n\r\n.chatbot__textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 55px;\r\n  max-height: 180px;\r\n  font-size: 0.95rem;\r\n  padding: 16px 15px 16px 0;\r\n  color: #202020;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  background: transparent;\r\n}\r\n\r\n.chatbot__textarea[_ngcontent-%COMP%]::placeholder {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.chatbot__input-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 1.75rem;\r\n  color: #202020;\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n}\r\n\r\n.chatbot__textarea[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n@media (max-width: 490px) {\r\n  .chatbot[_ngcontent-%COMP%] {\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 0;\r\n  }\r\n  .chatbot__box[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n  }\r\n  .chatbot__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: inline;\r\n  }\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  width: 30px;\r\n  float: left;\r\n  position: relative;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  height: 6px;\r\n  width: 6px;\r\n  float: left;\r\n  margin: 0 1px;\r\n  background: #181717;\r\n  display: block;\r\n  border-radius: 50%;\r\n  opacity: 0.4;\r\n  position: absolute;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  left: 0;\r\n  animation: typing-indicator-dot 1.4s infinite;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n  left: 10px;\r\n  animation: typing-indicator-dot 1.4s infinite;\r\n  animation-delay: .2s;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n  left: 20px;\r\n  animation: typing-indicator-dot 1.4s infinite;\r\n  animation-delay: .4s;\r\n}\r\n\r\n@keyframes typing-indicator-dot {\r\n  0% { transform: scale(1); opacity: .4; }\r\n  20% { transform: scale(1); }\r\n  30% { transform: scale(1); opacity: .4; }\r\n  50% { transform: scale(1.5); opacity: 1; }\r\n  100% { transform: scale(1); opacity: .4; }\r\n}\r\n\r\n.message-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRib3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RkFBNkY7O0FBRTdGO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUEsOEJBQThCOztBQUM5QjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0MsMkRBQTJEO0VBQzNELGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQSwyQkFBMkI7O0FBQzNCO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7Ozs7OztHQU1HOztBQUNIO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsK0VBQStFO0VBQy9FLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFVBQVU7RUFDViw2Q0FBNkM7RUFDN0Msb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDZDQUE2QztFQUM3QyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxLQUFLLG1CQUFtQixFQUFFLFdBQVcsRUFBRTtFQUN2QyxNQUFNLG1CQUFtQixFQUFFO0VBQzNCLE1BQU0sbUJBQW1CLEVBQUUsV0FBVyxFQUFFO0VBQ3hDLE1BQU0scUJBQXFCLEVBQUUsVUFBVSxFQUFFO0VBQ3pDLE9BQU8sbUJBQW1CLEVBQUUsV0FBVyxFQUFFO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY2hhdGJvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uY2hhdGJvdF9fYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzNXB4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGhlaWdodDogNjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzE4MTcxNztcclxuICBjb2xvcjogI2YzZjdmODtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi8qIENTUyBzdHlsZSBmb3IgY2hhdCBidWJibGUgKi9cclxuLmNoYXRCdWJibGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDgwcHg7XHJcbiAgcmlnaHQ6IDEzNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHggNDVweCAyMHB4IDQ1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjdmODtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAvKiBhZGQgYSB0YWlsIHBvaW50aW5nIHRvIHRoZSBjaGF0IGJ1YmJsZSAqL1xyXG4gIC8qIHRoZSBcImJlZm9yZVwiIHBzZXVkby1lbGVtZW50IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSB0YWlsICovXHJcbiAgLyogdGhlIHRhaWwgaXMgYSByb3RhdGVkIHNxdWFyZSAqL1xyXG59XHJcblxyXG4uY2hhdEJ1YmJsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEycHg7XHJcbiAgcmlnaHQ6IC05cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y3Zjg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDtcclxufVxyXG5cclxuLmNoYXRCdWJibGUgcCB7XHJcbiAgY29sb3I6ICMxODE3MTc7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAvKiBmb250LXdlaWdodDogNjUwOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXItQm9sZCc7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJvdW5jZSBhbmltYXRpb24gKi9cclxuQGtleWZyYW1lcyBib3VuY2Uge1xyXG4gIDAlLCAyMCUsIDUwJSwgODAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5jaGF0Ym90X19idXR0b24gc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi8qIC5zaG93LWNoYXRib3QgLmNoYXRib3RfX2J1dHRvbiBzcGFuOmZpcnN0LWNoaWxkLFxyXG4uY2hhdGJvdF9fYnV0dG9uIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uc2hvdy1jaGF0Ym90IC5jaGF0Ym90X19idXR0b24gc3BhbjpsYXN0LWNoaWxkIHtcclxuICBvcGFjaXR5OiAxO1xyXG59ICovXHJcbi5jaGF0Ym90IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxMjBweDtcclxuICByaWdodDogNDBweDtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjdmODtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEyOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpIDAgMzJweCA2NHB4IC00OHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyODI4O1xyXG59XHJcbi5zaG93LWNoYXRib3QgLmNoYXRib3Qge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4uY2hhdGJvdF9faGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTcxNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXItU2VtaUJvbGQnO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2hhdGJvdF9faGVhZGVyIHNwYW4ge1xyXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jaGF0Ym94X190aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6ICNmM2Y3Zjg7XHJcbn1cclxuLmNoYXRib3RfX2JveCB7XHJcbiAgaGVpZ2h0OiA1MTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDMwcHggMjBweCAxMDBweDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG4uY2hhdGJvdF9fY2hhdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2hhdGJvdF9fY2hhdCBwIHtcclxuICBtYXgtd2lkdGg6IDc1JTtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE3MTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcclxuICBwYWRkaW5nOiA5cHggMTZweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLmNoYXRib3RfX2NoYXQgcC5lcnJvciB7XHJcbiAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcclxufVxyXG4uY2hhdGJvdC1hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuLmluY29taW5nIHAge1xyXG4gIGNvbG9yOiAjMjAyMDIwO1xyXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMDtcclxufVxyXG4uaW5jb21pbmcgc3BhbiB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiAjZjNmN2Y4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjVkNWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDAgMTBweCA3cHggMDtcclxufVxyXG4ub3V0Z29pbmcge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmluY29taW5nIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4uY2hhdGJvdF9faW5wdXQtYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG59XHJcbi5jaGF0Ym90X190ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTVweDtcclxuICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgcGFkZGluZzogMTZweCAxNXB4IDE2cHggMDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmNoYXRib3RfX3RleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uY2hhdGJvdF9faW5wdXQtYm94IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5jaGF0Ym90X190ZXh0YXJlYTp2YWxpZCB+IHNwYW4ge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCkge1xyXG4gIC5jaGF0Ym90IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICAuY2hhdGJvdF9fYm94IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gIH1cclxuICAuY2hhdGJvdF9faGVhZGVyIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxufVxyXG5cclxuLnR5cGluZy1pbmRpY2F0b3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udHlwaW5nLWluZGljYXRvciBzcGFuIHtcclxuICBoZWlnaHQ6IDZweDtcclxuICB3aWR0aDogNnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAxcHg7XHJcbiAgYmFja2dyb3VuZDogIzE4MTcxNztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnR5cGluZy1pbmRpY2F0b3Igc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gIGxlZnQ6IDA7XHJcbiAgYW5pbWF0aW9uOiB0eXBpbmctaW5kaWNhdG9yLWRvdCAxLjRzIGluZmluaXRlO1xyXG59XHJcblxyXG4udHlwaW5nLWluZGljYXRvciBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgbGVmdDogMTBweDtcclxuICBhbmltYXRpb246IHR5cGluZy1pbmRpY2F0b3ItZG90IDEuNHMgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuMnM7XHJcbn1cclxuXHJcbi50eXBpbmctaW5kaWNhdG9yIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIGFuaW1hdGlvbjogdHlwaW5nLWluZGljYXRvci1kb3QgMS40cyBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IC40cztcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBpbmctaW5kaWNhdG9yLWRvdCB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAuNDsgfVxyXG4gIDIwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICAzMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAuNDsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS41KTsgb3BhY2l0eTogMTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAuNDsgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnR5cGluZy1pbmRpY2F0b3IsIGltZyB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatbot',
                templateUrl: './chatbot.component.html',
                styleUrls: ['./chatbot.component.css']
            }]
    }], function () { return []; }, { chatList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatList', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-page/about-page.component */ "HioS");
/* harmony import */ var _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./github-graph/github-graph.component */ "c8y/");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "nDjA");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");


// Import your page components here







const routes = [
    { path: 'landing-page', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'about-page', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"] },
    { path: 'experience-page', component: _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_4__["GithubGraphComponent"] },
    { path: 'projects-page', component: _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageComponent"] },
    { path: 'contacts-page', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"] },
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing-page' } // Redirect to the landing page for any unknown paths
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map