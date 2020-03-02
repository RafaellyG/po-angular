import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PoButtonGroupModule } from '../po-button-group/index';
import { PoButtonModule } from '../po-button/index';
import { PoCheckboxGroupModule } from './po-checkbox-group/po-checkbox-group.module';
import { PoContainerModule } from '../po-container/index';
import { PoDisclaimerModule } from './../po-disclaimer/po-disclaimer.module';
import { PoFieldContainerModule } from './po-field-container/po-field-container.module';
import { PoLoadingModule } from '../po-loading/index';
import { PoProgressModule } from './../po-progress/po-progress.module';
import { PoServicesModule } from '../../services/services.module';
import { PoTooltipModule } from './../../directives/po-tooltip/po-tooltip.module';

import { PoLookupModule } from './po-lookup/po-lookup.module';

import { PoCalendarComponent } from './po-datepicker/po-calendar/po-calendar.component';
import { PoCleanComponent } from './po-clean/po-clean.component';
import { PoCheckboxComponent } from './po-checkbox/po-checkbox.component';
import { PoComboComponent } from './po-combo/po-combo.component';
import { PoComboOptionTemplateDirective } from './po-combo/po-combo-option-template/po-combo-option-template.directive';
import { PoDatepickerComponent } from './po-datepicker/po-datepicker.component';
import { PoDatepickerRangeComponent } from './po-datepicker-range/po-datepicker-range.component';
import { PoDecimalComponent } from './po-decimal/po-decimal.component';
import { PoEmailComponent } from './po-email/po-email.component';
import { PoLoginComponent } from './po-login/po-login.component';
import { PoLookupComponent } from './po-lookup/po-lookup.component';
import { PoLookupModalComponent } from './po-lookup/po-lookup-modal/po-lookup-modal.component';
import { PoMultiselectDropdownComponent } from './po-multiselect/po-multiselect-dropdown/po-multiselect-dropdown.component';
import { PoMultiselectComponent } from './po-multiselect/po-multiselect.component';
import { PoMultiselectItemComponent } from './po-multiselect/po-multiselect-item/po-multiselect-item.component';
import { PoMultiselectSearchComponent } from './po-multiselect/po-multiselect-search/po-multiselect-search.component';
import { PoRichTextBodyComponent } from './po-rich-text/po-rich-text-body/po-rich-text-body.component';
import { PoRichTextComponent } from './po-rich-text/po-rich-text.component';
import { PoRichTextModalComponent } from './po-rich-text/po-rich-text-modal/po-rich-text-modal.component';
import { PoRichTextToolbarComponent } from './po-rich-text/po-rich-text-toolbar/po-rich-text-toolbar.component';
import { PoInputComponent } from './po-input/po-input.component';
import { PoNumberComponent } from './po-number/po-number.component';
import { PoPasswordComponent } from './po-password/po-password.component';
import { PoRadioGroupComponent } from './po-radio-group/po-radio-group.component';
import { PoSelectComponent } from './po-select/po-select.component';
import { PoSelectOptionTemplateDirective } from './po-select/po-select-option-template/po-select-option-template.directive';
import { PoSwitchComponent } from './po-switch/po-switch.component';
import { PoTextareaComponent } from './po-textarea/po-textarea.component';
import { PoUploadComponent } from './po-upload/po-upload.component';
import { PoUploadDragDropComponent } from './po-upload/po-upload-drag-drop/po-upload-drag-drop.component';
import { PoUploadDragDropDirective } from './po-upload/po-upload-drag-drop/po-upload-drag-drop.directive';
import {
  PoUploadDragDropAreaOverlayComponent
} from './po-upload/po-upload-drag-drop/po-upload-drag-drop-area-overlay/po-upload-drag-drop-area-overlay.component';
import { PoUploadDragDropAreaComponent } from './po-upload/po-upload-drag-drop/po-upload-drag-drop-area/po-upload-drag-drop-area.component';
import { PoUploadFileRestrictionsComponent } from './po-upload/po-upload-file-restrictions/po-upload-file-restrictions.component';
import { PoUrlComponent } from './po-url/po-url.component';
import { PoRichTextModule } from './po-rich-text/po-rich-text.module';
import { PoInputModule } from './po-input/po-input.module';
import { PoUrlModule } from './po-url/po-url.module';
import { PoUploadModule } from './po-upload/po-upload.module';
import { PoCleanModule } from './po-clean/po-clean.module';

/**
 * @description
 *
 * Módulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
 * po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
 * e po-url.
 *
 * > Não esqueça de importar o módulo `FormsModule` para usar os componentes de formulários e caso esteja trabalhando com
 * > formulários reativos, importe o módulo `ReactiveFormsModule`, ambos nativos do Angular.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PoButtonGroupModule,
    PoButtonModule,
    PoCheckboxGroupModule,
    PoContainerModule,
    PoDisclaimerModule,
    PoFieldContainerModule,
    PoLoadingModule,
    PoProgressModule,
    PoServicesModule,
    // PoTooltipModule
    PoCleanModule
  ],
  exports: [
    PoCheckboxGroupModule,
    PoLookupModule,
    PoRichTextModule,
    PoInputModule,
    PoUrlModule,
    PoUploadModule,
    PoCleanModule,

    PoCheckboxComponent,
    PoComboComponent,
    PoComboOptionTemplateDirective,
    PoDecimalComponent,
    PoDatepickerComponent,
    PoDatepickerRangeComponent,
    PoEmailComponent,
    PoLoginComponent,
    PoMultiselectComponent,
    PoNumberComponent,
    PoPasswordComponent,
    PoRadioGroupComponent,
    PoSelectComponent,
    PoSelectOptionTemplateDirective,
    PoSwitchComponent,
    PoTextareaComponent,
  ],
  declarations: [
    PoCalendarComponent,
    PoCheckboxComponent,
    PoComboComponent,
    PoComboOptionTemplateDirective,
    PoDecimalComponent,
    PoDatepickerComponent,
    PoDatepickerRangeComponent,
    PoEmailComponent,
    PoLoginComponent,
    PoMultiselectComponent,
    PoMultiselectDropdownComponent,
    PoMultiselectItemComponent,
    PoMultiselectSearchComponent,
    PoNumberComponent,
    PoPasswordComponent,
    PoRadioGroupComponent,
    PoSelectComponent,
    PoSelectOptionTemplateDirective,
    PoSwitchComponent,
    PoTextareaComponent
  ],
  providers: [],
  entryComponents: [
    PoCalendarComponent,
    PoLookupModalComponent,
    PoRichTextModalComponent
  ]
})
export class PoFieldModule { }
