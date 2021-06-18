import React, { useState } from 'react'
import './Button.css'
import Audio from './Audio'
import { selecttoggleButton } from './features/toggleSlice'
import { useSelector } from 'react-redux'

function Button() {
  const switchSound = useSelector(selecttoggleButton)
  const keys = {
    buttonRowOpion1: [
      {
        keyCode: 81,
        id: 'Heater-1',
        btns: 'Q',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      },
      {
        keyCode: 87,
        id: 'Heater-2',
        btns: 'W',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      },
      {
        keyCode: 69,
        id: 'Heater-3',
        btns: 'E',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      },
      {
        keyCode: 65,
        id: 'Heater-4',
        btns: 'A',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      },
      {
        keyCode: 83,
        id: 'Heater-5',
        btns: 'S',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      },
      {
        keyCode: 68,
        id: 'Heater-6',
        btns: 'D',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      },
      {
        keyCode: 90,
        id: 'Heater-7',
        btns: 'Z',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      },
      {
        keyCode: 88,
        id: 'Heater-8',
        btns: 'X',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      },
      {
        keyCode: 67,
        id: 'Heater-9',
        btns: 'C',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      },
    ],
    buttonRowOpion2: [
      {
        keyCode: 81,
        btns: 'Q',
        id: 'Chord-1',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
      },
      {
        keyCode: 87,
        btns: 'W',
        id: 'Chord-2',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
      },
      {
        keyCode: 69,
        btns: 'E',
        id: 'Chord-3',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
      },
      {
        keyCode: 65,
        btns: 'A',
        id: 'Shaker',
        sound:
          'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
      },
      {
        keyCode: 83,
        btns: 'S',
        id: 'Open-HH',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
      },
      {
        keyCode: 68,
        btns: 'D',
        id: 'Closed-HH',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
      },
      {
        keyCode: 90,
        btns: 'Z',
        id: 'Punchy-Kick',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
      },
      {
        keyCode: 88,
        btns: 'X',
        id: 'Side-Stick',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
      },
      {
        keyCode: 67,
        btns: 'C',
        id: 'Snare',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
      },
    ],
  }
  return (
    <div className='button' id='drum-machine'>
      <div className='button__Row'>
        {switchSound
          ? keys.buttonRowOpion1.map((btn, index) => (
              <Audio
                keyCode={btn.keyCode}
                key={`drum-${index + 1}`}
                id={btn.id}
                drumpad='drum-pad'
                name='clip'
                btns={btn.btns}
                audio={btn.sound}
              />
            ))
          : keys.buttonRowOpion2.map((btn, index) => (
              <Audio
                keyCode={btn.keyCode}
                key={`drum-${index + 1}`}
                id={btn.id}
                drumpad='drum-pad'
                name='clip'
                btns={btn.btns}
                audio={btn.sound}
              />
            ))}
      </div>
    </div>
  )
}

export default Button
