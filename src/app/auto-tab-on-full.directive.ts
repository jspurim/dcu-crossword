import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input[autoTabOnFull]'
})
export class AutoTabOnFullDirective {
  // Use keydown event to be able to know if we had a letter before it gets
  // removed by the backspace.
  @HostListener('keydown.Backspace', ['$event']) onBackspaceDown(keyboardEvent: KeyboardEvent) {
    const target = keyboardEvent.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;

    // This check is for typing inference. We would never get a keyboard event
    // from anything different than HTMLInputElement or HTMLTextAreaElement
    if (target == null) return;
    // Only move to the previous field if we had started with an empty field.
    if (target.value.length == 0) {
      this.findPreviousTarget(target)?.focus();
      keyboardEvent.preventDefault();
    }
  }

  @HostListener('keyup', ['$event']) onKeyUp(keyboardEvent: KeyboardEvent) {
    const target = keyboardEvent.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;

    // This check is for typing inference. We would never get a keyboard event
    // from anything different than HTMLInputElement or HTMLTextAreaElement
    if (target == null) return;
    // Only process events for visible characters (so it doesn't trigger when tabbing or pressing shift/alt/insert as they could interfere with narrator controls)
    const allowedPattern = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]$/;
    if (!allowedPattern.test(keyboardEvent.key)) return;

    // This code is reached when the key is already added to the input field triggered.
    // So we should only check for the field being full
    if (target.value.length === target.maxLength) {
      this.findNextTarget(target)?.focus();
    }
  }

  findPreviousTarget(initialElement: HTMLInputElement | HTMLTextAreaElement): HTMLInputElement | HTMLTextAreaElement | null {
    const { type } = initialElement;
    let current = initialElement.parentElement?.previousElementSibling?.firstElementChild

    while (current) {
      let castedCurrent = (current as HTMLInputElement | HTMLTextAreaElement);
      if (castedCurrent.type === type) return castedCurrent;
      current = current.parentElement?.previousElementSibling?.firstElementChild
    }
    return null;
  }

  findNextTarget(initialElement: HTMLInputElement | HTMLTextAreaElement): HTMLInputElement | HTMLTextAreaElement | null {
    const { type } = initialElement;
    let current = initialElement.parentElement?.nextElementSibling?.firstElementChild

    while (current) {
      let castedCurrent = (current as HTMLInputElement | HTMLTextAreaElement);
      if (castedCurrent.type === type) return castedCurrent;
      current = current.parentElement?.nextElementSibling?.firstElementChild
    }
    return null;
  }
}
