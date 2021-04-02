// Auto-generated. Do not edit.



//% color=50 weight=19 icon="\uf1eb"
//% block="IrRemote"
declare namespace IrRemote {

    /**
     * button pushed.
     */
    //% blockId=onPressEvent
    //% block="on |%btn| button pressed" shim=IrRemote::onPressEvent
    function onPressEvent(btn: remotebutton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=IrRemote_init
    //% block="connect ir receiver to %pin" shim=IrRemote::IrRemote_init
    function IrRemote_init(pin: Pins): void;

    export class Packeta {
        public mye: string;
        public myparam: number;
    }


    let irstate: number;
    let state: number;
    /**
    * Read IR sensor value V2.
    */

    //% advanced=true shim=maqueenIRV2::irCode
    function irCode(): number {
        return 0;
    }

    //% weight=5
    //% group="micro:bit(v2)"
    //% blockId=IR_readv2 block="read IR key value"
    export function IR_readV2(): string {
        return valuotokeyConversion();
    }

    //% weight=2
    //% group="micro:bit(v2)"
    //% blockId=IR_callbackUserv2 block="on IR received"
    //% draggableParameters
    export function IR_callbackUserV2(cb: (message: number) => void) {
        state = 1;
        control.onEvent(11, 22, function () {
            cb(irstate)
        })
    }

    function valuotokeyConversion(): string {
        let irdata: string;
        switch (irCode()) {
            case 0xba45: irdata = 'A'; break;
            case 0xb946: irdata = 'B'; break;
            case 0xb847: irdata = 'C'; break;
            case 0xbb44: irdata = 'D'; break;
            case 0xbf40: irdata = 'UP'; break;
            case 0xbc43: irdata = '+'; break;
            case 0xf807: irdata = 'LEFT'; break;
            case 0xea15: irdata = 'AFFIRM'; break;
            case 0xf609: irdata = 'RIGHT'; break;
            case 0xe916: irdata = '0'; break;
            case 0xe619: irdata = 'DOWN'; break;
            case 0xf20d: irdata = '-'; break;
            case 0xf30c: irdata = '1'; break;
            case 0xe718: irdata = '2'; break;
            case 0xa15e: irdata = '3'; break;
            case 0xf708: irdata = '4'; break;
            case 0xe31c: irdata = '5'; break;
            case 0xa55a: irdata = '6'; break;
            case 0xbd42: irdata = '7'; break;
            case 0xad52: irdata = '8'; break;
            case 0xb54a: irdata = '9'; break;
            default:
                irdata = '-1';
        }
        return irdata;
    }

    basic.forever(() => {
        if (state == 1) {
            irstate = valuotokeyConversion();
            if (irstate != -1) {
                control.raiseEvent(11, 22)
            }
        }

        basic.pause(20);
    })
}

// Auto-generated. Do not edit. Really.
