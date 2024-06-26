import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';


export class PressButtonToSetTrue {
    constructor(id,elementId,entity, callback, firstButtonId, secondButtonId) {
        if (typeof callback === 'function') {
            this.callback = callback;
        }
        else{
            this.callback = () => {};
        }

        this.element = document.getElementById(elementId);
        this.id = id;
        this.entity = entity;
        this.firstButtonId = firstButtonId;
        this.secondButtonId = secondButtonId;

        const repository = new UpdateValueRepository(plcCommunicationManager);
        this.usecase = new UpdateBooleanValueUseCase(repository, this.entity);

        this.handleMouseDown = this.handleMouseDown.bind(this);

        this.element.addEventListener('mousedown', this.handleMouseDown);
        this.element.addEventListener('touchstart', this.handleMouseDown);
    }

    handleMouseDown(event) {
        event.preventDefault();
        this.setValue(true);
    }

    setValue(value) {
        try {
            this.usecase.update(this.id, value);
            this.pressed = value;
            this.callback(this.firstButtonId,this.secondButtonId);
        } catch (error) {
            console.error('Error setting:', error);
        }
    }
}