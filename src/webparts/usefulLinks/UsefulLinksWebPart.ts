import { Version } from '@microsoft/sp-core-library';
import { SPComponentLoader } from '@microsoft/sp-loader';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './UsefulLinksWebPart.module.scss';
import * as strings from 'UsefulLinksWebPartStrings';

//*** Custom Imports ***/
import UsefulLinksHTML from './UsefulLinksHTML';

// import node modules external libraries
//import 'jquery';
import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';
//import 'fontawesome';

export interface IUsefulLinksWebPartProps {
  description: string;
}

export default class UsefulLinksWebPart extends BaseClientSideWebPart<IUsefulLinksWebPartProps> {

  public render(): void {

    let bootstrapCssURL = "./node_modules/bootstrap/dist/css/bootstrap.min.css";
    //let fontawesomeCssURL = "/node_modules/@fortawesom/fontawesome-free/css/all.min.css";
    //let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    SPComponentLoader.loadCss(bootstrapCssURL);
    //SPComponentLoader.loadCss(fontawesomeCssURL);

    this.domElement.innerHTML = UsefulLinksHTML.templateHtml;
    ($('.accordion', this.domElement) as any).accordion();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
