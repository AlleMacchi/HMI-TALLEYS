class InputComponent {
    constructor(setValue, elementId = 'btnSpeed') {
      this.setValue = setValue;
      this.id = elementId;
      this.element = document.getElementById(elementId);
      this.input = document.getElementById('set-carrierSpeed');
      
  
      this.element.addEventListener('mousedown', this.onTouchSetValue.bind(this));
      this.element.addEventListener('touchstart', this.onTouchSetValue.bind(this));
    }
  
    onTouchSetValue(event) {
      event.preventDefault(); 
  
      const value = parseFloat(this.input.value);
      const id = this.id;
  
      try {
        this.setValue.execute(id,value);
        
      } catch (error) {
        console.error('Error setting position:', error);
      }
    }
  

  }

  export { InputComponent };