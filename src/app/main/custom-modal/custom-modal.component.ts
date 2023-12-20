import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  onConfirmClick(): void {
    this.closeModal.emit();
  }

  onCancelClick(): void {
    this.closeModal.emit();
  }
}
