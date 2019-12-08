var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'UsefulLinksWebPartStrings';
//*** Custom Imports ***/
import UsefulLinksHTML from './UsefulLinksHTML';
// import node modules external libraries
//import 'jquery';
import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';
var UsefulLinksWebPart = /** @class */ (function (_super) {
    __extends(UsefulLinksWebPart, _super);
    function UsefulLinksWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsefulLinksWebPart.prototype.render = function () {
        var bootstrapCssURL = "/node_modules/bootstrap/dist/css/bootstrap.min.css";
        //let fontawesomeCssURL = "/node_modules/@fortawesom/fontawesome-free/css/all.min.css";
        //let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
        SPComponentLoader.loadCss(bootstrapCssURL);
        //SPComponentLoader.loadCss(fontawesomeCssURL);
        this.domElement.innerHTML = UsefulLinksHTML.templateHtml;
        $('.accordion', this.domElement).accordion();
    };
    Object.defineProperty(UsefulLinksWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    UsefulLinksWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return UsefulLinksWebPart;
}(BaseClientSideWebPart));
export default UsefulLinksWebPart;
//# sourceMappingURL=UsefulLinksWebPart.js.map