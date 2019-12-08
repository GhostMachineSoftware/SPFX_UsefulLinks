import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'popper.js';
import 'bootstrap';
export interface IUsefulLinksWebPartProps {
    description: string;
}
export default class UsefulLinksWebPart extends BaseClientSideWebPart<IUsefulLinksWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=UsefulLinksWebPart.d.ts.map