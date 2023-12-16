import "webmidi";

type Async<T> = T & PromiseLike<T>;

declare namespace JZZ {
  namespace SMPTE {
    interface Constructor {
      /** Create new SMPTE object
       *
       * https://jazz-soft.net/doc/JZZ/smpte.html#constructor */
      new (...args: any[]): SMPTE;
      /** Create new SMPTE object
       *
       * https://jazz-soft.net/doc/JZZ/smpte.html#constructor */
      (...args: any[]): SMPTE;
    }
  }

  interface SMPTE {
    /** Convert SMPTE to human-readable string
    /** SMPTE event is Full Frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#isFullFrame */
    isFullFrame(): boolean;
    /** Get SMPTE type
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#getType */
    getType(): number;
    /** Get SMPTE hour
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#getHour */
    getHour(): number;
    /** Get SMPTE minute
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#getMinute */
    getMinute(): number;
    /** Get SMPTE second
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#getSecond */
    getSecond(): number;
    /** Get SMPTE frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#getFrame */
    getFrame(): number;
    /** Get SMPTE quarter frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#getQuarter */
    getQuarter(): number;
    /** Set SMPTE type
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#setType */
    setType(n: number): SMPTE;
    /** Set SMPTE hour
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#setHour */
    setHour(n: number): SMPTE;
    /** Set SMPTE minute
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#setMinute */
    setMinute(n: number): SMPTE;
    /** Set SMPTE second
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#setSecond */
    setSecond(n: number): SMPTE;
    /** Set SMPTE frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#setFrame */
    setFrame(n: number): SMPTE;
    /** Set SMPTE quarter frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#setQuarter */
    setQuarter(n: number): SMPTE;
    /** Increase SMPTE time by one frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#incrFrame */
    incrFrame(): SMPTE;
    /** Decrease SMPTE time by one frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#decrFrame */
    decrFrame(): SMPTE;
    /** Increase SMPTE time by quarter frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#incrQF */
    incrQF(): SMPTE;
    /** Decrease SMPTE time by quarter frame
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#decrQF */
    decrQF(): SMPTE;
    /** Read MIDI Time Code message
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#read */
    read(...args: any[]): boolean;
    /** Reset SMPTE object
     *
     * https://jazz-soft.net/doc/JZZ/smpte.html#reset */
    reset(...args: any[]): SMPTE;
  }

  namespace MIDI {
    interface ChannelDependent<T> {
      /** Play note
       *
       * https://jazz-soft.net/doc/JZZ/midiout.html#note */
      note(x: number, nn: number | string, vv?: number, tt?: number): T;

      // Channel-dependent
      /** Note On: `[9x nn vv]`; `x`: channel, `nn`: note, `vv`: velocity
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#noteOn */
      noteOn(x: number, nn: number | string, vv?: number): T;
      /** Note Off: `[8x nn vv]`; `x`: channel, `nn`: note, `vv`: velocity
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#noteOff */
      noteOff(x: number, nn: number | string, vv?: number): T;
      /** Polyphonic aftetouch: `[Ax nn vv]`; `x`: channel, `nn`: note, `vv`: value
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#aftertouch */
      aftertouch(x: number, nn: number | string, vv: number): T;
      /** MIDI control: `[Bx nn vv]`; `x`: channel, `nn`: function, `vv`: value
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#control */
      control(x: number, nn: number, vv: number): T;
      /** Program change: `[Cx nn]`; `x`: channel, `nn`: program
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#program */
      program(x: number, nn: number | string): T;
      /** Pressure: `[Dx nn]`; `x`: channel, `nn`: pressure
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#pressure */
      pressure(x: number, nn: number): T;
      /** Pitch bend: `[Ex lsb msb]`; `x`: channel, `msb`/`lsb`: most/least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#pitchBend */
      pitchBend(x: number, nn: number): T;
      /** Bank select MSB: `[Bx 00 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#bankMSB */
      bankMSB(x: number, nn: number): T;
      /** Bank select LSB: `[Bx 20 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#bankLSB */
      bankLSB(x: number, nn: number): T;
      /** Modulation MSB: `[Bx 01 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#modMSB */
      modMSB(x: number, nn: number): T;
      /** Modulation LSB: `[Bx 21 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#modLSB */
      modLSB(x: number, nn: number): T;
      /** Breath controller MSB: `[Bx 02 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#breathMSB */
      breathMSB(x: number, nn: number): T;
      /** Breath controller LSB: `[Bx 22 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#breathLSB */
      breathLSB(x: number, nn: number): T;
      /** Foot controller MSB: `[Bx 04 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#footMSB */
      footMSB(x: number, nn: number): T;
      /** Foot controller LSB: `[Bx 24 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#footLSB */
      footLSB(x: number, nn: number): T;
      /** Portamento MSB: `[Bx 05 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#portamentoMSB */
      portamentoMSB(x: number, nn: number): T;
      /** Portamento LSB: `[Bx 25 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#portamentoLSB */
      portamentoLSB(x: number, nn: number): T;
      /** Volume MSB: `[Bx 07 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#volumeMSB */
      volumeMSB(x: number, nn: number): T;
      /** Volume LSB: `[Bx 27 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#volumeLSB */
      volumeLSB(x: number, nn: number): T;
      /** Balance MSB: `[Bx 08 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#balanceMSB */
      balanceMSB(x: number, nn: number): T;
      /** Balance LSB: `[Bx 28 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#balanceLSB */
      balanceLSB(x: number, nn: number): T;
      /** Pan MSB: `[Bx 0A nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#panMSB */
      panMSB(x: number, nn: number): T;
      /** Pan LSB: `[Bx 2A nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#panLSB */
      panLSB(x: number, nn: number): T;
      /** Expression MSB: `[Bx 0B nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#expressionMSB */
      expressionMSB(x: number, nn: number): T;
      /** Expression LSB: `[Bx 2B nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#expressionLSB */
      expressionLSB(x: number, nn: number): T;
      /** Damper on/off: `[Bx 40 nn]`; `x`: channel, `nn`: `bb ? 7f : 00`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#damper */
      damper(x: number, bb: boolean): T;
      /** Portamento on/off: `[Bx 41 nn]`; `x`: channel, `nn`: `bb ? 7f : 00`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#portamento */
      portamento(x: number, bb: boolean): T;
      /** Sostenuto on/off: `[Bx 42 nn]`; `x`: channel, `nn`: `bb ? 7f : 00`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#sostenuto */
      sostenuto(x: number, bb: boolean): T;
      /** Soft on/off: `[Bx 43 nn]`; `x`: channel, `nn`: `bb ? 7f : 00`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#soft */
      soft(x: number, bb: boolean): T;
      /** All sound off: `[Bx 78 00]`; `x`: channel
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#allSoundOff */
      allSoundOff(x: number): T;
      /** All notes off: `[Bx 7B 00]`; `x`: channel
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#allNotesOff */
      allNotesOff(x: number): T;
    }

    interface ChannelDependentInferred<T> {
      /** Play note
       *
       * https://jazz-soft.net/doc/JZZ/midiout.html#note */
      note(nn: number | string, vv?: number, tt?: number): T;

      // Channel-dependent
      /** Note On: `[9x nn vv]`; `x`: channel, `nn`: note, `vv`: velocity
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#noteOn */
      noteOn(nn: number | string, vv?: number): T;
      /** Note Off: `[8x nn vv]`; `x`: channel, `nn`: note, `vv`: velocity
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#noteOff */
      noteOff(nn: number | string, vv?: number): T;
      /** Polyphonic aftetouch: `[Ax nn vv]`; `x`: channel, `nn`: note, `vv`: value
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#aftertouch */
      aftertouch(nn: number | string, vv: number): T;
      /** MIDI control: `[Bx nn vv]`; `x`: channel, `nn`: function, `vv`: value
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#control */
      control(nn: number, vv: number): T;
      /** Program change: `[Cx nn]`; `x`: channel, `nn`: program
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#program */
      program(nn: number | string): T;
      /** Pressure: `[Dx nn]`; `x`: channel, `nn`: pressure
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#pressure */
      pressure(nn: number): T;
      /** Pitch bend: `[Ex lsb msb]`; `x`: channel, `msb`/`lsb`: most/least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#pitchBend */
      pitchBend(nn: number): T;
      /** Bank select MSB: `[Bx 00 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#bankMSB */
      bankMSB(nn: number): T;
      /** Bank select LSB: `[Bx 20 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#bankLSB */
      bankLSB(nn: number): T;
      /** Modulation MSB: `[Bx 01 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#modMSB */
      modMSB(nn: number): T;
      /** Modulation LSB: `[Bx 21 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#modLSB */
      modLSB(nn: number): T;
      /** Breath controller MSB: `[Bx 02 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#breathMSB */
      breathMSB(nn: number): T;
      /** Breath controller LSB: `[Bx 22 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#breathLSB */
      breathLSB(nn: number): T;
      /** Foot controller MSB: `[Bx 04 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#footMSB */
      footMSB(nn: number): T;
      /** Foot controller LSB: `[Bx 24 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#footLSB */
      footLSB(nn: number): T;
      /** Portamento MSB: `[Bx 05 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#portamentoMSB */
      portamentoMSB(nn: number): T;
      /** Portamento LSB: `[Bx 25 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#portamentoLSB */
      portamentoLSB(nn: number): T;
      /** Volume MSB: `[Bx 07 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#volumeMSB */
      volumeMSB(nn: number): T;
      /** Volume LSB: `[Bx 27 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#volumeLSB */
      volumeLSB(nn: number): T;
      /** Balance MSB: `[Bx 08 nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#balanceMSB */
      balanceMSB(nn: number): T;
      /** Balance LSB: `[Bx 28 nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#balanceLSB */
      balanceLSB(nn: number): T;
      /** Pan MSB: `[Bx 0A nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#panMSB */
      panMSB(nn: number): T;
      /** Pan LSB: `[Bx 2A nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#panLSB */
      panLSB(nn: number): T;
      /** Expression MSB: `[Bx 0B nn]`; `x`: channel, `nn`: most significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#expressionMSB */
      expressionMSB(nn: number): T;
      /** Expression LSB: `[Bx 2B nn]`; `x`: channel, `nn`: least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#expressionLSB */
      expressionLSB(nn: number): T;
      /** Damper on/off: `[Bx 40 nn]`; `x`: channel, `nn`: `bb ? 7f : 00`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#damper */
      damper(bb: boolean): T;
      /** Portamento on/off: `[Bx 41 nn]`; `x`: channel, `nn`: `bb ? 7f : 00`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#portamento */
      portamento(bb: boolean): T;
      /** Sostenuto on/off: `[Bx 42 nn]`; `x`: channel, `nn`: `bb ? 7f : 00`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#sostenuto */
      sostenuto(bb: boolean): T;
      /** Soft on/off: `[Bx 43 nn]`; `x`: channel, `nn`: `bb ? 7f : 00`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#soft */
      soft(bb: boolean): T;
      /** All sound off: `[Bx 78 00]`; `x`: channel
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#allSoundOff */
      allSoundOff(): T;
      /** All notes off: `[Bx 7B 00]`; `x`: channel
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#allNotesOff */
      allNotesOff(): T;
    }

    interface ChannelIndependent<T> {
      // Channel-independent
      /** Song position: `[F2 lsb msb]`; `msb`/`lsb`: most/least significant 7 bits
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#songPosition */
      songPosition(nn: number): T;
      /** Song select: `[F3 nn]`; `nn`: song number
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#songSelect */
      songSelect(nn: number): T;
      /** Tune: `[F6]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#tune */
      tune(): T;
      /** Clock: `[F8]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#clock */
      clock(): T;
      /** Start: `[FA]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#start */
      start(): T;
      /** Continue: `[FB]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#continue */
      continue(): T;
      /** Stop: `[FC]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#stop */
      stop(): T;
      /** Active sense signal: `[FE]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#active */
      active(): T;
      /** Reset: `[FF]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#reset */
      reset(): T;
      /** ID Request SysEx: `[F0 7E 7F 06 01 F7]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#sxIdRequest */
      sxIdRequest(): T;
      /** MIDI time code (SMPTE quarter frame): `[F1 xx]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#mtc */
      mtc(t: SMPTE): T;
      /** SMPTE Full Frame SysEx: `[F0 7F 7F 01 01 xx xx xx xx F7]`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#sxFullFrame */
      sxFullFrame(t: SMPTE): T;
    }

    interface Constructor
      extends Omit<ChannelDependent<MIDI>, "note">,
        ChannelIndependent<MIDI>,
        SMF<MIDI> {
      /** Create new MIDI message
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#constructor */
      new (...args: any[]): MIDI;
      /** Create new MIDI message
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#constructor */
      (...args: any[]): MIDI;

      // Other
      /** Note MIDI value by name
       *
       * https://jazz-soft.net/doc/JZZ/midigm.html#noteValue */
      noteValue(note: number | string): number;
      /** Program MIDI value by name
       *
       * https://jazz-soft.net/doc/JZZ/midigm.html#programValue */
      programValue(prog: number | string): number;
      /** Note frequency in HZ; `a5`: frequency of the `A5`, default: `440`
       *
       * https://jazz-soft.net/doc/JZZ/jzzmidi.html#freq */
      freq(note: number | string, a5?: number): number;
    }
  }

  interface MIDI extends Array<number> {
    /** Convert MIDI to human-readable string
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#tostring */
    toString(): string;
    /** The message is Note On
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isNoteOn */
    isNoteOn(): boolean;
    /** The message is Note Off
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isNoteOff */
    isNoteOff(): boolean;
    /** The message is a SysEx
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isSysEx */
    isSysEx(): boolean;
    /** The message is a full SysEx
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isFullSysEx */
    isFullSysEx(): boolean;
    /** The message is a Standard MIDI File meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isSMF */
    isSMF(): boolean;
    /** The message is a Tempo meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isTempo */
    isTempo(): boolean;
    /** The message is a Time Signature meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isTimeSignature */
    isTimeSignature(): boolean;
    /** The message is a Key Signature meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isKeySignature */
    isKeySignature(): boolean;
    /** The message is an End of Track meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#isEOT */
    isEOT(): boolean;
    /** Return the channel number where applicable
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getChannel */
    getChannel(): number;
    /** Set the channel number where applicable
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#setChannel */
    setChannel(cc: number): MIDI;
    /** Return the note value where applicable
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getNote */
    getNote(): number;
    /** Set the note where applicable
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#setNote */
    setNote(note: number | string): MIDI;
    /** Return the velocity where applicable
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getVelocity */
    getVelocity(): number;
    /** Set the velocity where applicable
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#setVelocity */
    setVelocity(vv: number): MIDI;
    /** Return the SysEx channel number where applicable
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getSysExChannel */
    getSysExChannel(): number;
    /** Set the SysEx channel number where applicable
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#setSysExChannel */
    setSysExChannel(cc: number): MIDI;

    /** Get data from SMF meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getData */
    getData(): string;
    /** Set data on SMF meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#setData */
    setData(data: string): MIDI;
    /** Get UTF8 text from SMF meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getText */
    getText(): string;
    /** Set UTF8 text on SMF meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#setText */
    setText(str: string): MIDI;
    /** Get tempo in ms per quarter note from SMF Tempo meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getTempo */
    getTempo(): number;
    /** Get tempo as BPM from SMF Tempo meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getBPM */
    getBPM(): number;
    /** Get time signature from SMF Time Signature meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getTimeSignature */
    getTimeSignature(): number[];
    /** Get key signature from SMF Key Signature meta event
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#getKeySignature */
    getKeySignature(): any[];
  }

  interface SMF<T> {
    // SMF
    /** Standard MIDI File meta event: [FFxx len data]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smf */
    smf(...args: any): T;
    /** SMF Sequence Number: [FF00 02 ssss]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfSeqNumber */
    smfSeqNumber(ssss: number): T;
    /** SMF Text: [FF01 len text]; used in Karaoke files
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfText */
    smfText(str: string): T;
    /** SMF Copyright: [FF02 len text]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfCopyright */
    smfCopyright(str: string): T;
    /** SMF Sequence Name: [FF03 len text]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfSeqName */
    smfSeqName(str: string): T;
    /** SMF Instrument Name: [FF04 len text]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfInstrName */
    smfInstrName(str: string): T;
    /** SMF Lyric: [FF05 len text]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfLyric */
    smfLyric(str: string): T;
    /** SMF Marker: [FF06 len text]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfMarker */
    smfMarker(str: string): T;
    /** SMF Cue Point: [FF07 len text]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfCuePoint */
    smfCuePoint(str: string): T;
    /** SMF Program Name: [FF08 len text]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfProgName */
    smfProgName(str: string): T;
    /** SMF Device Name: [FF09 len text]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfDevName */
    smfDevName(str: string): T;
    /** SMF Channel Prefix: [FF20 01 cc]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfChannelPrefix */
    smfChannelPrefix(cc: number): T;
    /** SMF MIDI Port [FF21 01 pp]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfMidiPort */
    smfMidiPort(pp: number): T;
    /** SMF End of Track: [FF2F 00]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfEndOfTrack */
    smfEndOfTrack(): T;
    /** SMF Tempo: [FF51 03 tttttt]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfTempo */
    smfTempo(tttttt: number): T;
    /** SMF Tempo, BMP: [FF51 03 tttttt]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfBPM */
    smfBPM(bpm: number): T;
    /** SMF SMPTE offset: [FF54 05 hh mm ss fr ff]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfSMPTE */
    smfSMPTE(smpte: SMPTE | number[]): T;
    /** SMF Time Signature: [FF58 04 nn dd cc bb]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfTimeSignature */
    smfTimeSignature(nn: number, dd: number, cc?: number, bb?: number): T;
    /** SMF Key Signature: [FF59 02 sf mi]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfKeySignature */
    smfKeySignature(key: string): T;
    /** SMF Sequencer-specific Data: [FF7F len data]
     *
     * https://jazz-soft.net/doc/JZZ/jzzmidi.html#smfSequencer */
    smfSequencer(data: string): T;
  }

  type Stub = StubGeneric<Stub>;

  interface StubGeneric<T> {
    /** Print if OK
     *
     * https://jazz-soft.net/doc/JZZ/common.html#and */
    and(text: string): Async<T>;
    /** Execute if OK
     *
     * https://jazz-soft.net/doc/JZZ/common.html#and */
    and(func: (self?: Stub) => void): Async<T>;
    /** Print if not OK
     *
     * https://jazz-soft.net/doc/JZZ/common.html#or */
    or(text: string): Async<T>;
    /** Execute if not OK
     *
     * https://jazz-soft.net/doc/JZZ/common.html#or */
    or(func: (self?: Stub) => void): Async<T>;
    /** Wait `ms` milliseconds
     *
     * https://jazz-soft.net/doc/JZZ/common.html#wait */
    wait(ms: number): Async<T>;
  }

  interface Engine extends StubGeneric<Engine> {
    // Engine
    /** Return an `info` object
     *
     * https://jazz-soft.net/doc/JZZ/jzz.html#info */
    info(): any;
    /** Refresh the list of available ports
     *
     * https://jazz-soft.net/doc/JZZ/jzz.html#refresh */
    refresh(): Async<Engine>;
    /** Open MIDI-In port
     *
     * https://jazz-soft.net/doc/JZZ/midiin.html#open */
    openMidiIn(arg?: any): Async<Port>;
    /** Open MIDI-Out port
     *
     * https://jazz-soft.net/doc/JZZ/midiout.html#open */
    openMidiOut(arg?: any): Async<Port>;
    /** Watch MIDI connection changes
     *
     * https://jazz-soft.net/doc/JZZ/jzz.html#onChange */
    onChange(arg?: any): Async<Watcher>;
    /** Close MIDI engine
     *
     * https://jazz-soft.net/doc/JZZ/jzz.html#close */
    close(): Async<Stub>;
  }

  type Port = PortGeneric<Port> &
    StubGeneric<Port> &
    ChannelMethods &
    MIDI.ChannelDependent<Async<Port>> &
    MIDI.ChannelIndependent<Async<Port>> &
    SMF<Async<Port>>;

  interface PortGeneric<T> {
    // Port
    /** Return an `info` object
     *
     * https://jazz-soft.net/doc/JZZ/midiin.html#info */
    info(): any;
    /** Return the port name
     *
     * https://jazz-soft.net/doc/JZZ/midiin.html#name */
    name(): string;
    /** Connect MIDI port
     *
     * https://jazz-soft.net/doc/JZZ/midiin.html#connect */
    connect(arg: any): Async<T>;
    /** Disonnect MIDI port
     *
     * https://jazz-soft.net/doc/JZZ/midiin.html#disconnect */
    disconnect(arg?: any): Async<T>;
    /** Send MIDI message
     *
     * https://jazz-soft.net/doc/JZZ/midiout.html#send */
    send(...args: any[]): Async<T>;
    /** Emit MIDI message
     *
     * https://jazz-soft.net/doc/JZZ/midithru.html#emit */
    emit(...args: any[]): Async<T>;
    /** Emit MIDI message
     *
     * https://jazz-soft.net/doc/JZZ/midithru.html#emit */
    _emit(...args: any[]): void;
    /** Close MIDI port
     *
     * https://jazz-soft.net/doc/JZZ/midiin.html#close */
    close(): Async<Stub>;
  }

  type Channel = StubGeneric<Channel> &
    PortGeneric<Channel> &
    ChannelMethods &
    MIDI.ChannelDependentInferred<Async<Channel>> &
    MIDI.ChannelIndependent<Async<Channel>> &
    SMF<Async<Channel>>;

  interface ChannelMethods {
    /** MIDI channel
     *
     * https://jazz-soft.net/doc/JZZ/midiout.html#ch */
    ch(x: number): Async<Channel>;
    /** MIDI channel
     *
     * https://jazz-soft.net/doc/JZZ/midiout.html#ch */
    ch(): Async<Port>;
    /** MPE channel
     *
     * https://jazz-soft.net/doc/JZZ/midiout.html#mpe */
    mpe(m: number, n: number): Async<MPE>;
    /** MPE channel
     *
     * https://jazz-soft.net/doc/JZZ/midiout.html#mpe */
    mpe(): Async<Port>;
  }

  interface MPE
    extends StubGeneric<MPE>,
      PortGeneric<MPE>,
      ChannelMethods,
      MIDI.ChannelDependentInferred<Async<MPE>>,
      MIDI.ChannelIndependent<Async<MPE>>,
      SMF<Async<MPE>> {}

  interface Watcher extends Engine {
    /** Add the Watcher handle
     *
     * https://jazz-soft.net/doc/JZZ/jzz.html#connect */
    connect(...args: any[]): Async<Watcher>;
    /** Remove the Watcher handle
     *
     * https://jazz-soft.net/doc/JZZ/jzz.html#disconnect */
    disconnect(...args: any[]): Async<Watcher>;
  }

  interface lib {
    /** Open virtual MIDI-In port
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#openMidiIn */
    openMidiIn(...args: any[]): boolean;
    /** Open virtual MIDI-Out port
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#openMidiOut */
    openMidiOut(...args: any[]): boolean;
    /** Register virtual MIDI-In port
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#registerMidiIn */
    registerMidiIn(...args: any[]): boolean;
    /** Register virtual MIDI-Out port
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#registerMidiOut */
    registerMidiOut(...args: any[]): boolean;
    /** Activate and return window.AudioContext
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#getAudioContext */
    getAudioContext(): any;
    /** Encode string to Base64
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#toBase64 */
    toBase64(txt: string): string;
    /** Decode string from Base64
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#fromBase64 */
    fromBase64(txt: string): string;
    /** Encode string to UTF8
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#toUTF8 */
    toUTF8(txt: string): string;
    /** Decode string from UTF8
     *
     * https://jazz-soft.net/doc/JZZ/lib.html#fromUTF8 */
    fromUTF8(txt: string): string;
  }
}

interface JZZ {
  readonly lib: JZZ.lib;
  /** Start MIDI engine
   *
   * https://jazz-soft.net/doc/JZZ/jzz.html#jzz */
  (arg?: any): Async<JZZ.Engine>;
  /** Return an `info` object
   *
   * https://jazz-soft.net/doc/JZZ/jzz.html#info */
  readonly info: () => any;
  /** Create virtual MIDI port
   *
   * https://jazz-soft.net/doc/JZZ/midithru.html#Widget */
  readonly Widget: (...args: any[]) => JZZ.Port;
  /** MIDI message
   *
   * https://jazz-soft.net/doc/JZZ/jzzmidi.html */
  readonly MIDI: JZZ.MIDI.Constructor;
  /** SMPTE message
   *
   * https://jazz-soft.net/doc/JZZ/smpte.html */
  readonly SMPTE: JZZ.SMPTE.Constructor;
  /** Invoke Web MIDI API
   *
   * https://jazz-soft.net/doc/JZZ/webmidi.html */
  readonly requestMIDIAccess: (
    options?: WebMidi.MIDIOptions
  ) => Promise<WebMidi.MIDIAccess>;
}

declare const jzz: JZZ;

export = jzz;
