import { TemplatePortal } from '@angular/cdk/portal'
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core'
import { TemplateModalService, ModalOverlayRef } from '../../services/template-modal.service'

@Component({
  selector: 'app-translation-page',
  templateUrl: './translation-page.component.html',
  styleUrls: ['./translation-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslationPageComponent implements OnInit {
  isChecked: boolean = false
  private templateRef!: ModalOverlayRef
  @ViewChild('modalTemplate') modalTemplate!: TemplatePortal<any>
  constructor (private templateModalService: TemplateModalService) {
  }

  ngOnInit (): void {
  }

  public openTemplateModal () {
    this.templateRef = this.templateModalService.open(this.modalTemplate, {}, { hasBackdropClick: true })
  }

  public closeTemplateModal ($event: any) {
    this.templateRef.close()
  }
}
