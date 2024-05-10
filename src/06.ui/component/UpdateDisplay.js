import { plcCommunicationManager } from "../../02.usecases/communication/PLCcommunication.js";
import { GetValuesUseCase } from '../../02.usecases/ui/GetValuesUseCase.js';

import { UpdateDisplayStatusMachine} from './UpdateDisplayStatusMachine.js';
import { UpdateDisplayModeMachine} from './UpdateDisplayModeMachine.js';
import { UpdateDisplaySteps} from './UpdateDisplaySteps.js';
import { UpdateDisplayCurrentCarrierSpeed } from './UpdateDisplayCurrentCarrierSpeed.js'
import { UpdateDisplayBatteryLevel } from './UpdateDisplayBatteryLevel.js'

export async function UpdateDisplay() {
    const GetValues = new GetValuesUseCase(plcCommunicationManager);
    try {
        // Wait for the findAll method to resolve and then stringify the result
        const data = await GetValues.findAll();
   //     UpdateDisplayModeMachine(data.Array_2.StatusMode);
   //     UpdateDisplayStatusMachine(data.StatusMachine);        
   //     UpdateDisplaySteps(data.TaskNumber,data.ActualStep );
        UpdateDisplayCurrentCarrierSpeed(100,'%','Carrier Speed');
        UpdateDisplayBatteryLevel(10, 100);


    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error updating display:', error);
    }
}