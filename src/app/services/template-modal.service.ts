import { Injectable } from '@angular/core'

import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { CdkPortal } from '@angular/cdk/portal'
import { FormModalConfig, CustomOverlayConfig } from './inferfaces'

export class ModalOverlayRef {
  constructor (private overlayRef: OverlayRef) { }

  close (): void {
    this.overlayRef.dispose()
  }
}

const DEFAULT_CONFIG: FormModalConfig = {
  hasBackdrop: true,
  backdropClass: 'overlay-backdrop',
  panelClass: 'modal-panel'
}
const DEFAULT_CUSTOM_CONFIG: CustomOverlayConfig = {
  hasBackdropClick: false,
  isCentered: true,
  size: null
}

@Injectable({
  providedIn: 'root'
})
export class TemplateModalService {
  public dialogRef!: ModalOverlayRef
  public customConfig!: CustomOverlayConfig
  constructor (
    private overlay: Overlay
  ) { }

  private getOverlayConfig (config: FormModalConfig): OverlayConfig {
    let positionStrategy = this.overlay.position()
      .global()

    if (this.customConfig.isCentered) {
      positionStrategy = positionStrategy
        .centerHorizontally()
        .centerVertically()
    }

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      ...this.customConfig.size,
      positionStrategy
    })

    return overlayConfig
  }

  open (templateRef: CdkPortal, config: FormModalConfig = {}, customConfig: CustomOverlayConfig = {}) {
    this.customConfig = { ...DEFAULT_CUSTOM_CONFIG, ...customConfig }
    const modalConfig = { ...DEFAULT_CONFIG, ...config }
    const overlayRef = this.createOverlay(modalConfig)
    const dialogRef = new ModalOverlayRef(overlayRef)

    // const overlayComponent =
    this.attachModalContainer(overlayRef, templateRef)

    overlayRef.backdropClick().subscribe((_) => {
      if (this.customConfig.hasBackdropClick) { dialogRef.close() }
    })
    // maybe there should be an incjector to inject ModalOverlayRef

    this.dialogRef = dialogRef
    return dialogRef
  }

  private attachModalContainer (
    overlayRef: OverlayRef,
    templateRef: CdkPortal
  ) {
    const containerRef = overlayRef.attach(templateRef)
    return containerRef
  }

  private createOverlay (config: FormModalConfig) {
    const overlayConfig = this.getOverlayConfig(config)

    return this.overlay.create(overlayConfig)
  }
}
