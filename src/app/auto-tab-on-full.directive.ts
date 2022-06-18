import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input[autoTabOnFull]'
})
export class AutoTabOnFullDirective {
  @HostListener('keyup', ['$event']) onKeyDown(keyboardEvent: KeyboardEvent) {
    const target = keyboardEvent.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;

    if(target == null) return;
    if (target.value.length == 0 && keyboardEvent.key == "Backspace") {
      keyboardEvent.preventDefault();

      const { type } = target;
      let current = target.parentElement?.previousElementSibling?.firstElementChild
  
      while (current) {
        if (
          (current as HTMLInputElement | HTMLTextAreaElement).type ===
          type
        ) {
          (current as HTMLInputElement | HTMLTextAreaElement).focus();
          return;
        }
  
        current = current.parentElement?.previousElementSibling?.firstElementChild
      }
    }

    if (target.maxLength == target.value.length) {
      keyboardEvent.preventDefault();

      const { type } = target;
      let current = target.parentElement?.nextElementSibling?.firstElementChild
  
      while (current) {
        if (
          (current as HTMLInputElement | HTMLTextAreaElement).type ===
          type
        ) {
          (current as HTMLInputElement | HTMLTextAreaElement).focus();
          return;
        }
  
        current = current.parentElement?.nextElementSibling?.firstElementChild
      }
    }


  }

}
